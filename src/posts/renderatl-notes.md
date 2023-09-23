---
eleventyExcludeFromCollections: true
---
* just noticed notes were on side screens
* moved, then they put the notes on the center screen LOL

## 9:00 (9:30) Banjo Obayomi (Amazon Web Services - Senior Developer Advocate)

Poor guy had to cram his presentation into like 10 minutes.

###  Generative AI
* word embinding - word associations
* transformers
* LLM
* Amazon Code Whisperer
* Applications
  * Text, games drugs etc
* Stable diffusion - combining images to create a new generative
  * Adds noise to learn to work backwards
* Prompts - Iterative development
  * be specific - encourage reasoning

### Stuff He Built
* He wrote a book: "Craving Certainty: How to Act with Conviction in an Uncertain World"
* AWS Well-Architected Chatbot
* ChatGPT plus - creates Lambda functions (building apps through chat)

### Where To?

Check out Jupter notebook?


## Checkout: React Spring (binding animation to mouse movements)

## Paolo Mariselli - Good and Bad Managers 

WTF is: "IC" = “Individual Contributor” "OKR" = "Objectives and Key Results"

* 70% of enthusiasm based on Manager
* 10 steps....areas of focus
  * how do people like to be recognized?
  * Care - human not IC (?)
  * People have a life (sister, mother, voluteer etc.)
    * 1 on 1 should bring on *some* of the personal life
    * Do you account for resource variations? (people OOO etc)
  * Present (not allow) opportunities for persuing interests
  * Feedback - early, often and unprompted. (not just one on one / reviews)
    * 3x more likely to be engaged
  * Loyalty
    * Help growth *even if it means they will leave*
    * Growth plan been created?
  * Impact
    * Company goals versus personal goals (where business goals become a byproduct)
  * Diversity
    * Retains instead of just hires diverse people
  * Culture
    * Fun (good) Trust (better)
    * psychological safety - mistakes happen
  * Growth
    * No micro managing - giving answers versus presenting questions
  * Jen e say qua 
    * Feeling is more important as an intrinsic metric

## 1pm ASHTEN FIZER - Web AI / AR

(Deck on her website)

* Remove barriers of a11y when App is not possible - using web AR instead.
* She used three.js in an example + webGL. WebXR to render.
* See her example. This is all in the browser! 
* Starts with basic HTML plus the libraries above.
* see photo on phone for tools
* might have to use Java with WebGL
* web based address security issues?
* Adobe Aero - used as a server in this example

## Jose Rodriguez Salinas (Dropbox) - Beyond Coding (soft skills)

