
const targetitem = document.querySelectorAll('.service-item');

const targeltitem = document.querySelectorAll('.learning-faide');


document.addEventListener("scroll", function(){
  
})


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.header-nav').addClass("nav-bg");
        }else{
            $('.header-nav').removeClass("nav-bg");
        }
        if(this.scrollY > 20){
            $('.menu').removeClass("offdisplay");
        }else{
            $('.menu').addClass("offdisplay");
        }


        for(let i = 0; i < targetitem.length; i++){
            const getElementDistance = targetitem[i].getBoundingClientRect().top

            if(window.innerHeight > getElementDistance){
                targetitem[i].classList.add('fadein-after')
            }
            else{
                targetitem[i].classList.remove('fadein-after')
            }
        }


        for(let i = 0; i < targeltitem.length; i++){
            const getElementDistancel = targeltitem[i].getBoundingClientRect().top
          
            if(window.innerHeight > getElementDistancel){
                targeltitem[i].classList.add('fadein-after')
            }
            else{
                targeltitem[i].classList.remove('fadein-after')
            }
        }

     

        

        // // scroll-up button show/hide script
        // if(this.scrollY > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    

    $('.menu-btn').click(function(){
        $('.menu').toggleClass("in-menu");
        $('.header-titel').toggleClass(".close")
        $('.menu-btn i').toggleClass("active");
    })

    $(function(){
        $('a[href^="#"]').click(function() {
        var speed = 500; // スクロール速度(ミリ秒)
        var href = $(this).attr("href");
        console.log(href);
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('.menu').removeClass("in-menu");
        $('html').animate({scrollTop:position}, speed, 'swing');
        return false;
        });
        });
});