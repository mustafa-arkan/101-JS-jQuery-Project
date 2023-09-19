$(document).ready(function () {
  var $tabs = $(".tabs h3");
  var $tabContents = $(".tab-content div");

  $tabs.click(function () {
    $tabs.removeClass("active");
    $tabContents.removeClass("active");

    $(this).addClass("active");
    $tabContents.eq($tabs.index(this)).addClass("active");
  });
  //The eq() method returns an element with a specific index number of the selected elements.
  // The index numbers start at 0, so the first element will have the index number 0 (not 1).
});
//ajax load
//ajax get 
//ajax post 
//ajax 