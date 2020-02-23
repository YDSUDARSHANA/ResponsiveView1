'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "f136aa8b0c61a95a4101828e45432b6e",
"/assets\assets\images\boating.jpg": "b8569fc1895f77a2c7030fa9dcbebf88",
"/assets\assets\images\cycling.png": "deabcbc23379bbde07ac40d13685d521",
"/assets\assets\images\graphic_designer.jpg": "9c03fb1761b78fa62ef6869a702a4d71",
"/assets\assets\images\home.png": "8da56e9566884d429cacf9dc8712e613",
"/assets\assets\images\monica.png": "0d15e78a8f9fa915458fbf20a36df15d",
"/assets\assets\images\skiing.jpeg": "737df0a28307ce6b8391cad324d34031",
"/assets\assets\images\swimming.jpg": "16ab979e3f93ef0015cb199ac1e15391",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/index.html": "412013ffc74560de949a32378dab6d0b",
"/main.dart.js": "bbb37c1fae35de35b11a71851ce73003"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
