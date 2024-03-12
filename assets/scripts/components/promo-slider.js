const promoSlider = document.querySelector('[data-element="promo-slider"]')

if (promoSlider) promoSliderInit()

function promoSliderInit () {
  const promoSwiper = new Swiper(promoSlider, {
    speed: 400,
    spaceBetween: 16,
    initialSlide: 1,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.promo__nav_right',
      prevEl: '.promo__nav_left',
    },
  });

  const tabs = promoSlider.querySelectorAll('[data-element="promo-tab"]')

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', toggleSlider)
  }

  function toggleSlider() {
    removeOldActiveTab()
    this.classList.add('promo__tab_active')
    const id = this.getAttribute('data-id')
    promoSwiper.slideTo(id)
  }

  function removeOldActiveTab () {
    const oldActiveTab = promoSlider.querySelector('.promo__tab_active')
    if (oldActiveTab) oldActiveTab.classList.remove('promo__tab_active')
  }

  promoSwiper.on('slideChange', function () {
    removeOldActiveTab()
    console.log(promoSwiper.activeIndex)
    const newActiveTab = tabs[promoSwiper.activeIndex]
    if (newActiveTab) newActiveTab.classList.add('promo__tab_active')
  })
}
