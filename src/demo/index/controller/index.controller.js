'use strict';

var FController     = require('fcontroller'),
    VueManager      = require('lego'),
    tplIndexView    = require('../views/tpl.index');

var modules = {
    'a-table'       : 'demo/assemble/table',
    'a-dock'        : 'demo/assemble/dock',
    'a-panel'       : 'demo/assemble/panel',
    'a-flype'       : 'demo/assemble/flype',
    'a-stick'       : 'demo/assemble/stick',
    'a-remarks'     : 'demo/assemble/remarks',
    'a-protocol'    : 'demo/assemble/protocol',
    'a-stages'      : 'demo/assemble/stages',
    'a-password'    : 'demo/assemble/password',
    'a-stepwise'    : 'demo/assemble/stepwise',
    'a-timeline'    : 'demo/assemble/timeline',
    'a-lead'        : 'demo/assemble/lead',

    'text'          : 'demo/basic/text',
    'button'        : 'demo/basic/button',
    'field'         : 'demo/basic/field',
    'icon'          : 'demo/basic/icon',
    'image'         : 'demo/basic/image',
    'list'          : 'demo/basic/list'
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

function IndexController () {
    this.moduleName = 'demo';
    this.name       = 'index';
    this.cssFile    = 'demo.index.css';
    this.classList  = [ 'lego-demo' ];
    this.routers    = { 'index' : 'index' }
    this.VueManager = VueManager;
}

IndexController.prototype = new FController({
    index: function () {
        var navigate = this.navigate.bind(this), 
            data = {}, $ = this.$, title = 'LEGO'

        this.renderVUE(tplIndexView(data), data, title, function () {
            updatePageTitleIniOS(title);

            Object.keys(modules).forEach(function (key) {
                $('#' + key).tap(function () { navigate(modules[key]); });
            });
        });
    }
});

(new IndexController()).initController({});