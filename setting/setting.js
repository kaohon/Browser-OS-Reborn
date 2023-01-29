function setting_open() {
	document.getElementById("setting").style.display = "block";
	document.getElementById("menu_setting_visual").innerHTML = '<div id="menu_setting_open" onclick="setting_close()" style="color: rgb(255, 255, 255);">⚙</div>'
	document.getElementById("bar_setting_visual").innerHTML = '<div id="bar_setting_open" onclick="setting_close()" style="color: rgb(255, 255, 255);">⚙</div>'
}

function setting_close() {
	document.getElementById("setting").style.display = "none";
	document.getElementById("menu_setting_visual").innerHTML = '<div id="menu_setting_open" onclick="setting_open()" style="color: rgb(255, 255, 255);">⚙</div>'
	document.getElementById("bar_setting_visual").innerHTML = '<div id="bar_setting_open" onclick="setting_open()" style="color: rgb(255, 255, 255);">⚙</div>'
}

function setting_hidden_button() {
	document.getElementById("setting").style.display = "none";
}

function setting_scale_button() {
	document.getElementById("setting").classList.add("setting_scale");
		document.getElementById("setting_scale_color").innerHTML = '<div class="setting_scale_button" onclick="setting_scale_button_reset()" style="color: rgb(0, 0, 0);">☐</div>'
}

function setting_scale_button_reset() {
	document.getElementById("setting").classList.remove("setting_scale");
	document.getElementById("setting_scale_color").innerHTML = '<div class="setting_scale_button" onclick="setting_scale_button()" style="color: rgb(0, 0, 0);">☐</div>'
}

function setting_close_button() {
	document.getElementById("setting").style.display = "none";
}