"use strict";(self.webpackChunkfrontend_study=self.webpackChunkfrontend_study||[]).push([[732],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),h=p(n),d=l,k=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6735:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},o="03 this",i={unversionedId:"core-javascript/03 this",id:"core-javascript/03 this",title:"03 this",description:"\ub2e4\ub978 \uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4\ub85c \uc0dd\uc131\ud55c \uc778\uc2a4\ud134\uc2a4 \uac1d\uccb4\ub97c \ub9d0\ud569\ub2c8\ub2e4.",source:"@site/docs/core-javascript/03 this.md",sourceDirName:"core-javascript",slug:"/core-javascript/03 this",permalink:"/docs/core-javascript/03 this",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-javascript/03 this.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",permalink:"/docs/core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8"}},s={},p=[{value:"3-1 \uc0c1\ud669\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 this",id:"3-1-\uc0c1\ud669\uc5d0-\ub530\ub77c-\ub2ec\ub77c\uc9c0\ub294-this",level:2},{value:"3-1-1 \uc804\uc5ed \uacf5\uac04\uc5d0\uc11c\uc758 this",id:"3-1-1-\uc804\uc5ed-\uacf5\uac04\uc5d0\uc11c\uc758-this",level:3},{value:"\ubc30\uacbd \uc9c0\uc2dd\ud83d\udca1 \uc804\uc5ed \uacf5\uac04\uc5d0\uc11c\ub9cc \ubc1c\uc0dd\ud558\ub294 \ud2b9\uc774\ud55c \uc131\uc9c8",id:"\ubc30\uacbd-\uc9c0\uc2dd-\uc804\uc5ed-\uacf5\uac04\uc5d0\uc11c\ub9cc-\ubc1c\uc0dd\ud558\ub294-\ud2b9\uc774\ud55c-\uc131\uc9c8",level:4},{value:"3-1-2 \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c\ud560 \ub54c \uadf8 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"3-1-2-\uba54\uc11c\ub4dc\ub85c-\ud638\ucd9c\ud560-\ub54c-\uadf8-\uba54\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:3},{value:"\ud568\uc218 vs \uba54\uc11c\ub4dc",id:"\ud568\uc218-vs-\uba54\uc11c\ub4dc",level:4},{value:"\ub9e4\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"\ub9e4\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:4},{value:"3-1-3 \ud568\uc218\ub85c\uc11c \ud638\ucd9c\ud560 \ub54c \uadf8 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"3-1-3-\ud568\uc218\ub85c\uc11c-\ud638\ucd9c\ud560-\ub54c-\uadf8-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:3},{value:"\ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:4},{value:"\ub9e4\uc11c\ub4dc\uc758 \ub0b4\ubd80\ud568\uc218\uc5d0\uc11c\uc758 this",id:"\ub9e4\uc11c\ub4dc\uc758-\ub0b4\ubd80\ud568\uc218\uc5d0\uc11c\uc758-this",level:4},{value:"\uba54\uc11c\ub4dc\uc758 \ub0b4\ubd80 \ud568\uc218\uc5d0\uc11c\uc758 this\ub97c \uc6b0\ud68c\ud558\ub294 \ubc29\ubc95",id:"\uba54\uc11c\ub4dc\uc758-\ub0b4\ubd80-\ud568\uc218\uc5d0\uc11c\uc758-this\ub97c-\uc6b0\ud68c\ud558\ub294-\ubc29\ubc95",level:4},{value:"this\ub97c \ubc14\uc778\ub529\ud558\uc9c0 \uc54a\ub294 \ud568\uc218",id:"this\ub97c-\ubc14\uc778\ub529\ud558\uc9c0-\uc54a\ub294-\ud568\uc218",level:4},{value:"3-1-4 \ucf5c\ubc31 \ud568\uc218 \ud638\ucd9c \uc2dc \uadf8 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"3-1-4-\ucf5c\ubc31-\ud568\uc218-\ud638\ucd9c-\uc2dc-\uadf8-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:3},{value:"3-1-5 \uc0dd\uc131\uc790 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this",id:"3-1-5-\uc0dd\uc131\uc790-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this",level:3},{value:"3-2 \uba85\uc2dc\uc801\uc73c\ub85c this\ub97c \ubc14\uc778\ub529\ud558\ub294 \ubc29\ubc95",id:"3-2-\uba85\uc2dc\uc801\uc73c\ub85c-this\ub97c-\ubc14\uc778\ub529\ud558\ub294-\ubc29\ubc95",level:2},{value:"3-2-1 call \uba54\uc11c\ub4dc",id:"3-2-1-call-\uba54\uc11c\ub4dc",level:3},{value:"3-2-2 apply \uba54\uc11c\ub4dc",id:"3-2-2-apply-\uba54\uc11c\ub4dc",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"03-this"},"03 this"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ub2e4\ub978 \uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4\ub85c \uc0dd\uc131\ud55c \uc778\uc2a4\ud134\uc2a4 \uac1d\uccb4\ub97c \ub9d0\ud569\ub2c8\ub2e4.\n\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\uc758 this\ub294 \uc5b4\ub514\uc11c\ub4e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0, \uc0c1\ud669\uc5d0 \ub530\ub77c this\uac00 \ubc14\ub77c\ubcf4\ub294 \ub300\uc0c1\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.\nthis\ub294 \ud568\uc218\uc640 \uac1d\uccb4(\uba54\uc11c\ub4dc)\ub97c \uc2e4\uc9c8\uc801\uc73c\ub85c \uad6c\ubd84\ud574\uc90d\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"3-1-\uc0c1\ud669\uc5d0-\ub530\ub77c-\ub2ec\ub77c\uc9c0\ub294-this"},"3-1 \uc0c1\ud669\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this\ub294 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc0dd\uc131\ub420 \ub54c \ud568\uaed8 \uacb0\uc815\ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud560 \ub54c \uc0dd\uc131\ub428")),(0,l.kt)("p",null,"\u200b ",(0,l.kt)("strong",{parentName:"p"},"\u21d2 this\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud560 \ub54c \uacb0\uc815\ub428")),(0,l.kt)("h3",{id:"3-1-1-\uc804\uc5ed-\uacf5\uac04\uc5d0\uc11c\uc758-this"},"3-1-1 \uc804\uc5ed \uacf5\uac04\uc5d0\uc11c\uc758 this"),(0,l.kt)("p",null,"\uc804\uc5ed \uacf5\uac04\uc5d0\uc11c this\ub294 \uc804\uc5ed \uac1d\uccb4\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc758 this : window"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(this === window); // true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Node.js \ud658\uacbd\uc758 this : global"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(this === global); // true\n")))),(0,l.kt)("h4",{id:"\ubc30\uacbd-\uc9c0\uc2dd-\uc804\uc5ed-\uacf5\uac04\uc5d0\uc11c\ub9cc-\ubc1c\uc0dd\ud558\ub294-\ud2b9\uc774\ud55c-\uc131\uc9c8"},"[\ubc30\uacbd \uc9c0\uc2dd\ud83d\udca1]"," \uc804\uc5ed \uacf5\uac04\uc5d0\uc11c\ub9cc \ubc1c\uc0dd\ud558\ub294 \ud2b9\uc774\ud55c \uc131\uc9c8"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc804\uc5ed\ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc774\ub97c \uc804\uc5ed\uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub85c \ud560\ub2f9\ud55c\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c 3-3 \uc804\uc5ed\ubcc0\uc218\uc640 \uc804\uc5ed \uac1d\uccb4(1)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var a = 1;\nconsole.log(a); // 1\nconsole.log(window.a); // 1\nconsole.log(this.a); // 1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa8\ub4e0 \ubcc0\uc218\ub294 \uc2e4\uc740 ",(0,l.kt)("strong",{parentName:"li"},"\ud2b9\uc815 \uac1c\uccb4"),"\uc758 \ud504\ub85c\ud37c\ud2f0\ub85c\uc11c \ub3d9\uc791\ud568.\n(\uc804\uc5ed\ubcc0\uc218 \uc120\uc5b8\uc2dc \ud2b9\uc815 \uac1d\uccb4\ub780 ",(0,l.kt)("strong",{parentName:"li"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 L.E"),")"),(0,l.kt)("li",{parentName:"ul"},"a\ub97c \uc9c1\uc811 \ud638\ucd9c\ud574\ub3c4 1\uc774 \ub098\uc624\ub294 \uc774\uc720 :\n\ubcc0\uc218 a\uc5d0 \uc811\uadfc\ud558\uace0\uc790 \ud558\uba74 \uc2a4\ucf54\ud504 \uccb4\uc778\uc5d0\uc11c a\ub97c \uac80\uc0c9\ud558\ub2e4 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \ub3c4\ub2ec\ud558\ub294 \uc804\uc5ed\uc2a4\ucf54\ud504\uc758 L.E, \uc989 \uc804\uc5ed \uac1d\uccb4\uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\ud37c\ud2f0 a\ub97c \ubc1c\uacac\ud574\uc11c \uadf8 \uac12\uc744 \ubc18\ud658\ud558\uae30 \ub54c\ubb38")),(0,l.kt)("p",null,"\u200b ",(0,l.kt)("strong",{parentName:"p"},"\u21d2 \ub2e8\uc21c\ud558\uac8c ",(0,l.kt)("inlineCode",{parentName:"strong"},"window."),"\uc774 \uc0dd\ub7b5\ub41c \uac83\uc73c\ub85c \uc5ec\uaca8\ub3c4 \ubb34\ubc29\ud568")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2753 \uc804\uc5ed \uacf5\uac04\uc5d0\uc11c 1. var\ub85c \ubcc0\uc218 \uc120\uc5b8 == 2. window\uc758 \ud504\ub85c\ud37c\ud2f0\uc5d0 \uc9c1\uc811 \ud560\ub2f9 ")),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0 \uadf8\ub807\uc9c0\ub9cc, '",(0,l.kt)("strong",{parentName:"p"},"\uc0ad\uc81c"),"' \uba85\ub839\uc2dc \ub2e4\ub984"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c 3-5 \uc804\uc5ed\ubcc0\uc218\uc640 \uc804\uc5ed \uac1d\uccb4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// var\ub85c \ubcc0\uc218 \uc120\uc5b8 - \uc0ad\uc81c \uc548 \ub428\nvar a = 1;\ndelete window.a; // false\nconsole.log(a, window.a, this.a); // 1 1 1\n\nvar b = 2;\ndelete b; // false\nconsole.log(b, window.b, this.b); // 2 2 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \uc804\uc5ed\uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\uc5d0 \ud560\ub2f9 - \uc0ad\uc81c \ub428\nwindow.c = 3;\ndelete window.c; // true\nconsole.log(c, window.c, this.c); // Uncauht ReferenceError: c is not defined\n\nwindow.d = 3;\ndelete d; // true\nconsole.log(d, window.d, this.d); // Uncauht ReferenceError: d is not defined\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u21d2 \uc0ac\uc6a9\uc790\uac00 \uc758\ub3c4\uce58 \uc54a\uac8c \uc0ad\uc81c\ud558\ub294 \uac83 \ubc29\uc9c0")),(0,l.kt)("h3",{id:"3-1-2-\uba54\uc11c\ub4dc\ub85c-\ud638\ucd9c\ud560-\ub54c-\uadf8-\uba54\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"3-1-2 \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c\ud560 \ub54c \uadf8 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("h4",{id:"\ud568\uc218-vs-\uba54\uc11c\ub4dc"},"\ud568\uc218 vs \uba54\uc11c\ub4dc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ud568\uc218")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uadf8 \uc790\uccb4\ub85c \ub3c5\ub9bd\uc801\uc778 \uae30\ub2a5\uc744 \uc218\ud589")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uba54\uc11c\ub4dc")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc790\uc2e0\uc744 \ud638\ucd94\ud55c \ub300\uc0c1 \uac1d\uccb4\uc5d0 \uad00\ud55c \ub3d9\uc791 \uc218\ud589"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub294 ",(0,l.kt)("u",null,"1. \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\uc5d0 \ud560\ub2f9\ub418\uace0"),", ",(0,l.kt)("u",null,"2.\uac1d\uccb4\uc758 \uba54\uc11c\ub4dc\ub85c\uc11c \ud638\ucd9c\ud560 \uacbd\uc6b0")," \uba54\uc11c\ub4dc\ub85c \ub3d9\uc791\ud568.\n\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud568\uc218\ub85c \ub3d9\uc791\ud568.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c 3-6 \ud568\uc218\ub85c\uc11c \ud638\ucd9c, \uba54\uc11c\ub4dc\ub85c\uc11c \ud638\ucd9c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \ud568\uc218\ub85c \ud638\ucd9c\nvar func = function (x) {\n  console.log(this, x);\n};\nfunc(1); // Window{...} 1\n\n// \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c\nvar obj = {\n  method: func,\n};\nobj.method(2); // { method: f } 2\n")),(0,l.kt)("p",null,"\u2753 \uc5b4\ub5bb\uac8c \uad6c\ubd84 ","*","*","*","*"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ud568\uc218 \uc55e\uc5d0 \uac1d\uccb4\uac00 \uba85\uc2dc\ub418\uc5b4 \uc788\uc73c\uba74 \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c 3-7, 8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var obj = {\n    method: function () { console.log(this); }\n    inner: {\n        methodB: function () { console.log(this); }\n    }\n};\n\nobj.method();           // { method: f }    ( === obj )\nobj['method']();        // { method: f }    ( === obj )\n\nobj.inner.methodB() // { methodB: f }       ( === obj.inner )\n")),(0,l.kt)("h4",{id:"\ub9e4\uc11c\ub4dc-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"\ub9e4\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"this\uc5d0\ub294 \ud638\ucd9c\ud55c \uc8fc\uccb4\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ub2f4\uae40"),(0,l.kt)("li",{parentName:"ul"},"\ud638\ucd9c \uc8fc\uccb4 = \ud568\uc218\uba85(\ud504\ub85c\ud37c\ud2f0\uba85) \uc55e\uc758 \uac1d\uccb4")),(0,l.kt)("h3",{id:"3-1-3-\ud568\uc218\ub85c\uc11c-\ud638\ucd9c\ud560-\ub54c-\uadf8-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"3-1-3 \ud568\uc218\ub85c\uc11c \ud638\ucd9c\ud560 \ub54c \uadf8 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("h4",{id:"\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"\ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("p",null,"this = \uc804\uc5ed \uac1d\uccb4"),(0,l.kt)("h4",{id:"\ub9e4\uc11c\ub4dc\uc758-\ub0b4\ubd80\ud568\uc218\uc5d0\uc11c\uc758-this"},"\ub9e4\uc11c\ub4dc\uc758 \ub0b4\ubd80\ud568\uc218\uc5d0\uc11c\uc758 this"),(0,l.kt)("p",null,"\ud568\uc218\ub85c \ud638\ucd9c\ud588\ub294\uc9c0, \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c\ud588\ub294\uc9c0\ub9cc \ud30c\uc545\ud558\uba74 \ub428"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c 3-9 \ub0b4\ubd80\ud568\uc218\uc5d0\uc11c\uc758 this")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var obj1 = {\n  outer: function () {\n    console.log(this); // (1)\n    var innerFunc = function () {\n      console.log(this); // (2)  (3)\n    };\n    innerFunc();\n\n    var obj2 = {\n      innerMethod: innerFunc,\n    };\n    obj2.innerMethod();\n  },\n};\nobj1.outer();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\ucd9c\ub825\uac12")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"(1) : obj1\n(2) : \uc804\uc5ed\uac1d\uccb4(Window)\n(3) : obj2")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(1) obj1.outer - \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c")),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9 \uc810 \uc55e\uc758 \uac1d\uccb4\uc778 obj1\uc774 this\uc5d0 \ubc14\uc778\ub529"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(2) innerFunc() - \ud568\uc218\ub85c \ud638\ucd9c")),(0,l.kt)("p",null,"\ud568\uc218\uba85 \uc55e\uc5d0 \uc810 \uc5c6\uc5c8\uc73c\ubbc0\ub85c \ud568\uc218\ub85c \ud638\ucd9c\ud55c \uac83.\nthis\uac00 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc558\uace0 \uc790\ub3d9\uc73c\ub85c \uc2a4\ucf54\ud504 \uccb4\uc778 \ucd5c\uc0c1\uc704 \uac1d\uccb4\uc778 \uc804\uc5ed\uac1d\uccb4(Window)\uac00 \ubc14\uc778\ub529"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"(3) obj2.innerMethod() - \uba54\uc11c\ub4dc\ub85c \ud638\ucd9c")),(0,l.kt)("p",null,"\ub9c8\uc9c0\ub9c9 \uc810 \uc55e\uc758 \uac1d\uccb4\uc778 obj2\uac00 this\uc5d0 \ubc14\uc778\ub529"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u21d2 this \ubc14\uc778\ub529\uc740 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \ub2f9\uc2dc\uc758 \uc8fc\ubcc0 \ud658\uacbd\uc740 \uc911\uc694\ud558\uc9c0 \uc54a\uace0, \ud574\ub2f9 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uad6c\ubb38 \uc55e\uc5d0 \uc810 \ub610\ub294 \ub300\uad04\ud638 \ud45c\uae30\uac00 \uc788\ub294\uc9c0 \uc5c5\ub294\uc9c0\uac00 \uad00\uac74\uc778 \uac83 \u2757")),(0,l.kt)("h4",{id:"\uba54\uc11c\ub4dc\uc758-\ub0b4\ubd80-\ud568\uc218\uc5d0\uc11c\uc758-this\ub97c-\uc6b0\ud68c\ud558\ub294-\ubc29\ubc95"},"\uba54\uc11c\ub4dc\uc758 \ub0b4\ubd80 \ud568\uc218\uc5d0\uc11c\uc758 this\ub97c \uc6b0\ud68c\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("p",null,"\ub0b4\ubd80 \ud568\uc218\uc5d0 this\ub97c \uc0c1\uc18d\ud560 \ubc29\ubc95\uc740 \uc5c6\uc9c0\ub9cc \uc6b0\ud68c\ud560 \ubc29\ubc95\uc740 \uc788\ub294\ub370, \ubc14\ub85c \ubcc0\uc218\ub97c \ud65c\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var obj = {\n  outer: function () {\n    console.log(this); // {outer: f}\n    var innerFunc1 = function () {\n      console.log(this); // window\n    };\n    innerFunc1();\n\n    var self = this;\n    var innerFunc2 = function () {\n      console.log(self); // {outer: f}\n    };\n    innerFunc2();\n  },\n};\nobj.outer();\n")),(0,l.kt)("p",null,"\uc0c1\uc704 \uc2a4\ucf54\ud504\uc758 this\uc778 outer\ub97c \uc800\uc7a5\ud574\uc11c \ub0b4\ubd80\ud568\uc218\uc5d0\uc11c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"var self = this;")),(0,l.kt)("h4",{id:"this\ub97c-\ubc14\uc778\ub529\ud558\uc9c0-\uc54a\ub294-\ud568\uc218"},"this\ub97c \ubc14\uc778\ub529\ud558\uc9c0 \uc54a\ub294 \ud568\uc218"),(0,l.kt)("p",null,"\ud654\uc0b4\ud45c \ud568\uc218\ub294 this\ub97c \ubc14\uc778\ub529\ud558\uc9c0 \uc54a\ub294\ub2e4. \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c, this \ubc14\uc778\ub529 \uacfc\uc815\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ud654\uc0b4\ud45c \ud568\uc218\ub294 \uc0c1\uc704 \uc2a4\ucf54\ud504\uc758 this\ub97c \uadf8\ub300\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var obj = {\n  outer: function () {\n    console.log(this); // {outer: f}\n    var innerFunc = () => {\n      console.log(this); // {outer: f}\n    };\n    innerFunc();\n  },\n};\nobj.outer();\n")),(0,l.kt)("h3",{id:"3-1-4-\ucf5c\ubc31-\ud568\uc218-\ud638\ucd9c-\uc2dc-\uadf8-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"3-1-4 \ucf5c\ubc31 \ud568\uc218 \ud638\ucd9c \uc2dc \uadf8 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("p",null,"\ucf5c\ubc31 \ud568\uc218\ub3c4 \ud568\uc218\uc774\ubbc0\ub85c \uae30\ubcf8\uc801\uc73c\ub85c this\ub294 \uc804\uc5ed\uac1d\uccb4\ub97c \ucc38\uc870\ud558\uac8c \ub41c\ub2e4. \ud558\uc9c0\ub9cc \uc81c\uc5b4\uad8c\uc744 \ubc1b\uc740 \ud568\uc218\uc5d0\uc11c \ucf5c\ubc31 \ud568\uc218\uc5d0 \ubcc4\ub3c4\ub85c this\uac00 \ub420 \ub300\uc0c1\uc744 \uc9c0\uc815\ud55c \uacbd\uc6b0\uc5d0\ub294 \uadf8 \ub300\uc0c1\uc744 \ucc38\uc870\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'setTimeout(function () {\n  console.log(this);\n}, 300);\n\n[1, 2, 3, 4, 5].forEach(function (x) {\n  console.log(this, x);\n});\n\ndocument.body.innerHTML += \'<button id="a">\ud074\ub9ad</button>\';\ndocument.body.querySelector("#a").addEventListener("click", function (e) {\n  console.log(this, e);\n});\n')),(0,l.kt)("p",null,"setTimeout\uacfc forEach \ubaa8\ub450 \ucf5c\ubc31 \ud568\uc218\uc758 \uccab \ubc88\uc9f8 \uc778\uc790\ub85c this\ub97c \ucd9c\ub825\ud558\uace0 \uc788\ub2e4. \ucf5c\ubc31 \ud568\uc218\uc758 this\ub294 \uc804\uc5ed\uac1d\uccb4\ub97c \ucc38\uc870\ud558\uae30 \ub54c\ubb38\uc5d0 window\uac00 \ucd9c\ub825\ub41c\ub2e4. \ubc18\uba74 addEventListener\ub294 \uc9c0\uc815\ud55c HTML \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 'click' \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \uadf8 \uc774\ubca4\ud2b8 \uc815\ubcf4\ub97c \ucf5c\ubc31 \ud568\uc218\uc758 \uccab \ubc88\uc9f8 \uc778\uc790\ub85c \uc0bc\uc544 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub77c\ub294 \uba85\ub839\uc774\ub2e4. HTML \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 this\uac00 \uc0c1\uc18d\ub41c\ub2e4. \uba54\uc11c\ub4dc \uba85\uc758 \uc810 \uc55e\ubd80\ubd84\uc774 this\uac00 \ub418\uae30 \ub54c\ubb38\uc5d0 this\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},'<button id="a">\ud074\ub9ad</button>')," \uac00 \ub41c\ub2e4."),(0,l.kt)("h3",{id:"3-1-5-\uc0dd\uc131\uc790-\ud568\uc218-\ub0b4\ubd80\uc5d0\uc11c\uc758-this"},"3-1-5 \uc0dd\uc131\uc790 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\uc758 this"),(0,l.kt)("p",null,"\uc0dd\uc131\uc790 \ud568\uc218\ub294 \uc5b4\ub5a4 \uacf5\ud1b5\ub41c \uc131\uc9c8\uc744 \uc9c0\ub2c8\ub294 \uac1d\uccb4\ub4e4\uc744 \uc0dd\uc131\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\uc774\ub2e4. \uc0dd\uc131\uc790\ub97c \ud074\ub798\uc2a4, \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \ub9cc\ub4e0 \uac1d\uccb4\ub97c \uc778\uc2a4\ud134\uc2a4\ub77c\uace0 \ud55c\ub2e4. \uc0dd\uc131\uc790 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \uc6b0\uc120 \uc0dd\uc131\uc790\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud504\ub85c\ud37c\ud2f0\ub97c \ucc38\uc870\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"__proto__")," \ub77c\ub294 \ud504\ub85c\ud37c\ud2f0\uac00 \uc788\ub294 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uace0, \ubbf8\ub9ac \uc900\ube44\ub41c \uacf5\ud1b5 \uc18d\uc131 \ubc0f \uac1c\uc131\uc744 \ud574\ub2f9 \uac1d\uccb4 (this)\uc5d0 \ubd80\uc5ec\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var Cat = function (name, age) {\n  this.bark = \"\uc57c\uc639\";\n  this.name = name;\n  this.age = age;\n};\n\nvar choco = new Cat(\"\ucd08\ucf54\", 7);\nvar nabi = new Cat(\"\ub098\ube44\", 5);\nconsole.log(choco, nabi); // Cat {bark: '\uc57c\uc639', name: '\ucd08\ucf54', age: 7}\n// Cat {bark: '\uc57c\uc639', name: '\ub098\ube44', age: 5}\n")),(0,l.kt)("p",null,"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0\uc11c this\ub294 \uc0dd\uc131\ub420 \uac1d\uccb4(\uc778\uc2a4\ud134\uc2a4)\ub97c \uac00\ub9ac\ud0a8\ub2e4."),(0,l.kt)("h2",{id:"3-2-\uba85\uc2dc\uc801\uc73c\ub85c-this\ub97c-\ubc14\uc778\ub529\ud558\ub294-\ubc29\ubc95"},"3-2 \uba85\uc2dc\uc801\uc73c\ub85c this\ub97c \ubc14\uc778\ub529\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("h3",{id:"3-2-1-call-\uba54\uc11c\ub4dc"},"3-2-1 call \uba54\uc11c\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])\n")),(0,l.kt)("p",null,"call \uba54\uc11c\ub4dc\ub294 \uba54\uc11c\ub4dc\uc758 \ud638\ucd9c \uc8fc\uccb4\uc778 \ud568\uc218\ub97c \uc989\uc2dc \uc2e4\ud589\ud558\ub3c4\ub85d \ud558\ub294 \uba85\ub839\uc774\ub2e4. \uc774\ub54c call \uba54\uc11c\ub4dc\uc758 \uccab \ubc88\uc9f8 \uc778\uc790\ub97c this\ub85c \ubc14\uc778\ub529\ud558\uace0, \uc774\ud6c4\uc758 \uc778\uc790\ub4e4\uc744 \ud638\ucd9c\ud560 \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\ub85c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var func = function (a, b, c) {\n  console.log(this, a, b, c);\n};\n\nfunc(1, 2, 3); // window{ ... } 1 2 3\nfunc.call({ x: 1 }, 4, 5, 6); // { x : 1 } 4 5 6\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var obj = {\n  a: 1,\n  method: function (x, y) {\n    console.log(this.a, x, y);\n  },\n};\n\nobj.method(2, 3); // 1 2 3\nobj.method.call({ a: 4 }, 5, 6); // 4 5 6\n")),(0,l.kt)("h3",{id:"3-2-2-apply-\uba54\uc11c\ub4dc"},"3-2-2 apply \uba54\uc11c\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Function.prototype.apply(thisArg[, argsArray])\n")),(0,l.kt)("p",null,"apply \uba54\uc11c\ub4dc\ub294 call \uba54\uc11c\ub4dc\uc640 \uae30\ub2a5\uc801\uc73c\ub85c \uc644\uc804\ud788 \ub3d9\uc77c\ud558\ub2e4. \ub450 \ubc88\uc9f8 \uc778\uc790\ub97c \ubc30\uc5f4\ub85c \ubc1b\uc544 \uadf8 \ubc30\uc5f4\uc758 \uc694\uc18c\ub4e4\uc744 \ud638\ucd9c\ud560 \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc9c0\uc815\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c\ub9cc \ucc28\uc774\uac00 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var func = function (a, b, c) {\n  console.log(this, a, b, c);\n};\nfunc.apply({ x: 1 }, [4, 5, 6]);\n\nvar obj = {\n  a: 1,\n  method: function (x, y) {\n    console.log(this.a, x, y);\n  },\n};\nobj.method.apply({ a: 4 }, [5, 6]);\n")))}u.isMDXComponent=!0}}]);