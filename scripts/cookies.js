var cookiesStatus = localStorage.getItem("cookies");

var cookies = document.getElementById('cookies');
var cookiesBtn = document.getElementById('cookies-btn');

function hideCookies() {
  cookies.style.display = 'none';
  cookiesBtn.style.display = 'none';
  localStorage.setItem("cookies", true);
}

if(localStorage.getItem("cookies")) {
  hideCookies();
}