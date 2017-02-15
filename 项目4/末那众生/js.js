$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() <= 0){
            $('.header').removeClass('fixed');
        }else{
            $('.header').addClass('fixed');
        }
    });
    $('.slide-next').click(function(){
        $('.slide-list').stop().animate({'left':-370});
    });
    $('.slide-prev').click(function(){
        $('.slide-list').stop().animate({'left':0});
    });
    (function(){
        var page1 = 1;
        var long1 = $('.long-1');
        $('#prev1').click(function(){
            page1--;
            if(page1 == 0){
                long1.css('left','-300%');
                page1 = 2;
            }
            long1.stop().animate({'left':page1*-100+"%"});
        });

        $('#next1').click(function(){
            page1++;
            if(page1 == 3){
                long1.css('left',0);
                page1 = 1;
            }
            long1.stop().animate({'left':page1*-100+"%"});
        });
    })();
    (function(){
        var page1 = 1;
        var long1 = $('.mpartner-slide-long-long');
        $('#prev2').click(function(){
            page1--;
            if(page1 == 0){
                long1.css('left','-300%');
                page1 = 2;
            }
            long1.stop().animate({'left':page1*-100+"%"});
        });

        $('#next2').click(function(){
            page1++;
            if(page1 == 3){
                long1.css('left',0);
                page1 = 1;
            }
            long1.stop().animate({'left':page1*-100+"%"});
        });
    })();

});