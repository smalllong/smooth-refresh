/**
 * 2017/6/28 by lxl
 * smooth-refresh 1.0.0
 */
function createIframe(index) {
	var iframe = document.createElement('iframe');
	iframe.setAttribute('id', 'clone-iframe'+index);
	iframe.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;height:100%;border-width:0;z-index:-1');
	iframe.setAttribute('src', location.href);
	document.body.appendChild(iframe);
}

if (!(window!=parent && parent.refresh && document.title==parent.document.title)) {
	createIframe(1);
	createIframe(2);
}
window.cloneIframes=0;

window.refresh = function() {
	if (window!=parent && parent.refresh && document.title==parent.document.title) return;
	if (window.cloneIframes == 0) {
		window.cloneIframes = 1;
		document.getElementById('clone-iframe1').style.zIndex = 2000;
	} else if (window.cloneIframes == 1) {
		window.cloneIframes = 2;
		document.getElementById('clone-iframe2').style.zIndex = 2000;
		document.getElementById('clone-iframe1').style.zIndex = -1;
		document.getElementById('clone-iframe1').contentWindow.location.reload();
	} else if (window.cloneIframes == 2) {
		window.cloneIframes = 1;
		document.getElementById('clone-iframe1').style.zIndex = 2000;
		document.getElementById('clone-iframe2').style.zIndex = -1;
		document.getElementById('clone-iframe2').contentWindow.location.reload();
	}
}
