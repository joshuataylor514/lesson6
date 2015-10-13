$( document ).ready(function() {
  $("h1").hide(3000, function() {
  });

  $(".column1").slideUp(3000, function() {
    $(".column1").slideDown(3000);
    });

  $(".column2").click(function() {
    alert("jQuery is cool isn't it?");
    });

  $(".column3").slideUp(1000, function() {
    $(".column3").slideDown(1000);
    });
        
});