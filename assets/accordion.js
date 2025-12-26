document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.product-block-accordion');
  accordions.forEach(function (accordion) {
    const button = accordion.querySelector('.product-block-accordion__button');
    const content = accordion.querySelector('.product-block-accordion__content');
    button.addEventListener('click', function () {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        content.removeAttribute('aria-expanded');
      } else {
        content.setAttribute('aria-expanded', 'true');
      }
    });
  });
});