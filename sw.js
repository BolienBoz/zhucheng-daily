const CACHE = 'zhuyu-collection-v26';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=26',
  './app.js?v=26',
  './assets/desk-props-v23.png',
  './manifest.webmanifest',
  './assets/icon-180.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/brand-logo.svg',
  './assets/classroom.jpg',
  './assets/birthday.jpg',
  './assets/pest-control.jpg'
  ,'./assets/activity-delivery.jpg'
  ,'./assets/activity-overtime.jpg'
  ,'./assets/activity-model-repair.jpg'
  ,'./assets/activity-site-survey.jpg'
  ,'./assets/card-muyi.jpg'
  ,'./assets/card-yutian.jpg'
  ,'./assets/card-husky.jpg'
  ,'./assets/card-toast.jpg'
  ,'./assets/activity-presentation.jpg'
  ,'./assets/activity-materials.jpg'
  ,'./assets/activity-printer-jam.jpg'
  ,'./assets/activity-nap.jpg'
  ,'./assets/card-bolo-v2.jpg'
  ,'./assets/card-tail-v2.jpg'
  ,'./assets/activity-rainy-site.jpg'
  ,'./assets/activity-material-market.jpg'
  ,'./assets/activity-cleaning-day.jpg'
  ,'./assets/activity-finish-picnic.jpg'
  ,'./assets/costume-bolo-rain.jpg'
  ,'./assets/costume-husky-supervisor.jpg'
  ,'./assets/costume-toast-curator.jpg'
  ,'./assets/costume-tail-presentation.jpg'
  ,'./assets/activity-typhoon-prep.jpg'
  ,'./assets/activity-night-lighting.jpg'
  ,'./assets/activity-model-supplies.jpg'
  ,'./assets/activity-afternoon-tea.jpg'
  ,'./assets/activity-power-outage.jpg'
  ,'./assets/activity-plant-shopping.jpg'
  ,'./assets/activity-roof-leak.jpg'
  ,'./assets/activity-photo-day.jpg'
  ,'./assets/activity-archive-hunt.jpg'
  ,'./assets/activity-woodshop.jpg'
  ,'./assets/costume-bolo-carpenter.jpg'
  ,'./assets/pair-husky-tail-archive.jpg'
  ,'./assets/birthday-bolo.jpg'
  ,'./assets/birthday-husky.jpg'
  ,'./assets/birthday-toast.jpg'
  ,'./assets/birthday-tail.jpg'
  ,'./assets/activity-window-display.jpg'
  ,'./assets/activity-gift-workshop.jpg'
  ,'./assets/costume-bolo-christmas-v3.jpg'
  ,'./assets/costume-husky-christmas.jpg'
  ,'./assets/costume-toast-christmas.jpg'
  ,'./assets/costume-tail-christmas.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});

