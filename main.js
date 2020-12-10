$(function(){
    
    var margin = 1334;
    var slideSpeed = 2000;
    var haltSecond = 3000;
    var viewSlide = 1;


    var $slider = $('#slider');
    var $slideList = $slider.find('.slides');
    var $slides = $slideList.find('.slide');

    var interval;

    function startSlider(){
        interval = setInterval(function(){
            $slideList.animate({'margin-left': '-='+margin},slideSpeed, function(){
                viewSlide++;
                if (viewSlide === $slides.length-3){
                    viewSlide = 1;
                    $slideList.css('margin-left', 0);
                }
               
            });
        },haltSecond);
    }

    startSlider()
    function stopSlider(){
        clearInterval(interval);
    }
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);


    $('.arrowLeft').click(function(){
        if(viewSlide == 1){
            viewSlide = 1;
            $slideList.css('margin-left', 0);
        }
        else{
        $slideList.animate({'margin-left': '+='+margin},slideSpeed, function(){
            viewSlide++;
            if (viewSlide === $slides.length-3){
                viewSlide = 1;
                $slideList.css('margin-left', 0);
                
            }
            if(viewSlide == 1){
                viewSlide = 1;
                $slideList.css('margin-left', 0);
            }
        });
    }
    });

    $('.arrowRight').click(function(){
        $slideList.animate({'margin-left': '-='+margin},slideSpeed, function(){
            viewSlide++;
            if (viewSlide === $slides.length-3){
                viewSlide = 1;
                $slideList.css('margin-left', 0);
            }
        });
    });


    if(viewSlide < 3){
        $('.d1').css('color','red');
    }else if(viewSlide != 1){
        $('.d1').css('color','white');
    }
});