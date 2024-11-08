import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o,r){r.innerHTML="";const s=o.map(f).join("");r.insertAdjacentHTML("beforeend",s)}function f({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:n}){return`
      <li class="photo-card">
        <a class="gallery-link" href="${r}">
          <img class="image"
            src="${o}"
            alt="${s}"
            loading="lazy"
          />
        </a>
        <div class="wrapper">
          <div class="info">
            <b class="student-info"><span class="atribute">Likes:</span> ${i}</b>
            <b class="student-info"><span class="atribute">Views:</span> ${e}</b>
            <b class="student-info"><span class="atribute">Comments:</span> ${t}</b>
            <b class="student-info"><span class="atribute">Downloads:</span> ${n}</b>
          </div>
        </div>
      </li>
    `}const d="44985278-910018cc950880488ff0b70a1";function p(o){const r=`https://pixabay.com/api/?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()})}const a={searchFormRef:document.querySelector(".searchForm"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.searchFormRef.addEventListener("submit",h);let m=new c(".gallery a",{captionsData:"alt"});function h(o){o.preventDefault(),a.galleryEl.innerHTML="",a.loader.style.display="block";const r=o.target.elements.search.value.trim();r!==""&&p(r).then(s=>{s.hits.length>0?(u(s.hits,a.galleryEl),a.searchFormRef.reset(),m.refresh()):l.error({title:"",message:`<div>Sorry, there are no images matching</div> 
          <div>your search query. 
          Please try again!</div>`,position:"topRight",color:"#ef4040",messageColor:" #fafafb",messageSize:"16",iconColor:"white",maxWidth:"432px  ",close:!0,closeOnClick:!0})}).catch(s=>{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}).finally(()=>{a.loader.style.display="none"})}
//# sourceMappingURL=index.js.map
