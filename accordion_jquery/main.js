$(document).ready(function () {
  $(".accordion_trigger").click(function () {
    //slide open using slideToggle method
    $(this).next(".accordion_container").slideToggle();
    //now there is a problem....first time oped div remain open
    $(".accordion_container")
      .not($(this).next(".accordion_container"))
      .slideUp();
  });
  //The not() method returns elements that do not match a certain criteria.
});
