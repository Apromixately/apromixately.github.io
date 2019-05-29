# Markdown test page

## So, how does stuff work?
How do I [link](index.html) to things?

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
