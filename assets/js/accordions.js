export default class {
  constructor(container) {
    this.accordions = container.querySelectorAll('.accordion');

    if (this.accordions.length) {
      this.headings = container.querySelectorAll('.accordion-heading');
      this.contents = container.querySelectorAll('.accordion-content');

      ///

      this.headings.forEach(heading => {
        let button = document.createElement('button');
        let fragment = document.createDocumentFragment();

        // build button
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'accordion-trigger');
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = heading.innerHTML;

        // repopulate heading with new button
        heading.innerHTML = '';
        fragment.appendChild(button);
        heading.appendChild(fragment);

        // handle click event via delegation
        heading.addEventListener('click', (e) => {
          if (e.target.matches('.accordion-trigger')) {
            let btn = e.target;
            let content = btn.parentNode.nextElementSibling;
            let expanded = btn.getAttribute('aria-expanded') === 'true';

            btn.setAttribute('aria-expanded', !expanded);
            content.hidden = expanded;
          }
        });
      });

      this.contents.forEach(content => {
        content.setAttribute('hidden', '');
      });
    }
  }
}
