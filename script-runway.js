$(document).ready(function(){
  // $("#18SS").hide();
  $("#18AW").hide();

  $("#tag-22SS").css("border-bottom","1px solid red");
  $(".dropdown1").hide();
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

$("#tag-22SS").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-22SS").css("border-bottom","1px solid red");
$("#tag-21AW").css("border-bottom","none");
$("#tag-21SS").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#22SS").offset().top
  });
});

$("#tag-21AW").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-21AW").css("border-bottom","1px solid red");
$("#tag-22SS").css("border-bottom","none");
$("#tag-21SS").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#21AW").offset().top
  });
});


$("#tag-21SS").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-21SS").css("border-bottom","1px solid red");
$("#tag-22SS").css("border-bottom","none");
$("#tag-21AW").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#21SS").offset().top
  });
});

$("#tag-20AW").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-20AW").css("border-bottom","1px solid red");
$("#tag-22SS").css("border-bottom","none");
$("#tag-21AW").css("border-bottom","none");
$("#tag-21SS").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#20AW").offset().top
  });
});

$("#tag-20SS").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-20SS").css("border-bottom","1px solid red");
$("#tag-22SS").css("border-bottom","none");
$("#tag-21AW").css("border-bottom","none");
$("#tag-21SS").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-19AW").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#20SS").offset().top
  });
});

$("#tag-19AW").click(function(){
$(".img").lazyload({effect: "fadeIn"
  });
$("#tag-19AW").css("border-bottom","1px solid red");
$("#tag-22SS").css("border-bottom","none");
$("#tag-21AW").css("border-bottom","none");
$("#tag-21SS").css("border-bottom","none");
$("#tag-20AW").css("border-bottom","none");
$("#tag-20SS").css("border-bottom","none");
$("#tag-19SS").css("border-bottom","none");
$("#tag-18AW").css("border-bottom","none");
// $("#tag-18SS").css("border-bottom","none");
$('html, body').animate({
      scrollTop: $("#19AW").offset().top
  });
});

  $("#tag-19SS").click(function(){
  $(".img").lazyload({effect: "fadeIn"
    });
  $("#tag-19SS").css("border-bottom","1px solid red");
  $("#tag-22SS").css("border-bottom","none");
  $("#tag-21AW").css("border-bottom","none");
  $("#tag-21SS").css("border-bottom","none");
  $("#tag-20AW").css("border-bottom","none");
  $("#tag-20SS").css("border-bottom","none");
  $("#tag-19AW").css("border-bottom","none");
  $("#tag-18AW").css("border-bottom","none");
  // $("#tag-18SS").css("border-bottom","none");
  $('html, body').animate({
        scrollTop: $("#19SS").offset().top
    });
});

  $("#tag-18AW").click(function(){
    $("#18AW").show();
    $(".img").lazyload({effect: "fadeIn"
      });
    $("#tag-18AW").css("border-bottom","1px solid red");
    $("#tag-22SS").css("border-bottom","none");
    $("#tag-21AW").css("border-bottom","none");
    $("#tag-21SS").css("border-bottom","none");
    $("#tag-20AW").css("border-bottom","none");
    $("#tag-20SS").css("border-bottom","none");
    $("#tag-19AW").css("border-bottom","none");
    $("#tag-19SS").css("border-bottom","none");
    // $("#tag-18SS").css("border-bottom","none");
    $('html, body').animate({
          scrollTop: $("#18AW").offset().top
      });
  });

  // $("#tag-18SS").click(function(){
  //   $("#18SS").show();
  //   $(".img").lazyload({effect: "fadeIn"
  //     });
  //   $("#tag-18SS").css("border-bottom","1px solid red");
  //   $("#tag-22SS").css("border-bottom","none");
  //   $("#tag-21AW").css("border-bottom","none");
  //   $("#tag-21SS").css("border-bottom","none");
  //   $("#tag-20AW").css("border-bottom","none");
  //   $("#tag-20SS").css("border-bottom","none");
  //   $("#tag-19AW").css("border-bottom","none");
  //   $("#tag-19SS").css("border-bottom","none");
  //   $("#tag-18AW").css("border-bottom","none");
  //   $('html, body').animate({
  //         scrollTop: $("#18SS").offset().top
  //     });
  // });
});
