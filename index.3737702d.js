!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire1827;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire1827=o),o("5xtVg"),o("3VTKu"),function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");function r(){e.classList.toggle("visually-hidden")}t.addEventListener("click",r),n.addEventListener("click",r)}(),o("gVa74");var c=o("bpxeT"),i=o("2TvXO"),a=o("cFGTe"),u=o("1KhuP"),s=o("3qwTJ"),l={weeklyCard:document.querySelector(".card")},d=new(0,a.RequestServer);function p(){return(p=e(c)(e(i).mark((function t(){var n,r,o,c,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.requestGenre)();case 3:return e.sent,e.next=6,d.trendingWeek();case 6:n=e.sent,r=n.data.results,o=(0,u.markup)(r.slice(0,3)),l.weeklyCard.innerHTML=o,c=document.querySelector(".weekly-tr__title"),a=document.querySelector(".switcher"),"true"===localStorage.getItem("isLight")&&c.classList.add("weekly-tr__title-light"),a.addEventListener("click",(function(){c.classList.toggle("weekly-tr__title-light")})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}!function(){p.apply(this,arguments)}();c=o("bpxeT"),i=o("2TvXO"),a=o("cFGTe");var m,v,g=o("UL92Z"),f=(o("UL92Z"),o("UL92Z"),g=o("UL92Z"),document.querySelector("#upcoming-loading-message")),x=document.querySelector("#upcoming-no-data-message"),_=document.querySelector("#upcoming-error-message"),y=document.querySelector("#upcoming-movie"),h=document.querySelector("#upcoming-remind-btn"),S=new(0,a.RequestServer),w={addText:"Remind me",removeText:"Delete from my library",localMarkup:"",currentStateButton:!0},T=(v=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.newFilms();case 3:return n=e.sent,e.next=6,L(n);case 6:q(),M(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),q(),b();case 15:case"end":return e.stop()}}),t,null,[[0,10]])}))),function(){return v.apply(this,arguments)}),L=function(){var t=e(c)(e(i).mark((function t(n){var r,o,c,a,u,s,l,d,p,m,v,g,f,x,_,y,h,S,T;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.data.results,o=r.length){e.next=6;break}return q(),k(),e.abrupt("return");case 6:return c=r[Math.round(Math.random()*(o-1))],console.log(c.id),V(c.original_title),F(c.backdrop_path),E(c.release_date),I(c.vote_average,c.vote_count),O(c.popularity),e.next=15,B(c);case 15:C(c.overview),a=c.poster_path,u=c.original_title,s=void 0===u?"":u,l=c.overview,d=void 0===l?"":l,p=c.release_date,m=void 0===p?"":p,v=c.vote_average,g=void 0===v?"":v,K(f=c.id),x=document.querySelector("#upcoming-movie-genre"),_=x.innerText,y=_.split(",").slice(0,2),h=m?m.substring(0,4):"no date",S="https://image.tmdb.org/t/p/w500".concat(a),a||(S="https://picsum.photos/500/750"),T=g.toFixed(1),w.localMarkup={id:f,str:"<img src='".concat(S,'\' loading="lazy" alt="').concat(d,'" class="card__img" />\n            <div class="container-info">\n            <h2 class="card__title">').concat(s,'</h2>\n            <p class="card__desc">').concat(y," | ").concat(h,'</p>\n            <p class="card__rating">').concat(T,"</p>\n            </div>")},console.log(w.localMarkup);case 28:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){return f.classList.add("upcoming__status-message--hidden")},k=function(){return x.classList.remove("upcoming__status-message--hidden")},b=function(){return _.classList.remove("upcoming__status-message--hidden")},M=function(){y.classList.remove("upcoming__movie--hidden")},E=function(e){var t=document.querySelector("#upcoming-movie-release-date"),n=new Date(e).toLocaleDateString().replace(/\//g,".");t.innerText=n},I=function(e,t){var n=document.querySelector("#upcoming-vote-average"),r=document.querySelector("#upcoming-vote-count");n.innerText=e,r.innerText=t},O=function(e){document.querySelector("#upcoming-movie-popularity").innerText=e.toFixed(1)},B=function(){var t=e(c)(e(i).mark((function t(n){var r,o,c,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("#upcoming-movie-genre"),e.next=3,S.movieGenre();case 3:o=e.sent,c=o?n.genre_ids.map((function(e){return o.data.genres.find((function(t){return t.id===e}))})):[],a=c.map((function(e){return e.name})).join(", "),r.innerText=a||"-";case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(e){document.querySelector("#upcoming-movie-about").innerText=e},V=function(e){document.querySelector("#upcoming-movie-title").innerText=e},F=function(){var t=e(c)(e(i).mark((function t(n){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#upcoming-movie-backdrop").src="https://image.tmdb.org/t/p/original".concat(n);case 2:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function K(e){var t=(0,g.getMovieList)(g.KEY_MOVIE_LIST);if(!t)return h.textContent=w.addText,void(w.currentStateButton=!0);-1!==(m=t.findIndex((function(t){return t.id===e})))?(h.textContent=w.removeText,w.currentStateButton=!1):(h.textContent=w.addText,w.currentStateButton=!0)}T(),console.log(undefined),h&&h.addEventListener("click",(function(e){console.log(w.currentStateButton),w.currentStateButton?((0,g.loadMoveList)(w.localMarkup),w.currentStateButton=!1,h.textContent=w.removeText,console.log("add")):(!function(e){var t=(0,g.getMovieList)(g.KEY_MOVIE_LIST);if(1===t.length)return void localStorage.removeItem(g.KEY_MOVIE_LIST);t.splice(e,1),(0,g.saveMovieList)(g.KEY_MOVIE_LIST,t)}(m),w.currentStateButton=!0,h.textContent=w.addText,console.log("remove"))})),o("cbP8w"),o("7F1pg"),o("8VrgS")}();
//# sourceMappingURL=index.3737702d.js.map
