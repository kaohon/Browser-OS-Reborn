function music_open() {
	document.getElementById("music").style.display = "block";
	document.getElementById("menu_music_visual").innerHTML = '<div id="menu_music_open" onclick="music_close()" style="color: rgb(255, 255, 255);">♬</div>'
	document.getElementById("bar_music_visual").innerHTML = '<div id="bar_music_open" onclick="music_close()" style="color: rgb(255, 255, 255);">♬</div>'
}

function music_close() {
	document.getElementById("music").style.display = "none";
	document.getElementById("menu_music_visual").innerHTML = '<div id="menu_music_open" onclick="music_open()" style="color: rgb(255, 255, 255);">♬</div>'
	document.getElementById("bar_music_visual").innerHTML = '<div id="bar_music_open" onclick="music_open()" style="color: rgb(255, 255, 255);">♬</div>'
}

function music_hidden_button() {
	document.getElementById("music").style.display = "none";
}

function music_scale_button() {
	document.getElementById("music").classList.add("music_scale");
		document.getElementById("music_scale_color").innerHTML = '<div class="music_scale_button" onclick="music_scale_button_reset()" style="color: rgb(0, 0, 0);">☐</div>'
}

function music_scale_button_reset() {
	document.getElementById("music").classList.remove("music_scale");
	document.getElementById("music_scale_color").innerHTML = '<div class="music_scale_button" onclick="music_scale_button()" style="color: rgb(0, 0, 0);">☐</div>'
}

function music_close_button() {
	document.getElementById("music").style.display = "none";
}