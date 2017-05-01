[Minimally](https://github.com/mikaelvesavuori/minimally) is part of a family of web development tools which also includes [Barely](https://github.com/mikaelvesavuori/barely), [Purely](https://github.com/mikaelvesavuori/purely) and [Only](https://github.com/beingstudio/only).

---

# Minimally
A minimal boilerplate based around a bunch of best practices and performance strategies. Suitable when you are starting a new web development project but want as little meddling as possible with your own particular stack.

## Features
- **Performant**: Asynchronous loading of CSS and optimized script timing with async/defer
- **PWA and offline support**: Your site will behave like an app and be available offline
- **Secure**: .htaccess with tight Content Security Policy and hotlink protection (among lots of other things)
- **SEO'ed**: Web standard HTML and prepared for Twitter + OpenGraph metadata
- **Accessible**: Basic HTML written to conform with ARIA-WAI standards

## How do I use it?
Super simple – just clone or download the repository and start hacking away! You will want to configure your settings/data in the following files:
- **manifest.json**: Application data
- **sw.js**: Which files you want to cache
- **index.html**: Site metadata (in the head tag)

Also, when deploying or testing for the first time, make sure that the .htaccess behaves as you want on your own server/provider/domain.

## Fonts and CSS
### System font stack
The body is set to load a stack of system fonts that should be standard on basically any system.

### Custom fonts
An example for loading a custom font, with `font-display: swap` sprinkled on top, is also available in main.css.

## Libraries and stuff used
The following libraries and helpers are used in Minimally:
- [Normalize 6.0](https://necolas.github.io/normalize.css/)
- [LoadCSS 1.3.1](https://github.com/filamentgroup/loadCSS)
- Modified version of [Remy Sharp's "Copy & Paste" Service Worker](https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker)
- Modified .htaccess from [HTML5 Boilerplate](https://html5boilerplate.com)

### LoadCSS 1.3.1
Not that long ago, asynchronously loaded CSS was a pipe dream – but no more! We use LoadCSS to pull in our styles as soon as possible but without blocking the initial page render.

It works as a progressive enhancement and has no negative impact if your browser doesn't support it. In that case it would simply fall back to loading CSS regularly.

### Normalize 6.0
This is the standard go-to when one wants to normalize/equalize differences between how browsers render UI.

### Service Worker
Service Worker is a fairly new, sweet "helping hand" running in several, but not all, current browsers. It can cache files (which you can specify) that a user should be able to reach even in an offline state. This means that you could potentially have your entire site fully accessible to offline users, as long they've once visited the site (and had it successfully cached).

It works as a progressive enhancement and has no negative impact if your browser doesn't support it.

Note that Service Workers will only work on HTTPS domains or when served from localhost. Running it plainly from your file system will not start the Service Worker.

### .htaccess
The file is modified from the .htaccess contained in HTML5 Boilerplate 5.3.0.

There are added sections for:
- Hotlink protection
- Redirect to root (TODO: only php?)
- Content Security Policy (fairly strict, make sure it works for you, and that you make whatever changes you need)
