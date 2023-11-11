// Adds the watch class to items in the viewport
var elementsToWatch = document.querySelectorAll('.watch');

var callback = function(items) {
  items.forEach((item) => {
      if(item.isIntersecting) {
          item.target.classList.add('in-page');
      } else {
          item.target.classList.remove('in-page');
      }
  });
}

var observer = new IntersectionObserver(callback, {threshold : .5});

elementsToWatch.forEach((element) => {
  observer.observe(element);
});