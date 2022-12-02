"use strict";(self.webpackChunkfrontend_study=self.webpackChunkfrontend_study||[]).push([[496],{3905:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>k});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=a.createContext({}),c=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},i=function(n){var e=c(n.components);return a.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,u=n.parentName,i=p(n,["components","mdxType","originalType","parentName"]),m=c(t),k=r,g=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return t?a.createElement(g,o(o({ref:e},i),{},{components:t})):a.createElement(g,o({ref:e},i))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:r,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8848:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o=void 0,p={unversionedId:"core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",id:"core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",title:"02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",description:"2-3 LexicalEnvironment",source:"@site/docs/core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8.md",sourceDirName:"core-javascript",slug:"/core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",permalink:"/docs/core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-javascript/02 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"01 \ub370\uc774\ud130 \ud0c0\uc785",permalink:"/docs/core-javascript/01 \ub370\uc774\ud130 \ud0c0\uc785"},next:{title:"03 this",permalink:"/docs/core-javascript/03 this"}},u={},c=[{value:"2-3 LexicalEnvironment",id:"2-3-lexicalenvironment",level:2},{value:"2-3-1 environmentRecord\uc640 \ud638\uc774\uc2a4\ud305",id:"2-3-1-environmentrecord\uc640-\ud638\uc774\uc2a4\ud305",level:3},{value:"\ud83c\udf40 \ud638\uc774\uc2a4\ud305 \uaddc\uce59",id:"-\ud638\uc774\uc2a4\ud305-\uaddc\uce59",level:4},{value:"\ud568\uc218 \uc120\uc5b8\ubb38\uacfc \ud568\uc218 \ud45c\ud604\uc2dd",id:"\ud568\uc218-\uc120\uc5b8\ubb38\uacfc-\ud568\uc218-\ud45c\ud604\uc2dd",level:4}],i={toc:c};function s(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2-3-lexicalenvironment"},"2-3 LexicalEnvironment"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"'\uc5b4\ud718\uc801 \ud658\uacbd'\uc774\ub098 '\uc815\uc801 \ud658\uacbd'\uc774\ub77c\uace0 \ub9ce\uc774 \ubc88\uc5ed\ud558\uc9c0\ub9cc \uc801\uc808\ud558\uc9c0 \uc54a\ub2e4\uace0 \ubcf8\ub2e4.\n\uc774\ud574\ub97c \uc704\ud55c \uc6a9\uc5b4\ub85c\uc11c ",(0,r.kt)("u",null,"\ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ud658\uacbd \uc815\ubcf4\ub97c \uc0ac\uc804\uc5d0\uc11c \uc811\ud558\ub294 \ub290\ub08c\uc73c\ub85c")," '",(0,r.kt)("strong",{parentName:"p"},"\uc0ac\uc804\uc801\uc778"),"'\uc774 \ub354 \uc5b4\uc6b8\ub9ac\ub294 \ud45c\ud604\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"2-3-1-environmentrecord\uc640-\ud638\uc774\uc2a4\ud305"},"2-3-1 environmentRecord\uc640 \ud638\uc774\uc2a4\ud305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"environmentRecord\uc5d0 \uc800\uc7a5\ub418\ub294 \uc815\ubcf4")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uc758 \uc2dd\ubcc4\uc790 \uc815\ubcf4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ud568\uc218\uc5d0 \uc9c0\uc815\ub41c \ub9e4\uac1c\ubcc0\uc218 \uc2dd\ubcc4\uc790"),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc120\uc5b8"),(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218\uba85"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ubcc0\uc218 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uacfc\uc815\uc744 \ub9c8\uccd0\ub3c4 \ucf54\ub4dc\ub294 \uc2e4\ud589\ub418\uae30 \uc804\uc758 \uc0c1\ud0dc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc774\ubbf8 \ud574\ub2f9 \ud658\uacbd\uc5d0 \uc18d\ud55c \ucf54\ub4dc\uc758 \ubcc0\uc218\uba85\uc744 \ubbf8\ub9ac \uc54c\uace0 \uc788\uc74c"))),(0,r.kt)("h4",{id:"-\ud638\uc774\uc2a4\ud305-\uaddc\uce59"},"\ud83c\udf40 \ud638\uc774\uc2a4\ud305 \uaddc\uce59"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"hoisting ?")),"\nhoist(\ub04c\uc5b4\uc62c\ub9ac\ub2e4) + ing\n'\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc2dd\ubcc4\uc790\ub4e4\uc744 \ucd5c\uc0c1\ub2e8\uc73c\ub85c \ub04c\uc5b4\uc62c\ub824\ub193\uc740 \ub2e4\uc74c \uc2e4\uc81c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud55c\ub2e4'\ub77c\ub294 \uac00\uc0c1\uc758 \uac1c\ub150\n\uc2e4\uc81c \ub04c\uc5b4\uc62c\ub9ac\ub294 \uac83 \uc544\ub2c8\uc9c0\ub9cc \ud3b8\uc758\uc0c1 \ub04c\uc5b4\uc62c\ub9b0 \uac83\uc73c\ub85c \uac04\uc8fc\ud558\ub294 \uac83")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud638\uc774\uc2a4\ud305 \ucc98\ub9ac")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218\ub294 \uc120\uc5b8\ubd80\uc640 \ud560\ub2f9\ubd80\ub97c \ub098\ub204\uc5b4 \uc120\uc5b8\ubd80\ub9cc \ub04c\uc5b4\uc62c\ub9bc"),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\ub294 \ud568\uc218 \uc804\uccb4\ub97c \ub04c\uc5b4\uc62c\ub9bc")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-2 \ub9e4\uac1c\ubcc0\uc218\uc640 \ubcc0\uc218\uc5d0 \ub300\ud55c \ud638\uc774\uc2a4\ud305(1) - \uc6d0\ubcf8 \ucf54\ub4dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a(x) {       // \uc218\uc9d1 \ub300\uc0c1 1(\ub9e4\uac1c\ubcc0\uc218)\n  console.log(x);     // (1)\n  var x;              // \uc218\uc9d1 \ub300\uc0c1 2(\ubcc0\uc218 \uc120\uc5b8)\n  console.log(x);     // (2)\n  var x = 2;          // \uc218\uc9d1 \ub300\uc0c1 3(\ubcc0\uc218 \uc120\uc5b8)\n  console.log(x);     // (3)\n}\na(1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uce21 \uac12")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) : \ud568\uc218 \ud638\ucd9c\uc2dc \uc804\ub2ec\ub41c 1\n(2) : \uc120\uc5b8\ub41c \ubcc0\uc218 x\uc5d0 \ud560\ub2f9\ud55c \uac12\uc774 \uc5c6\uc73c\ubbc0\ub85c undefind\n(3) : 2")),(0,r.kt)("p",null,"\uc608\uc81c 2-2\uc5d0\uc11c argument\uc5d0 \uc804\ub2ec\ub41c \uc778\uc790\ub97c \ub2f4\uc740 \uac83\uc744 \uc778\uc9c0\ub97c \ud568\uc218 \ub0b4\ubd80\uc758 \ub2e4\ub978 \ucf54\ub4dc\ubcf4\ub2e4 \uba3c\uc800 \uc120\uc5b8 \ubc0f \ud560\ub2f9\uc774 \uc774\ub8e8\uc5b4\uc9c4 \uac83\uc73c\ub85c \uac04\uc8fc\ud558\uace0 \ub2e4\uc2dc \ucf54\ub4dc\ub97c \ubc14\uafb8\uaca0\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc774\ub7ec\ud55c \ubcc0\ud658 \uacfc\uc815\uc744 \uac70\uce58\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-3 \ub9e4\uac1c\ubcc0\uc218\uc640 \ubcc0\uc218\uc5d0 \ub300\ud55c \ud638\uc774\uc2a4\ud305(2) - \ub9e4\uac1c\ubcc0\uc218\ub97c \ubcc0\uc218 \uc120\uc5b8/\ud560\ub2f9\uacfc \uac19\ub2e4\uace0 \uac04\uc8fc\ud574\uc11c \ubcc0\ud658\ud55c \uc0c1\ud0dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {     \n  var x = 1;          // \uc218\uc9d1 \ub300\uc0c1 1(\ub9e4\uac1c\ubcc0\uc218)\n  console.log(x);     // (1)\n  var x;              // \uc218\uc9d1 \ub300\uc0c1 2(\ubcc0\uc218 \uc120\uc5b8)\n  console.log(x);     // (2)\n  var x = 2;          // \uc218\uc9d1 \ub300\uc0c1 3(\ubcc0\uc218 \uc120\uc5b8)\n  console.log(x);     // (3)\n}\na(1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-4 \ub9e4\uac1c\ubcc0\uc218\uc640 \ubcc0\uc218\uc5d0 \ub300\ud55c \ud638\uc774\uc2a4\ud305(3) - \ud638\uc774\uc2a4\ud305\uc744 \ub9c8\uce5c \uc0c1\ud0dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {     \n  var x;              // \uc218\uc9d1 \ub300\uc0c1 1\uc758 \ubcc0\uc218 \uc120\uc5b8 \ubd80\ubd84\n  var x;              // \uc218\uc9d1 \ub300\uc0c1 2\uc758 \ubcc0\uc218 \uc120\uc5b8 \ubd80\ubd84\n  var x;              // \uc218\uc9d1 \ub300\uc0c1 3\uc758 \ubcc0\uc218 \uc120\uc5b8 \ubd80\ubd84\n\n  var x = 1;          // \uc218\uc9d1 \ub300\uc0c1 1\uc758 \ud560\ub2f9 \ubd80\ubd84\n  console.log(x);     // (1)\n  console.log(x);     // (2)\n  var x = 2;          // \uc218\uc9d1 \ub300\uc0c1 3\uc758 \ud560\ub2f9 \ubd80\ubd84\n  console.log(x);     // (3)\n}\na(1);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc2e4\uc81c \uac12")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) : 1\n(2) : 1\n(3) : 2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-5 \ud568\uc218 \uc120\uc5b8\uc758 \ud638\uc774\uc2a4\ud305(1) - \uc6d0\ubcf8 \ucf54\ub4dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {     \n  console.log(b);     // (1)\n  var b = 'bbb'       // \uc218\uc9d1 \ub300\uc0c1 1(\ubcc0\uc218 \uc120\uc5b8)\n  console.log(b);     // (2)\n  function b () {}    // \uc218\uc9d1 \ub300\uc0c1 2(\ud568\uc218 \uc120\uc5b8)\n  console.log(b);     // (3)\n}\na();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc0c1 \uac12")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) : error \ud639\uc740 undefined\n(2) : 'bbb'\n(3) : \u0192 b () {}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-6 \ud568\uc218 \uc120\uc5b8\uc758 \ud638\uc774\uc2a4\ud305(2) - \ud638\uc774\uc2a4\ud305\uc744 \ub9c8\uce5c \uc0c1\ud0dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {     \n  var b;              // \uc218\uc9d1 \ub300\uc0c1 1. \ubcc0\uc218\ub294 \uc120\uc5b8\ubd80\ub9cc \ub04c\uc5b4\uc62c\ub9bc\n  function b () {}    // \uc218\uc9d1 \ub300\uc0c1 2. \ud568\uc218\ub294 \uc120\uc5b8 \uc804\uccb4 \ub04c\uc5b4\uc62c\ub9bc\n\n  console.log(b);     // (1)\n  b = 'bbb'           // \ubcc0\uc218\uc758 \ud560\ub2f9\ubd80\ub294 \uc6d0\ub798 \uc790\ub9ac\uc5d0\n  console.log(b);     // (2)\n  console.log(b);     // (3)\n}\na();\n")),(0,r.kt)("p",null,"\ud638\uc774\uc2a4\ud305\uc774 \ub05d\ub09c \uc0c1\ud0dc\uc5d0\uc11c\uc758 \ud568\uc218 \uc120\uc5b8\ubb38\uc740 \ud568\uc218\uba85\uc73c\ub85c \uc120\uc5b8\ud55c \ubcc0\uc218\uc5d0 \ud568\uc218\ub97c \ud560\ub2f9\ud55c \uac83\ucc98\ub7fc \uc5ec\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\ud568\uc218 \uc120\uc5b8\ubb38 \u21d2 \ud568\uc218 \ud45c\ud604\uc2dd)  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-7 \ud568\uc218 \uc120\uc5b8\uc758 \ud638\uc774\uc2a4\ud305(3) - \ud568\uc218 \uc120\uc5b8\ubb38\uc744 \ud568\uc218 \ud45c\ud604\uc2dd\uc73c\ub85c \ubc14\uafbc \ucf54\ub4dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {     \n  var b;              \n  var b = function b () {};    // \u2190 \ubc14\ub010 \ubd80\ubd84 \n\n  console.log(b);     // (1)\n  b = 'bbb'           \n  console.log(b);     // (2)\n  console.log(b);     // (3)\n}\na();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc2e4\uc81c \uac12")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) : \u0192 b () {}\n(2) : 'bbb'\n(3) : 'bbb'")),(0,r.kt)("h4",{id:"\ud568\uc218-\uc120\uc5b8\ubb38\uacfc-\ud568\uc218-\ud45c\ud604\uc2dd"},"\ud568\uc218 \uc120\uc5b8\ubb38\uacfc \ud568\uc218 \ud45c\ud604\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc120\uc5b8\ubb38",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"function \uc815\uc758\ubd80\ub9cc \uc874\uc7ac, \ubcc4\ub3c4\uc758 \ud560\ub2f9 \uba85\ub839\uc774 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\ubc18\ub4dc\uc2dc \ud568\uc218\uba85\uc774 \uc815\uc758\ub3fc \uc788\uc5b4\uc57c \ud568"),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc120\uc5b8\ubb38\uc740 \ud568\uc218 \uc804\uccb4\ub97c \ud638\uc774\uc2a4\ud305 \ud568"),(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \ubcc0\uc218\uba85\uc5d0 \uc11c\ub85c \ub2e4\ub978 \uac12\uc744 \ud560\ub2f9\ud560 \uacbd\uc6b0 \ub098\uc911\uc5d0 \ud560\ub2f9\ud55c \uac12\uc774 override \ub428"))),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud45c\ud604\uc2dd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc815\uc758\ud55c \ud568\uc218\ub97c \ubcc4\ub3c4\uc758 \ubcc0\uc218\uc5d0 \ud560\ub2f9 \u21d2 \ud568\uc218\ub3c4 \ud558\ub098\uc758 \uac12\uc73c\ub85c \ucde8\uae09\ud560 \uc218 \uc788\uc74c. "),(0,r.kt)("li",{parentName:"ul"},"\ud568\uc218\uba85\uc774 \uc815\uc758\ub3fc \uc788\uc9c0 \uc54a\uc544\ub3c4 \ub428. \uc815\uc758\ub41c \ud568\uc218\ud45c\ud604\uc2dd\uc744 '\uae30\uba85 \ud568\uc218 \ud45c\ud604\uc2dd', \uc815\uc758\ud558\uc9c0 \uc54a\uc740 \uac83\uc744 '\uc775\uba85 \ud568\uc218 \ud45c\ud604\uc2dd'\uc774\ub77c\uace0 \ud568"),(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218\ubd80\ub9cc \ud638\uc774\uc2a4\ud305 \ud568")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-8 \ud568\uc218\ub97c \uc815\uc758\ud558\ub294 \uc138 \uac00\uc9c0 \ubc29\uc2dd")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function a()  { /*... */ }        //\ud568\uc218 \uc120\uc5b8\ubb38. \ud568\uc218\uba85 a\uac00 \uace7 \ubcc0\uc218\uba85\na();  // \uc2e4\ud589 ok\n\nvar b = function () { /*... */ }  // (\uc775\uba85) \ud568\uc218 \ud45c\ud604\uc2dd. \ubcc0\uc218\uba85 b\uac00 \uace7 \ud568\uc218\uba85.\nb();  // \uc2e4\ud589 ok\n\nvar c = function d () { /*... */ }  // \uae30\uba85 \ud568\uc218 \ud45c\ud604\uc2dd. \ubcc0\uc218\uba85\uc740 c, \ud568\uc218\uba85\uc740 d.\nc();  // \uc2e4\ud589 ok\nd();  // \uc5d0\ub7ec!\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\ucc38\uace0 \u2757"),"\n\uae30\uba85 \ud568\uc218 \ud45c\ud604\uc2dd\uc740 \uc678\ubd80\uc5d0\uc11c \ud568\uc218\uba85\uc73c\ub85c \ud568\uc218\ub97c \ud638\ucd9c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc608\uc804\uc5d0\ub294 \ub514\ubc84\uae45\uc2dc \uc775\uba85 \ud568\uc218 \ud45c\ud604\uc2dd\uc5d0\uc11c \ud568\uc218\uba85\uc774 undefined\ub098 unnamed\uc73c\ub85c \ucd9c\ub825\uc774 \ub418\uc5c8\ub294\ub370, \uc774\uc81c\ub294 \uc775\uba85 \ud568\uc218 \ud45c\ud604\uc2dd\uc758 \ubcc0\uc218\uba85\uc744 \ud568\uc218\uc758 name \ud504\ub85c\ud37c\ud2f0\uc5d0 \ud560\ub2f9\ud558\uae30 \ub54c\ubb38\uc5d0 \uae30\uba85 \ud568\uc218 \ud45c\ud604\uc2dd\uc758 \ud568\uc218\uba85\uc740 \ud638\ucd9c\ud560 \ud544\uc694\uac00 \uc5c6\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-9 \ud568\uc218 \uc120\uc5b8\ubb38\uacfc \ud568\uc218 \ud45c\ud604\uc2dd (1) - \uc6d0\ubcf8 \ucf54\ub4dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(sum(1, 2));\nconsole.log(multiply(3, 4));\n\nfunction sum (a, b) {             // \ud568\uc218 \uc120\uc5b8\ubb38 sum\n  return a + b;\n};\n\nvar multiply = function (a, b) {  // \ud568\uc218 \ud45c\ud604\uc2dd multiply\n  return a * b;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-9 \ud568\uc218 \uc120\uc5b8\ubb38\uacfc \ud568\uc218 \ud45c\ud604\uc2dd (2) - \ud638\uc774\uc2a4\ud305\uc744 \ub9c8\uce5c \uc0c1\ud0dc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function sum (a, b) {           // \ud568\uc218 \uc120\uc5b8\ubb38\uc740 \uc804\uccb4\ub97c \ud638\uc774\uc2a4\ud305\n  return a + b;\n};\nvar multiply;                   // \ubcc0\uc218\ub294 \uc120\uc5b8\ubd80\ub9cc \ub04c\uc5b4\uc62c\ub9bc\n\nconsole.log(sum(1, 2));         // (1)\nconsole.log(multiply(3, 4));    // (2)\n\n\nmultiply = function (a, b) {    // \ubcc0\uc218\uc758 \ud560\ub2f9\ubd80\ub294 \uc6d0\ub798 \uc790\ub9ac\uc5d0 \ub0a8\uaca8\ub460\n  return a * b;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc2e4\uc81c \uac12")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) : 3\n(2) : Uncaught TypeError: multiply is not a function")),(0,r.kt)("p",null,"\ud568\uc218 \uc120\uc5b8\ubb38\uc740 \uc798 \uc2e4\ud589\ub418\uc9c0\ub9cc \ud568\uc218 \ud45c\ud604\uc2dd\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\ud568\uc218 \uc120\uc5b8\ubb38\uc740 \uc774\uc640 \uac19\uc740 \ud2b9\uc131 \ub54c\ubb38\uc5d0 \ud63c\ub780\uc744 \uc77c\uc73c\ud0a4\ub294 \uc6d0\uc778\uc774 \ub418\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac1c\ubc1c\uc790 A\uac00 100\ubc88\uc9f8 \uc904\uc5d0\uc11c sum\ud568\uc218\ub97c \uc120\uc5b8\ud558\uace0, B\uac00 \uac19\uc740 \ud30c\uc77c\uc758 5000\ubc88\uc9f8 \uc904\uc5d0\uc11c sum \ud568\uc218\ub97c \uc0c8\ub85c \uc120\uc5b8\ud558\ub294 \ud568\uc218\ub97c \uc608\ub97c \ub4e4\uc5b4 \ubd05\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-11 \ud568\uc218 \uc120\uc5b8\ubb38\uc758 \uc704\ud5d8\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(sum(3, 4));  // 3+4=7\n\n// ...\n\nfunction sum (x, y) {                   // \uac1c\ubc1c\uc790 A\n  return x + y;\n}\n\nvar a = sum(1, 2);\n\nfunction sum (x, y) {                   // \uac1c\ubc1c\uc790 B\n  return x + '+' + y + '=' + (x + y);\n}\n\nvar c = sum(1, 2)\nconsole.log(c)          // 1+2=3\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud568\uc218 \uc120\uc5b8\ubb38")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \ubcc0\uc218\uc5d0 \uc11c\ub85c \ub2e4\ub978 \uac12 \ud560\ub2f9\uc2dc \ub098\uc911\uc5d0 \ud560\ub2f9\ud55c \uac12\uc774 ",(0,r.kt)("strong",{parentName:"li"},"override")),(0,r.kt)("li",{parentName:"ul"},"console.log(sum(3, 4))\uc758 \uac12\uc774 string\uc778 '3+4=7'\ub85c \ucd9c\ub825"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ubb38\uc81c\uc758 \uc6d0\uc778\uc774 \ub418\ub294 sum \ud568\uc218\ub294 \uc544\ubb34\ub7f0 \uc5d0\ub7ec\ub97c \ub0b4\uc9c0 \uc54a\uc74c"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud568\uc218 \ud45c\ud604\uc2dd")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubcc0\uc218 \uc120\uc5b8\ubd80\ub9cc \ud638\uc774\uc2a4\ud305 \ub418\uace0, \ud560\ub2f9\ubd80\ub294 \uc544\ub798\uc5d0 \ub0a8\uc544\uc788\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc21c\uc11c\ub300\ub85c \uc704\uc5d0\uc11c \uc544\ub798\ub85c \ubcc0\uc218\uac00 \ud560\ub2f9\ub420 \ub54c\ub9c8\ub2e4 \uac12\uc744 \ucd9c\ub825\ud560 \uc218 \uc788\uc74c")),(0,r.kt)("p",null,"A\uc640 B \ubaa8\ub450 \ud568\uc218 \ud45c\ud604\uc2dd\uc73c\ub85c \uc815\uc758"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc608\uc81c 2-12 \uc0c1\ub300\uc801\uc73c\ub85c \ud568\uc218 \ud45c\ud604\uc2dd\uc774 \uc548\uc804\ud558\ub2e4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(sum(3, 4));  // Uncaught TypeError: sum is not a function\n\n// ...\n\nvar sum = function (x, y) {            \n  return x + y;\n}\n\nvar a = sum(1, 2);\nconsole.log(a)      // 3\n\nvar sum = function (x, y) {            \n  return x + '+' + y + '=' + (x + y); \n}\n\nvar c = sum(1, 2);\nconsole.log(c);     // 1+2=3\n")))}s.isMDXComponent=!0}}]);