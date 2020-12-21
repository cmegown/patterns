export default class {
  constructor(el) {
    this.buttons = el.querySelectorAll('.accordion-trigger');

    ///

    this.buttons.forEach(button => {
      button.addEventListener('click', e => {
        let btn = e.target;
        let panel = btn.parentNode.nextElementSibling;
        let expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        panel.hidden = expanded;
      });
    });
  }
}
