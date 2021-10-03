'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9fe5f24966c5a78b5d309dab04f7f9d1",
"splash/img/light-2x.png": "9e8a380971b12779ad69456fa52d4d30",
"splash/img/dark-4x.png": "d93ab50a8bc73e2e7674fa659bab3e6e",
"splash/img/light-3x.png": "242dd77a2613e81bbc3ee2d6b7e4a6a1",
"splash/img/dark-3x.png": "242dd77a2613e81bbc3ee2d6b7e4a6a1",
"splash/img/light-4x.png": "d93ab50a8bc73e2e7674fa659bab3e6e",
"splash/img/dark-2x.png": "9e8a380971b12779ad69456fa52d4d30",
"splash/img/dark-1x.png": "700c04137f5c02c1b162b1dd9ec5010c",
"splash/img/light-1x.png": "700c04137f5c02c1b162b1dd9ec5010c",
"splash/style.css": "64227ec06c71fef909f75868ada72c30",
"favicon.ico": "6593d9b3f70b45587741b9c25eb24dd5",
"index.html": "bd5383d587419884879949298452c2e1",
"/": "bd5383d587419884879949298452c2e1",
"main.dart.js": "ad766caea5853cae1c35d4eedf8715e7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "1d5490fc809f160c280eb6b189685a48",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "0987933766c0ce4465d3c2b01614dfd2",
"manifest.json": "0097fcbf69fc192d406e5b1f047a4408",
"assets/AssetManifest.json": "0b21d991061ff0656a41186aff8e3eee",
"assets/NOTICES": "d9c898b7d062518fd94e61283a0e0c53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/books/black_africa.png": "59f34875e0df6369ad9b189dcf99e796",
"assets/assets/books/afrique_noire_pre_coloniale.png": "eb2948e2889488dfa366369d6de8f9e5",
"assets/assets/books/alerte_sous_les_tropiques.png": "4d5f4e9c9a9af618ad31c3a52f2ff815",
"assets/assets/books/complements_a_parente_genetique.png": "bee358c3603a6aa5d39d1cee0cc2e5b5",
"assets/assets/books/lantiquite_africaine_par_limage.png": "da0f6e4bef7044a23c50c4fad0d1216f",
"assets/assets/books/civilization_or_barbarism.png": "d4e48265381f0dbbf59910bc17987eda",
"assets/assets/books/myth_or_reality.png": "0babd3e1880ac2531a200b7d299897ba",
"assets/assets/books/peopling_of_ancient_egypt.png": "fb18089aeac1b868e83760b5bf8605b7",
"assets/assets/books/nations_negres_et_culture.png": "957d5ba081acd18507b2c61780596958",
"assets/assets/books/the_cultural_unity_of_black_africa.png": "a299f1476e637578f65968829b131267",
"assets/assets/books/precolonial_black_africa.png": "06ad1dc9355648f9bd9998584ceb141a",
"assets/assets/books/towards_the_african_renaissance.png": "1d13cb047ab21811d15462f088a9b146",
"assets/assets/icon/pr.thomas.sankara.png": "8e6ed630563c02e7a3d62daddcd7ae90",
"assets/assets/icon/general.ruben.um.nyobe.png": "9c3fb6730b6981bd0c367942989625e5",
"assets/assets/icon/jomo.kenyatta.png": "911e53033f0e686088e7cdba031f3b9e",
"assets/assets/icon/sekou.toure.png": "04789e118351c215756ff03a6ed4b9ca",
"assets/assets/icon/firmin.antenor.png": "8a27b77fdbd04c2e0b00eaa30429e9ab",
"assets/assets/icon/prime.minister.patrice.lumumba.png": "49055cb22d5e3b35e2e0f0d5e9921a89",
"assets/assets/icon/kojo.tovalou.houenou.png": "eba1581316dedc83168256f57e9d1860",
"assets/assets/icon/edward.wilmot.blyden.png": "e25ec9f3d88526cc8bfb9318bf59e337",
"assets/assets/icon/dr.diop2.png": "d51bf4ba04084a5902e3d35f20ccebcd",
"assets/assets/icon/dr.kwame.nkruma.png": "88b335381bd3de4028f584a3cca5779d",
"assets/assets/icon/benito.sylvain.png": "b18cebe3234857897c79f46444b72a64",
"assets/assets/icon/henry.sylvester.williams.png": "b6178c0a2e5caedd3d3a70d91341def0",
"assets/assets/icon/web.du.bois.png": "5f48d623040813597103082c337cc2c3",
"assets/assets/icon/jean.jacques.dessalines.png": "9b5cd9e24509f981f7d735d55601626f",
"assets/assets/icon/dr.diop.png": "ac2a25dff1cc72b209bde5d31566fe1f",
"assets/assets/icon/marcus.garvey.png": "4b19eb4b6d60172d70e0a5072d2f8700"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
