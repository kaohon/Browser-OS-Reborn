function text_open() {
	document.getElementById("text").style.display = "block";
	document.getElementById("menu_text_visual").innerHTML = '<div id="menu_text_open" onclick="text_close()" style="color: rgb(255, 255, 255);">📝</div>'
	document.getElementById("bar_text_visual").innerHTML = '<div id="bar_text_open" onclick="text_close()" style="color: rgb(255, 255, 255);">📝</div>'
}

function text_close() {
	document.getElementById("text").style.display = "none";
	document.getElementById("menu_text_visual").innerHTML = '<div id="menu_text_open" onclick="text_open()" style="color: rgb(255, 255, 255);">📝</div>'
	document.getElementById("bar_text_visual").innerHTML = '<div id="bar_text_open" onclick="text_open()" style="color: rgb(255, 255, 255);">📝</div>'
}

function text_hidden_button() {
	document.getElementById("text").style.display = "none";
}

function text_scale_button() {
	document.getElementById("text").classList.add("text_scale");
		document.getElementById("text_scale_color").innerHTML = '<div class="text_scale_button" onclick="text_scale_button_reset()" style="color: rgb(0, 0, 0);">☐</div>'
}

function text_scale_button_reset() {
	document.getElementById("text").classList.remove("text_scale");
	document.getElementById("text_scale_color").innerHTML = '<div class="text_scale_button" onclick="text_scale_button()" style="color: rgb(0, 0, 0);">☐</div>'
}

function text_close_button() {
	document.getElementById("text").style.display = "none";
}