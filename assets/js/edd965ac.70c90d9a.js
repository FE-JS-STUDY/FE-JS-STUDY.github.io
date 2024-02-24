"use strict";(self.webpackChunkfrontend_study=self.webpackChunkfrontend_study||[]).push([[6291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,v=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},o="13 \uc2a4\ucf54\ud504",p={unversionedId:"JavaScript Deep Dive/13 \uc2a4\ucf54\ud504",id:"JavaScript Deep Dive/13 \uc2a4\ucf54\ud504",title:"13 \uc2a4\ucf54\ud504",description:"13.1 \uc2a4\ucf54\ud504\ub780?",source:"@site/docs/JavaScript Deep Dive/13 \uc2a4\ucf54\ud504.md",sourceDirName:"JavaScript Deep Dive",slug:"/JavaScript Deep Dive/13 \uc2a4\ucf54\ud504",permalink:"/docs/JavaScript Deep Dive/13 \uc2a4\ucf54\ud504",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript Deep Dive/13 \uc2a4\ucf54\ud504.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11 \uc6d0\uc2dc \uac12\uacfc \uac1d\uccb4\uc758 \ube44\uad50",permalink:"/docs/JavaScript Deep Dive/11 \uc6d0\uc2dc \uac12\uacfc \uac1d\uccb4\uc758 \ube44\uad50"},next:{title:"01 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc18c\uac1c\uc640 \ubc30\uacbd",permalink:"/docs/typescript/01 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc18c\uac1c\uc640 \ubc30\uacbd"}},c={},i=[{value:"13.1 \uc2a4\ucf54\ud504\ub780?",id:"131-\uc2a4\ucf54\ud504\ub780",level:2},{value:"13.2 \uc2a4\ucf54\ud504\uc758 \uc885\ub958",id:"132-\uc2a4\ucf54\ud504\uc758-\uc885\ub958",level:2},{value:"13.2.1 \uc804\uc5ed\uacfc \uc804\uc5ed \uc2a4\ucf54\ud504",id:"1321-\uc804\uc5ed\uacfc-\uc804\uc5ed-\uc2a4\ucf54\ud504",level:3},{value:"13.2.2 \uc9c0\uc5ed\uacfc \uc9c0\uc5ed \uc2a4\ucf54\ud504",id:"1322-\uc9c0\uc5ed\uacfc-\uc9c0\uc5ed-\uc2a4\ucf54\ud504",level:3}],u={toc:i};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"13-\uc2a4\ucf54\ud504"},"13 \uc2a4\ucf54\ud504"),(0,a.kt)("h2",{id:"131-\uc2a4\ucf54\ud504\ub780"},"13.1 \uc2a4\ucf54\ud504\ub780?"),(0,a.kt)("p",null,"\uc2a4\ucf54\ud504\ub294 \ub9e4\uac1c\ubcc0\uc218\ub97c \ucc38\uc870\ud560 \uc218 \uc788\ub294 \uc720\ud6a8\ubc94\uc704\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(x, y) {\n  // \ub9e4\uac1c\ubcc0\uc218\ub294 \ud568\uc218 \ubab8\uccb4 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \ucc38\uc870\ud560 \uc218 \uc788\ub2e4.\n  // \uc989, \ub9e4\uac1c\ubcc0\uc218\uc758 \uc2a4\ucf54\ud504(\uc720\ud6a8\ubc94\uc704)\ub294 \ud568\uc218 \ubab8\uccb4 \ub0b4\ubd80\ub2e4.\n  console.log(x, y); // 2 5\n  return x + y;\n}\n\nadd(2, 5);\n\n// \ub9e4\uac1c\ubcc0\uc218\ub294 \ud568\uc218 \ubab8\uccb4 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \ucc38\uc870\ud560 \uc218 \uc788\ub2e4.\nconsole.log(x, y); // ReferenceError: x is not defined\n")),(0,a.kt)("p",null,"\ubcc0\uc218\ub294 \ucf54\ub4dc\uc758 \uac00\uc7a5 \ubc14\uae65 \uc601\uc5ed\ubfd0 \uc544\ub2c8\ub77c \ucf54\ub4dc \ube14\ub85d\uc774\ub098 \ud568\uc218 \ubab8\uccb4 \ub0b4\uc5d0\uc11c\ub3c4 \uc120\uc5b8\ud560 \uc218 \uc788\ub2e4. \uc774\ub54c \ucf54\ub4dc \ube14\ub85d\uc774\ub098 \ud568\uc218\ub294 \uc911\ucca9\ub420 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"var var1 = 1; // \ucf54\ub4dc\uc758 \uac00\uc7a5 \ubc14\uae65 \uc601\uc5ed\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218\n\nif (true) {\n  var var2 = 2; // \ucf54\ub4dc \ube14\ub85d \ub0b4\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218\n  if (true) {\n    var var3 = 3; // \uc911\ucca9\ub41c \ucf54\ub4dc \ube14\ub85d \ub0b4\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218\n  }\n}\n\nfunction foo() {\n  var var4 = 4; // \ud568\uc218 \ub0b4\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218\n\n  function bar() {\n    var var5 = 5; // \uc911\ucca9\ub41c \ud568\uc218 \ub0b4\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218\n  }\n}\n\nconsole.log(var1); // 1\nconsole.log(var2); // 2\nconsole.log(var3); // 3\nconsole.log(var4); // ReferenceError: var4 is not defined\nconsole.log(var5); // ReferenceError: var5 is not defined\n")),(0,a.kt)("p",null,"\ubaa8\ub4e0 \uc2dd\ubcc4\uc790 (\ubcc0\uc218, \ud568\uc218, \ud074\ub798\uc2a4)\ub294 \uc790\uc2e0\uc774 \uc120\uc5b8\ub41c \uc704\uce58\uc5d0 \uc758\ud574 \ub2e4\ub978 \ucf54\ub4dc\uac00 \uc2dd\ubcc4\uc790 \uc790\uc2e0\uc744 \ucc38\uc870\ud560 \uc218 \uc788\ub294 \uc720\ud6a8 \ubc94\uc704\uac00 \uacb0\uc815\ub41c\ub2e4. \uc774\ub97c \uc2a4\ucf54\ud504\ub77c \ud55c\ub2e4. \uc2a4\ucf54\ud504\ub294 \uc2dd\ubcc4\uc790\uac00 \uc720\ud6a8\ud55c \ubc94\uc704\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var x = "global";\n\nfunction foo() {\n  var x = "local";\n  console.log(x); // \u2460\n}\n\nfoo();\n\nconsole.log(x); // \u2461\n')),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc774\ub984\uc774 \uac19\uc740 \ub450 \uac1c\uc758 \ubcc0\uc218 \uc911\uc5d0\uc11c \uc5b4\ub5a4 \ubcc0\uc218\ub97c \ucc38\uc870\ud574\uc57c \ud560 \uac83\uc778\uc9c0\ub97c \uacb0\uc815\ud574\uc57c \ud558\ub294\ub370, \uc774\ub97c \uc2dd\ubcc4\uc790 \uacb0\uc815\uc774\ub77c \ud55c\ub2e4. \uc774\ub54c, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc2dd\ubcc4\uc790\ub97c \ud1b5\ud574 \uc5b4\ub5a4 \ubcc0\uc218\ub97c \ucc38\uc870\ud574\uc57c\ud560 \uac83\uc778\uc9c0\ub97c \uacb0\uc815\ud55c\ub2e4. \uc2a4\ucf54\ud504\ub294 \uc2dd\ubcc4\uc790\ub97c \uac80\uc0c9\ud560 \ub54c, \uc0ac\uc6a9\ud558\ub294 \uaddc\uce59\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucf54\ub4dc\uc758 \ubb38\ub9e5\uacfc \ud658\uacbd"),(0,a.kt)("p",{parentName:"blockquote"},"\ucf54\ub4dc\uac00 \uc5b4\ub514\uc11c \uc2e4\ud589\ub418\uba70 \uc8fc\ubcc0\uc5d0 \uc5b4\ub5a4 \ucf54\ub4dc\uac00 \uc788\ub294\uac00\ub97c \ub809\uc2dc\uceec \ud658\uacbd\uc774\ub77c\uace0 \ud558\uace0, \uc774\ub97c \uad6c\ud604\ud55c \uac83\uc774 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc774\ub2e4.")),(0,a.kt)("p",null,"foo \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc120\uc5b8\ub41c x \ub294 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\ub9cc \ucc38\uc870\ud560 \uc218 \uc788\uace0, \uc678\ubd80\uc5d0\uc11c\ub294 \ucc38\uc870\ud560 \uc218 \uc5c6\ub2e4. \ubc18\uba74 \ucf54\ub4dc\uc758 \uac00\uc7a5 \ubc14\uae65 \uc601\uc5ed\uc5d0 \uc120\uc5b8\ub41c x \ubcc0\uc218\ub294 \uc804\uc5ed \uc2a4\ucf54\ud504\uc5d0\uc11c \uc120\uc5b8\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \uc5b4\ub514\uc11c\ub4e0\uc9c0 \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc2dd\ubcc4\uc790\ub294 \uc5b4\ub5a4 \uac12\uc744 \uad6c\ubcc4\ud560 \uc218 \uc788\uc5b4\uc57c \ud558\ubbc0\ub85c \uc720\uc77c\ud574\uc57c \ud55c\ub2e4. \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c\ub294 \uc2a4\ucf54\ud504\ub97c \ud1b5\ud574 \uc2dd\ubcc4\uc790\uc778 \ubcc0\uc218 \uc774\ub984\uc758 \ucda9\ub3cc\uc744 \ubc29\uc9c0\ud558\uc5ec \uac19\uc740 \uc774\ub984\uc758 \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud55c\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"var \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\ud55c \ubcc0\uc218\uc758 \uc911\ubcf5 \uc120\uc5b8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function foo() {\n  var x = 1;\n  // var \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\ub41c \ubcc0\uc218\ub294 \uac19\uc740 \uc2a4\ucf54\ud504 \ub0b4\uc5d0\uc11c \uc911\ubcf5 \uc120\uc5b8\uc744 \ud5c8\uc6a9\ud55c\ub2e4.\n  // \uc544\ub798 \ubcc0\uc218 \uc120\uc5b8\ubb38\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc5d0 \uc758\ud574 var \ud0a4\uc6cc\ub4dc\uac00 \uc5c6\ub294 \uac83\ucc98\ub7fc \ub3d9\uc791\ud55c\ub2e4.\n  var x = 2;\n  console.log(x); // 2\n}\nfoo();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function bar() {\n  let x = 1;\n  // let\uc774\ub098 const \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\ub41c \ubcc0\uc218\ub294 \uac19\uc740 \uc2a4\ucf54\ud504 \ub0b4\uc5d0\uc11c \uc911\ubcf5 \uc120\uc5b8\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4.\n  let x = 2; // SyntaxError: Identifier 'x' has already been declared\n}\nbar();\n")),(0,a.kt)("h2",{id:"132-\uc2a4\ucf54\ud504\uc758-\uc885\ub958"},"13.2 \uc2a4\ucf54\ud504\uc758 \uc885\ub958"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\uad6c\ubd84"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,a.kt)("th",{parentName:"tr",align:null},"\uc2a4\ucf54\ud504"),(0,a.kt)("th",{parentName:"tr",align:null},"\ubcc0\uc218"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\uc5ed"),(0,a.kt)("td",{parentName:"tr",align:null},"\ucf54\ub4dc\uc758 \uac00\uc7a5 \ubc14\uae65 \uc601\uc5ed"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\uc5ed \uc2a4\ucf54\ud504"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\uc5ed \ubcc0\uc218")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc5ed"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud568\uc218 \ubab8\uccb4 \ub0b4\ubd80"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc5ed \uc2a4\ucf54\ud504"),(0,a.kt)("td",{parentName:"tr",align:null},"\uc9c0\uc5ed \ubcc0\uc218")))),(0,a.kt)("p",null,"\ucf54\ub4dc\ub294 \uc804\uc5ed\uacfc \uc9c0\uc5ed\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\ub2e4. \ubcc0\uc218\ub294 \uc790\uc2e0\uc774 \uc120\uc5b8\ub41c \uc704\uce58 (\uc804\uc5ed \ub610\ub294 \uc9c0\uc5ed)\uc5d0 \uc758\ud574 \uc790\uc2e0\uc774 \uc720\ud6a8\ud55c \ubc94\uc704\uc778 \uc2a4\ucf54\ud504\uac00 \uacb0\uc815\ub41c\ub2e4. \uc989, \uc804\uc5ed\uc5d0\uc11c \uc120\uc5b8\ub41c \ubcc0\uc218\ub294 \uc804\uc5ed \uc2a4\ucf54\ud504\ub97c \uac16\ub294 \uc804\uc5ed \ubcc0\uc218\uc774\uace0, \uc9c0\uc5ed\uc5d0\uc11c \uc120\uc5b8\ub41c \ubcc0\uc218\ub294 \uc9c0\uc5ed \uc2a4\ucf54\ud504\ub97c \uac16\ub294 \uc9c0\uc5ed \ubcc0\uc218\uc774\ub2e4."),(0,a.kt)("h3",{id:"1321-\uc804\uc5ed\uacfc-\uc804\uc5ed-\uc2a4\ucf54\ud504"},"13.2.1 \uc804\uc5ed\uacfc \uc804\uc5ed \uc2a4\ucf54\ud504"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"13-2",src:n(4687).Z,width:"1440",height:"1200"})),(0,a.kt)("p",null,"\uc804\uc5ed\uc774\ub780 \ucf54\ub4dc\uc758 \uac00\uc7a5 \ubc14\uae65 \uc601\uc5ed\uc744 \uc758\ubbf8\ud55c\ub2e4. \uc804\uc5ed\uc740 \uc804\uc5ed \uc2a4\ucf54\ud504\ub97c \ub9cc\ub4e0\ub2e4. \uc804\uc5ed\uc5d0 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uba74 \uc804\uc5ed \uc2a4\ucf54\ud504\ub97c \uac16\ub294 \uc804\uc5ed \ubcc0\uc218\uac00 \ub41c\ub2e4. \uc804\uc5ed \ubcc0\uc218\ub294 \uc5b4\ub514\uc11c\ub4e0\uc9c0 \ucc38\uc870\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h3",{id:"1322-\uc9c0\uc5ed\uacfc-\uc9c0\uc5ed-\uc2a4\ucf54\ud504"},"13.2.2 \uc9c0\uc5ed\uacfc \uc9c0\uc5ed \uc2a4\ucf54\ud504"),(0,a.kt)("p",null,"\uc9c0\uc5ed\uc774\ub780 \ud568\uc218 \ubab8\uccb4 \ub0b4\ubd80\ub97c \ub9d0\ud55c\ub2e4. \uc9c0\uc5ed\uc740 \uc9c0\uc5ed \uc2a4\ucf54\ud504\ub97c \ub9cc\ub4e0\ub2e4. \uc9c0\uc5ed \ubcc0\uc218\ub294 \uc790\uc2e0\uc774 \uc120\uc5b8\ub41c \uc9c0\uc5ed\uacfc \ud558\uc704 \uc9c0\uc5ed\uc5d0\uc11c\ub9cc \ucc38\uc870\ud560 \uc218 \uc788\ub2e4. \uc989, \uc9c0\uc5ed \ubcc0\uc218\ub294 \uc790\uc2e0\uc758 \uc9c0\uc5ed \uc2a4\ucf54\ud504\uc640 \ud558\uc704 \uc9c0\uc5ed \uc2a4\ucf54\ud504\uc5d0\uc11c \uc720\ud6a8\ud558\ub2e4."))}s.isMDXComponent=!0},4687:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/13-2-8f135e44bf1db3b01d299209eccd78fc.jpg"}}]);