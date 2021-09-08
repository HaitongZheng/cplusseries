$(document).ready(function(){
  $(".dropdown1").hide();
  $(".mobiledropdown").hide();
  $("#collection").click(function(){
    $(".dropdown1").toggle();
  });
  $(".dropdown1").mouseover(function(){
    $(".dropdown1").show();
  });
  $(".dropdown1").mouseout(function(){
    $(".dropdown1").hide();
  });
  $(window).scroll(function(){
           if ($(this).scrollTop() > 15) {
              $(".topbar").addClass('changeColor')
           }
           if ($(this).scrollTop() < 10) {
              $(".topbar").removeClass('changeColor')
           }
        });
  $(".img").lazyload({
    effect: "fadeIn"
});

});
