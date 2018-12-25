import picturefill from 'picturefill';

import closest from 'element-closest';

import svg4everybody from 'svg4everybody';

svg4everybody()

const openPopup = (openBtn, modal, inner, className) => {
  const btn = document.querySelectorAll(openBtn);
  const popup = document.querySelector(modal);
  const body = document.querySelector('body');

  if (!btn.length) return

  const open = (e) => {
    e.preventDefault();
    popup.classList.add(className);
  };

  const close = (e) => {
    e.preventDefault();
    popup.classList.remove(className);
  };

  const closeByOutsideClick = (e) => {
    if (!e.target.closest(inner)) {
      close(e)
    }
  };

  const closeByEsc = (e) => {
    const keyCodeEsc = 27;

    if (e.keyCode === keyCodeEsc) {
      close(e)
    }
  };

  for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener('click', open)
  }

  popup.addEventListener('click', closeByOutsideClick)

  window.addEventListener('keydown', closeByEsc);

}

openPopup('.js-cart-btn', '.js-cart-container', '.js-inner', 'active');


const toggleMenu = () => {
  const container = document.querySelector('.js-nav-container');
  const btn = document.querySelector('.js-nav-btn');

  const toOpen = 'Открыть меню';
  const toClose = 'Закрыть меню';

  container.classList.remove('no-js');

  btn.addEventListener('click', function() {
    container.classList.toggle('active');
    if (container.classList.contains('active')) btn.setAttribute('aria-label', toClose)
    else btn.setAttribute('aria-label', toOpen)
  });
}

toggleMenu();
