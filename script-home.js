$(document).ready(function(){
  $("#welcomevideo").get(0).play();
  $(".dropdown1").hide();
  $(".mobiledropdown").hide();
  $("#collection").click(function(){
    $(".dropdown1").toggle();
  });
  // $("#collection").mouseout(function(){
  //   $(".dropdown1").hide();
  // });
  $(".dropdown1").mouseover(function(){
    $(".dropdown1").show();
  });
  $(".dropdown1").mouseout(function(){
    $(".dropdown1").hide();
  });
  $(".menu").click(function(){
    $(".mobiledropdown").toggle();
  })
});
