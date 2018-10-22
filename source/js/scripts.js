function openPopup(openBtn, modal, inner, className) {
  var btn = document.querySelectorAll(openBtn)
  var popup = document.querySelector(modal)
  var body = document.querySelector('body')

  btn.forEach(function(element) {
    element.addEventListener('click', function (e) {
      e.preventDefault()
      popup.classList.add(className)
    })
  });

  popup.addEventListener('click', function(e){
    if (!e.target.closest(inner)) {
      e.preventDefault();
      popup.classList.remove(className)
    }
  })

  var keyCodeEsc = 27;
  window.addEventListener('keydown', function (e) {
    if (e.keyCode === keyCodeEsc) {
      e.preventDefault();
      popup.classList.remove(className)
    }
  });

}

openPopup('.js-cart-btn', '.js-cart-container', '.js-inner', 'active')


function toggleMenu() {
  var container = document.querySelector('.js-nav-container');
  var btn = document.querySelector('.js-nav-btn');

  var toOpen = 'Открыть меню'
  var toClose = 'Закрыть меню'

  container.classList.remove('no-js');

  btn.addEventListener('click', function() {
    container.classList.toggle('active')
    if (container.classList.contains('active')) btn.setAttribute('aria-label', toClose)
    else btn.setAttribute('aria-label', toOpen)
  });
}

toggleMenu()
