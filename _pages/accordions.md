---
---

# Accordions

<style>
  .accordion {
    border: 0.125em solid;
  }

  .accordion:not(:last-of-type) {
    border-bottom: 0;
  }

  .accordion-heading {
    margin: 0;
  }

  .accordion-trigger {
    position: relative;
    width: 100%;
    padding: 1em;
    border: 0;
    background-color: transparent;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
  }

  .accordion-trigger:focus {
    outline: 1px dotted;
    outline-offset: -0.5em;
  }

  .accordion-trigger:before {
    content: '+';
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
  }

  .accordion-trigger[aria-expanded='true'] {
    background-color: lightgrey;
  }

  .accordion-trigger[aria-expanded='true']:before {
    content: '-';
  }

  .accordion-panel {
    padding: 1em;
  }
</style>

{% include accordion.html start="1" items="3" %}
<br>
{% include accordion.html start="4" items="5" %}

<script type="module">
  import Accordions from '../js/accordions.js';

  Array.from(document.querySelectorAll('.js-accordion')).forEach(accordion => {
    new Accordions(accordion);
  });
</script>
