// ==UserScript==
// @name         seedaoban
// @namespace    blog.nenep.ltd
// @version      0.2
// @description  在b站，腾讯视频添加跳转解析网站按钮
// @author       neNep
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://v.qq.com/x/*
// @match        https://vip.yeyulingfeng.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// @run-at       document-end
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
var daobanurl = "https://vip.yeyulingfeng.com/";
var url;
function addCss(){
    GM_addStyle("#daobanbtn{  background: #eb94d0; background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);background-image: -moz-linear-gradient(top, #eb94d0, #2079b0); background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);background-image: -o-linear-gradient(top, #eb94d0, #2079b0);background-image: linear-gradient(to bottom, #eb94d0, #2079b0);}  -webkit-border-radius: 28; -moz-border-radius: 28; border-radius: 28px;text-shadow: 3px 2px 1px #9daef5; -webkit-box-shadow: 6px 5px 24px #666666; -moz-box-shadow: 6px 5px 24px #666666;box-shadow: 6px 5px 24px #666666; font-family: Arial;color: #fafafa;font-size: 27px;padding: 19px; text-decoration: none;");
}
function BaddButton(){
    $("#toolbar_module").append('<div class="daoban-info"><button id="daobanbtn" type="button" class="btn btn-default">看盗版</button></div>');
}
function QaddButton(){
    $(".player_title").append('<div class="daoban-info"><button id="daobanbtn" type="button" class="btn btn-default">看盗版</button></div>');
}
function setDaobanUrl(){
    $("#vipurl").val(GM_getValue("vurl"));
    onPlay();
}
function setOnClick(){
            $("#daobanbtn").click(function(){
            GM_setValue ("vurl", url);
            GM_openInTab(daobanurl,false);
        });
}
(function() {
    'use strict';
    window.onload=()=>{
        url = window.location.href;
        window.setTimeout(function(){
         if(url.includes('bili')){
            BaddButton();
            addCss();
            setOnClick()
        }if(url.includes('yeyulingfeng')){
            setDaobanUrl();
        }if(url.includes('qq')){
            QaddButton();
            addCss();
            setOnClick()
        }
        },1);

    }
    // Your code here...
})();