$(function(){
	$(window).scroll(function(){
        var sc=$(window).scrollTop();
        if(sc>600){
            $(".totop").fadeIn(1000);
        }else{
            $(".totop").fadeOut(1000);
        }
    });
    $(".totop").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
})