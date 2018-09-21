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