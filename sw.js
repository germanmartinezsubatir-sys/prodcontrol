const CACHE='prodcontrol-v1';
const FILES=['./','./index.html','./intro.mp4','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.filter(f=>!f.includes('mp4'))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
