const animationFadeElements = document.querySelectorAll('.animation-fade')

if (animationFadeElements.length) animationFadeElementsInit()

function animationFadeElementsInit () {
  window.addEventListener('scroll', checkAnimateElements)
  checkAnimateElements()

  function checkAnimateElements () {
    for (let i = 0; i < animationFadeElements.length; i++) {
      if (elementIsVisible(animationFadeElements[i])) {
        animationFadeElements[i].classList.add('animation-fade_active')
      }
    }
  }

  function elementIsVisible (el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 50 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - 50
    )
  }
}
