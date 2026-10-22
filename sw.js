// Italiano Facile v1.7 — les pages utilisent le réseau en priorité, hors ligne en secours.
const CACHE = 'italiano-facile-v1.7-static';
const ASSETS = ['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener('message',event=>{
 if(event.data?.type==='SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('italiano-facile-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET') return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(request.mode==='navigate'||url.pathname.endsWith('/index.html')){
  event.respondWith((async()=>{
   try{
    const response=await fetch(new Request(request,{cache:'no-store'}));
    if(response.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',response.clone());}
    return response;
   }catch(e){return (await caches.match('./index.html'))||Response.error();}
  })());
  return;
 }
 event.respondWith((async()=>{
  try{const response=await fetch(new Request(request,{cache:'no-cache'}));
   if(response.ok && response.type==='basic'){const cache=await caches.open(CACHE);await cache.put(request,response.clone());}
   return response;
  }catch(e){return (await caches.match(request))||Response.error();}
 })());
});
