const faqTops = document.querySelectorAll('[data-element="faq-top"]')

if (faqTops.length) faqTopsInit()

function faqTopsInit () {
  for (let i = 0; i < faqTops.length; i++) {
    faqTops[i].addEventListener('click', toggleBox)
  }

  faqTops[0].click()

  function toggleBox () {
    const box = this.closest('.faq__box')
    const content = box.querySelector('.faq__content-box')
    if (box.classList.contains('faq__box_active')) {
      box.classList.remove('faq__box_active')
      content.style.maxHeight = 0
    } else {
      box.classList.add('faq__box_active')
      content.style.maxHeight = content.scrollHeight + "px"
    }
  }
}
