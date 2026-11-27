const CACHE = 'zhuyu-collection-v29';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=29',
  './app.js?v=29',
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
  ,'./assets/activity-gift-workshop-v2.jpg'
  ,'./assets/costume-bolo-christmas-v3.jpg'
  ,'./assets/costume-husky-christmas.jpg'
  ,'./assets/costume-toast-christmas-v2.jpg'
  ,'./assets/costume-tail-christmas.jpg'
  ,'./assets/quote-husky-area.jpg'
  ,'./assets/quote-bolo-waste.jpg'
  ,'./assets/quote-toast-white.jpg'
  ,'./assets/quote-tail-scale.jpg'
  ,'./assets/series-site-1.jpg'
  ,'./assets/series-site-2.jpg'
  ,'./assets/series-site-3.jpg'
  ,'./assets/series-site-4.jpg'
  ,'./assets/series-site-5.jpg'
  ,'./assets/series-site-6.jpg'
  ,'./assets/series-site-7.jpg'
  ,'./assets/series-site-8.jpg'
  ,'./assets/series-site-9.jpg'
  ,'./assets/series-materials-1.jpg'
  ,'./assets/series-materials-2.jpg'
  ,'./assets/series-materials-3.jpg'
  ,'./assets/series-materials-4.jpg'
  ,'./assets/series-materials-5.jpg'
  ,'./assets/series-materials-6.jpg'
  ,'./assets/series-materials-7.jpg'
  ,'./assets/series-materials-8.jpg'
  ,'./assets/series-materials-9.jpg'
  ,'./assets/series-models-1.jpg'
  ,'./assets/series-models-2.jpg'
  ,'./assets/series-models-3.jpg'
  ,'./assets/series-models-4.jpg'
  ,'./assets/series-models-5.jpg'
  ,'./assets/series-models-6.jpg'
  ,'./assets/series-models-7.jpg'
  ,'./assets/series-models-8.jpg'
  ,'./assets/series-models-9.jpg'
  ,'./assets/series-studio-1.jpg'
  ,'./assets/series-studio-2.jpg'
  ,'./assets/series-studio-3.jpg'
  ,'./assets/series-studio-4.jpg'
  ,'./assets/series-studio-5.jpg'
  ,'./assets/series-studio-6.jpg'
  ,'./assets/series-studio-7.jpg'
  ,'./assets/series-studio-8.jpg'
  ,'./assets/series-studio-9.jpg'
  ,'./assets/series-bolo-1.jpg'
  ,'./assets/series-bolo-2.jpg'
  ,'./assets/series-bolo-3.jpg'
  ,'./assets/series-bolo-4.jpg'
  ,'./assets/series-bolo-5.jpg'
  ,'./assets/series-bolo-6.jpg'
  ,'./assets/series-bolo-7.jpg'
  ,'./assets/series-bolo-8.jpg'
  ,'./assets/series-bolo-9.jpg'
  ,'./assets/series-husky-1.jpg'
  ,'./assets/series-husky-2.jpg'
  ,'./assets/series-husky-3.jpg'
  ,'./assets/series-husky-4.jpg'
  ,'./assets/series-husky-5.jpg'
  ,'./assets/series-husky-6.jpg'
  ,'./assets/series-husky-7.jpg'
  ,'./assets/series-husky-8.jpg'
  ,'./assets/series-husky-9.jpg'
  ,'./assets/series-toast-1.jpg'
  ,'./assets/series-toast-2.jpg'
  ,'./assets/series-toast-3.jpg'
  ,'./assets/series-toast-4.jpg'
  ,'./assets/series-toast-5.jpg'
  ,'./assets/series-toast-6.jpg'
  ,'./assets/series-toast-7.jpg'
  ,'./assets/series-toast-8.jpg'
  ,'./assets/series-toast-9.jpg'
  ,'./assets/series-tail-1.jpg'
  ,'./assets/series-tail-2.jpg'
  ,'./assets/series-tail-3.jpg'
  ,'./assets/series-tail-4.jpg'
  ,'./assets/series-tail-5.jpg'
  ,'./assets/series-tail-6.jpg'
  ,'./assets/series-tail-7.jpg'
  ,'./assets/series-tail-8.jpg'
  ,'./assets/series-tail-9.jpg'
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

