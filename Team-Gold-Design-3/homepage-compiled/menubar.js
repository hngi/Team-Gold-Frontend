const hamBar = document.getElementById("ham-bar");
const myLinks = document.getElementById("myLinks")

function onClickMenu() {
  hamBar.classList.toggle('change');
  myLinks.classList.toggle('change');
}