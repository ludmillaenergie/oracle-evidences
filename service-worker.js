const CACHE_NAME = 'oracle-evidences-v1';
const ASSETS = [
  '/oracle-evidences/',
  '/oracle-evidences/index.html',
  '/oracle-evidences/Images/lunaire1.jpg',
  '/oracle-evidences/Images/lunaire2.jpg',
  '/oracle-evidences/Images/lunaire3.jpg',
  '/oracle-evidences/Images/lunaire4.jpg',
  '/oracle-evidences/Images/lunaire5.jpg',
  '/oracle-evidences/Images/lunaire6.jpg',
  '/oracle-evidences/Images/lunaire7.jpg',
  '/oracle-evidences/Images/lunaire8.jpg',
  '/oracle-evidences/Images/lunaire9.jpg',
  '/oracle-evidences/Images/lunaire10.jpg',
  '/oracle-evidences/Images/lunaire11.jpg',
  '/oracle-evidences/Images/lunaire12.jpg',
  '/oracle-evidences/Images/lunaire13.jpg',
  '/oracle-evidences/Images/lunaire14.jpg',
  '/oracle-evidences/Images/lunaire15.jpg',
  '/oracle-evidences/Images/lunaire16.jpg',
  '/oracle-evidences/Images/lunaire17.jpg',
  '/oracle-evidences/Images/solaire1.jpg',
  '/oracle-evidences/Images/solaire2.jpg',
  '/oracle-evidences/Images/solaire3.jpg',
  '/oracle-evidences/Images/solaire4.jpg',
  '/oracle-evidences/Images/solaire5.jpg',
  '/oracle-evidences/Images/solaire6.jpg',
  '/oracle-evidences/Images/solaire7.jpg',
  '/oracle-evidences/Images/solaire8.jpg',
  '/oracle-evidences/Images/solaire9.jpg',
  '/oracle-evidences/Images/solaire10.jpg',
  '/oracle-evidences/Images/solaire11.jpg',
  '/oracle-evidences/Images/solaire12.jpg',
  '/oracle-evidences/Images/solaire13.jpg',
  '/oracle-evidences/Images/solaire14.jpg',
  '/oracle-evidences/Images/solaire15.jpg',
  '/oracle-evidences/Images/solaire16.jpg',
  '/oracle-evidences/Images/solaire17.jpg'
];
// Installation : mise en cache de tous les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});
// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
// Fetch : cache en priorité, réseau en fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
