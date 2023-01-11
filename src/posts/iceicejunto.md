---
title: Ice Ice Junto
tags: music production
publish: true
order: 4
excerpt: Making music with a glass of ice water
---
I recently joined an online [project by Marc Weidenbaum](https://disquiet.com/2012/01/27/the-disquiet-junto/) a.k.a. Disquiet on [Mastondon](http://post.lurk.org/@disquiet). Basically, Marc drops an email once a week with a musical or audio assignment to be completed in 4 days. Things like "use one of these previously created drum loops" or, in the case of this post, "create a track using ice clanking in a glass".

The 4 days mentioned above run from Friday to Monday. I started my composition on Sunday morning bring a few glasses, water and a small tub of ice to a quiet room. The rules did not stipulate whether or not one could use multiple glasses of water.

<img class="post-image-small" src="https://res.cloudinary.com/brauntrutta/image/upload/s--rxb2gZTr--/c_scale,w_250/v1673274620/blog/ice-mics-500.jpg" alt="microphones and a glass of ice water">

I clipped a pair of [LOM mikroUši](https://store.lom.audio/collections/mikrousi-series) microphones to an iPad stand and recorded about 5 minutes of pouring and clanking, being sure to capture some sustained tones from the glasses that I could loop and pitch to scale in a sampler.

Here's part of [that recording](https://res.cloudinary.com/brauntrutta/video/upload/v1673314898/blog/ice-glass-short.mp3)

In Bitwig I chopped up a dozen or so parts that had interesting variations and tones from the glass ringing that I knew I could tune and loop in a sampler to make a sort of marimba sound.

I used a set of ringing glass samples that ended up being 34 cents shy of a C#. I used 3 separate clanks and layed them so that each would play back based on the velocity of the note playing, with cross fading in between.

<figure><a href="https://res.cloudinary.com/brauntrutta/image/upload/v1673316459/blog/bitwig-sampler-layers.jpg">
<img src="https://res.cloudinary.com/brauntrutta/image/upload/v1673316459/blog/bitwig-sampler-layers.jpg" alt="Bitwig screenshot"></a>
<figcaption>This is how I set up one of the samplers in Bitwig to play back samples of ice clanking glass
</figcaption>
</figure>

The next big help for this song was the Stepic VST plugin I recently acquired. It emulates the way a hardware 16-step sequencer works plus much much more. I used it to trigger patterns with with a handful of sampler instanced creating the marimba like tones and what ended up being a tabla like drum sound. With Stepic, I shortened a rhythmic gate pattern to just 5 beats, while notes used a patter of 6 beats - with all of this being repeated every 16 steps. This created a poly-rhythmic sequence that had a 5/4 or 10/4 feel. Maybe a drummer can tell me.

Then tonally, I constrained notes to the phrygian mode with a root note of E2. I started with my own note ideas but quickly got lost in the endless variations Stepic can *suggest* and found something I liked much better. I think the sound of the glass notes turned out really nice do to the inherent warble from the liquid moving about in them. Something that takes work to tease out of a synthesizer, but I got for free here.

<figure><a href="https://res.cloudinary.com/brauntrutta/image/upload/v1673318352/blog/stepic-vst.jpg">
<img src="https://res.cloudinary.com/brauntrutta/image/upload/v1673318352/blog/stepic-vst.jpg" alt="Stepic VST screenshot"></a>
<figcaption>Stepic VST plugin
</figcaption>
</figure>

The last main sound idea for the track were the drones that start, continue though and finish things out. Again with the help of Bitwig's sampler I bounced a chord that fit the key of the song and resampled it. I then used the textures mode which is basically granular synthesis. Using voice stacking, multiple voices will play back simultaneously per single note triggered but with varied values applied to any modulations you send to the instruments parameters. In this case, I sent an LFO to the playback location of the otherwise frozen (because of textures mode) play head. In this way, with 3 voices stacked, the sampler will play 3 copies of the chord I sampled and animate the 3 play heads with the LFO over 3 different locations on the sample resulting in a satisfying drone ;)

<figure><a href="https://res.cloudinary.com/brauntrutta/image/upload/v1673318907/blog/bitwig-drone-sampler.jpg">
<img src="https://res.cloudinary.com/brauntrutta/image/upload/v1673318907/blog/bitwig-drone-sampler.jpg" alt="Bitwig sampler screenshot"></a>
<figcaption>Bitwig sampler in textures mode
</figcaption>
</figure>

The remaining sounds were simpler percussive ideas that took the place of high hats and percussion in more traditional music. The were composed directly on the time line in clips filled with short samples of clicks and clinks from the ice and water. 

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1420302190&color=%23443830&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/14-below-zero" title="14 Below Zero" target="_blank" style="color: #cccccc; text-decoration: none;">14 Below Zero</a> · <a href="https://soundcloud.com/14-below-zero/ice-ice-junto-disquiet0575" title="Ice Ice Junto (Disquiet0575)" target="_blank" style="color: #cccccc; text-decoration: none;">Ice Ice Junto (Disquiet0575)</a></div>