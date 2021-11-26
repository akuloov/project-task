//БУРГЕР МЕНЮ
$('.header__burger').click(function () {
    $('.mobile-menu').toggle();
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.mobile-menu').toggleClass('unlock');
})

//КНОПКА ВВЕРХ
var timeOut;

function goUp() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop); // Получаем максимальные значиния из двух значений, document.documentElement.scrollTop для кроссбраузерности
    if (top > 0) { // Если находимся внизу(или, к примеру, в середине экрана), то
        window.scrollBy(0, -100); // Поднятие вверх на 100px
        timeOut = setTimeout('goUp()', 30); // Каждые 30 милисекунд функция срабатывает и страница подымается вверх
    } else clearTimeout(timeOut); // Когда мы уже вверху, функцию прекращаем
}

//СВАЙПЕР
new Swiper('.swiper', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1400: {
            slidesPerView: 5,
        },

        1100: {
            slidesPerView: 4,
        },

        850: {
            slidesPerView: 3,
        },

        600: {
            slidesPerView: 2,
        },

        400: {
            slidesPerView: 1,
        },

        200: {
            slidesPerView: 1,
        },

    },
    loop: true,

    slidesPerView: 5,

    spaceBetween: 0,

});

//КНОПКА ПОКАЗАТЬ ЕЩЁ
$('.show-more').on('click', function () {
    $('.about-us__item--hidden').css('display', 'block');
    $(this).css('display', 'none');
    $('.show-more__disable').css('display', 'inline');
})

//КНОПКА СКРЫТЬ
$('.show-more__disable').on('click', function () {
    $('.about-us__item--hidden').css('display', 'none');
    $('.show-more').css('display', 'inline');
    $(this).css('display', 'none');
})

//ЛЕНИВАЯ ЗАГРУЗКА
const observer = lozad()
observer.observe()
