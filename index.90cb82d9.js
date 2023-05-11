function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequire1827;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequire1827=o),o.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("eEHR3",(function(e,t){var r=o("hY6V0"),n=o("eK0aa"),i=o("OcCik");const a={hero:document.getElementById("hero")},s=new(0,r.RequestServer);!async function(){try{const e=await s.trendingDay(),{results:t}=e.data,r=t,o=(0,n.markupHero)(r);a.hero.innerHTML=o,(0,i.applyWatchTraileListener)();const l=document.querySelector(".hero__discription"),c=document.querySelector(".hero__title"),d=document.querySelector(".hero__text");let u=document.querySelector(".switcher");"true"===localStorage.getItem("isLight")&&(l.classList.add("hero__discription-light"),c.classList.add("hero__title-light"),d.classList.add("hero__text-light")),u.addEventListener("click",(()=>{l.classList.toggle("hero__discription-light"),c.classList.toggle("hero__title-light"),d.classList.toggle("hero__text-light")}))}catch(e){console.log(e)}}()})),o.register("eK0aa",(function(r,n){e(r.exports,"markupHero",(function(){return a}));var i=o("i4WMq");function a(e){let r=e[Math.round(Math.random()*(e.length-1))],n="";r||(r={original_title:"Let’s Make Your Own Cinema",overview:"Is a guide to creating a personalized movie theater experience. \n        You'll need a projector, screen, and speakers. Decorate your space, choose your \n        films, and stock up on snacks for the full experience.",vote_average:"",id:""},n=t(i));const{backdrop_path:o,original_title:a="",overview:s="",vote_average:l="",id:c}=r;return n=`https://image.tmdb.org/t/p/original${o}`,`<div class="hero__discription">\n\n            <h2 class="hero__title">${a}</h2>\n            <p class="hero__rating">${l}</p>\n            <p class="hero__text">${s}</p>\n            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="${c}" type="button">Watch trailer</button>\n            </div>\n            <div class="hero__backgr" id="${c}">\n            <img src='${n}' loading="lazy" alt="${s}" class="hero__img" />\n            </div>`}})),o.register("i4WMq",(function(e,t){e.exports=new URL(o("kyEFX").resolve("9t7bk"),import.meta.url).toString()})),o.register("OcCik",(function(t,r){e(t.exports,"applyWatchTraileListener",(function(){return c}));var n=o("hY6V0"),i=o("6pZM0");document.querySelector('[data-modal="modal-2"]');const a=new(0,n.RequestServer);async function s(e){try{const t=e.currentTarget.getAttribute("data-id"),r=await a.movieTrailer(t),{results:n}=r.data,o=n[0];if(o){const e=document.getElementsByClassName("modal-no-trailer")[0],t=document.getElementsByClassName("modal-trailer")[0];let r=`<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/${o.key}" title="${o.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;t.innerHTML=r,e.classList.add("is-hidden"),t.classList.remove("is-hidden")}const s=document.querySelector(".modal-trailer");let c=document.querySelector(".switcher");"true"===localStorage.getItem("isLight")&&s.classList.add("modal-trailer-light"),c.addEventListener("click",(()=>{s.classList.toggle("modal-trailer-light")}))}catch(e){console.log(e)}finally{(0,i.modalListener)("modal-2",l)}}function l(){const e=document.getElementsByClassName("modal-trailer")[0],t=document.getElementsByClassName("modal-no-trailer")[0];e.innerHTML="",t?.classList.remove("is-hidden"),e?.classList.add("is-hidden")}function c(){document.getElementById("watch-trailter__btn").addEventListener("click",s)}})),o.register("3huUq",(function(t,r){e(t.exports,"markup",(function(){return i}));var n=o("7o4ng");function i(e){return e.map((({poster_path:e,original_title:t="",genre_ids:r,overview:i="",release_date:o="",vote_average:a="",id:s})=>{let l;l=o?o.substring(0,4):"no date";let c=`https://image.tmdb.org/t/p/w500${e}`;e||(c="https://picsum.photos/500/750");let d=a.toFixed(1);return`<li class="card__item list" id="${s}">\n            <img src='${c}' loading="lazy" alt="${i}" class="card__img" />\n            <div class="container-info" data-modal-open="modal-1">\n            <h2 class="card__title">${t}</h2>\n            <p class="card__desc">${(0,n.nameGenres)(r).join(", ")} | ${l}</p>\n            <p class="card__rating">${d}</p>\n            </div>\n            </li>`})).join("")}})),o.register("7o4ng",(function(t,r){e(t.exports,"requestGenre",(function(){return a})),e(t.exports,"nameGenres",(function(){return s}));const n=new(0,o("hY6V0").RequestServer);let i;async function a(){try{const e=await n.movieGenre(),{genres:t}=e.data;i=t.reduce(((e,{id:t,name:r})=>(e[t]=r,e)),{})}catch(e){console.log(e)}}function s(e){const t=e.map((e=>i[e]));return t.length>2?t.splice(2):0===t.length&&t.push("no genres"),t}})),o.register("8Yq9A",(function(e,t){})),o("kyEFX").register(JSON.parse('{"co8kk":"index.90cb82d9.js","9t7bk":"desktop.a15d7519.jpg"}'));
//# sourceMappingURL=index.90cb82d9.js.map
