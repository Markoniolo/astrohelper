const aboutSlider = document.querySelector('[data-element="about-slider"]')

if (aboutSlider) aboutSliderInit()

function aboutSliderInit () {
  const aboutSwiper = new Swiper(aboutSlider, {
    speed: 400,
    loop: true,
    spaceBetween: 16,
    initialSlide: 1,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.slider-nav-next',
      prevEl: '.slider-nav-prev',
    },
  });
}
