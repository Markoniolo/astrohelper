const header = document.querySelector('[data-element="header"]')

if (header) headerInit()

function headerInit() {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
  document.addEventListener('click', closeMenu)

  const headerBurger = document.querySelector('[data-element="header__burger"]')
  headerBurger.addEventListener('click', toggleMenu)

  function toggleMenu () {
    if (header.classList.contains('header_mob-menu-open')) {
      header.classList.remove('header_mob-menu-open')
    } else {
      header.classList.add('header_mob-menu-open')
    }
  }

  function closeMenu (e) {
    if (!e.target.classList.contains('header__burger')) {
      header.classList.remove('header_mob-menu-open')
    }
  }

  function checkScroll () {
    const topPosition = header.getBoundingClientRect().top + pageYOffset
    if (topPosition > 0) {
      header.classList.add('header_scroll')
    } else {
      header.classList.remove('header_scroll')
    }
  }
}
