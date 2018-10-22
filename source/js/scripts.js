import picturefill from 'picturefill';

import closest from 'element-closest';

function openPopup(openBtn, modal, inner, className) {
  var btn = document.querySelectorAll(openBtn);
  var popup = document.querySelector(modal);
  var body = document.querySelector('body');

  if (!btn.length) return

  function open(e) {
    e.preventDefault();
    popup.classList.add(className);
  };

  function close(e) {
    e.preventDefault();
    popup.classList.remove(className);
  };

  function closeByOutsideClick(e) {
    if (!e.target.closest(inner)) {
      close(e)
    }
  };

  function closeByEsc(e) {
    var keyCodeEsc = 27;

    if (e.keyCode === keyCodeEsc) {
      close(e)
    }
  };

  btn.forEach(function(element) {
    element.addEventListener('click', open)
  });

  popup.addEventListener('click', closeByOutsideClick)

  window.addEventListener('keydown', closeByEsc);

}

openPopup('.js-cart-btn', '.js-cart-container', '.js-inner', 'active');


function toggleMenu() {
  var container = document.querySelector('.js-nav-container');
  var btn = document.querySelector('.js-nav-btn');

  var toOpen = 'Открыть меню';
  var toClose = 'Закрыть меню';

  container.classList.remove('no-js');

  btn.addEventListener('click', function() {
    container.classList.toggle('active');
    if (container.classList.contains('active')) btn.setAttribute('aria-label', toClose)
    else btn.setAttribute('aria-label', toOpen)
  });
}

toggleMenu();
