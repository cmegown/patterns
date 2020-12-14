---
permalink: /
---

# Components

<ol>
  {% for page in site.pages %}
    {% if page.title != 'Home' %}
      <li>
        <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ol>
