$(document).ready(function(){
  $("#tag-20AW").css("border-bottom","1px solid red");
  $(".dropdown1").hide();
  $("#collection").click(function(){
    $(".dropdown1").toggle();
  });
  $("#collection").mouseout(function(){
    $(".dropdown1").hide();
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

$("#tag-20AW").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-20AW").css("border-bottom","1px solid red");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
$("#tag-18SS").css("border-bottom","none");
$("#tag-17AW").css("border-bottom","none");
$("#tag-17SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#20AW").offset().top
  });
});

$("#tag-20SS").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-20SS").css("border-bottom","1px solid red");
$("#tag-20AW").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
$("#tag-18SS").css("border-bottom","none");
$("#tag-17AW").css("border-bottom","none");
$("#tag-17SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#20SS").offset().top
  });
});

$("#tag-19AW").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-19AW").css("border-bottom","1px solid red");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
$("#tag-18SS").css("border-bottom","none");
$("#tag-17AW").css("border-bottom","none");
$("#tag-17SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#19AW").offset().top
  });
});
  $("#tag-19SS").click(function(){
  $(".img").lazyload({effect: "fadeIn"
    });
  $("#tag-19SS").css("border-bottom","1px solid red");
  $("#tag-20AW").css("border-bottom","none");
  $("#tag-20SS").css("border-bottom","none");
  $("#tag-19AW").css("border-bottom","none");
  $("#tag-18AW").css("border-bottom","none");
  $("#tag-18SS").css("border-bottom","none");
  $("#tag-17AW").css("border-bottom","none");
  $("#tag-17SS").css("border-bottom","none");
  $('html, body').animate({
        scrollTop: $("#19SS").offset().top
    });
});
  $("#tag-18AW").click(function(){
    $(".img").lazyload({effect: "fadeIn"
      });
    $("#tag-18AW").css("border-bottom","1px solid red");
    $("#tag-20AW").css("border-bottom","none");
    $("#tag-20SS").css("border-bottom","none");
    $("#tag-19AW").css("border-bottom","none");
    $("#tag-19SS").css("border-bottom","none");
    $("#tag-18SS").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $('html, body').animate({
          scrollTop: $("#18AW").offset().top
      });
  });
  $("#tag-18SS").click(function(){
    $(".img").lazyload({effect: "fadeIn"
      });
    $("#tag-18SS").css("border-bottom","1px solid red");
    $("#tag-20AW").css("border-bottom","none");
    $("#tag-20SS").css("border-bottom","none");
    $("#tag-19AW").css("border-bottom","none");
    $("#tag-19SS").css("border-bottom","none");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $('html, body').animate({
          scrollTop: $("#18SS").offset().top
      });
  });
  $("#tag-17AW").click(function(){
    $(".img").lazyload({effect: "fadeIn"
      });
    $("#tag-17AW").css("border-bottom","1px solid red");
    $("#tag-20AW").css("border-bottom","none");
    $("#tag-20SS").css("border-bottom","none");
    $("#tag-19AW").css("border-bottom","none");
    $("#tag-19SS").css("border-bottom","none");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-18SS").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $('html, body').animate({
          scrollTop: $("#17AW").offset().top
      });
  });
  $("#tag-17SS").click(function(){
    $(".img").lazyload({effect: "fadeIn"
      });
    $("#tag-17SS").css("border-bottom","1px solid red");
    $("#tag-20AW").css("border-bottom","none");
    $("#tag-19AW").css("border-bottom","none");
    $("#tag-19SS").css("border-bottom","none");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-18SS").css("border-bottom","none");
    $('html, body').animate({
          scrollTop: $("#17SS").offset().top
      });
  });
});
