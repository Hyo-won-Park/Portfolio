$(function(){
   
    $('.hidden').hover(function(){
        
        var ah=$(this).parent().innerHeight();
        var img=$(this).find('img');
        var imgh=img.innerHeight();
        
        img.stop().animate({top:ah-imgh},3000);
        
    },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},3000)
    });

  
     $(document).ready(function() {
        $(window).scroll(function(){
            $('.up-on-scroll, .left-on-scroll, .right-on-scroll, .scale-on-scroll, .rotate-on-scroll, .opacity-on-scroll').each( function(i){
        var bottom_of_element = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
             $(this).addClass('on')
             } else {
             $(this).removeClass('on')
        }
       });
     });
   });


})
