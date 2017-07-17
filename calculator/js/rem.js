(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >=750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth /750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    /*DOMContentLoaded文档加载完成不包含图片资�? onload包含图片资源*/
})(document, window);



/*var iWidth=document.documentElement.clientWidth  //getBoundingClientRect().width;
 iWidth=iWidth>640?640:iWidth;
 document.getElementsByTagName("html")[0].style.fontSize=iWidth/6.4+"px";*/
