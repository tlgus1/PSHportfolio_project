// sec1 문짝 이미지변경

setTimeout(function(){
  $('.doorimg').stop().css('left', '52.5%')
  $('.doorimg img').stop().attr('src', './img/source/door2.png')
},3000)




// swiper

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  touchRatio: 0,
});

// rotate

$(function () {
  $(function () {
    var angle = 0;

    $('.swiper-button-prev').click(function () { 
      angle += -36; 
      $(".p_list").rotate(angle);
    });

    $('.swiper-button-next').click(function () {
      angle += 36;
      $(".p_list").rotate(angle);
    });
  });

})


// sec3 마우스오버

$(function(){
  $('.btn1 a').mouseenter(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_open_1.png');
    $('.p_list').stop().css('opacity', '0');
  });

  $('.btn2 a').mouseenter(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_open_4.png');
    $('.p_list').stop().css('opacity', '0');
  });

  $('.btn3 a').mouseenter(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_open_2.png');
    $('.p_list').stop().css('opacity', '0');
  });

  $('.btn4 a').mouseenter(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_open_3.png');
    $('.p_list').stop().css('opacity', '0');
  });

  $('.btn5 a').mouseenter(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_open_5.png');
    $('.p_list').stop().css('opacity', '0');
  });
  

  $('.swiper-button a').mouseleave(function(){
    $('.sec3_cricleimg>img').attr('src', './img/source/CAN_SOURCE1.png');
    $('.p_list').stop().css('opacity', '1');
  });

})

// aos

AOS.init({
  duration: 1000,
  
});

// toggle


$(function(){
  $('header button').click(function(){
    $('.toggle_back').css('display','block')
    $('.toggle').animate({right:0})
  })

  $('.tog_close').click(function(){
    $('.toggle').animate({right:'-30%'})
    $('.toggle_back').css('display','none')
  })
})

// scroll block

$(function(){
  $('header button').click(function(){
    $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('.toggle').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
    event.preventDefault();
    event.stopPropagation();

    return false;
    });
  })

  $('.tog_close').click(function(){
    $('html, body').css({'overflow': 'visible', 'height': '100%'});
    $('.toggle').off('scroll touchmove mousewheel');
  })
})

$(function(){
  $('.topbutton').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },1000)
  })
})

gsap.to(".topbutton", {
  duration: 2,
  scrollTrigger: {
    trigger: ".topbutton",
    start: "top 20%",
    toggleClass: "colorCH",
  }
});