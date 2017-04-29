// There's tons of stuff you can do with a service worker!
// For Minimally, we will borrow Remy Sharp's nice and simple version (https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker)
const cacheName = 'v1::static';

self.addEventListener('install', e => {
	// once the SW is installed, go ahead and fetch the resources
	// to make this work offline
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				// Add a list of the assets you wish to cache for offline use
				'/',
				"css/normalize600.min.css",
				"css/main.css",
				"scripts/js/site.js"
			]).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		// ensure we check the *right* cache to match against
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(res => {
				return res || fetch(event.request)
			});
		})
	);
});