* The chasm - from coding to the whole project
* see photos
* look at design doc templates on line
* technical blogs (like Airbnb's)
* "ERGs" employee research groups?

## Zillow - Matt Daimler

## Izhar Buendia (Netflix product designer) Design as a Business Decision
* Design is how something works
* Shared references to Taoism, harmony, chi...
* Shared a slide with 1/2 salaries of designers
* "Feng shui Bagua Map"?
* Ancient Greece and ergonomics - Hippocrates
* Industrial revolution - design in placement of workers
* Early computers - Interface improvement from 70s
* Human Processor Model - John M. Carroll
* 1:100 UX ROI
* Jared Spool
* Airbnb 2021 - make hosting mainstream to solve demand during pandemic
  * concept of Superhost - friction for new hosts removed by design
* General Electric - created UX Center of Excellence - save tons of money and more productivity
* Uber 2015 expanded to other countries with design.
  * Other countries mostly cash
  * Design added to app to use cash workflow

### 4 things
* User research - don't make assumptions
* Ideation
* Experimenting
* Inspiration

## Taylor Poindexter - Manage or Not to Manage
* Manager is:
  * responsible for other people in the company
  * Deciding? What makes you happy?
    * don't forget what you wanted to be a kid
  * Its hard: Reports (people) different personalities multiplied by how many they are.
    * Curve balls - no more hiding in headphones
  * Egos and bias. Can't have em. We all have bias, but work with/on them.
  * Technical dynamic? Be aware of forcing ideas because of power dynamic.
* Pendulum career - Going between Manager and IC (not a bad idea.)
* Any other "internal transfers" in my job?
* Be mindful of your own triggers
* Know when to be flexible or rigid.
* One on ones that are separate from project updates

## Homer Ganes - Assistive Tech, (Seeing eye to eye)
(This man sounds severe - would be afraid to have him as a boss!)
* Correlation between low vision users' frustration and non-ADA visual design
* 76% of LVUs use headers.
* Users find a shortcut (not our path)
* Zoomed off screen - keyboard commands now need to be used to move the screen around.
* Body text 16px or 18px minimum font
* Box shadow respect the shape of buttons etc. (To replace outline that looks bad)
* Responsive mobile first design helps LVUs. What if they have to zoom in and don't have peripheral vision.
* **4.5:1** - Thats the contrast ratio we're aiming for.
* over 80% fail the contrast spec for WCAG AA
* Too much contrast is a thing - like black text on white - us charcoal
* Halation - Astigmatism - doubling of hard lines.
* Empathy
  * Cognitive
  * Emotional
  * Compassionate

## Chris Coyier - Modern CSS in Real Life
* Venn diagram that was websites with CSS (a circle)
* "Art Directed" articles
* max-inline-height, etc logical properties
* border-inline-start instead of "border-left"
* inline-size instead of width
* prevent last padding or whatever margin-trim: inline-end
* and more inline/block things... create more constantly named things
* margin left/right breaks on translated text (RTL)
* Google translate - 10 million + have it installed - people will do it anyway.
* alt in img should be far more descriptive even emotionally.
* Viewport height: issues with mobile UI over content at bottom
  * dvh not vh
* flexbox is "unlearnable" more GRID
* subgrid is new - inherits the gridline of parent grid.
* grid-template-rows: masonry; (brand new)
  * tab order is maintained
* container units: 
  * container type; inline-size ... unit: "cqi"
* See Steph Eckles article on container queries/units
* Think reusable components with container units - reusable anywhere in a layout.
* Resizable sections of the page NEED container queries
* Native css nesting is coming
* see @container Name
* Cascade layers
  * @layer will increase specificity - all browser can use this now
* Bootstrap - follow bootstrap @import with "layer" - allows override without !important
* New colors - CSS not caught up
  * oklch() LCH - new color value
* startViewTransition API for animation
* view-transition-name (no javascript)

## Aisha Blake - Leading Through Chaos (Pluralsight / Opal Grove Games)
She has a Twitch acct.
* Draws comparison between a game master and leading a team through chaos
* "Player" safety
  * Your safety tool
  * Feedback - power relationships
* Core needs BICEPTS
  * Belonging (like maybe, but def respect)
  * Improvement - making progress
  * Choice - does your team members feel agency - ownership
  * Equality (Fairness) - same access to resources? Fair pay? Included - reciprocity
  * Predictability - certainty - seeing things coming/not blind sided
  * Significance - purpose, work fits into the grand scheme of things
* Tells her story of a "cursed team"
* Flavors of chaos
  * New big teams, AI, ambiguity etc...
  * Lack of direction
    * see photo
  * Burnout
    * Start slow, regular check-ins, mix up work
  * Conflict (between team members)
    * Set expectations early, shut issues down ASAP, People may leave
  * Large Scale Trauma
    * Will affect some more than others, consider altering the workload, keep discussion intention and respectful
  * Personal Tragedy
    * You are probably not a therapists
* "Session Zero"
  * Groundwork - set expectations, set boundaries etc.
  * Feedback
  * User Manuals - values, communication (email or slack etc...), preferences, and growth
* Tips: balance prep and improv. Learn your style, Don;t know everything, Trust yor reports (ICs), You control the flow of info, not an adversarial relationship.

## Rizel Scarlet (Github Dev Advocate) - Code Pilot
* She's on Mastodon
* AI peer programmer (Code Pilot)
  * not perfect
  * Very much like predictive text in Gmail etc.
  * OpenAI - what it's using (they created ChatGPT and more)
  * Today using "Sahara" GPT 3.5
* Emoji example (made in code pilot)
* demo'd "Playground" tab platform.openai.com/playground
* Predictive Code
  * hover over suggestions, for other options
* Codepilot labs: features: translates snippets to other langs. / explainations
* Can be installed in VSCode, JetBrains
* Does not copypaste public code.
* Security: has features the prevent unsafe code (suggestions that contain cross site vulnerabilities, SQL injections etc)
* Helps:
  * **Avoid googling regex**
  * recognizes patterns
  * adds comments
  * Cleaner code
  * Multinational languages
  * auto creates documentation (installations etc.)
* Leetcode? (check this out)
* Demos writing a tweet (Tweepy python lib) using Codepilot - writing comments and it writes code. Using VSCode in browser.
  * These comments are like prompts - should be more specific
  * Be consistent with conventions (camel case etc)

## Scott Tolinski (cohost of Syntax) - The Next Generation of CSS
* Latest and greatest CSS
* "Ship score" - how supported is it? check it, tryit, ship it.
* PostCSS plugin - preset ENV can make this stuff work
* Media queries
  * new "range" syntax (< > <= >= ) Ship it!
* Custom media queries - like sass
  * @custom-media Ship it (with PostCSS)!
* Container Queries
  * @container card (width > 300px) ... new units cqw, cgh, cai, cqb, cqmin and cqmax. Ship it!
* Container Style Query - container query with custom properties  
  * like @container style(--theme: wave-race) Check it :(
* Color oklch(), display-p3 color space
  * check out out a OKLCH color piker online
  * OKLCH Ship it! (FF partial support)
* Color mix - mix colors
  * color: color-mix() Ship it!
* Color contrast: color: color-contrast() - takes a color + set of colors and returns the highest contrast. Check it :(
* Relative Colors - explodes hsl values and you can manipulate theme and re-assemble back to hsl - Ship it (With PostCSS)!
* Cascade
  * :has if the .card has a .cancel child (for example)
    * .card:has(.cancel) - Try it (no FF)
  * Cascade Layers
    * @layer - control overrides with layers. Ship it!
  * @Property - like types for CSS
    * syntax: '<color>'
    * work with variables differently
    * Try it
* Animation
  * View Transitions API
    * ::view-transitions-old(root) {
      animation: ...
    }
    ::view-transitions-new(root) {
      animation: ...
    }
    * Try it : only Chrome - graceful fall back on others
  * Scroll Animations
    * ... animation-timeline: scroll(root block)
    * no JS!
    * Check it :(
  * Animation Composition - add multiple animations with interruption
    * div {
      animation-composition: add
    }
    * Try it (no FF)
  * linear()
    * create micro-points inside of an animation path - not building this by hand.
    * Try it (no safari)

    ## Cesar Mateus (Delta) - Digital Transformation Elevating Customer Connections
    * 5000 planes up at a time.
    * Great big Delta commercial chock full of platitudes and something to watch until lunch. Honestly, I'm going to fly my 1x every 2 years on whatever airline surfaces as cheapest on some travel website.
## Milecia McGregor - Debugging the Hard JavaScript Issues
* Measure 2x cut once
* Dependencies
  * Node version, right certificate, npm credentials/private packages, dev vs dependencies vs peerDependencies
* State management
  * React things (global state updates, useEffect hooks, Api requests)
* Async/await
  * data called too early, unfetched parameter
  * micro services out of sync
  * Third party services down
  * not resolving asc/await correctly
  * Weird permissions issues
  * console log is prob needed
* Data types not right
  * 3rd service updates
  * queues (3rd party data) are processing data correctly
  * microservices isn't saving data in the right place
  * ghost jobs are running and changing data (look at logs)
  * weird permissions issues (API returning diff data because you're role/perms are not what you think)
* Type Handling
  * 3rd party types are changed
  * backend release a new version without notice
  * Not using the types shared across multiple apps
* Environment Differences (document everything)
  * Capitalization on image file names in S3
  * Missing env vars
  * Not enough cloud resources
  * CI/CD pipeline on one understands
* Business Logic Issues
  * Nobody knows how its supposed to work
  * There are conflicting designs
  * The architecture isn't well documented
* "Code Janitors" clean up tech debt
* Communication!

## Neha Batra (github) - Building Culture through Communication (VP over 280 people)
* Promotions? Communication is looked at
* Communication is the expression of your team's culture
* Remote work - communication is very important
* Comm pitfalls: suprised/upset , doesn't reach audience, not enough info, too late
* Culture in Comms
* In example of a comm 
  * Clarity: intentions exptations
  * Inclusiveness
  * Helpfulness
  * Gratitude
* Example of "someones leaving" comm
  * Sad emoji and date of leaving right away
  * Clarity, Helpfulness, cohesion, curiosity
* Culture in comms
* Included: clarity, helpfulness - inclusiveness gratitude cohesion curiosity
* Pull Request example
  * Links, problem to solve, why, what extras, etc
* Other PR example
  * who he worked with
  * TODOs
  * Github uses PR templates
  * PR is like documentation/how to for your new feature that may be incorporated into other code.
* Values in Comms
  * Inclusive - talk to people who are not you (new joiner, non-engineer, "leadership", The question asker)
    * What did I miss?
  * Consistent Language (Helpful)
    * Even though redundant - it generates constancy
    * She used emojis in examples (we don't do that)
    * She uses catch phrases: "What's missing?, What stood out? What do you think?" etc.
  * Commitments: Trustworthy
    * No major announcements in team meetings (if many others are not going to be there)
    * Collect that credit - builds trust
    * Own up FIRST to missing things or else...
  * Comms Plan: Predictable
    * who, what, when, where, why
    * easier to identify gaps
    * See photos x2 examples
  * Playbooks - see photo
## Evan You - Across the Framework Barrier (OSS dev vue.js & Vite)
(secretly evangelzing vue.js I think)
* Why are there so many frameworks
  * The web is diverse: (use cases: apps, content websites, storefronts, games social networking / media -- all webapps)
  * Dev roles and backgrounds: (Fullstack js, primarily backend devs, frontend, game devs, fullstack polyglots)
  * Team environments: (Non-tech small business, tech startups, trad enterprise (me? - not cutting edge but need STABLE), tech enterprise, Indie/"Solopreneurs" -- Web Devs)
* The above contexts are missing from Framework war discussions
* Why there can't be silver bullets (most likely)
  * Conflicting preferences (humans are different from each other)
  * JSX vs Vue template example (Conflicting pref leads to trad-offs)
  * Vue: Enhancing HTML/CSS/JS -versus- React: Programming model that targets HTML/CSS/JS
  * Virtual DOM vs. Compilers / Hooks vs. Fine-grained Reactivity / CSS in JS vs. SFC Scoped CSS (or use Tailwind)
  * "Chosen Path Inertia"
    * The more popular, num of users - the harder it is for a framework to change/improve - stronger inertia.
    * Easier for new frameworks to solve issues with older frameworks that it is for current frameworks to change
  * The surrounding prefs of frameworks
    * Tooling /dev experience / learning curve, ecosystem community, job demand, maturity / long term stability -- these are all weighted differently in different scenarios
  * Speaker believes multiple frameworks is good - allows optimized productivity coverage. Inclusive.
  * Side note: Web components are great for interop but not a complete solution: rendering, reactivity , state management/logic reuse, end-to-end Server side rendering
  * Open mindset when it comes to multiple frameworks - are we building the same thing / same background / context.
  * Heathy Competition with Cross-Pollination
    * React Hooks -> vue components ... etc (examples of cross-pollination)
    * Meta Frameworks: Next /Nuxt/Remix/SveltKit/Astro (file-based routing, static generation, hybrid rendering, data fetching, isomorphic component trees)
  * Extract Framework Agnostic Value
    * Vite - Started as vue-specific dev server, redesigned to be framework-agnostic, Now the shared build tool layer for multiple frameworks (Vue/Nuxt, Svelte, Solid, Quik, Astro)
    * unjs - Unified JavaScript Tools. 
      * collection of framework agnostic tools (see Nitro - server, also unplugin and unbuild) 
    * Volar.js - IDE file support for embedded languages
    * TanStack - multi-framework utilities

    ## Monet Spells (Design Director - Square) - Scaling for Culture
    * Had to scale her team from 50 designers to 2 devs.
    * Organization Leadership
      * Strength, Communication, Leadership, Ethics and World View (an opinionated list by speaker)
        * Strengths: Craft + rigor
          * High Performance
        * Communication: predictability - _as a manager, her people can guess what she's going to say._
        * Leadership - Succession planning (can I go on a vacation, for example - can I leave if I have want to?)
          * Performance management - its not necessarily the leader or their performance - maybe better on a different team...
          * Psychologically Safe - toxic environments
        * Ethics - Kind > Nice.
        * Worldview - Empathy - champion your team. Diversity
      * Team Culture can/should change over time based on the teams collective goals.
      * Gold Culture will Scale - Don't scale a team with bad culture - it will only multiply the issues.
      * "That's what they told me to do" - not a transitional attitude if seeking leadership positions. Anchor your work in a bigger picture will get you seen as a candidate for a leader.
  ## Bria Sullivan - Code Your Way to $100K+ in Passive Income
  (LOL this room is packed - I'm sitting on the floor)
  * 2 Categories for Passive Income
  * Definition: upfront investment, but little or no ongoing effort.
  * Spectrum between active and passive (see photo)
    * Somewhat passive: Episodes of Podcasts with sponsorship.
    * More passive: Plugins (chrome extensions, coding plugins, vscode etc.)
    * Still more: niche apps (one person )- in-app purchases, subscriptions, ad revenue. 
    * Further: Digital goods/ assets (see photo) - Notion Templates, pdf guids e-books, game assets etc.
    * Further: online courses (Udemy, Gumroad etc)
  * What about Youtube? Their own spectum. See photo. Ad rev. more passive
  * Myths and Strategies
    * Youtuber examples - see photo
    * Good enough engineer (dev) will do
      * Speaker claims many were beginners
    * Marketing or Engineering?
      * see photo - Marketing is more important always.
      * market before it even exists...
    * With a Full-time job
      * leverage your job (skills that are related like writing newsletter)
      * Use a tech stack you already know
      * choose projects based on your current abilities.
    * Dedication to Learning and IMprovement
      * No one was a natural at first
      * utilize free resources 
      * pay for courses / books. Invest in yourself
      * Join discords with other creators. Or start you own Discords.
      * Don't be ashamed to need to go back to the basics
    * Launch it. (She drops it if it takes more than 4 months (game dev))
## Laurie Voss (Netlify "Data Evangelist") - Web Development in 2023, What the Data Says
* State of web dev, how we got here, where we're going
* We will hate his prediction
* The Web development technology cycle: (see photo) Experimentation, Best practices, design patterns, commodification (frameworks), Competition, Consolidation (80% done by framework is cheaper than 100% doing it custom), Whining about fundamentals, Mass adoption (2x as many people using this - don't need to know the fundamentals), Migration.
* There is no such thing as "the fundamentals" - just what it takes to get the job done. (example SGML...)
* Websites: HTML and Web servers to Web applications - PHP
* Hardware: Server hardware, competing server companies - LAMP (commodification)
* Blogs - Wordpress commodification again. JQuery another example
* Virtual servers - knowing about hardware is no longer fundamental to web dev
* serverless and so on...
* Netlify as a framework (Jamstack) in competition phase.
* React as a framework - mixing it all together - **74%** of devs us it in 2023 - in Mass Adoption stage. (Only Jquery was as big - browsers incorporated those features). 
* Web3 (stealing money is not new) and Metaverse are dead?
* Are we bored enough to abstract React away. Reactbricks: on potential future. Drag n drop with a GUI.
* AI can build backends.
  * AI may eat the whole stack - including HTML and CSS
  * Prediction: a new generation of engineers will create HTML without writing it. (Tim B.L. kind of intended it this way)
* Web dev is unsustainably expensive - Bank sites etc suck because there are not enough devs.
* Solution for us? Use the new tools the best - or build the new tools _these are both good options_
