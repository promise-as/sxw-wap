$('.tab-box .tab').click(function() {
    $(this).addClass('cur').siblings().removeClass('cur')
    $(this).parents('.switchs').find('.switch').removeClass('cur')
    $(this).parents('.switchs').find('.switch').eq($(this).index()).addClass('cur')
})
$('.tc-btn').click(function() {
    $('.mask').show();
    $('.tc').show();
});
$('.close').click(function() {
    $('.mask').hide();
    $('.tc').hide();
});
$('.anw p').click(function() {
    $(this).addClass('cur').siblings().removeClass('cur')
});
//悬浮
$('.xf-blank').height($('.header').height());
var mTop = document.getElementsByClassName('header')[0].offsetTop || $('.header').offset().top;
window.addEventListener("scroll", function(e) {
    var topJl = document.documentElement.scrollTop || document.body.scrollTop;
    var yuYueTop = mTop - topJl;
    if (yuYueTop < 0) {
        $('.header').addClass('xf');
        $('.xf-blank').show();
    } else {
        $('.header').removeClass('xf');
        $('.xf-blank').hide();
    }
});
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper-container2', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('.s-sel-1').each(function() {
    $(this).click(function() {
        $(this).find('.s-sel-2').toggleClass('show');
        $(this).siblings().find('.s-sel-2').removeClass('show');
    })
})
$('.header-nav').click(function() {
    $(this).find('.nav-sel').toggleClass('show');
    $('.mask').toggleClass('show');
})

theaMsForm();