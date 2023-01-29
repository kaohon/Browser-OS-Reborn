function search_open() {
	document.getElementById("search").style.display = "block";
	document.getElementById("menu_search_visual").innerHTML = '<div id="menu_search_open" onclick="search_close()" style="color: rgb(255, 255, 255);">🔍</div>';
	document.getElementById("bar_search_visual").innerHTML = '<div id="bar_search_open" onclick="search_close()" style="color: rgb(255, 255, 255);">🔍</div>';
}

function search_close() {
	document.getElementById("search").style.display = "none";
	document.getElementById("menu_search_visual").innerHTML = '<div id="menu_search_open" onclick="search_open()" style="color: rgb(255, 255, 255);">🔍</div>';
	document.getElementById("bar_search_visual").innerHTML = '<div id="bar_search_open" onclick="search_open()" style="color: rgb(255, 255, 255);">🔍</div>';
}

function search_hidden_button() {
	document.getElementById("search").style.display = "none";
}

function search_scale_button() {
	document.getElementById("search").classList.add("search_scale");
		document.getElementById("search_scale_color").innerHTML = '<div class="search_scale_button" onclick="search_scale_button_reset()" style="color: rgb(0, 0, 0);">☐</div>'
}

function search_scale_button_reset() {
	document.getElementById("search").classList.remove("search_scale");
	document.getElementById("search_scale_color").innerHTML = '<div class="search_scale_button" onclick="search_scale_button()" style="color: rgb(0, 0, 0);">☐</div>'
}

function search_close_button() {
	document.getElementById("search").style.display = "none";
}