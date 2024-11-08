// 메인 슬라이드
$('.main_slide').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    prevArrow: '.ma_btn .ma_left',
    nextArrow: '.ma_btn .ma_right',
    appendDots: '.ma_btn .main_dots',
    speed: 300,
    slidesToShow: 1,
    customPaging: function (slider, i) {
        return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    },
});
// 메인 슬라이드 정지버튼
$('.ma_stop').click(function () {
    $(this).hide();
    $('.ma_start').show();
    $('.main_slide').slick('slickPause');
});
// 메인 슬라이드 시작버튼
$('.ma_start').click(function () {
    $(this).hide();
    $('.ma_stop').show();
    $('.main_slide').slick('slickPlay');
});

// 섹션3 슬라이드
$('.section3_in').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    prevArrow: '.s3_btn .ma_left',
    nextArrow: '.s3_btn .ma_right',
    appendDots: '.s3_btn .main_dots',
    customPaging: function (slider, i) {
        return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    },
})

// 섹션4 이달의 문화/행사
let s4l1 = document.querySelector('.s4l1');
let s4l2 = document.querySelector('.s4l2');
let s4l3 = document.querySelector('.s4l3');
let modal1 = document.querySelector('.modal1');
let modal2 = document.querySelector('.modal2');
let modal3 = document.querySelector('.modal3');
let close = document.querySelectorAll('.modal_wrap .close');
s4l1.addEventListener('click', function (e) {
    e.preventDefault();
    modal1.style.display = 'block';
})
s4l2.addEventListener('click', function (e) {
    e.preventDefault();
    modal2.style.display = 'block';
})
s4l3.addEventListener('click', function (e) {
    e.preventDefault();
    modal3.style.display = 'block';
})
close.forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        let thisModal = closeButton.closest('.modal');
        if (thisModal) {
            thisModal.style.display = 'none';
        }
    });
});