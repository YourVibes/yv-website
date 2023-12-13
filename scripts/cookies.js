var cookiesStatus = localStorage.getItem("cookies");

var cookies = document.getElementById('cookies');
var cookiesBtn = document.getElementById('cookies-btn');

function acceptCookies() {
  if (typeof gtag === 'function') {
    gtag('config', 'G-BEP1R6E73X');
  }

  hideCookies();
}

function rejectCookies() {
  hideCookies();
}

function hideCookies() {
  cookies.style.display = 'none';
  cookiesBtn.style.display = 'none';
  localStorage.setItem("cookies", true);
}

if(localStorage.getItem("cookies")) {
  hideCookies();
}