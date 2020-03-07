var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var newSlideIndex = 0;
showSlidesNew();

function showSlidesNew() {
  var i;
  var slides = document.getElementsByClassName("my-header");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  newSlideIndex++;
  if (newSlideIndex > slides.length) {
    newSlideIndex = 1;
  }
  slides[newSlideIndex - 1].style.display = "block";
  setTimeout(showSlidesNew, 5000); // Change image every 2 seconds
}

var youtubeSlide = 0;
showYoutubeSlides();

function showYoutubeSlides() {
  var i;
  var slides = document.getElementsByClassName("youtube-container-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  youtubeSlide++;
  if (youtubeSlide > slides.length) {
    youtubeSlide = 1;
  }
  slides[youtubeSlide - 1].style.display = "block";
  setTimeout(showYoutubeSlides, 4000); // Change image every 2 seconds
}

var blogSlide = 0;
showblogSlides();

function showblogSlides() {
  var i;
  var slides = document.getElementsByClassName("features-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  blogSlide++;
  if (blogSlide > slides.length) {
    blogSlide = 1;
  }
  slides[blogSlide - 1].style.display = "block";
  setTimeout(showblogSlides, 4000); // Change image every 2 seconds
}
