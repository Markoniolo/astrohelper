const parallaxItems = document.querySelectorAll('[data-role="parallax-item"]')

if (parallaxItems.length) parallaxInit(parallaxItems)

function parallaxInit(items) {

  for (let i = 0; i < items.length; i++) initItem(items[i])

  function initItem (item) {
    const parentArea = (item.closest('.js-parallax-area')) ? item.closest('.js-parallax-area') : window
    const transform = (item.getAttribute('data-transform')) ? item.getAttribute('data-transform') : ''
    const offset = (item.getAttribute('data-offset')) ? item.getAttribute('data-offset') : 35
    parentArea.addEventListener('mousemove', updateTransform)

    function updateTransform (e) {
      if (document.body.clientWidth >= 1440) {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
        item.style.transform = 'translate(-' + x * offset + 'px, -' + y * offset + 'px) ' + transform
        // item.style.transform = transform
      }
    }
  }
}
