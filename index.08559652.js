!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire1827;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequire1827=r);var c,a=r("bpxeT"),i=r("2TvXO"),u=new(0,(v=r("cFGTe")).RequestServer);function s(){return(s=e(a)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.trendingDay();case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){s.apply(this,arguments)}(),"function"!=typeof(c=window.Element.prototype).matches&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof c.closest&&(c.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));var l=document.getElementById("toggel-btn"),d=document.getElementById("toggel-svg");l.addEventListener("click",(function(){document.body.classList.contains("light")?(document.body.classList.remove("light"),d.use="./svg/symbol-defs.svg#icon-sun",localStorage.theme="dark"):(document.body.classList.add("light"),d.use="./svg/symbol-defs.svg#icon-moon",localStorage.theme="light")})),"light"===localStorage.theme&&(document.body.classList.add("light"),d.use="./svg/symbol-defs.svg#icon-moon"),function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");function o(){e.classList.toggle("visually-hidden")}t.addEventListener("click",o),n.addEventListener("click",o)}(),r("gVa74");a=r("bpxeT"),i=r("2TvXO");var m,v=r("cFGTe"),p=document.querySelector("#upcoming-loading-message"),f=document.querySelector("#upcoming-no-data-message"),g=document.querySelector("#upcoming-error-message"),y=document.querySelector("#upcoming-movie"),h=new(0,v.RequestServer),S=(m=e(a)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.newFilms();case 3:return n=e.sent,e.next=6,x(n);case 6:L(),w(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),L(),b();case 15:case"end":return e.stop()}}),t,null,[[0,10]])}))),function(){return m.apply(this,arguments)}),x=function(){var t=e(a)(e(i).mark((function t(n){var o,r,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.data.results,r=o.length){e.next=6;break}return L(),q(),e.abrupt("return");case 6:return c=o[Math.round(Math.random()*(r-1))],M(c.original_title),j(c.backdrop_path),k(c.release_date),_(c.vote_average,c.vote_count),T(c.popularity),e.next=14,E(c);case 14:D(c.overview);case 15:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){return p.classList.add("upcoming__status-message--hidden")},q=function(){return f.classList.remove("upcoming__status-message--hidden")},b=function(){return g.classList.remove("upcoming__status-message--hidden")},w=function(){y.classList.remove("upcoming__movie--hidden")},k=function(e){var t=document.querySelector("#upcoming-movie-release-date"),n=new Date(e).toLocaleDateString().replace(/\//g,".");t.innerText=n},_=function(e,t){var n=document.querySelector("#upcoming-vote-average"),o=document.querySelector("#upcoming-vote-count");n.innerText=e,o.innerText=t},T=function(e){document.querySelector("#upcoming-movie-popularity").innerText=e.toFixed(1)},E=function(){var t=e(a)(e(i).mark((function t(n){var o,r,c,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=document.querySelector("#upcoming-movie-genre"),e.next=3,h.movieGenre();case 3:r=e.sent,c=r?n.genre_ids.map((function(e){return r.data.genres.find((function(t){return t.id===e}))})):[],a=c.map((function(e){return e.name})).join(", "),o.innerText=a||"-";case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(e){document.querySelector("#upcoming-movie-about").innerText=e},M=function(e){document.querySelector("#upcoming-movie-title").innerText=e},j=function(){var t=e(a)(e(i).mark((function t(n){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#upcoming-movie-backdrop").src="https://image.tmdb.org/t/p/original".concat(n);case 2:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();S()}();
//# sourceMappingURL=index.08559652.js.map