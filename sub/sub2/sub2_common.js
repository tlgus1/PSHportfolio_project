$(function(){
  $('.topbutton').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },1000)
  })
})

$(function(){
    AOS.init();
})


// toggle

if(matchMedia("screen and (max-width:900px)").matches){
  $(function(){
    $('.wrapper>button').click(function(){
      $('.toggle_back').css('display','block')
      $('.toggle').animate({right:0})
    })
  
    $('.tog_close').click(function(){
      $('.toggle').animate({right:'-70%'})
      $('.toggle_back').css('display','none')
    })
  })  

} else {
  $(function(){
    $('.wrapper>button').click(function(){
      $('.toggle_back').css('display','block')
      $('.toggle').animate({right:0})
    })
  
    $('.tog_close').click(function(){
      $('.toggle').animate({right:'-30%'})
      $('.toggle_back').css('display','none')
    })
  })
  
}


// scroll block

$(function(){
  $('.wrapper>button').click(function(){
    $('body').css({'overflow': 'hidden', 'height': '100%'});  // 모달팝업 중 html,body의 scroll을 hidden시킴
    $('.toggle').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
      event.preventDefault();
      event.stopPropagation();
      
      return false;
    });
  })

  $('.tog_close').click(function(){
    $('body').css({'overflow': 'visible', 'height': '100%'});
    $('.toggle').off('scroll touchmove mousewheel');

    return false;
  })
})
