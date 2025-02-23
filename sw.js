const CACHE_NAME = "overtime-form-v1";
const urlsToCache = [
    "/index.html",
    "/styles.css",
    "/script.js",
    "/manifest.json",
    "/assets/icons/favicon.ico",
    "/assets/icons/apple-icon-57x57.png",
    "/assets/icons/android-icon-192x192.png"
];

// Install the service worker and cache assets
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Serve cached assets when offline
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
