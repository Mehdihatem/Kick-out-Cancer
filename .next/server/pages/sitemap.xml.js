(()=>{var e={};e.id=164,e.ids=[164,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7094:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>g,reportWebVitals:()=>y,routeModule:()=>w,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>S});var i=r(7093),s=r(5244),n=r(1323),o=r(2899),l=r.n(o),c=r(6814),u=r(6783),d=e([c]);c=(d.then?(await d)():d)[0];let p=(0,n.l)(u,"default"),g=(0,n.l)(u,"getStaticProps"),m=(0,n.l)(u,"getStaticPaths"),h=(0,n.l)(u,"getServerSideProps"),f=(0,n.l)(u,"config"),y=(0,n.l)(u,"reportWebVitals"),S=(0,n.l)(u,"unstable_getStaticProps"),P=(0,n.l)(u,"unstable_getStaticPaths"),x=(0,n.l)(u,"unstable_getStaticParams"),b=(0,n.l)(u,"unstable_getServerProps"),v=(0,n.l)(u,"unstable_getServerSideProps"),w=new i.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:u});a()}catch(e){a(e)}})},5376:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>o});var i=r(997),s=r(6197),n=e([s]);function o(){return i.jsx(s.motion.nav,{initial:{y:-100},animate:{y:0},className:"sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-100",children:i.jsx("div",{className:"max-w-7xl mx-auto",children:i.jsx("ul",{className:"flex items-center justify-center gap-8 px-4 py-4 text-sm font-medium",children:[{href:"#hero",label:"Accueil"},{href:"#about",label:"Notre ambition"},{href:"#event",label:"Prochain \xe9v\xe8nement"},{href:"#partners",label:"Partenaires"},{href:"#supporters",label:"Ils nous soutiennent"},{href:"#don",label:"Je soutiens la recherche"},{href:"#team",label:"Qui sommes-nous ?"}].map(e=>i.jsx("li",{children:i.jsx("a",{href:e.href,className:"text-gray-600 hover:text-primary transition-colors",children:e.label})},e.href))})})})}s=(n.then?(await n)():n)[0],a()}catch(e){a(e)}})},6814:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var i=r(997),s=r(968),n=r.n(s),o=r(4298),l=r.n(o),c=r(5376);r(6764);var u=e([c]);function d({Component:e,pageProps:t}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n(),{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.jsx("link",{rel:"icon",href:"/images/favicon.svg"}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"Event",name:"Tournoi de Gala Kick Out Cancer 2025",startDate:"2025-09-13T09:00:00+02:00",endDate:"2025-09-13T18:00:00+02:00",location:{"@type":"Place",name:"Stade de CentraleSup\xe9lec",address:{"@type":"PostalAddress",streetAddress:"3 rue Joliot Curie",addressLocality:"Gif-sur-Yvette",postalCode:"91190",addressCountry:"FR"}},organizer:{"@type":"Organization",name:"Kick Out Cancer",url:"https://kickoutcancer.org"},description:"Tournoi de football caritatif pour soutenir la recherche contre le cancer \xe0 l&#39;IHU PRISM.",image:"https://kickoutcancer.org/images/save-the-date-affiche.jpg"})}})]}),i.jsx(l(),{src:`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`,strategy:"afterInteractive"}),i.jsx(l(),{id:"google-analytics",strategy:"afterInteractive",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}),i.jsx(c.Z,{}),i.jsx(e,{...t})]})}c=(u.then?(await u)():u)[0],a()}catch(e){a(e)}})},6783:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,getStaticProps:()=>i});let a="https://kickoutcancer.org",i=async()=>({props:{sitemap:`<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${a}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${a}/qui-sommes-nous</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${a}/event-2025</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${a}/inscription</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${a}/partenaires</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${a}/impact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${a}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
   </urlset>
 `}}),s=function(){return null}},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},5315:e=>{"use strict";e.exports=require("path")},6197:e=>{"use strict";e.exports=import("framer-motion")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[899,298],()=>r(7094));module.exports=a})();