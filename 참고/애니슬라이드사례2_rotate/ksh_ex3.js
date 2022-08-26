$(function () {

    var intv = setInterval(function () {
        nextAni();
    }, 5000);

    $('.p_list>li:last-child>p').css({transform: 'scale(1.5)'})
    function nextAni() {
        $('.p_list').rotate({
            angle: 0,
            animateTo: -30,
            callback: function () {
                $('.p_list>li').eq(0).appendTo('.p_list')
                $(this).css({
                    transform: 'rotate(0deg)'
                });
            }
        })
        $('.p_list>li>p').css({transform: 'scale(1)'})
        $('.p_list>li:first-child>p').css({transform: 'scale(1.5)'})
        
    }

});