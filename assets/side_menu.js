const fs_button = window.document.getElementById("fs_button");
const menu = window.document.getElementById("side_menu");

function toggle_menu() {
  menu.style['visibility'] = menu.style['visibility'] == 'visible' ? 'hidden' : 'visible';
  console.log(menu.style['visibility']);
}
fs_button.addEventListener("click", toggle_menu);
