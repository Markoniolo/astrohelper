const faqTops = document.querySelectorAll('[data-element="faq-top"]')

if (faqTops.length) faqTopsInit()

function faqTopsInit () {
  for (let i = 0; i < faqTops.length; i++) {
    faqTops[i].addEventListener('click', toggleBox)
  }

  function toggleBox () {
    const box = this.closest('.faq__box')
    box.classList.toggle('faq__box_active')
  }
}
