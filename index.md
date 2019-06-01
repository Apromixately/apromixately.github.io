# Welcome to this barren place!

There is almost nothing here but you're still welcome!

[Rust & Webassembly 🦀🕸 Test](rustwasm.html)

[Rust & Webassembly 🦀🕸 & Canvas 🖼️ Test](rustwasm2.html) ([Code](https://github.com/Apromixately/rustwasm))

---
# Posts:
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
