if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const o=e=>n(e,c),d={module:{uri:c},exports:i,require:o};a[c]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(r(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-f6MD9OEYpLP6lE7RfhynB.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/README.md",revision:"041277b16ceced362174f7ebc88b97d2"},{url:"/_next/static/chunks/61-9750c89028e4f92a.js",revision:"9750c89028e4f92a"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-b188aac165f23d6e.js",revision:"b188aac165f23d6e"},{url:"/_next/static/chunks/pages/_app-5b68086a05041122.js",revision:"5b68086a05041122"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-83e0555523d7f423.js",revision:"83e0555523d7f423"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/9f3512ef2133a6cc.css",revision:"9f3512ef2133a6cc"},{url:"/_next/static/css/f25e4d00160630b3.css",revision:"f25e4d00160630b3"},{url:"/_next/static/f6MD9OEYpLP6lE7RfhynB/_buildManifest.js",revision:"0ea1bcd53ef37156a578a946b53302a3"},{url:"/_next/static/f6MD9OEYpLP6lE7RfhynB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1060bab20f18b5c2-s.p.woff2",revision:"d5de368ad6cb9721be72319431de3adb"},{url:"/_next/static/media/8ed0c04f7e5d7b36-s.woff2",revision:"d9e0d8b1dd2f16658a138c486b5c8c76"},{url:"/_next/static/media/b1464bad92c88a2d-s.woff2",revision:"86d7730928022ce4a8457e979238654b"},{url:"/_next/static/media/c528baaebca50056-s.woff2",revision:"b043858588196a795ae0613d36b0b7d4"},{url:"/_next/static/media/df4ba022c23c08de-s.woff2",revision:"60883f3586a85c7be1f5aa9e985aea48"},{url:"/_offline",revision:"f6MD9OEYpLP6lE7RfhynB"},{url:"/android-chrome-144x144.png",revision:"58c7563ed2787f9910d2fcb9d5dfd0fa"},{url:"/android-chrome-192x192.png",revision:"2f4642a9676fc86013eee34c67dbee17"},{url:"/android-chrome-256x256.png",revision:"80887e6ee2bef22baffede8e86a198a9"},{url:"/android-chrome-36x36.png",revision:"e046702853d89f806a659e2b6e361fe4"},{url:"/android-chrome-384x384.png",revision:"ea537f17c20e7c1401daf99b5e7d5409"},{url:"/android-chrome-48x48.png",revision:"f1659d964396a116b64a3b82db1b8793"},{url:"/android-chrome-512x512.png",revision:"49d0b336d706cbf12b7c54d231ecc241"},{url:"/android-chrome-72x72.png",revision:"eca3d706e01fbcb094b0b29b9bf4017b"},{url:"/android-chrome-96x96.png",revision:"867f5be781effb4081e26d4cdfe32ed5"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"4cdd5d9aaaae9015ccd71de29461a4c2"},{url:"/apple-touch-icon-114x114.png",revision:"7142484ee30dc6379aeee32bf1240f49"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"535f95da9de715bf033a1f966d644a03"},{url:"/apple-touch-icon-120x120.png",revision:"0e142009cd2ce2a9790347dad876ee03"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"12b9e912ec04f0a5b97aba28be3b89c3"},{url:"/apple-touch-icon-144x144.png",revision:"a48d22c6364415d598d883e6b3c7fd6c"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"617c3a64356779e7b9f5711a614c1144"},{url:"/apple-touch-icon-152x152.png",revision:"ffdc6e77c8c976701b53cb90cc7c997a"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"0945fdc690960f22d0fc88fa2d581e8c"},{url:"/apple-touch-icon-180x180.png",revision:"4f48449c571b6630ce504ffb0aeac940"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"4ab82abf7632263e85624b8ba7c4e0e2"},{url:"/apple-touch-icon-57x57.png",revision:"ace3117aed2b96f4c393565550af6e57"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"c36ec71339b42bb58d1c7da5685cc290"},{url:"/apple-touch-icon-60x60.png",revision:"4d4d69061735a1d1514fb12227175df0"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"8efaefabf6821d10a4506d36bf07fec9"},{url:"/apple-touch-icon-72x72.png",revision:"102108cf50a48473339d9d6721ef3f00"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"9f9a3b764ea1227704f93c458a86bdbd"},{url:"/apple-touch-icon-76x76.png",revision:"da2b912c26022950e191af076c911356"},{url:"/apple-touch-icon-precomposed.png",revision:"0945fdc690960f22d0fc88fa2d581e8c"},{url:"/apple-touch-icon.png",revision:"4f48449c571b6630ce504ffb0aeac940"},{url:"/branding/FEUTECHACM2223 BRAND BOOK V.2.pdf",revision:"d8e7c9b0da60d2b9d7be91c6777cf7a4"},{url:"/branding/home-asset.png",revision:"5a3f96d944519fbe5319aa0b6e8e9cbe"},{url:"/browserconfig.xml",revision:"6c2ef00130e03bb74ebbef65b645e057"},{url:"/favicon-16x16.png",revision:"dca4ab98c6c2f53ef613a9adafd13bbe"},{url:"/favicon-32x32.png",revision:"ac3a842bfd31aa5de4582d8e01a79031"},{url:"/favicon.ico",revision:"a07cdfba4ed031d8977a8fb7145f4f7c"},{url:"/fonts/fallback.woff2",revision:"f6MD9OEYpLP6lE7RfhynB"},{url:"/html_code.html",revision:"9ccfa01910fdbf52b1cce2c9ef8349b6"},{url:"/logo/feuacm.png",revision:"778a5336c3ed280ca3306b4b9b39a038"},{url:"/logo/og_blue.png",revision:"89ecc374c913be5d4fa68c38e3a78975"},{url:"/logo/og_image.png",revision:"0614b9eba3f892b57838d7eb0320bd64"},{url:"/manifest.webmanifest",revision:"61a5f9c6337dc4308c59c2172537321f"},{url:"/mstile-144x144.png",revision:"006561d189307fb7b94b8e1860c6fc20"},{url:"/mstile-150x150.png",revision:"95223c86ec0fdf5aca386de15d5cd877"},{url:"/mstile-310x150.png",revision:"21361ab63da73d4e27c44c4a66d3d992"},{url:"/mstile-310x310.png",revision:"38d303f3ea9b9691a745a0d9033f1956"},{url:"/mstile-70x70.png",revision:"51ed22eee18d487855e31595d94fc0f0"},{url:"/safari-pinned-tab.svg",revision:"75531d62cf77dab726d00da893c6bf51"},{url:"/~partytown/debug/partytown-atomics.js",revision:"282b8eed8270376b216fb0cbe9837a3b"},{url:"/~partytown/debug/partytown-media.js",revision:"f100ea3299eee0ede6ab38bedbbe9d93"},{url:"/~partytown/debug/partytown-sandbox-sw.js",revision:"5cb0e6c1263b70f2380cad1ae9a220c0"},{url:"/~partytown/debug/partytown-sw.js",revision:"f20c2ec5ec83ab79083370ca0a198e35"},{url:"/~partytown/debug/partytown-ww-atomics.js",revision:"1fccbfffebac19ff29ebbd76bba19938"},{url:"/~partytown/debug/partytown-ww-sw.js",revision:"f3a7e82c8623360ce00e8d7f09c8c32d"},{url:"/~partytown/debug/partytown.js",revision:"ff73400dbfe80a5830ed787c24a7430c"},{url:"/~partytown/partytown-atomics.js",revision:"f73011ed34e80485da61808edb815fd3"},{url:"/~partytown/partytown-media.js",revision:"dfa87692ed33c0e705b0c9d838549882"},{url:"/~partytown/partytown-sw.js",revision:"b2701f190efc11bf45e3e5e0b3078751"},{url:"/~partytown/partytown.js",revision:"16f5e4a295dda8145d232838d422a7d8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.NetworkFirst({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));