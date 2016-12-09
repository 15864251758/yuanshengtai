$(function(){


    //擦除效果
    jQuery.extend(jQuery.easing,
        {
            easeOutBack: function (x, t, b, c, d, s) {
                s = s || 1.3;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        }
    });

    

    //nav初始化选中
    var navCurr = $("#navCurr");
    $("#navSelected").css("left", navCurr[0].offsetLeft);   
    //nav里的链接hover效果
    $("#navBd li").hover(function(){
            if(!!$("#navSelected").stop(true).animate({left:$(this)[0].offsetLeft}, 400, "easeOutBack")) {
                $(this).siblings().removeClass("navHover").end().addClass("navHover");
                $(this).find("a").hide().fadeIn(300);
            }
        }, function(){
            $(this).removeClass("navHover");
            $("#navCurr").addClass("navHover");
            //window.setTimeout(function(){$("#navCurr").parent().addClass("navHover")},100);
            $("#navSelected").stop(true).animate({left:navCurr[0].offsetLeft}, 300, "easeOutBack");
        }
    );

    var winw=$(window).width();
    $('.nav-seco').css({
        'width':winw,
    })
    $('.nav>ul>li').hover(function(){
        $(this).find('.nav-seco').stop(true,false).slideToggle();
    })

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


    $('.block1').hover(function(){
        var block1Img=$(this).find('img').attr("src");
        var newBloc1kImg=block1Img.replace(/-1.png/, "-2.png")
        $(this).find('img').attr("src",newBloc1kImg);       
    },function(){
        var block1Img=$(this).find('img').attr("src");
        var newBloc1kImg=block1Img.replace(/-2.png/, "-1.png")
        $(this).find('img').attr("src",newBloc1kImg);  
    })

})