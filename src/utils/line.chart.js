"use strict";

// period: 周期，0为七天，1为一个月，2为两个月
//is7Rat: 是否为年化收益率
// data: 数据，数组形式{nav:1,"navDate":"20160207","profitOf10K":1.002}

var LineChart = function(period, is7Rate, data) {
    //test
    /*
     data = [];
     for (var i = 0; i < 31; i++) {
     data.push({"nav": 3 + 2 * Math.random(), "navDate": 20160331 - i, "profitOf10K": 1 + Math.random()});
     }
     for (var i = 0; i < 29; i++) {
     data.push({"nav": 3 + 2 * Math.random(), "navDate": 20160229 - i, "profitOf10K": 1 + Math.random()});
     }*/

    if (data.length == 0) return "数据异常";
    //如果是正序,先颠倒
    if (data[0].navDate < data[data.length - 1].navDate) data = data.reverse();
    period = parseInt(period) || 0;
    var xUnit = 42,
        yUnit = 29; //单位宽度和高度
    data = dataFilter(period, data);
    var maxY = prepare(data); //最大Y值
    var zoomY = getZoom(maxY);
    var points = locatePoints(data);
    var labels = getLabels(data);

    var template = '<svg viewbox="-18 5 360 225">';
    template += '<text font-size="12" fill="#666" x="-1" y="30">' + getTitle(period) + '</text>';
    //    template += '<text font-size="10" fill="#999" x="-1" y="35">*产品过往业绩仅供参考，不代表管理人对未来收益的承诺</text>';
    template += '<g transform="translate(35, 55)">';
    template += '<path stroke="#999" stroke-width="0.5" d="M0,145L300,145"></path>';

    //横线
    for (var i = 0; i < 5; i++) {
        template += '<path stroke="#c1c1c1" stroke-width="0.5" stroke-dasharray="5,5" d="M0,' + (116 - yUnit * i) + 'L300,' + (116 - yUnit * i) + '"/>';
    }
    //y轴文字
    for (var i = 0; i < 6; i++) {
        template += '<text font-size="10" fill="#666" dy="4" y="' + (145 - i * yUnit) + '" x="-35">' + getYLabel(i + 1) + '</text>';
    }
    //x轴文字
    for (var i = 0; i < labels.length; i++) {
        template += '<text font-size="10" fill="#999" dy="18" y="145" x="' + (10 + i * xUnit) + '">' + labels[i] + '</text>';
    }
    //曲线图
    template += '<path fill="transparent" stroke="#d7ac62" stroke-width="0.5" d="' + getPath(points) + '"></path>';

    template += '<g>';

    var tx = formatNum(data[0]);
    //最后一个点,加粗
    template += '<circle cx="' + points[0].x + '" cy="' + points[0].y + '" r="9" fill="rgba(215,172,98,.3)"></circle>';
    template += '<circle cx="' + points[0].x + '" cy="' + points[0].y + '" r="7" fill="rgba(215,172,98,.6)"></circle>';
    //template += '<circle cx="' + points[0].x + '" cy="' + points[0].y + '" r="4" fill="#fff" stroke="#d7ac62" stroke-width="2px"></circle></g>';

    //每一个数点
    if (period == 0) {
        for (var i = 1, l = points.length; i < l; i++) {
            template += drawOnePoint(i);
        }
    }
    //最后一点
    template += drawOnePoint(0);

    //最后一个点,数值
    template += '<g opacity=".9" id="cur-svg-pt" transform="translate(' + points[0].x + ', ' + points[0].y + ')">';
    template += '<g transform="translate(-20,-34)">';
    template += '<rect ry="3" rx="3" width="' + (tx.length * 6 + 4) + '" height="16" fill="#d7ac62" ></rect>';
    template += '<path fill="#d7ac62" d="M15,15L20,20L25,15Z"/>';
    template += '<text id="cur-svg-tx" x="4" y="12" font-size="10" fill="#fff">' + tx + '</text></g>';
    template += '</g></g></svg>';
    return template;

    function drawOnePoint(i) {
        return '<circle num="' + formatNum(data[i]) + '" cx="' + points[i].x + '" cy="' + points[i].y + '" r="4" fill="#fff" stroke="rgba(215,172,98,1)" stroke-width="1"></circle>';
    }

    function dataFilter(period, data) {
        var n = 7;
        if (period == 1) {
            n = 30;
        } else if (period == 2) {
            n = 60;
        }
        return n >= data.length ? data : data.slice(0, n);
    }

    function prepare(data) {
        var maxY = 0;
        for (var i = 0, l = data.length; i < l; i++) {
            maxY = Math.max(maxY, getNum(data[i]));
        }
        return maxY;
    }

    function formatLabel(str) {
        str = String(str);
        return str.substring(4, 6) + '.' +
            str.substring(6, 8);
    }



    function formatNum(row) {
        return parseFloat(getNum(row)).toFixed(4);
    }

    function getLabels(data) {
        var labels = [];
        var step = (data.length - 1) / Math.min(6.0, data.length - 1);

        for (var i = 0; Math.round(i) < data.length - 1; i += step) {
            labels.push(formatLabel(data[Math.floor(i)].navDate));
        }
        labels.push(formatLabel(data[Math.floor(data.length - 1)].navDate));

        return labels.reverse();
    }

    function locatePoints(array) {
        var init = {
            horizontal: 22,
            vertial: 174 - yUnit
        }

        var step = {
            horizontal: 252 / Math.max(6, array.length - 1),
            vertial: yUnit
        }

        for (var i = 0, l = array.length; i < l; i++) {
            array[i].x = init.horizontal + step.horizontal * (l - i - 1);
            array[i].y = init.vertial - step.vertial * getNum(array[i]) * zoomY;
        }

        return array;
    }

    function getPath(points) {
        var path = 'M' + points[0].x + ',' + points[0].y;
        for (var i = 1, l = points.length; i < l; i++) {
            path += 'L' + points[i].x + ',' + points[i].y;
        }
        return path;
    }

    function getUnit() {
        return is7Rate ? "%" : "元";
    }

    function getYLabel(i) {
        return ((i - 1) / zoomY).toFixed(2) + getUnit();
    }

    function getNum(item) {
        return is7Rate ? item.nav : item.profitOf10K
    }

    function getZoom(maxY) {
        if (maxY < 2.5) return 2; // 5/2.5
        if (maxY < 5) return 1; // 5/5
        return 0.5; // 5/10
    }

    function getTitle(period) {
        var type = is7Rate ? "年化收益" : "万份收益";
        var unit = getUnit();
        switch (period) {
            case 0:
                return '最近七日' + type + '（' + unit + '）';
            case 1:
                return '最近一个月' + type + '（' + unit + '）';
            case 2:
                return '最近两个月' + type + '（' + unit + '）';
            default:
                return '';
        }
    }
}

export default function() {
  return LineChart.apply(this, arguments);
}
