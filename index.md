# Welcome to this barren place!

There is almost nothing here but you're still welcome!

[Rust & Webassembly 🦀🕸 Test](rustwasm.html)

## Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
