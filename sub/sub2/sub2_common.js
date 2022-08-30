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
  