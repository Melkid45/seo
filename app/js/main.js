function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

document.querySelectorAll(".choose__body-block-end-item").forEach((el) => {
  el.addEventListener('click', ()=> {
      let cont = el.querySelector('.choose__body-block-end-item-bot');
      let con = cont.parentNode;
      if (cont.style.maxHeight) {
          document.querySelectorAll('.choose__body-block-end-item-bot').forEach((el)=> el.style.maxHeight = null)
          document.querySelectorAll('.choose__body-block-end-item').forEach((el)=> el.classList.remove('open'))
      } else {
          document.querySelectorAll('.choose__body-block-end-item-bot').forEach((el)=> el.style.maxHeight = null)
          document.querySelectorAll('.choose__body-block-end-item').forEach((el)=> el.classList.remove('open'))
          con.classList.add('open')
          cont.style.maxHeight = cont.scrollHeight + 'px';
      }
  })
})
$('.burger').on('click', function(e){
  if ($('.header__body-menu').hasClass('active')){
    $('.header__body-menu').removeClass('active')
  }else{
    $('.header__body-menu').addClass('active')
  }
})
SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 800,
  // Размер шага в пикселях 
  stepSize         : 45,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 1,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 100,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})
var splide = new Splide(".splide", {
  gap: '16px',
  pagination: false
});

splide.mount();


