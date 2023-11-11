// Videos
var i_video = 0;
const I_VIDEO_MAX = 3;

function videoUrl(el) {
  if(el == 0)
    document.getElementById('slider').src = './assets/videos/disco.mp4';
  else if(el == 1)
    document.getElementById('slider').src = './assets/videos/carousel.mp4';
  else if(el == 2)
    document.getElementById('slider').src = './assets/videos/fireworks.mp4';
  else if(el == 3)
    document.getElementById('slider').src = './assets/videos/beach.mp4';
}

document.getElementById('slider').addEventListener('ended', videoHandler, false);
function videoHandler(el) {
  i_video++;
  if(i_video > I_VIDEO_MAX)
    i_video = 0;
  
  videoUrl(i_video);
}

function nextVideo() {
  i_video++;
  if(i_video > I_VIDEO_MAX)
    i_video = 0;
  
  videoUrl(i_video);
}

function prevVideo() {
  i_video--;
  if(i_video < 0)
    i_video =  I_VIDEO_MAX;
  
  videoUrl(i_video);
}


// Images
var slides = document.querySelectorAll(".slider-image");
var slidesText = document.querySelectorAll(".slider-text");
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.display = "none";
  slidesText[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
  slidesText[currentSlide].style.display = "block";
}

setInterval(nextSlide, 2000);
