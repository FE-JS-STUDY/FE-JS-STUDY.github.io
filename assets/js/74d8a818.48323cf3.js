"use strict";(self.webpackChunkfrontend_study=self.webpackChunkfrontend_study||[]).push([[3345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=i(r),k=a,m=s["".concat(p,".").concat(k)]||s[k]||u[k]||o;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l="17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",c={unversionedId:"typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",title:"17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",description:"17.4.2 Partial \ud0c0\uc785 \uc608\uc2dc",source:"@site/docs/typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785.md",sourceDirName:"typescript",slug:"/typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",permalink:"/docs/typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"16 \ud0c0\uc785 \ubaa8\ub4c8",permalink:"/docs/typescript/16 \ud0c0\uc785 \ubaa8\ub4c8"}},p={},i=[{value:"17.4.2 Partial \ud0c0\uc785 \uc608\uc2dc",id:"1742-partial-\ud0c0\uc785-\uc608\uc2dc",level:3},{value:"17.5 Exclude \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"175-exclude-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"17.5.1 Exclude \ud0c0\uc785 \ubb38\ubc95",id:"1751-exclude-\ud0c0\uc785-\ubb38\ubc95",level:3},{value:"17.5.2 Exclude \ud0c0\uc785 \uc608\uc2dc",id:"1752-exclude-\ud0c0\uc785-\uc608\uc2dc",level:3},{value:"17.6 Record \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785",id:"176-record-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785",level:2},{value:"17.6.1 Record \ud0c0\uc785 \uccab \ubc88\uc9f8 \uc608\uc2dc",id:"1761-record-\ud0c0\uc785-\uccab-\ubc88\uc9f8-\uc608\uc2dc",level:3},{value:"17.6.2 Record \ud0c0\uc785 \ub450 \ubc88\uc9f8 \uc608\uc2dc",id:"1762-record-\ud0c0\uc785-\ub450-\ubc88\uc9f8-\uc608\uc2dc",level:3},{value:"17.6.3 Record \ud0c0\uc785 \ubb38\ubc95",id:"1763-record-\ud0c0\uc785-\ubb38\ubc95",level:3}],d={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"17-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785"},"17 \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"),(0,a.kt)("h3",{id:"1742-partial-\ud0c0\uc785-\uc608\uc2dc"},"17.4.2 Partial \ud0c0\uc785 \uc608\uc2dc"),(0,a.kt)("p",null,"Partial \ud0c0\uc785\uc740 \ud2b9\uc815 \ud0c0\uc785\uc758 \uc18d\uc131\uc744 \ubaa8\ub450 \uc120\ud0dd\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \ubcf4\ud1b5 \ub370\uc774\ud130 \uc218\uc815 API\ub97c \ub2e4\ub8f0 \ub54c \uc0ac\uc6a9\ud568."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  id: string;\n  title: string;\n  checked: boolean;\n}\n\nfunction updateTodo(todo: Todo) {\n  // ...\n}\n")),(0,a.kt)("p",null,"updateTodo \ud568\uc218\uc758 \ud30c\ub77c\ubbf8\ud130\ub85c Todo \ud0c0\uc785\uc758 \ub370\uc774\ud130\ub97c \uc9c0\uc815\ud588\ub294\ub370, \uc774\ub807\uac8c \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uba74 id, title, checked\ub97c \uc120\ud0dd\uc801\uc73c\ub85c \ubcf4\ub0bc \uc218 \uc5c6\uace0, \ubaa8\ub450 \ubcf4\ub0b4\uc57c \ud568. \uc774\ub7ec\ud55c \uacbd\uc6b0 Pick\uacfc Omit \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785\uc744 \uc774\uc6a9\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \ud574\uacb0\ud560 \uc218 \uc788\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// id \uc18d\uc131\ub9cc \ub118\uae30\ub294 \uacbd\uc6b0\nfunction UpdateTodo(todo: Pick<Todo, "id">) {\n  // ...\n}\n\n// id\uc640 address \uc18d\uc131\ub9cc \ub118\uae30\ub294 \uacbd\uc6b0\nfunction UpdateTodo(todo: Omit<Todo, "checked">) {\n  // ...\n}\n\n// \ud560 \uc77c \ub370\uc774\ud130\uc5d0 \uc815\uc758\ub41c \uac12\uc744 \ubaa8\ub450 \ub118\uae30\ub294 \uacbd\uc6b0\nfunction UpdateTodo(todo: Todo) {\n  // ...\n}\n')),(0,a.kt)("p",null,"Partial \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud574\uc11c \ud574\uacb0\ud560 \uc218\ub3c4 \uc788\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  id: string;\n  title: string;\n  checked: boolean;\n}\n\nfunction updateTodo(todo: Partial<Todo>) {\n  // ...\n}\n")),(0,a.kt)("p",null,"Todo \ud0c0\uc785\uc774 Partial\ub85c \uc815\uc758\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 id, title, checked \uc18d\uc131\uc774 \ubaa8\ub450 \uc635\uc158 \uc18d\uc131\uc73c\ub85c \ubcc0\uacbd\ub418\uc5b4 \ub2e4\uc591\ud55c \ud615\ud0dc\uc758 \uac12\uc744 \ub118\uae38 \uc218 \uc788\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'updateTodo({ id: "1" });\nupdateTodo({ id: "1", title: "Partial \ud559\uc2b5" });\nupdateTodo({ id: "1", title: "Partial \ud559\uc2b5", checked: true });\n')),(0,a.kt)("h2",{id:"175-exclude-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785"},"17.5 Exclude \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"),(0,a.kt)("p",null,"Exclude \ud0c0\uc785\uc740 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc744 \uad6c\uc131\ud558\ub294 \ud2b9\uc815 \ud0c0\uc785\uc744 \uc81c\uc678\ud560 \ub54c \uc0ac\uc6a9\ud568. Pick, Omit, Partial \ud0c0\uc785\uc774 \ubaa8\ub450 \uac1d\uccb4 \ud0c0\uc785\uc758 \ud615\ud0dc\ub97c \ubcc0\ud615\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uac1d\uccb4 \ud0c0\uc785\uc744 \ub9cc\ub4dc\ub294 \ubc18\uba74 Exclude \ud0c0\uc785\uc740 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc744 \ubcc0\ud615\ud568."),(0,a.kt)("h3",{id:"1751-exclude-\ud0c0\uc785-\ubb38\ubc95"},"17.5.1 Exclude \ud0c0\uc785 \ubb38\ubc95"),(0,a.kt)("p",null,"\uccab \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0 \ubcc0\ud615\ud560 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc744 \ub123\uace0, \ub450 \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc73c\ub85c \uc81c\uc678\ud560 \ud0c0\uc785 \uc774\ub984\uc744 \ubb38\uc790\uc5f4 \ud0c0\uc785\uc73c\ub85c \uc801\uac70\ub098 \ubb38\uc790\uc5f4 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uc73c\ub85c \ub123\uc5b4\uc90c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Exclude<\ub300\uc0c1 \uc720\ub2c8\uc5b8 \ud0c0\uc785, '\uc81c\uac70\ud560 \ud0c0\uc785 \uc774\ub984'>\nExclude<\ub300\uc0c1 \uc720\ub2c8\uc5b8 \ud0c0\uc785, '\uc81c\uac70\ud560 \ud0c0\uc785 \uc774\ub984 1' | '\uc81c\uac70\ud560 \ud0c0\uc785 \uc774\ub984 2'>\n")),(0,a.kt)("h3",{id:"1752-exclude-\ud0c0\uc785-\uc608\uc2dc"},"17.5.2 Exclude \ud0c0\uc785 \uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type Languages = "C" | "Java" | "TypeScript" | "React";\ntype TrueLanguages = Exlude<Languages, "React">;\n')),(0,a.kt)("p",null,"TrueLanguages \ud0c0\uc785\uc740 'React'\ub97c \uc81c\uc678\ud55c \ub098\uba38\uc9c0 \uc5b8\uc5b4\ub9cc \ub4e4\uc5b4\uac04 \ud0c0\uc785\uc774 \ub40c."),(0,a.kt)("h2",{id:"176-record-\uc720\ud2f8\ub9ac\ud2f0-\ud0c0\uc785"},"17.6 Record \uc720\ud2f8\ub9ac\ud2f0 \ud0c0\uc785"),(0,a.kt)("p",null,"Record \ud0c0\uc785\uc740 \ud0c0\uc785 \ud55c\uac1c\ub97c \uc18d\uc131\uc758 \ud0a4\ub85c \ubc1b\uace0, \ub2e4\ub978 \ud0c0\uc785 \ud55c\uac1c\ub97c \uc18d\uc131\uc758 \uac12\uc73c\ub85c \ubc1b\uc544\uc11c \uac1d\uccb4 \ud0c0\uc785\uc73c\ub85c \ubcc0\ud658. \ud0c0\uc785\uc744 map() API \ucc98\ub7fc \ubcc0\ud658."),(0,a.kt)("h3",{id:"1761-record-\ud0c0\uc785-\uccab-\ubc88\uc9f8-\uc608\uc2dc"},"17.6.1 Record \ud0c0\uc785 \uccab \ubc88\uc9f8 \uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type HeroProfile = {\n  skill: string;\n  age: number;\n};\ntype HeroNames = "thor" | "hulk" | "capt";\n\ntype Heroes = Record<HeroNames, HeroProfile>;\n')),(0,a.kt)("p",null,"Record \ud0c0\uc785\uc758 \uccab\ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc73c\ub85c \uc18d\uc131\uc758 \ud0a4 \uac12\uc778 HeroNames \ud0c0\uc785\uc744 \ub123\uace0, \ub450 \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0 \uc18d\uc131 \uac12\uc774 \ub420 HeroProfile \ud0c0\uc785\uc744 \ub123\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Heroes = {\n  chor: HeroProfile;\n  hulk: HeroProfile;\n  capt: HeroProfile;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'type Heroes = Record<HeroNames, HeroProfile>;\n\nvar avengers: Heroes = {\n  capt: {\n    skill: "\ubc29\ud328",\n    age: 100,\n  },\n  thor: {\n    skill: "\ud574\uba38",\n    age: 3000,\n  },\n  hulk: {\n    skill: "\uad34\uc131",\n    age: 47,\n  },\n};\n')),(0,a.kt)("h3",{id:"1762-record-\ud0c0\uc785-\ub450-\ubc88\uc9f8-\uc608\uc2dc"},"17.6.2 Record \ud0c0\uc785 \ub450 \ubc88\uc9f8 \uc608\uc2dc"),(0,a.kt)("p",null,"\ubb38\uc790\uc5f4 \uc720\ub2c8\uc5b8 \ud0c0\uc785\uacfc \uac1d\uccb4 \ud0c0\uc785\uc744 Record \ud0c0\uc785\uc758 \uc785\ub825 \uac12\uc73c\ub85c \uc368\ub3c4 \ub418\uc9c0\ub9cc \ub2e8\uc21c\ud55c \ud615\ud0dc\uc758 \ub370\uc774\ud130 \ud0c0\uc785\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type PhoneBook = Record<string, string>;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type PhoneBook = {\n  [x: string]: string;\n};\n")),(0,a.kt)("p",null,"\ubb38\uc790\uc5f4 \ud0a4\ub97c \uc5ec\ub7ec \uac1c \uc815\uc758\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc774 \ub418\uc5c8\uc74c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var familyPhones: PhoneBook = {\n  dad: "010-2837-105x",\n  mom: "010-1774-492x",\n};\n')),(0,a.kt)("h3",{id:"1763-record-\ud0c0\uc785-\ubb38\ubc95"},"17.6.3 Record \ud0c0\uc785 \ubb38\ubc95"),(0,a.kt)("p",null,"Record \ud0c0\uc785\uc758 \uccab \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0\ub294 \uac1d\uccb4 \uc18d\uc131\uc758 \ud0a4\ub85c \uc0ac\uc6a9\ud560 \ud0c0\uc785\uc744 \ub118\uae30\uace0, \ub450\ubc88\uc9f8 \ud0c0\uc785\uc5d0\ub294 \uac1d\uccb4 \uc18d\uc131\uc758 \uac12\uc73c\ub85c \uc0ac\uc6a9\ud560 \ud0c0\uc785\uc744 \ub118\uae38 \uc218 \uc788\uc74c. \uccab \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0\ub294 string, number, string \uc720\ub2c8\uc5b8, number \uc720\ub2c8\uc5b8\ub4f1\uc774 \ub4e4\uc5b4\uac08 \uc218 \uc788\uace0, \ub450 \ubc88\uc9f8 \uc81c\ub124\ub9ad \ud0c0\uc785\uc5d0\ub294 \uc544\ubb34 \ud0c0\uc785\uc774\ub098 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc74c."))}u.isMDXComponent=!0}}]);