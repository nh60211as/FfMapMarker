if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),l={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",revision:null},{url:"assets/index-BScT5jfo.css",revision:null},{url:"assets/index-kj_pTthV.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"b6024f0a11454f42be2b4d0831ddb3fe"},{url:"manifest.webmanifest",revision:"522b0fb1c294a7a46a12cba43dff52d2"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"vite.svg",revision:"3682eca4fdab7d807d3042f21b6bfbc7"},{url:"manifest.webmanifest",revision:"522b0fb1c294a7a46a12cba43dff52d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
