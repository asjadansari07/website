// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHEName = "offline-page";
const assets = [
  '/',
  '/index.html',
  '/Public/images/favicon.ico',
  '/Public/images/info.webp',
  '/Public/images/arrow.webp',
  '/Public/images/book.webp',
  '/Public/images/thumb.webp',
  '/Public/pdf/Resume%20ASJED.pdf',
  '/Public/images/lqr.svg',
  '/Public/images/sqr.svg',
  '/Public/images/map.webp',
  '/Public/images/head-back1.webp',
  '/Public/images/sg-back.webp',
  '/Public/images/pt.png',
  '/Public/images/mp.png',
  '/Public/images/mp-1.png',
  '/Public/images/fl.png', 
  '/Public/images/Summit_Award_Certificate_Jul2020.webp', 
  '/Public/images/Summit_Award_Certificate_Jan2022.webp', 
  '/Public/images/MVC_Certificate.webp',
  '/Public/images/NetCore_Certificate.webp',
  '/Public/images/Git_Certificate.webp',
  '/Public/images/Angular10_Certificate.webp',
  '/Public/images/JS_Certificate.webp', 
  '/Public/images/AppCardRepSep2020.webp', 
  '/Public/images/AppCardRepJun2020.webp', 
  '/Public/images/AppCardRepJul2022.webp',
  '/Public/images/AppCardRepSep2022.webp', 
  '/Public/images/AppCardRepJan2020.webp', 
  '/Public/images/asj_circle1.webp', 
  '/Public/images/header-mask-black-after.webp', 
  '/Public/images/header-mask-white-after.webp', 
  '/Public/images/aspnet.webp',
  '/Public/images/sql.webp',
  '/Public/images/crm.webp',
  '/Public/images/html.webp',
  '/Public/images/css.webp',
  '/Public/images/bootstrap.webp',
  '/Public/images/javascript.webp',
  '/Public/images/jquery.webp',
  '/Public/images/adonet.webp',
  '/Public/images/linq.webp',
  '/Public/images/xml.webp',
  '/Public/images/googleform.webp',
  '/Public/images/csharp.webp',
  '/Public/images/json.webp',
  '/Public/images/ajax.webp',
  '/Public/images/ws.webp',
  '/Public/images/form.webp',
  '/Public/images/office.webp',
  '/Public/images/ssrs.webp',
  '/Public/images/mvc.webp'
];
//  '/Public/images/apk_grey.gif',
//  '/Public/images/beach.webm',
//  '/Public/images/beach.mp4'
//];

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "index.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("Install Event processing");

  event.waitUntil(
    caches.open(CACHEName).then(function (cache) {
        console.log("Cached offline page during install");
        return cache.addAll(assets);
      //return cache.add(offlineFallbackPage);
    })
  );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function (response) {
          // console.log("add page to offline cache: " + response.url);
          
        // If request was success, add or update it in the cache
        event.waitUntil(updateCache(event.request, response.clone()));

        return response;
      })
      .catch(function (error) {
        console.log("Network request Failed. Serving content from cache: " + error);
        return fromCache(event.request);
      })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return the offline page
    return caches.open(CACHEName).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        // The following validates that the request was for a navigation to a new document
        if (request.destination !== "document" || request.mode !== "navigate") {
          return Promise.reject("no-match");
        }

        return cache.match(offlineFallbackPage);
      }

      return matching;
    });
  });
}

// function updateCache(request, response) {
//     return caches.open(CACHEName).then(function (cache) {
//         if (request.url.startsWith('chrome-extension') ||request.url.includes('extension') ||!(request.url.indexOf('http') === 0))
//             {
//             return
//         }else{
//         return cache.put(request, response);
//         }
//   });
// }
function updateCache(request, response) {
  // Check if response is ok (status code 200) before caching
  if (response.status === 200) {
      // Open the cache and put the request-response pair
      return caches.open(CACHEName).then(function (cache) {
          // Ignore URLs that should not be cached
          if (request.url.startsWith('chrome-extension') || 
              request.url.includes('extension') || 
              !(request.url.indexOf('http') === 0)) {
              return; // Do not cache this request
          } else {
              return cache.put(request, response);
          }
      });
  } else {
      // If the response status is not 200, do not cache it
      // console.log('Response not cached due to status:', response.status);
      return Promise.resolve(); // Return a resolved promise to maintain promise chain
  }
}
