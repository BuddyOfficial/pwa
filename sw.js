const CACHE_NAME = 'dogstube-cache-v1';
const urlsToCache = [
  '/',
  '/?utm_source=homescreen',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinWQx-YTgrISjMnxHBD2AB5BVgQK2I2r-HyShxdoA1Uq8TddQwcHX73oDOlOd8xiDzaez1xlDMhCF7MDRdsUx1pDzTEl-dQMJy0HjH-mfmEtqNywMPhAEkTBm_qB-_tCow7Ka5kv88lDvMb2i1dqPs71Phjagv4FpWFpftjXu3Lgmnk9Zogn89Mdrh/w192-h192-p-k-no-nu/ICON.png',
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinWQx-YTgrISjMnxHBD2AB5BVgQK2I2r-HyShxdoA1Uq8TddQwcHX73oDOlOd8xiDzaez1xlDMhCF7MDRdsUx1pDzTEl-dQMJy0HjH-mfmEtqNywMPhAEkTBm_qB-_tCow7Ka5kv88lDvMb2i1dqPs71Phjagv4FpWFpftjXu3Lgmnk9Zogn89Mdrh/w512-h512-p-k-no-nu/ICON.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
