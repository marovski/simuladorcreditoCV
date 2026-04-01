const CACHE_NAME = 'simulacv-v1';

const STATIC_ASSETS = [
  '/simuladorcreditoCV/',
  '/simuladorcreditoCV/index.html',
  '/simuladorcreditoCV/styles.css',
  '/simuladorcreditoCV/script.js',
  '/simuladorcreditoCV/favicon.svg',
  '/simuladorcreditoCV/manifest.json',
];

const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js',
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for everything else
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and analytics
  if (request.method !== 'GET') return;
  if (url.hostname === 'www.googletagmanager.com' || url.hostname === 'www.google-analytics.com') return;

  // Cache-first for same-origin static assets and CDN
  const isStatic =
    STATIC_ASSETS.some((asset) => request.url.endsWith(asset.replace('/simuladorcreditoCV', ''))) ||
    CDN_ASSETS.some((cdn) => request.url.startsWith(cdn));

  if (isStatic) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for everything else, fall back to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
