const btnMenu = document.querySelector(".sidebar-toggle");
const btnClose = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");

btnMenu.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

btnClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});