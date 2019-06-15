# Welcome to this barren place!

There is almost nothing here but you're still welcome!

[Rust & Webassembly 🦀🕸 Test](rustwasm.html) ([Code](https://github.com/Apromixately/rustwasm/tree/master/simple))

[Rust & Webassembly 🦀🕸 & Canvas 🖼️ Test](rustwasm2.html) ([Code](https://github.com/Apromixately/rustwasm/tree/master/canvas))

[🔥 Test](rustwasm3.html) ([Code](https://github.com/Apromixately/rustwasm/tree/master/fire)) ([Source](https://codepen.io/svkaiser/pen/xXmOvY), [Via](https://fabiensanglard.net/doom_fire_psx/))

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
