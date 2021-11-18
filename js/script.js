//БУРГЕР МЕНЮ
$('.header__burger').click(function(){
    $('.mobile-menu').toggle();
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.mobile-menu').toggleClass('unlock');
  })

//КНОПКА ВВЕРХ
var timeOut; 
function goUp() { 
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); // Получаем максимальные значиния из двух значений, document.documentElement.scrollTop для кроссбраузерности
   if(top > 0) { // Если находимся внизу(или, к примеру, в середине экрана), то
      window.scrollBy(0,-100); // Поднятие вверх на 100px
      timeOut = setTimeout('goUp()',30); // Каждые 30 милисекунд функция срабатывает и страница подымается вверх
   } else clearTimeout(timeOut); // Когда мы уже вверху, функцию прекращаем
}

//СВАЙПЕР
new Swiper('.swiper',{

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
  },
    loop: true,
    
    slidesPerView: 5,
    
    spaceBetween: 0,
    
    slidesPerGroup: 2,
});
