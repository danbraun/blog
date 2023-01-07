---
title: blog.danbraun.me
layout: base.njk
templateEngineOverride: njk, md
---
## System awaiting input

### Posts:
<ul>
{%- for post in collections.orderedPosts -%}
  <li>{{ post.data.title }}</li>
{%- endfor -%}
</ul>