"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{7323:function(e,t,n){var s=n(5893),i=n(1664),r=n.n(i),a=n(486);t.Z=e=>{let{href:t,isExternal:n,children:i}=e;return(0,s.jsxs)(r(),{href:t,target:n?"_blank":void 0,rel:n?"noreferrer":void 0,className:"button-link",children:[i," ",(0,s.jsx)(a.Z,{})]})}},6604:function(e,t,n){var s=n(5893),i=n(7294),r=n(1664),a=n.n(r),l=n(9980),o=n.n(l),c=n(512),d=n(7742);n(6712);var u=n(5128),h=n(5939),m=n(486),v=n(4764),_=n(6874),f=n(1854);t.Z=e=>{let{event:t,reverseColumns:n,isFullPage:r}=e,{setAnimationStep:l}=(0,d.h)(),x=(0,c.Z)("event-detail",{"reverse-columns":n,"full-page":r});return(0,i.useEffect)(()=>{l(7)},[l]),(0,s.jsxs)("article",{className:x,children:[(0,s.jsxs)("div",{className:"event-detail__info",children:[(0,s.jsxs)("div",{className:"event-detail__meta",children:[(0,s.jsxs)("div",{className:"event-detail__column",children:[(0,s.jsx)(_.Z,{label:t.formattedDate.date}),(0,s.jsx)(h.Z,{type:t.type})]}),(0,s.jsx)(v.Z,{date:t.formattedDate.date,startTime:t.formattedDate.startTime,endTime:t.formattedDate.endTime})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{className:"event-detail__user",href:t.userLink,target:"_blank",rel:"noreferrer",children:t.userName}),r?(0,s.jsx)("h1",{className:"event-detail__title",children:t.title}):(0,s.jsx)(a(),{href:{pathname:t.link},className:"event-detail__title",children:t.title}),r?(0,s.jsx)("div",{className:"event-detail__text",dangerouslySetInnerHTML:{__html:o()().render(t.content)}}):null]}),r?null:(0,s.jsx)(f.Z,{href:t.linkUrl,children:(0,u.g)("event-button:".concat(t.type))})]}),r?(0,s.jsx)("div",{className:"event-detail__link-wrapper",children:(0,s.jsxs)("a",{className:"event-detail__link",href:t.linkUrl,target:"_blank",rel:"noreferrer",children:[(0,u.g)("event-button:".concat(t.type))," ",(0,s.jsx)(m.Z,{})]})}):null]})}},2913:function(e,t,n){n.d(t,{Z:function(){return c}});var s=n(5893),i=n(7294),r=n(512),a=n(7742),l=n(5128),o=function(e){let t={top:window.pageYOffset,bottom:window.pageYOffset+window.innerHeight},n=e.getBoundingClientRect(),s={top:n.y+window.pageYOffset,bottom:n.y+n.height+window.pageYOffset};if(t.top>s.bottom||t.bottom<s.top)return 0;if(t.top<s.top&&t.bottom>s.bottom||s.top<t.top&&s.bottom>t.bottom)return 100;let i=n.height,r=i;s.top<t.top&&(r=i-(window.pageYOffset-s.top)),s.bottom>t.bottom&&(r-=s.bottom-t.bottom);let a=r/window.innerHeight*100;return Math.round(a)},c=e=>{let{containerRef:t}=e,[n,c]=(0,i.useState)({}),{setAnimationStep:d,animationStep:u}=(0,a.h)(),h=(0,i.useCallback)(e=>{let t=n[e].getBoundingClientRect().top+window.pageYOffset+-20;window.scrollTo({top:t,behavior:"smooth"})},[n]);return(0,i.useEffect)(()=>{let e=t.current.childNodes,n={};e.forEach(e=>{n[e.classList[0]]=e}),c(n);let s=()=>{let t=[...e].map(e=>o(e)).findIndex(e=>e>=50);d(t)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[t]),(0,s.jsx)("div",{className:"anchor-navigation",children:Object.keys(n).map((e,t)=>(0,s.jsx)("button",{className:(0,r.Z)("anchor-navigation__button",{active:u===t}),onClick:()=>h(e,t),children:(0,s.jsx)("span",{className:"anchor-navigation__text",children:(0,l.g)("anchor-nav:".concat(e))})},"anchor-".concat(e)))})}},8844:function(e,t,n){n.d(t,{Z:function(){return v}});var s=n(5893),i=n(6604),r=n(1470),a=n(7294),l=n(5128),o=n(6712),c=n(5047),d=n(7323),u=e=>{let{title:t,buttonText:n}=e,i=(0,a.useRef)(null),r=(0,a.useRef)(null),{translateY:u}=(0,c.Z)(r,i,.05);return(0,s.jsxs)("div",{className:"connection",children:[(0,s.jsx)("div",{className:"connection__background",ref:r,children:(0,s.jsx)("img",{className:"connection__image",ref:i,style:{transform:"scale(1.1) translateY(".concat(u,"%)")},src:"/images/footer.jpg",alt:(0,l.g)("connection:image-description")})}),(0,s.jsxs)("div",{className:"connection__content",children:[(0,s.jsx)("h2",{className:"connection__title",children:t}),(0,s.jsx)("div",{className:"connection__button",children:(0,s.jsx)(d.Z,{href:o.$L.path,children:n})})]})]})},h=()=>(0,s.jsx)("section",{className:"about",children:(0,s.jsxs)("div",{className:"about__content",children:[(0,s.jsx)("div",{className:"about__column",children:(0,s.jsx)("h2",{className:"about__title",children:"Maintainer Month 2024 Advisory Council"})}),(0,s.jsxs)("div",{className:"about__text",children:[(0,s.jsx)("p",{children:"Kara Sowles - GitHub "}),(0,s.jsx)("p",{children:"Josh Simmons - The Matrix.org Foundation "}),(0,s.jsx)("p",{children:"Julia Ferraioli - Amazon Web Services"}),(0,s.jsx)("p",{children:"Richard Littauer - SustainOSS"}),(0,s.jsx)("p",{children:"Melissa Mendon\xe7a - Quansight"})]})]})}),m=e=>{let t=(0,a.useMemo)(()=>{let t=e.filter(e=>{let[t,n]=e.date.split("/").map(e=>parseInt(e)),s=new Date,i=s.getUTCMonth()+1,r=s.getUTCDate();return t===i&&n>=r||t>i});return t.slice(0,3)},[e]);return t},v=e=>{let{title:t,list:n,connectionTitle:a,connectionButtonText:l}=e,o=m(n);return(0,s.jsxs)("section",{className:"events",children:[(0,s.jsxs)("div",{className:"events__content",children:[(0,s.jsx)(r.Z,{title:t}),(0,s.jsx)("div",{className:"events__list",children:o.map((e,t)=>(0,s.jsx)(i.Z,{event:e,reverseColumns:t%2!=0},e.slug))})]}),(0,s.jsx)(u,{title:a,buttonText:l}),(0,s.jsx)(h,{})]})}},834:function(e,t,n){var s=n(5893),i=n(7294),r=n(5158);t.Z=e=>{let{image:t,imageDescription:n,title:a,subtitle:l}=e,o=(0,i.useRef)(null),{translateY:c}=(0,r.Z)(o,.02);return(0,s.jsxs)("div",{className:"get-involved__example",ref:o,style:{transform:"translateY(-".concat(c,"px)")},children:[(0,s.jsx)("img",{className:"get-involved__image",src:t,alt:n}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"get-involved__example-subtitle",children:l}),(0,s.jsx)("p",{className:"get-involved__text",children:a})]})]})}},1005:function(e,t,n){var s=n(5893),i=n(7294),r=n(7323);n(6712);var a=n(5128),l=n(5158),o=n(5047);t.Z=e=>{let{date:t,title:n,buttonText:c,buttonLink:d}=e,u=(0,i.useRef)(null),h=(0,i.useRef)(null),{translateY:m}=(0,l.Z)(h),{translateY:v}=(0,o.Z)(h,u);return(0,s.jsx)("section",{className:"hero",children:(0,s.jsxs)("div",{className:"hero__grid",children:[(0,s.jsx)("div",{className:"hero__background",children:(0,s.jsx)("div",{className:"hero__image-wrapper",ref:h,style:{transform:"translateY(-".concat(m,"px)")},children:(0,s.jsx)("img",{className:"hero__image",ref:u,style:{transform:"scale(1.025) translateY(".concat(v,"%)")},src:"/images/opener.jpg",alt:(0,a.g)("hero:image-description")})})}),(0,s.jsxs)("div",{className:"hero__content",children:[(0,s.jsx)("p",{className:"hero__chip",children:t}),(0,s.jsx)("h1",{className:"hero__title",children:n}),(0,s.jsx)(r.Z,{href:d,children:c})]})]})})}},1470:function(e,t,n){var s=n(5893),i=n(486);t.Z=e=>{let{title:t}=e;return(0,s.jsx)("div",{className:"section-divider",children:(0,s.jsxs)("div",{className:"section-divider__content",children:[(0,s.jsx)("h3",{className:"section-divider__title",children:t}),(0,s.jsx)(i.Z,{})]})})}},5047:function(e,t,n){var s=n(7294);t.Z=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.025,[i,r]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let s=e.current,i=t.current;if(!s||!i)return;let a=()=>{requestAnimationFrame(()=>{let e=s.getBoundingClientRect().top,t=s.getBoundingClientRect().bottom;if(e<window.innerHeight&&t>0){let e=(100*t/window.innerHeight*n).toFixed(2);r(e)}})};return a(),window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[e,n,t]),{translateY:i}}},5158:function(e,t,n){var s=n(7294);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[n,i]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let n=e.current;if(!n)return;let s=()=>{requestAnimationFrame(()=>{let e=n.getBoundingClientRect().top,s=n.getBoundingClientRect().bottom;if(e<window.innerHeight&&s>0){let e=window.scrollY*t;i(e)}})};return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[t,e]),{translateY:n}}}}]);