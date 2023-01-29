function app_open() {
	document.getElementById("app").style.display = "block";
	document.getElementById("menu_app_visual").innerHTML = '<div id="menu_app_open" onclick="app_close()" style="color: rgb(255, 255, 255);">🌐</div>'
	document.getElementById("bar_app_visual").innerHTML = '<div id="bar_app_open" onclick="app_close()" style="color: rgb(255, 255, 255);">🌐</div>'
}

function app_close() {
	document.getElementById("app").style.display = "none";
	document.getElementById("menu_app_visual").innerHTML = '<div id="menu_app_open" onclick="app_open()" style="color: rgb(255, 255, 255);">🌐</div>'
	document.getElementById("bar_app_visual").innerHTML = '<div id="bar_app_open" onclick="app_open()" style="color: rgb(255, 255, 255);">🌐</div>'
}

