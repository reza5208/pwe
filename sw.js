const CACHE_NAME = "overtime-form-v1";
const urlsToCache = [
    "/index.html",
    "/styles.css",
    "/script.js",
    "/manifest.json",
    "/assets/icons/favicon.ico",
    "/assets/icons/apple-icon-57x57.png",
    "/assets/icons/android-icon-192x192.png",
    "/assets/icons/android-icon-512x512.png"
];

// Install the service worker and cache assets
self.addEventListener("install", event => {
    console.log("Installing service worker...");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching files...");
            return cache.addAll(urlsToCache);
        }).catch(error => {
            console.error("Failed to cache files:", error);
        })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener("activate", event => {
    console.log("Activating service worker...");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Serve cached assets when offline
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                console.log("Fetching failed, serving from cache...");
                return caches.match("/index.html");
            });
        })
    );
});