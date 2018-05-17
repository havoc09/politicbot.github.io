"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c24f28626e45c2d407d62c34e71fa5fc"],["/static/css/main.fe1f1434.css","860bee992d8f9860b0054f53e35f9ace"],["/static/js/main.0e988065.js","81c341a7632e570dc5ea07fb26d0715a"],["/static/media/comment-gild-x2.41a1c12a.png","41a1c12a8224d96a7fcc2174ce1686a8"],["/static/media/comment-gild.708773ae.png","708773ae85198f8131433ee9225ebd00"],["/static/media/creddits-snoo.d670a5ab.png","d670a5aba6f06b7864d8a6b8560c3a31"],["/static/media/gold-snoo.f56cc69a.png","f56cc69acea3b361139c628bda3118ac"],["/static/media/reddit-gilding.cb0b1183.png","cb0b11831094f6fd8f90dc2140852d93"],["/static/media/reddit-golds.2b1e445c.png","2b1e445c7d4fb3111c53c41de5da95b3"],["/static/media/snoo-tray.6d37ec35.png","6d37ec3565524f4b8a24c026efeb22fc"],["/static/media/upvoted-weekly-logo.b6eb6c5f.svg","b6eb6c5fc01ae81cf5cbe7579d92c350"],["/static/media/userpage-gild-x2.b543c4d8.png","b543c4d805eef28b4492ddcb380a19bc"],["/static/media/userpage-gild.75a1b869.png","75a1b869d9391ee1a7ed868ea79b343d"],["/static/media/using-creddits-x2.66aae1a1.png","66aae1a18679a207a07ea3cb9e89c65f"],["/static/media/using-creddits.201db9c5.png","201db9c5fc074f1c0fe83297f8bdbe70"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});