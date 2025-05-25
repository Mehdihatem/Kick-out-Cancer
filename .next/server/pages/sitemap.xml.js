(()=>{var e={};e.id=164,e.ids=[164,888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},990:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>b,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>y});var s=r(7093),i=r(5244),n=r(1323),o=r(7645),l=r(6814),c=r(6783),u=e([l]);l=(u.then?(await u)():u)[0];let d=(0,n.l)(c,"default"),p=(0,n.l)(c,"getStaticProps"),m=(0,n.l)(c,"getStaticPaths"),g=(0,n.l)(c,"getServerSideProps"),h=(0,n.l)(c,"config"),f=(0,n.l)(c,"reportWebVitals"),y=(0,n.l)(c,"unstable_getStaticProps"),x=(0,n.l)(c,"unstable_getStaticPaths"),S=(0,n.l)(c,"unstable_getStaticParams"),P=(0,n.l)(c,"unstable_getServerProps"),v=(0,n.l)(c,"unstable_getServerSideProps"),b=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});a()}catch(e){a(e)}})},5376:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>o});var s=r(997),i=r(6904),n=e([i]);function o(){return s.jsx(i.E.nav,{initial:{y:-100},animate:{y:0},className:"sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-100",children:s.jsx("div",{className:"max-w-7xl mx-auto",children:s.jsx("ul",{className:"flex items-center justify-center gap-8 px-4 py-4 text-sm font-medium",children:[{href:"#hero",label:"Accueil"},{href:"#about",label:"Notre ambition"},{href:"#event",label:"Prochain \xe9v\xe8nement"},{href:"#partners",label:"Partenaires"},{href:"#supporters",label:"Ils nous soutiennent"},{href:"#don",label:"Je soutiens la recherche"},{href:"#team",label:"Qui sommes-nous ?"}].map(e=>s.jsx("li",{children:s.jsx("a",{href:e.href,className:"text-gray-600 hover:text-primary transition-colors",children:e.label})},e.href))})})})}i=(n.then?(await n)():n)[0],a()}catch(e){a(e)}})},6814:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(997),i=r(968),n=r.n(i),o=r(4298),l=r.n(o),c=r(5376);r(6764);var u=e([c]);function d({Component:e,pageProps:t}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.jsx("link",{rel:"icon",href:"/images/favicon.svg"}),s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"Event",name:"Tournoi de Gala Kick Out Cancer 2025",startDate:"2025-09-13T09:00:00+02:00",endDate:"2025-09-13T18:00:00+02:00",location:{"@type":"Place",name:"Stade de CentraleSup\xe9lec",address:{"@type":"PostalAddress",streetAddress:"3 rue Joliot Curie",addressLocality:"Gif-sur-Yvette",postalCode:"91190",addressCountry:"FR"}},organizer:{"@type":"Organization",name:"Kick Out Cancer",url:"https://kickoutcancer.org"},description:"Tournoi de football caritatif pour soutenir la recherche contre le cancer \xe0 l&#39;IHU PRISM.",image:"https://kickoutcancer.org/images/save-the-date-affiche.jpg"})}})]}),s.jsx(l(),{src:`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`,strategy:"afterInteractive"}),s.jsx(l(),{id:"google-analytics",strategy:"afterInteractive",children:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}),s.jsx(c.Z,{}),s.jsx(e,{...t})]})}c=(u.then?(await u)():u)[0],a()}catch(e){a(e)}})},7645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(997),s=r(2198);function i(){return(0,a.jsxs)(s.Html,{lang:"fr",children:[a.jsx(s.Head,{children:a.jsx("link",{rel:"preload",href:"/fonts/inter-var.woff2",as:"font",type:"font/woff2",crossOrigin:"anonymous"})}),(0,a.jsxs)("body",{children:[a.jsx("noscript",{children:(0,a.jsxs)("div",{style:{padding:"2rem",textAlign:"center",backgroundColor:"#f3f4f6",color:"#1f2937",fontFamily:"system-ui, -apple-system, sans-serif"},children:[a.jsx("h1",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"Kick Out Cancer"}),a.jsx("p",{children:"Veuillez activer JavaScript pour afficher le site complet."})]})}),a.jsx(s.Main,{}),a.jsx(s.NextScript,{})]})]})}},6783:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,getStaticProps:()=>s});let a="https://kickoutcancer.org",s=async()=>({props:{sitemap:`<?xml version="1.0" encoding="UTF-8"?>
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
 `}}),i=function(){return null}},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},5315:e=>{"use strict";e.exports=require("path")},9923:e=>{"use strict";e.exports=import("motion-dom")},7776:e=>{"use strict";e.exports=import("motion-utils")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[141,859],()=>r(990));module.exports=a})();