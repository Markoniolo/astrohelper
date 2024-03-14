const aboutSlider = document.querySelector('[data-element="about-slider"]')

if (aboutSlider) aboutSliderInit()

function aboutSliderInit () {
  let aboutSwiper
  function initAboutSwiper () {
    aboutSwiper = new Swiper(aboutSlider, {
      speed: 400,
      loop: true,
      spaceBetween: 12,
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.slider-nav-next',
        prevEl: '.slider-nav-prev',
      },
      breakpoints: {
        767: {
          spaceBetween: 20,
        },
        1439: {
          spaceBetween: 16,
        },
      }
    })
  }

  initAboutSwiper()

  window.addEventListener('resize', refreshAboutSwiper)

  function refreshAboutSwiper() {
    if (aboutSwiper) aboutSwiper.destroy()
    initAboutSwiper()
  }
}
