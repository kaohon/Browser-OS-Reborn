function background_black() {
	document.body.style.backgroundColor = "black"
	document.getElementById("menu_color").innerHTML = '<div id="menu" style="color: rgb(0, 0, 0); background-color: rgba(100, 100, 100, 0.4);"></div>'
	document.getElementById("bar_color").innerHTML = '<div id="bar" style="background-color: rgba(100, 100, 100, 0.4);"></div>'
	document.getElementById("app_color").innerHTML = '<div id="app_open" style="color: rgb(255, 255, 255);">⩡</div>'
}

function background_white() {
	document.body.style.backgroundColor = "white"
	document.getElementById("menu_color").innerHTML = '<div id="menu" style="color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0.7);"></div>'
	document.getElementById("bar_color").innerHTML = '<div id="bar" style="background-color: rgba(0, 0, 0, 0.7);"></div>'
	document.getElementById("app_color").innerHTML = '<div id="app_open" style="color: rgb(255, 255, 255);">⩡</div>'
}

function radius_window() {
	document.getElementById("menu").classList.add("edge_menu");
	document.getElementById("menu").classList.remove("radius_menu");
}

function edge_window() {
	document.getElementById("menu").classList.add("edge_menu");
	document.getElementById("menu").classList.remove("radius_menu");
}

function edge_menu() {
	document.getElementById("menu").classList.add("edge_menu");
	document.getElementById("menu").classList.remove("radius_menu");
}

function radius_menu() {
	document.getElementById("menu").classList.add("radius_menu");
	document.getElementById("menu").classList.remove("edge_menu");
}

function edge_bar() {
	document.getElementById("bar").classList.add("edge_bar");
	document.getElementById("bar").classList.remove("radius_bar");
}

function radius_bar() {
	document.getElementById("bar").classList.add("radius_bar");
	document.getElementById("bar").classList.remove("edge_bar");
}

function theme_setting() {
	document.getElementById("theme_setting").style.display = "block";
	document.getElementById("theme_showhidden").innerHTML = "<div onclick='theme_setting_hidden()'>テーマ・デザイン設定</div>"
}

function theme_setting_hidden() {
	document.getElementById("theme_setting").style.display = "none";
	document.getElementById("theme_showhidden").innerHTML = "<div onclick='theme_setting()'>テーマ・デザイン設定</div>"
}