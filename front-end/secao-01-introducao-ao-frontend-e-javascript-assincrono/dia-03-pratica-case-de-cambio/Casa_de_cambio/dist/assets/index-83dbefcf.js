import m from"https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/+esm";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector("input"),p=document.querySelector("button"),f=document.querySelector("h2"),s=document.querySelector(".container-coins"),h=()=>{s.innerHTML.length>0&&(s.innerHTML="")},C=()=>{const i=document.createElement("div"),n=document.createElement("img"),r=document.createElement("span"),c=document.createElement("span");return{divCoin:i,imgCoin:n,nameCoin:r,valueCoin:c}},y=i=>i.some(n=>n[0]===a.value.toUpperCase()),g=()=>{m.fire({icon:"error",title:"Oops..",text:"Você precisa passar uma moeda"})},v=i=>{const n=Object.entries(i);y(n)?(f.innerHTML=`Valores referentes a 1 ${a.value.toUpperCase()}`,h(),n.forEach(c=>{const[e,t]=c,{divCoin:o,imgCoin:l,nameCoin:u,valueCoin:d}=C();l.src="./assets/coins.svg",u.innerHTML=e,d.innerHTML=t.toFixed(3),o.className="coin",s.appendChild(o),o.appendChild(l),o.appendChild(u),o.appendChild(d)})):g()},L=()=>{const n=`https://api.exchangerate.host/latest?base=${a.value}`;return fetch(n).then(r=>r.json()).then(r=>v(r.rates))};p.addEventListener("click",L);
