$(document).ready(function () {
  $(".next").click(function () {
    var currentSlide = $(".active");
    var nextSlide = currentSlide.next();
    if (nextSlide.length) {
      currentSlide
        .removeClass("active")
        .css({ zIndex: -10, transitionDuration: 2 });

      nextSlide.addClass("active").css({ zIndex: 10, transitionDuration: 2 });
    }
  });
  //
  $(".prev").click(function () {
    var currentSlide = $(".active");
    var prevSlide = currentSlide.prev();
    if (prevSlide.length) {
      currentSlide.removeClass("active").css("z-index", -10);
      prevSlide.addClass("active").css("z-index", 10);
    }
  });
});
