if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404/index.html",revision:"0f2f8042d417d48bb2bd8ded96b1cf70"},{url:"assets/index-CJ_foYHv.css",revision:null},{url:"assets/index-RhwBs9_u.js",revision:null},{url:"assets/prerender-BmKpbW2g.js",revision:null},{url:"index.html",revision:"a56f787e8167b8fec37c89fab2407c33"},{url:"registerSW.js",revision:"e015b5a058ebd09abe3e23c39eeb68cf"},{url:"manifest.webmanifest",revision:"522b0fb1c294a7a46a12cba43dff52d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
