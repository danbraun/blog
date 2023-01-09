---
title: blog.danbraun.me
layout: base.njk
templateEngineOverride: njk, md
---
## Posts:

<ul>
{%- for post in collections.orderedPosts -%}
  {%- if post.data.publish %}
    <li class="post-listing"><a href="{{ post.url }}">{{ post.data.title }} - {{ post.data.date }}</a><br> 
    <span class="excerpt">{{ post.data.excerpt }}</span></li>
  {%- endif %}
{%- endfor -%}
</ul>