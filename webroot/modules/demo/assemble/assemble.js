(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var FController         = require('fcontroller'),
    VueManager          = require('lego'),
    events              = require('events'),
    
    tplFlypeView        = require('../views/tpl.flype'),
    tplStickView        = require('../views/tpl.stick'),
    tplRemarksView      = require('../views/tpl.remarks'),
    tplPasswordView     = require('../views/tpl.password'),
    tplStagesView       = require('../views/tpl.stages'),
    tplStepwiseView     = require('../views/tpl.stepwise'),
    tplTimelineView     = require('../views/tpl.timeline'),
    tplProtocolView     = require('../views/tpl.protocol'),
    tplLeadView         = require('../views/tpl.lead'),
    tplTableView        = require('../views/tpl.table'),
    tplDockView         = require('../views/tpl.dock'),
    tplPanelView        = require('../views/tpl.panel'),
    tplListView         = require('../views/tpl.list'),
    tplCommentView      = require('../views/tpl.comment'),
    tplTabbutton      = require('../views/tpl.tabbutton');

var events = require('events');

function AssembleController () {
    this.moduleName = 'demo';
    this.name       = 'assemble';
    this.cssFile    = 'demo.assemble.css';
    this.classList  = [ 'lego-demo' ];

    this.routers    = {
         flype      : 'flype',
         stick      : 'stick',
         remarks    : 'remarks',
         password   : 'password',
         stages     : 'stages',
         stepwise   : 'stepwise',
         timeline   : 'timeline',
         protocol   : 'protocol',
         table      : 'table',
         dock       : 'dock',
         panel      : 'panel',
         lead       : 'lead',
         list       : 'list',
         comment    : 'comment',
         tabbutton  : 'tabbutton'
    }

    this.VueManager = VueManager;
}

function updatePageTitleIniOS (title) {
    document.title = title;

    var ua = navigator.userAgent;

    // 若当前浏览器不是 iPhone 下的微信，则直接返回
    if (!(/(micromessenger)+/i.test(ua) && /(iphone)+/i.test(ua))) {
        return;
    }

	//iframe 加载后的回调函数
	function unloadHandler() {
		ifrm.removeEventListener('load', unloadHandler, false);
		setTimeout(function(){
			document.body.removeChild(ifrm);
		}, 100);
	};
	
	//创建 iframe
	var ifrm = document.createElement('iframe');
	//iframe 指向图标文件
	//ifrm.src = '/favicon.ico';
	ifrm.src = 'css/lego.css';
	ifrm.style.position = 'absolute';
	ifrm.style.top = '-1000px';
	
	//绑定回调函数
	ifrm.addEventListener('load', unloadHandler, false);
	
	//添加 iframe 至文档中
	document.body.appendChild(ifrm);
}

AssembleController.prototype = new FController({

    flype: function () {
        this.show('可折叠提示', tplFlypeView);
    },

    stick: function () {
        this.show('可关闭提示', tplStickView);
    },

    remarks: function () {
        this.show('注意事项', tplRemarksView);
    },

    password: function () {
        var data = {
            password: '',
            show: false
        };

        this.show('交易密码', tplPasswordView, function () {
            // setTimeout(function () {
            //     events.emit('password', {
            //         length: 3
            //     });
            // }, 2000);

            setTimeout(function () {
                //alert(data.password);
                data.show = true;
            }, 4000);
        }, data);

        //this.show('交易密码', tplPasswordView);
    },

    stages: function () {
        this.show('进度条', tplStagesView);
    },

    stepwise: function () {
        this.show('完成进度', tplStepwiseView);
    },

    timeline: function () {
        this.show('时间线', tplTimelineView);
    },

    protocol: function () {
        this.show('协议', tplProtocolView);
    },

    table: function () {
        this.show('表格&空行', tplTableView);
    },

    dock: function () {
        this.show('按钮', tplDockView);
    },

    panel: function () {
        var data = {
            tel: '',
            period: '0',
            data: {
                "pamaAcct":"1080000101457207",
                "orangeAccount":"88000079580592",
                "totalProfit":"0.53",
                "buyDate":"2017-05-25",
                "rateOf7Days":"3.3531",
                "recentRedeemDate":"2017-07-10",
                "auditResult":"01",
                "autoInvestPlan":"",
                "profitOf10K":"1.0128",
                "limitFlag":"A",
                "hisProfitRates":[
                    {
                        "profitOf10K":"1.0128",
                        "navDate":"20170522",
                        "nav":"3.3531"
                    },
                    {
                        "profitOf10K":"1.1634",
                        "navDate":"20170427",
                        "nav":"4.6765"
                    },
                    {
                        "profitOf10K":"1.1634",
                        "navDate":"20170427",
                        "nav":"4.6765"
                    },
                    {
                        "profitOf10K":"1.7378",
                        "navDate":"20170426",
                        "nav":"6.1199"
                    },
                    {
                        "profitOf10K":"0.9348",
                        "navDate":"20170425",
                        "nav":"6.4638"
                    },
                    {
                        "profitOf10K":"0.9348",
                        "navDate":"20170425",
                        "nav":"6.4638"
                    },
                    {
                        "profitOf10K":"1.5066",
                        "navDate":"20170424",
                        "nav":"8.3331"
                    },
                    {
                        "profitOf10K":"3.9315",
                        "navDate":"20170420",
                        "nav":"7.7629"
                    },
                    {
                        "profitOf10K":"2.3975",
                        "navDate":"20170419",
                        "nav":"6.2666"
                    },
                    {
                        "profitOf10K":"0.9884",
                        "navDate":"20170406",
                        "nav":"3.5044"
                    },
                    {
                        "profitOf10K":"4.7461",
                        "navDate":"20170331",
                        "nav":"3.5443"
                    },
                    {
                        "profitOf10K":"1.0635",
                        "navDate":"20170330",
                        "nav":"3.5077"
                    },
                    {
                        "profitOf10K":"0.9877",
                        "navDate":"20170329",
                        "nav":"3.3901"
                    },
                    {
                        "profitOf10K":"1.1125",
                        "navDate":"20170327",
                        "nav":"3.1716"
                    }
                ],
                "quotaAvailable":"1,999,999.97",
                "userLevel":"H",
                "heldAsset":"2000.54",
                "toAcctDate":"2017-05-26",
                "userName":"张一零",
                "bearingDate":"2017-05-25",
                "limitMsg":"今日产品可售额度剩余 1,999,999.97元，请尽快购买，以免可售额度售罄",
                "yesterdyProfit":"0.12",
                "auditMark":-1,
                "mobile":"17720170010"
            }
        }, $ = this.$;

        data.submit = function () {
            alert(data.tel);
        }

        this.show('文字面板', tplPanelView, function () {
            $('#save2').tap(function () {
                var errors = events.validate();

                // if (errors.length > 0) {
                    events.fieldErrors(errors);
                // } else {
                //     data.submit();
                // }
            });
            // $('#xxx').input(function(){
            //     var s = this.getElementsByTagName('input')[0].value;
            //     if(s.length == 3) {
            //         s+='-';
            //     }
            //     this.getElementsByTagName('input')[0].value = s;
            //     if(s.length == 6) {
            //         s+='-';
            //     }
            //     this.getElementsByTagName('input')[0].value = s;
            //     console.log(s);
            // });

            console.log($('#label').find('select').val());

        }, data);
    },

    lead: function () {
        this.show('头条', tplLeadView, null, {
            list1: 
                {"header": "今七日化收益率","invest":"6.00%","title1":"每万分收益（元）","value1":"0.34","title2":"起购金额（元）","value2":"1000","title3":"理财期限","value3":"灵活存取"}
            ,
            list2: 
                {"header": "昨日收益","invest":"10.00","title1":"持有资产（元）","value1":"100000.00","title2":"起购金额","value2":"1000"}
        });
    },

    list: function () {
        this.show('列表', tplListView, null, {
            // list: [{name: '123'}, {name: '456'}],
            // 可供选择的银行卡 且 选中第一张 
            list: [
                {"bankName": "拉拉银行","bankNum":"333323453","limit":"100"},
                {"bankName": "建设银行","bankNum":"2323231233"},
                {"bankName": "浦发银行","bankNum":"2342342342342333","limit":"30"},
                                {"bankName": "浦发银行","bankNum":"2342342342342333","limit":"未激活"}

            ],
            // 点击银行卡  跳转下一页
            list1: [
                {"bankName": "拉拉银行","bankNum":"333323453","limit":"100","support":"1"}
            ],
            // 不支持充值的银行卡 
            list2: [
                {"bankName": "浦发银行","bankNum":"333323453","limit":"30","support":"2"},
                {"bankName": "拉拉银行","bankNum":"333323453","limit":"100","support":"2"}
            ],
            // 不支持充值的银行卡 
            list3: [
                {"bankName": "浦发银行","bankNum":"2333323453333","limit":"30","support":"3"},
                {"bankName": "建设银行","bankNum":"333323453","limit":"200","support":"3"}
            ],
            // 在途资产
            list4: [
                {"orderName": "工资宝","orderType":"赎回","orderTime":"2015-08-18 09:01:40","orderAmount":"500.50"},
                {"orderName": "定期产品","orderType":"申购","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"}
            ],
            // 账户明细
            list5: [
                {"orderName": "认购-","orderDesc":"财富121期","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"7008.50"},
                {"orderName": "赎回-","orderDesc":"财富121期","orderType":"2","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"},
                {"orderName": "在线充值","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"},
                {"orderName": "线下充值","orderType":"1","orderTime":"2015-08-18 09:01:40","orderAmount":"600.00"}
            ],
            // 预约赎回
            list6: [
                {"orderName": "2000 ","orderDesc":"元","orderType":"1","orderTime":"预计2017-05-11 ","restore":"到期滚存","orderAmount":"预约赎回"},
                {"orderName": "2000 ","orderDesc":"元","orderType":"1","orderTime":"预计2017-05-11 ","restore":"到期滚存","orderAmount":"预约赎回"},
                {"orderName": "2000 ","orderDesc":"元","orderType":"1","orderTime":"预计2017-05-11 ","restore":"到期滚存","orderAmount":"预约赎回"},
                {"orderName": "2000 ","orderDesc":"元","orderType":"1","orderTime":"预计2017-05-11 ","restore":"到期滚存","orderAmount":"预约赎回"}
            ],
            // 单行
            list7: [
                {},
                {"orderName": "2015-08-18 到期","orderAmount":"600.00"},
                {"orderName": "2015-08-18 到期","orderAmount":"600.00"},
                {"orderName": "2015-08-18 到期","orderAmount":"600.00"}
            ],
            // question
            list8: [
                {"question": "到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回","answer":"到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回"},
                {"question": "到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回","answer":"到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回"},
                {"question": "到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回","answer":"到期预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回预约赎回"}
            ],
            // next-cell
            list9: [
                {"name":"产品合同","link":"xxx"},
                {"name":"yxyxyx","link":"yyy"}
            ],
            onTap: function (itemData) {
                console.log(itemData);
            }
        });
    },
    tabbutton: function () {
        this.show('TAB切换按钮', tplTabbutton);
    },

    show: function (title, tpl, callback, data) {

        title    = title || '';
        data     = data || {};
        callback = callback || function () {};

        this.renderVUE(tpl(data), data, title, function () {
            updatePageTitleIniOS(title);
            callback();
        });
    },
    comment: function () {
        this.show('成交量', tplCommentView);
    },
});

(new AssembleController()).initController({});
},{"../views/tpl.comment":2,"../views/tpl.dock":3,"../views/tpl.flype":4,"../views/tpl.lead":5,"../views/tpl.list":6,"../views/tpl.panel":7,"../views/tpl.password":8,"../views/tpl.protocol":9,"../views/tpl.remarks":10,"../views/tpl.stages":11,"../views/tpl.stepwise":12,"../views/tpl.stick":13,"../views/tpl.tabbutton":14,"../views/tpl.table":15,"../views/tpl.timeline":16,"events":"events","fcontroller":"fcontroller","lego":"lego"}],2:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"c8e41d58b60a9a2813217885d0c0a8f9"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.comment","<s-cell height='2'></s-cell> <comment> <b-text size='24' color='light'>\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea4<b-text color='coral'>3764</b-text>\u7b14</b-text> </comment> <comment :warn=true> <b-text size='24' color='light'>\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea4<b-text color='coral'>3764</b-text>\u7b14</b-text> </comment> <comment :oneline='false'> <b-text size='24' color='light'>\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14\u4e2d\u98ce\u9669\uff0c\u7d2f\u8ba1\u6210\u4ea411\u7b14</b-text> </comment> <annotation label='\u8bc1\u4ef6\u7c7b\u578b' :label-width='5'>21234567989456462</annotation> <annotation label='\u8bc1\u4ef6\u7c7b\u578b' :label-width='5' left-color='stonegrey'>21234567989456462</annotation> <textarea-row palceholder='\u8bf7\u8f93\u5165' :height='150'>xxxxxx</textarea-row> <toast :toptoast='true'>\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u81f3\u4f60\u53f7\u7801\u4e3a 163****6453\u7684\u624b\u673a</toast> <toast>\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u81f3\u4f60\u7684\u624b\u673a\u4e0a</toast> ");
},{"../../../template":17}],3:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"9e6467d2c2ea74befa227a9d152e2778"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.dock","<p-main bgcolor='offwhite'> <stub></stub> <dock filled='true' bgcolor='white' > <a-button id='button1'>\u786e\u5b9a</a-button> </dock> <stub></stub> <dock filled='false' bgcolor='white' > <a-button id='button2'>\u786e\u5b9a</a-button> </dock> <stub></stub> <dock bgcolor='white'> <a-button id='cancel' :disabled='true'>\u53d6\u6d88</a-button> <a-button id='ok' :disabled='true'>\u786e\u5b9a</a-button> </dock> <stub></stub> <dock filled='true' bgcolor='white'> <a-button id='cancel' :disabled='true'>\u53d6\u6d88</a-button> <a-button id='ok' >\u786e\u5b9a</a-button> </dock> <stub></stub> <dock filled='true' bgcolor='white'> <a-button id='plan' :disabled='true'>\u6bcf\u6708\u81ea\u52a8\u5b9a\u6295</a-button> <a-button id='sell'>\u8d4e\u56de</a-button> <a-button id='buy' :disabled='true'>\u7533\u8d2d</a-button> </dock> </p-main> <p-footer> <dock bgcolor='white' border-top='true'> <a-button id='f-cancel'>\u53d6\u6d88</a-button> <a-button id='f-ok'>\u786e\u5b9a</a-button> </dock> </p-footer> <p-modalup> <welfare-card left-label=\"\u8d26\u6237\u4f59\u989d\" right-width=\"9\" right-label=\"2300.20\u5143\" right-note=\"\u7b49\u503c\u91d1\u989d 158.2\u5143\"></welfare-card> <welfare-card :border-padding='true' height=\"90\" left-label=\"\u8d26\u6237\u4f59\u989d\" right-label=\"2300.20\u5143\" ></welfare-card> <welfare-card left-label=\"\u8d26\u6237\u4f59\u989d\" right-label=\"2300.20\u5143\" right-note=\"\u7b49\u503c\u91d1\u989d 158.2\u5143\"></welfare-card> </p-modalup>");
},{"../../../template":17}],4:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"8f8cc7d4b00c1e0e4725550a17f04552"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.flype",'<flype folded="true"> <b-text>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br> \u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002<br>\u672c\u6848\u9700\u60a8\u8865\u5145\u7406\u8d54\u7533\u8bf7\u6750\u6599\u539f\u4ef6\u540e\u652f\u4ed8\u8d54\u6b3e\u3002 </b-text> </flype>');
},{"../../../template":17}],5:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"89e81ca3dae7488d00d15b40a579e90d"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.lead",'<s-cell height="1" bgcolor="white"></s-cell> <lead footer="\u7533\u8d2d\u6210\u529f"> \u4ea4\u6613\u6210\u529f </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead>\u652f\u4ed8\u4e2d</lead> <s-cell height="1" bgcolor="white"></s-cell> <lead header="\u6301\u6709\u8d44\u4ea7" btn-id="invest" btn="\u4ea4\u6613\u8bb0\u5f55"> 1110.00 </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead header="GE***\u9879\u76ee" footer="\u8ba1\u5212\u521b\u5efa\u65f6\u95f4\uff1a2005-07-01" link="\u4ea4\u6613\u8bb0\u5f55"> \u674e\u4e50\u4e50 </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead header="GE***\u9879\u76ee" footer="\u8ba1\u5212\u521b\u5efa\u65f6\u95f4\uff1a2005-07-01"> \u674e\u4e50\u4e50 </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead header="GE***\u9879\u76ee" footer="\u8ba1\u5212\u521b\u5efa\u65f6\u95f4\uff1a2005-07-01" > \u674e\u4e50\u4e50 </lead> <s-cell height="1" bgcolor="white"></s-cell>  <lead desc=\'\u4eca\u4e03\u65e5\u5316\u6536\u76ca\u7387\' invest=\'6.00%\' > <lead-item >\u6bcf\u4e07\u5206\u6536\u76ca\uff08\u5143\uff09</lead-item> <lead-item >0.34</lead-item> <lead-item >\u8d77\u8d2d\u91d1\u989d\uff08\u5143\uff09</lead-item> <lead-item >1000</lead-item> <lead-item >\u7406\u8d22\u671f\u9650</lead-item> <lead-item >\u7075\u6d3b\u5b58\u53d6</lead-item> </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead desc=\'\u4eca\u4e03\u65e5\u5316\u6536\u76ca\u7387\' invest=\'6.00%\' login=\'true\' asset= \'true\'> <lead-item >\u6bcf\u4e07\u5206\u6536\u76ca\uff08\u5143\uff09</lead-item> <lead-item >0.34</lead-item> <lead-item >\u8d77\u8d2d\u91d1\u989d\uff08\u5143\uff09</lead-item> <lead-item >1000</lead-item> <lead-item >\u7406\u8d22\u671f\u9650</lead-item> <lead-item >\u7075\u6d3b\u5b58\u53d6</lead-item> </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead desc=\'\u6628\u65e5\u6536\u76ca\' invest=\'10.00\' > <lead-item >\u6bcf\u4e07\u5206\u6536\u76ca\uff08\u5143\uff09</lead-item> <lead-item >0.34</lead-item> <lead-item >\u8d77\u8d2d\u91d1\u989d\uff08\u5143\uff09</lead-item> <lead-item >1000</lead-item> </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead desc=\'\u6628\u65e5\u6536\u76ca\' invest=\'10.00\' :login=true :asset=true> <lead-item >\u6bcf\u4e07\u5206\u6536\u76ca\uff08\u5143\uff09</lead-item> <lead-item >0.34</lead-item> <lead-item >\u8d77\u8d2d\u91d1\u989d\uff08\u5143\uff09</lead-item> <lead-item >1000</lead-item> </lead> <s-cell height="1" bgcolor="white"></s-cell> <lead desc=\'\u6301\u6709\u8d44\u4ea7\uff08\u5143\uff09\' :login=true :asset=true> <lead-item >\u6bcf\u4e07\u5206\u6536\u76ca\uff08\u5143\uff09</lead-item> <lead-item >0.34</lead-item> <lead-item >\u8d77\u8d2d\u91d1\u989d\uff08\u5143\uff09</lead-item> <lead-item >1000</lead-item> </lead> <s-cell height="1" bgcolor="white"></s-cell> <s-cell height="1" bgcolor="white"></s-cell>');
},{"../../../template":17}],6:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"1339601f8cf438b1ddebbbc45d3bf3f5"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.list",'<list card=\'next-cell\' :data=\'list9\' :on-tap=\'onTap\' ></list> <list card=\'next-cell\' :data=\'list9\' :on-tap=\'onTap\' :show-right=\'false\'></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u94f6\u884c\u5361 \u8df3\u8f6c\u4e0b\u4e00\u9875</b-text> </s-column> </s-cell> <list card=\'next-card\' :data=\'list1\' :on-tap=\'onTap\'></list> <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u4e0d\u652f\u6301\u7684\u94f6\u884c\u5361 \u63d0\u793a\u66f4\u6362 \u8df3\u8f6c\u4e0b\u4e00\u9875 </b-text> </s-column> </s-cell> <list card=\'next-card\' name=\'name\' value=\'123\' :data=\'list2\' :on-tap=\'onTap\' ></list> <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u4e0d\u652f\u6301\u7684\u94f6\u884c\u5361 \u4e0d\u53ef\u70b9\u51fb </b-text> </s-column> </s-cell> <list card=\'next-card\' name=\'name\' value=\'123\' :data=\'list3\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u6307\u5b9a\u9ed8\u8ba4\u9009\u4e2d\u7684\u7247\u5361 \u4e14\u94f6\u884c\u5361\u5217\u8868\u5faa\u73af </b-text> </s-column> </s-cell> <list card=\'select-card\' name=\'bankName\' value=\'\u5efa\u8bbe\u94f6\u884c\' :data=\'list\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u6307\u5b9a\u9ed8\u8ba4\u9009\u4e2d\u7684\u7247\u5361 \u4e14\u94f6\u884c\u5361\u5217\u8868\u5faa\u73af </b-text> </s-column> </s-cell> <list card=\'card\' name=\'bankName\' value=\'\u5e73\u5b89\u94f6\u884c\' :data=\'list\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u5728\u9014\u8d44\u4ea7 \u7533\u8d2d\u8d4e\u56de\u8ba2\u5355\u5217\u8868 </b-text> </s-column> </s-cell> <list card=\'order-card\' :data=\'list4\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u8d26\u6237\u660e\u7ec6</b-text> </s-column> </s-cell> <list card=\'order-card\' :data=\'list5\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u9884\u7ea6\u8d4e\u56de</b-text> </s-column> </s-cell> <list card=\'order-card\' color=\'orange\' size=\'44\' :data=\'list6\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">\u5355\u884c\u4fe1\u606f</b-text> </s-column> </s-cell> <list card=\'line-card\' :data=\'list7\' :on-tap=\'onTap\' ></list>  <s-cell height="1" border="true" bgcolor="offwhite"> <s-column width=".789474" align="left"> </s-column> <s-column width="13" align="left"> <b-text size="22" color="grey">question</b-text> </s-column> </s-cell> <list card=\'question\' :data=\'list8\' :on-tap=\'onTap\' ></list> <welfare-card left-label="\u8d26\u6237\u4f59\u989d" right-width="9" right-label="2300.20\u5143" right-note="\u7b49\u503c\u91d1\u989d 158.2\u5143"></welfare-card> <welfare-card :border-padding=\'true\' height="90" left-label="\u8d26\u6237\u4f59\u989d" right-label="2300.20\u5143" ></welfare-card> <welfare-card left-label="\u8d26\u6237\u4f59\u989d" right-label="2300.20\u5143" right-note="\u7b49\u503c\u91d1\u989d 158.2\u5143"></welfare-card> ');
},{"../../../template":17}],7:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"2114fa9944f1b31893408f74bf3bea62"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.panel","<p-main bgcolor='offwhite'> <stub></stub> <panel edit='false' bgcolor='white' border='false' label-width='6'> <fixed-row height='5' color='black'>\u6682\u65e0\u6d88\u606f...</fixed-row> <a-title id='save1' label='\u8054\u7cfb\u65b9\u5f0f' subtitle='(\u5355\u4f4d\uff1a\u5143)' comment='2000.00'></a-title> <a-title id='save2' label='\u8054\u7cfb\u65b9\u5f0f'>\u4fdd\u5b58</a-title> <tel-field-row id='xxx' label='\u7535\u8bdd\u53f7\u7801' placeholder='\u8bf7\u8f93\u5165' v-model='tel'></tel-field-row> <tel-field-row label='\u7535\u8bdd\u53f7\u7801' align='right' placeholder='\u8bf7\u8f93\u5165' v-model='tel'></tel-field-row> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-row label='\u8bc1\u4ef6\u7c7b\u578b'>21234567989456462</text-row> <text-row label='\u51fa\u751f\u65e5\u671f'>1995-02-05</text-row> <text-row label='\u6027\u522b'>\u7537</text-row> <text-field-row label='\u6027\u522b' placeholder='\u8bf7\u8f93\u5165'>\u7537</text-field-row> <text-field-row label='\u6027\u522b' placeholder='\u8bf7\u8f93\u5165' align='right'>\u7537</text-field-row> <text-row> <b-text color='grey'>Q \u8bf7\u95ee\u5728\u54ea\u91cc\u67e5\u770b</b-text><br/> <b-text color='light'>A \u56de\u7b54\u56de\u7b54\u56de\u7b54</b-text> </text-row> </panel> <stub></stub> <panel edit='true' bgcolor='white' border='false' label-width='8'> <fixed-row height='5' color='black'>\u6682\u65e0\u6d88\u606f...</fixed-row> <a-title id='save1' label='\u8054\u7cfb\u65b9\u5f0f' subtitle='(\u5355\u4f4d\uff1a\u5143)' comment='2000.00'></a-title> <a-title id='save2' label='\u8054\u7cfb\u65b9\u5f0f'>\u4fdd\u5b58</a-title> <tel-field-row label='\u7535\u8bdd\u53f7\u7801' placeholder='\u8bf7\u8f93\u5165' v-model='tel'></tel-field-row> <tel-field-row label='\u7535\u8bdd\u53f7\u7801' placeholder='\u8bf7\u8f93\u5165' v-model='tel'></tel-field-row> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-row label='\u59d3\u540d' align='right'>\u4e50\u4e50</text-row> <text-row label='\u8bc1\u4ef6\u7c7b\u578b'>21234567989456462</text-row> <text-row label='\u51fa\u751f\u65e5\u671f'>1995-02-05</text-row> <text-row label='\u6027\u522b'>\u7537</text-row> <text-field-row label='\u6027\u522b' placeholder='\u8bf7\u8f93\u5165'>\u7537</text-field-row> <text-field-row label='\u6027\u522b' placeholder='\u8bf7\u8f93\u5165' >\u7537</text-field-row> <select-row id='label' label='\u5de6\u4fa7\u5355\u884c' :native='true' placeholder='\u6bcf\u4e2a\u53d1\u5de5\u8d44\u65e5' :data-select='[\"1\u65e5\",\"2\u65e5\",\"3\u65e5\",\"4\u65e5\"]'></select-row> <select-row label='\u51fa\u751f\u65e5\u671f' color='lightgrey'>\u8bf7\u9009\u62e9</select-row> </panel> <fixed-row height='5' border='false'>\u6682\u65e0\u6d88\u606f...</fixed-row> <amount-row :label='1000' default-value='1000' desc='\u8d4e\u56de\u91d1\u989d' placeholder=\"\u672c\u6b21\u6700\u591a\u8d4e\u56de1000.00\u5143\" :callfn=\"function(e){console.log(e)}\"></amount-row>   <stub border='false'></stub> <check-line-group :call-fn='function(ev){console.log(ev.id)}'> <check-line id='pay1' label='\u94f6\u884c\u5361\u652f\u4ed8' comment='\u5355\u65e5\u9650\u989d 3000 \u5143' value='\u5e73\u5b89\u94f6\u884c \u5c3e\u53f73500' link='true' ></check-line> <check-line id='pay2' label='\u94b1\u5305\u652f\u4ed8' value='3,000.00 \u5143' ></check-line> <check-line id='pay3' label='\u94f6\u884c\u5361\u652f\u4ed8' value='\u4e2d\u56fd\u5de5\u5546\u94f6\u884c \u5c3e\u53f78188' checked='true' link='true' ></check-line> </check-line-group> <tab-button left-label='2.3456' right-label='3.2345' :is-date=\"true\" title-size='26'> <a-button id='profit'>7\u65e5\u5e74\u5316\u6536\u76ca(%)</a-button> <a-button id='sdate'>\u4e07\u5206\u6536\u76ca(\u5143)</a-button> </tab-button> <line-chart :list='data.hisProfitRates'></line-chart> <tab-button :radius=\"true\"> <a-button id='all'>7\u65e5</a-button> <a-button id='pay'>1\u4e2a\u6708</a-button> <a-button id='income'>2\u4e2a\u6708</a-button> </tab-button> <fixed-row height='5' border='false' submit='true'></fixed-row> <tab-button id=\"tab\"> <a-button id='profit'>7\u65e5\u5e74\u5316\u6536\u76ca(%)</a-button> <a-button id='sdate'>\u4e07\u5206\u6536\u76ca(\u5143)</a-button> </tab-button> <textarea-row id='reason' placeholder='\u5982\u4e0d\u80fd\u63d0\u4f9b\u5c45\u6c11\u56fd\uff08\u5730\u533a\uff09\u7eb3\u7a0e\u4eba\u8bc6\u522b\u53f7\uff0c\u8bf7\u8f93\u5165\u5177\u4f53\u539f\u56e0' :height='190' max='250'></textarea-row> <toast></toast> </p-main>");
},{"../../../template":17}],8:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"f5db74cf560ac2f0350d8219480e9df8"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.password","<p-main bgcolor='offwhite'> <stub></stub> <password></password> <stub></stub> </p-main> <p-footer> <keyboard :show='show' v-model='password'></keyboard> </p-footer>");
},{"../../../template":17}],9:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"2bf1223c56121ee2553b170dbb97251c"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.protocol",'<protocol checked=\'true\' :callfn="function(e){console.log(e)}"> <b-text size="24" color="light">\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f</b-text> <b-highlight id="link" size="24">\u300a\u5e73\u5b89\u76f4\u901a\u94f6\u884c\u8d26\u6237\u670d\u52a1\u534f\u8bae\u300b</b-highlight> <b-highlight id="link" size="24">\u300a\u5e73\u5b89\u76f4\u901a\u94f6\u884c\u8d26\u6237\u670d\u52a1\u534f\u8bae\u300b</b-highlight> <b-text size="24" color="light">\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f</b-text> </protocol> <stub></stub> <total-button >10,000.00 \u5143</total-button> <stub></stub> <total-button :show-check=\'true\' label=\'\u4ed8\u6b3e\' desc=\'\u5408\u8ba1\' width=\'240\'>\uffe510,000.00</total-button>');
},{"../../../template":17}],10:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"b7a72259cfec9c53935baf4d8281b7e8"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.remarks","<remarks type='hammer'> <b-text color='lightgrey' size='24'>\u60a8\u53ef\u5728</b-text> <b-text color='coral'>2017-09-10 15:00</b-text> <b-text color='lightgrey' size='24'>\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1</b-text> </remarks> <br> <remarks type='hammer' width='82'> <b-text color='lightgrey' size='24'>\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1\u524d\u5728\u8d44\u4ea7\u660e\u7ec6\u4e2d\u9884\u7ea6\u8d4e\u56de\u8be5\u4ea7\u54c1</b-text> </remarks> <br> <remarks type='hammer'> <timeline line-type='2' label-font='1' desc-font='0.8' desc-x='30' height='180'> <timepoint label=\"\u63d0\u4ea4\u7533\u8d2d\" desc=\"\u9884\u8ba12016-04-19\"></timepoint> <timepoint label=\"\u5ba1\u6838\u6210\u529f\" desc=\"\u9884\u8ba12016-04-20\"></timepoint> <timepoint label=\"\u7b49\u5f85\u7ed3\u679c\" desc=\"\u9884\u8ba12016-04-21\"></timepoint> <timepoint label=\"\u7b49\u5f85\u7ed3\u679c\" desc=\"\u9884\u8ba12016-04-21\"></timepoint> </timeline> </remarks> <br> <remarks type='hammer'> <timeline line-type='2' label-font='1' desc-font='0.8' height='160'> <timepoint label=\"\u7b2c\u4e00\u6b21\u6263\u6b3e\u57285\u670812\u65e5\u5df2\u8fdb\u884c\u6263\u6b3e\" ></timepoint> <timepoint label=\"\u7b2c\u4e00\u6b21\u6263\u6b3e\u57286\u670812\u65e5\u5df2\u8fdb\u884c\u6263\u6b3e\" ></timepoint> <timepoint label=\"\u540e\u7eed\u6bcf\u670812\u65e5\uff0c\u5c06\u4e3a\u4f60\u5b9a\u671f\u6295\u5165\uff0c\u6301\" labelmore='\u7eed\u4ea7\u751f\u6536\u76ca' ></timepoint> </remarks> <br> <remarks type='hammer'> <timeline line-type='2' label-font='1' desc-font='1' height='220'> <timepoint label=\"\u7b2c\u4e00\u6b21\u6263\u6b3e\u57285\u670812\u65e5\u5df2\u8fdb\u884c\u6263\u6b3e\" ></timepoint> <timepoint label=\"\u7b2c\u4e00\u6b21\u6263\u6b3e\u57286\u670812\u65e5\u5df2\u8fdb\u884c\u6263\u6b3e\" ></timepoint> <timepoint label=\"\u540e\u7eed\u6bcf\u670812\u65e5\uff0c\u5c06\u4e3a\u4f60\u5b9a\u671f\u6295\u5165\uff0c\" labelmore='\u6301\u7eed\u4ea7\u751f\u6536\u76ca'></timepoint> <timepoint label=\"\u540e\u7eed\u6bcf\u670812\u65e5\uff0c\u5c06\u4e3a\u4f60\u5b9a\u671f\u6295\u5165\uff0c\" labelmore='\u6301\u7eed\u4ea7\u751f\u6536\u76ca'></timepoint> </remarks> <remarks type='hammer'> <timeline> <timepoint label=\"\u63d0\u4ea4\u7533\u8d2d\" desc=\"2016-04-19\"></timepoint> <timepoint label=\"\u5ba1\u6838\u6210\u529f\" desc=\"2016-04-20\"></timepoint> <timepoint label=\"\u7b49\u5f85\u7ed3\u679c\" desc=\"2016-04-21\"></timepoint> </timeline> </remarks> <br> <remarks type='\u5931\u8d25\u539f\u56e0'> \u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0\u5931\u8d25\u539f\u56e0 </remarks>");
},{"../../../template":17}],11:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"73b60e45948ffe25db36dc982a408979"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.stages",'<stages step="1"> <stage></stage> <stage></stage> </stages> <stages step="2"> <stage></stage> <stage></stage> </stages> <stages step="1"> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="2"> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="3"> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="1"> <stage></stage> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="2"> <stage></stage> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="3"> <stage></stage> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="4"> <stage></stage> <stage></stage> <stage></stage> <stage></stage> </stages> <stages step="1"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> </stages> <stages step="2"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> </stages> <stages step="1"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> </stages> <stages step="2"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> </stages> <stages step="3"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> </stages> <stages step="1"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> <stage>\u9886\u53d6\u4fe1\u606f4</stage> </stages> <stages step="2"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> <stage>\u9886\u53d6\u4fe1\u606f4</stage> </stages> <stages step="3"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> <stage>\u9886\u53d6\u4fe1\u606f4</stage> </stages> <stages step="4"> <stage>\u9886\u53d6\u4fe1\u606f1</stage> <stage>\u9886\u53d6\u4fe1\u606f2</stage> <stage>\u9886\u53d6\u4fe1\u606f3</stage> <stage>\u9886\u53d6\u4fe1\u606f4</stage> </stages>');
},{"../../../template":17}],12:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"ed07e44aa8315b8d535203a51c27f373"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.stepwise","<stepwise label='\u5df2\u5b8c\u6210 ' rate='2' total='5'></stepwise>");
},{"../../../template":17}],13:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"df65c8fc74f1ac3c25b0b66f91bf87bb"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.stick",'<stick>\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003</stick> <lead footer="\u7533\u8d2d\u6210\u529f"> \u4ea4\u6613\u6210\u529f </lead> <s-cell class=\'_cell_next\' height="2.473684" border="true" bgcolor=\'white\'> <s-flex-column> </s-flex-column> <s-column width="17" align="left"> <b-text size="30" color="black">2017\u5e74\u5929\u777f\u65b0\u79d1\u5458\u5de5\u4fdd\u9669\u65b9\u6848</b-text> </s-column> <s-column width="1" align="right"> <b-select size=".75" ></b-select> </s-column> <s-flex-column> </s-flex-column> </s-cell> <s-cell class=\'_cell_next\' height="2.473684" border="true" bgcolor=\'white\'> <s-flex-column> </s-flex-column> <s-column width="10" align="left"> <b-text size="30" color="grey">\u8ba2\u5355\u91d1\u989d</b-text> </s-column> <s-column width="8" align="right"> <b-text size="30" color="grey">3000.00\u5143</b-text> </s-column> <s-flex-column> </s-flex-column> </s-cell> <s-cell class=\'_cell_next\' height="2.473684" border="true" bgcolor=\'white\'> <s-flex-column> </s-flex-column> <s-column width="10" align="left"> <b-text size="30" color="grey">\u79ef\u5206\u62b5\u6263</b-text> </s-column> <s-column width="8" align="right"> <b-text size="30" color="grey">3000.00\u5143</b-text> </s-column> <s-flex-column> </s-flex-column> </s-cell> <stick closable="false">\u4ea7\u54c1\u8fc7\u5f80\u4e1a\u7ee9\u4ec5\u4f9b\u53c2\u8003</stick> <lead header="GE***\u9879\u76ee" footer="\u8ba1\u5212\u521b\u5efa\u65f6\u95f4\uff1a2005-07-01" link="\u8ba1\u5212\u8be6\u60c5" link-id="detail-btn"> \u674e\u4e50\u4e50 </lead>');
},{"../../../template":17}],14:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"35fc83a34291e7048ee8b470cbb28170"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.tabbutton","<p-main bgcolor='offwhite'> <tab-button> <a-button id='all'>\u5168\u90e8</a-button> <a-button id='pay'>\u652f\u51fa</a-button> <a-button id='income'>\u6536\u5165</a-button> </tab-button> <tab-button> <a-button id='purchase'>\u7533\u8d2d\u89c4\u5219</a-button> <a-button id='redeem'>\u8d4e\u56de\u89c4\u5219</a-button> </tab-button> <tab-button :radius=\"true\"> <a-button id='all'>7\u65e5</a-button> <a-button id='pay'>1\u4e2a\u6708</a-button> <a-button id='income'>2\u4e2a\u6708</a-button> </tab-button> <toast>\u63d0\u793a\u9519\u8bef\u4fe1\u606f</toast> <tab-button> <a-button id='insurance'>\u4fdd\u9669</a-button> <a-button id='health'>\u5065\u5eb7</a-button> <a-button id='finance'>\u7406\u8d22</a-button> <a-button id='restore'>\u81ea\u8425</a-button> <a-button id='lottery'>\u5f69\u7968</a-button> </tab-button> </p-main>");
},{"../../../template":17}],15:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"4908475c88bff6d9dbde012b18ac41d0"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.table","<p-main bgcolor='offwhite'> <stub></stub> <a-table bgcolor='white'> <text-row label='\u59d3\u540d' align='right' color='grey'>\u674e\u4e50\u4e50</text-row> <text-row label='\b\u516c\u53f8\u540d\u79f0'>\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5e73\u5b89\u517b\u8001\u4fdd\u9669\u80a1\u4efd\u6709\u9650\u516c\u53f8</text-row> <select-row label='\u5de6\u4fa7\u5355\u884c'>\u8bf7\u9009\u62e9\u5185\u5bb9</select-row> <select-row label='\u5de6\u4fa7\u5355\u884c' :native='true' placeholder='\u6bcf\u4e2a\u53d1\u5de5\u8d44\u65e5' :data-select='[\"1\u65e5\",\"2\u65e5\",\"3\u65e5\",\"4\u65e5\"]'></select-row> <select-row label='\u652f\u6301\u5de6\u4fa7\u591a\u884c\u6587\u5b57' color='coral'>\u8bf7\u9009\u62e9</select-row> </a-table> <stub></stub> <a-table bgcolor='white'> <text-row label='\u59d3\u540d'>\u674e\u4e50\u4e50</text-row> <text-field-row label='\u59d3\u540d' placeholder='\u8bf7\u8f93\u5165\u59d3\u540d' required='true'></text-field-row> <text-field-row label='\u59d3\u540d' placeholder='\u8bf7\u8f93\u5165\u59d3\u540d' value='\u9ed8\u8ba4\u503c' required='true'></text-field-row> <tel-field-row label='\u624b\u673a\u53f7\u7801' placeholder='\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801' required='true'></tel-field-row> <id-field-row label='\u8eab\u4efd\u8bc1\u53f7' :label-width='8' placeholder='\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7' required='true'></id-field-row> <otp-field-row label='\u9a8c\u8bc1\u7801' placeholder='\u77ed\u4fe1\u9a8c\u8bc1\u7801' required='true'></otp-field-row> </a-table> </p-main>");
},{"../../../template":17}],16:[function(require,module,exports){
/*TMODJS:{"version":1,"md5":"7bdb38a06408951cd032b84afd148de5"}*/
var template=require("../../../template");module.exports=template("demo/assemble/views/tpl.timeline",'<stub></stub> <timeline label-font=\'0.62\' > <timepoint label="\u63d0\u4ea4\u7533\u8d2d" desc="2016-04-19"></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f" desc="2016-04-20"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> </timeline> <stub></stub> <timeline> <timepoint label="\u63d0\u4ea4\u7533\u8d2d" desc="2016-04-19"></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f" desc="2016-04-20"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> </timeline> <stub></stub> <timeline line-type=\'3\' label-font=\'0.62\'> <timepoint label="\u63d0\u4ea4\u7533\u8d2d" desc="2016-04-19"></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f" desc="2016-04-20"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> </timeline> <stub></stub> <timeline line-type=\'2\'> <timepoint label="\u63d0\u4ea4\u7533\u8d2d" desc="2016-04-19"></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f" desc="2016-04-20"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> </timeline> <timeline line-type=\'2\'> <timepoint label="\u63d0\u4ea4\u7533\u8d2d\u63d0\u4ea4\u7533\u8d2d" labelmore=\'\u6301\u7eed\u4ea7\u751f\u6536\u76ca\'></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f\u63d0\u4ea4\u7533\u8d2d" labelmore=\'\u6301\u7eed\u4ea7\u751f\u6536\u76ca\'></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c\u63d0\u4ea4\u7533\u8d2d" labelmore=\'\u6301\u7eed\u4ea7\u751f\u6536\u76ca\'></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c\u63d0\u4ea4\u7533\u8d2d\u63d0\u4ea4\u7533\u8d2d\u63d0\u4ea4\u7533\u8d2d\u63d0\u4ea4\u7533\u8d2d" labelmore=\'\u6301\u7eed\u4ea7\u751f\u6536\u76ca\'></timepoint> </timeline> <timeline line-type=\'2\'> <timepoint label="\u63d0\u4ea4\u7533\u8d2d" desc="2016-04-19"></timepoint> <timepoint label="\u5ba1\u6838\u6210\u529f" desc="2016-04-20"></timepoint> <timepoint label="\u7b49\u5f85\u7ed3\u679c" desc="2016-04-21"></timepoint> </timeline>');
},{"../../../template":17}],17:[function(require,module,exports){
/*TMODJS:{}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},module.exports=a}();
},{}]},{},[1]);
