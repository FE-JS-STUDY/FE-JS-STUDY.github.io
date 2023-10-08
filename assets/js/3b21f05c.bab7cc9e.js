"use strict";(self.webpackChunkfrontend_study=self.webpackChunkfrontend_study||[]).push([[763],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),p=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(o.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,o=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),m=p(t),k=a,g=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return t?r.createElement(g,i(i({ref:e},u),{},{components:t})):r.createElement(g,i({ref:e},u))}));function k(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5566:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={},i="09 \ud074\ub798\uc2a4",s={unversionedId:"typescript/09 \ud074\ub798\uc2a4",id:"typescript/09 \ud074\ub798\uc2a4",title:"09 \ud074\ub798\uc2a4",description:"9.1 \ud074\ub798\uc2a4\ub780?",source:"@site/docs/typescript/09 \ud074\ub798\uc2a4.md",sourceDirName:"typescript",slug:"/typescript/09 \ud074\ub798\uc2a4",permalink:"/docs/typescript/09 \ud074\ub798\uc2a4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/09 \ud074\ub798\uc2a4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"08 \uc774\ub118",permalink:"/docs/typescript/08 \uc774\ub118"},next:{title:"10 \uc81c\ub124\ub9ad",permalink:"/docs/typescript/10 \uc81c\ub124\ub9ad"}},o={},p=[{value:"9.1 \ud074\ub798\uc2a4\ub780?",id:"91-\ud074\ub798\uc2a4\ub780",level:2},{value:"9.2 \ud074\ub798\uc2a4 \uae30\ubcf8 \ubb38\ubc95",id:"92-\ud074\ub798\uc2a4-\uae30\ubcf8-\ubb38\ubc95",level:2},{value:"9.3 \ud074\ub798\uc2a4\uc758 \uc0c1\uc18d",id:"93-\ud074\ub798\uc2a4\uc758-\uc0c1\uc18d",level:2},{value:"9.4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud074\ub798\uc2a4",id:"94-\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758-\ud074\ub798\uc2a4",level:2},{value:"9.5 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790",id:"95-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790",level:2},{value:"9.5.1 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\uc758 \ud544\uc694\uc131",id:"951-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\uc758-\ud544\uc694\uc131",level:3},{value:"9.5.2 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790 : public, private, protected",id:"952-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790--public-private-protected",level:3},{value:"9.5.3 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\ub85c \uc815\uc218\uae30 \ubb38\uc81c \ud574\uacb0\ud558\uae30",id:"953-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\ub85c-\uc815\uc218\uae30-\ubb38\uc81c-\ud574\uacb0\ud558\uae30",level:3},{value:"9.5.4 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c \ud560 \uc810",id:"954-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\ub97c-\uc0ac\uc6a9\ud560-\ub54c-\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",level:3}],u={toc:p};function c(n){let{components:e,...l}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"09-\ud074\ub798\uc2a4"},"09 \ud074\ub798\uc2a4"),(0,a.kt)("h2",{id:"91-\ud074\ub798\uc2a4\ub780"},"9.1 \ud074\ub798\uc2a4\ub780?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4 \uc815\uc758")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var capt = {\n    name: '\ucea1\ud2f4',\n    skill: '\ubc29\ud328 \ub358\uc9c0\uae30'\n}\n\nvar lee = {\n    name: '\uae38\ubc97',\n    skill: '\uc88b\uc740 \ucc45 \ub9cc\ub4e4\uae30'\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc0dd\uc131\uc790 \ud568\uc218 \uc0ac\uc6a9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name, skill)  {\n    this.name = name;\n    this.skill = skill;\n}\n\nvar capt = new Person('\ucea1\ud2f4', '\ubc29\ud328 \ub358\uc9c0\uae30');\nvar lee = new Person('\uae38\ubc97', '\uc88b\uc740 \ucc45 \ub9cc\ub4e4\uae30');\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ucd5c\uc2e0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubb38\ubc95")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n    constructor(name, skill) {\n        this.name = name;\n        this.skill = skill;\n    }\n}\n")),(0,a.kt)("h2",{id:"92-\ud074\ub798\uc2a4-\uae30\ubcf8-\ubb38\ubc95"},"9.2 \ud074\ub798\uc2a4 \uae30\ubcf8 \ubb38\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name, skill)  {\n    this.name = name;\n    this.skill = skill;\n}\n\nPerson.prototype.sayHi = function() {  // Person\uc5d0 sayHi \uc18d\uc131 \ud568\uc218 \ucd94\uac00\n    console.log('hi');\n}\n\nvar joo = new Person('\ud615\uc8fc', '\uc778\ud504\ub7a9 \uc6b4\uc601'); \n\nconsole.log(joo.name);  // \ud615\uc8fc\nconsole.log(joo.skill);  // \uc778\ud504\ub7a9 \uc6b4\uc601\njoo.sayhi();  // hi\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"joo")," \ubcc0\uc218\ub97c \ucd9c\ub825\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person.prototype")," \uc548\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"sayHi"),"\ud568\uc218 \ucd94\uac00\ub428"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud074\ub798\uc2a4 \ubb38\ubc95\uc73c\ub85c \ubcc0\uacbd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n    constructor(name, skill) {  // \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc\n        this.name = name;  // \ud074\ub798\uc2a4 \ud544\ub4dc/\ud074\ub798\uc2a4 \uc18d\uc131\n        this.skill = skill;\n    }\n    \n    sayHi() {  // \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\n        console.log('hi');\n    }\n}\n\nvar joo = new Person('\ud615\uc8fc', '\uc778\ud504\ub7a9 \uc6b4\uc601');  // \ud074\ub798\uc2a4 \uc778\uc2a4\ud134\uc2a4\n")),(0,a.kt)("h2",{id:"93-\ud074\ub798\uc2a4\uc758-\uc0c1\uc18d"},"9.3 \ud074\ub798\uc2a4\uc758 \uc0c1\uc18d"),(0,a.kt)("p",null,"\ubd80\ubaa8 \ud074\ub798\uc2a4\uc758 \uc18d\uc131\uacfc \uba54\uc11c\ub4dc \ub4f1\uc744 \uc790\uc2dd \ud074\ub798\uc2a4\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ubb3c\ub824\uc90c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n    constructor(name, skill) {  // \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc\n        this.name = name;  // \ud074\ub798\uc2a4 \ud544\ub4dc/\ud074\ub798\uc2a4 \uc18d\uc131\n        this.skill = skill;\n    }\n    \n    sayHi() {  // \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\n        console.log('hi');\n    }\n}\n\nclass Developer extends Person {\n    constructor(name, skill) {  \n        super(name, skill);  // Developer \ud074\ub798\uc2a4\uc5d0\uc11c new \ud0a4\uc6cc\ub4dc\ub85c \uac1d\uccb4 \uc0dd\uc131\ud560 \ub54c \ubd80\ubaa8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uaca0\ub2e4\ub294 \ub73b\n    }\n    \n    coding() {\n        console.log('fun');\n    }\n}\n\nvar capt = new Developer('\ucea1\ud2f4', '\ubc29\ud328 \ub358\uc9c0\uae30');\n\ncapt.coding();  // fun\ncapt.sayHi();  // hi\n\nconsole.log(capt.name);  // \ucea1\ud2f4\nconsole.log(capt.skill);  // \ubc29\ud328 \ub358\uc9c0\uae30\n")),(0,a.kt)("p",null,"\uc0c1\uc18d\ud558\uba74 \ud074\ub798\uc2a4 \uc778\uc2a4\ud134\uc2a4\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc790\uc2dd \ud074\ub798\uc2a4 \ucf54\ub4dc \ub0b4\ubd80\uc5d0\uc11c\ub3c4 \ubd80\ubaa8 \ud074\ub798\uc2a4\uc758 \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc811\uadfc\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n    constructor(name, skill) {\n        this.name = name; \n        this.skill = skill;\n    }\n    \n    sayHi() {\n        console.log('hi');\n    }\n}\n\nclass Developer extends Person {\n    constructor(name, skill) {  \n        super(name, skill);\n        this.sayHi();  // Developer \ud074\ub798\uc2a4\ub97c new \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac1d\uccb4\ub85c \ub9cc\ub4e4\uba74 \ucf58\uc194 \ucc3d\uc5d0 hi \ucd9c\ub825\ub428\n    }\n    \n    coding() {\n        console.log('fun doing' + this.skill + 'by' + this.name);\n    }\n}\n\nvar capt = new Developer('\ucea1\ud2f4', 'TypeScript');\n\ncapt.coding();  // fun doing TypeScript by \ucea1\ud2f4\n")),(0,a.kt)("h2",{id:"94-\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758-\ud074\ub798\uc2a4"},"9.4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud074\ub798\uc2a4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Chatgpt {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    sum(a, b) {\n        return a + b;\n    }\n}\n\nvar gpt = new Chatgpt('\ub300\ud654\ud615 AI');\ngpt.sum(10, 20);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Chatgpt {\n    name: string;  // \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ud074\ub798\uc2a4\ub97c \uc791\uc131\ud560 \ub54c\ub294 \uc0dd\uc131\uc790 \uba54\uc11c\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub420 \ud074\ub798\uc2a4 \uc18d\uc131\ub4e4\uc744 \ubbf8\ub9ac \uc815\uc758\ud574 \uc8fc\uc5b4\uc57c \ud568\n    \n    constructor(name: string) {\n        this.name = name;\n    }\n    \n    sum(a: number, b: number): number {\n        return a + b;\n    }\n}\n\nvar gpt = new Chatgpt('\ub300\ud654\ud615 AI');\ngpt.sum(10, 20);\n")),(0,a.kt)("h2",{id:"95-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790"},"9.5 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790"),(0,a.kt)("p",null,"\ud074\ub798\uc2a4 \uc18d\uc131\uc758 \ub178\ucd9c \ubc94\uc704\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("h3",{id:"951-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\uc758-\ud544\uc694\uc131"},"9.5.1 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\uc758 \ud544\uc694\uc131"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Person {\n    name: string;\n    skill: string;\n    \n    constructor(name: string, skill: string) {\n        this.name = name;\n        this.skill = skill;\n    }\n}\n\nvar capt = new Person('\ucea1\ud2f4', '\ubc29\ud328 \ub358\uc9c0\uae30');\nconsole.log(capt.name);  // \ucea1\ud2f4\n")),(0,a.kt)("p",null,"\uac1d\uccb4\uc758 \uc18d\uc131\uc740 \uc790\uc720\ub86d\uac8c \ubcc0\uacbd \uac00\ub2a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"var capt = new Person('\ucea1\ud2f4', '\ubc29\ud328 \ub358\uc9c0\uae30');\nconsole.log(capt.name);  // \ucea1\ud2f4\ncapt.name = '\ud5d0\ud06c';\nconsole.log(capt.name);  // \ud5d0\ud06c\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class WaterPurifier {\n    waterAmount: number;\n    \n    constructor(waterAmount: number) {\n        this.waterAmount = waterAmount;\n    }\n    \n    wash() {\n        if (this.waterAmount > 0) {\n            console.log('\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5');\n        }\n    }\n}\n\nvar purifier = new WaterPurifier(30);\n\npurifier.wash();  // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\npurifier.waterAmount = 0;\npurifier.wash(); // \ucd9c\ub825 \uc548 \ub428!(\uace0\uc7a5)\n")),(0,a.kt)("h3",{id:"952-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790--public-private-protected"},"9.5.2 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790 : public, private, protected"),(0,a.kt)("p",null,"\ud074\ub798\uc2a4\uc758 \uc811\uadfc \uc81c\uc5b4\uc790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public"),(0,a.kt)("li",{parentName:"ul"},"private"),(0,a.kt)("li",{parentName:"ul"},"protected")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"public")),(0,a.kt)("p",null,"public \uc811\uadfc \uc81c\uc5b4\uc790\ub294 \ud074\ub798\uc2a4 \uc548\uc5d0 \uc120\uc5b8\ub41c \uc18d\uc131\uacfc \uba54\uc11c\ub4dc\ub97c \uc5b4\ub514\uc11c\ub4e0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ud568. \ubcc4\ub3c4\ub85c \uc18d\uc131 \uc811\uadfc \uc81c\uc5b4\ub97c \uc120\uc5b8\ud558\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8\uac12\uc740 public."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class WaterPurifier {\n  public waterAmount: number;\n\n  constructor(waterAmount: number) {\n    this.waterAmount = waterAmount;\n  }\n\n  public wash() {\n    if (this.waterAmount > 0) {\n      console.log("\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5");\n    }\n  }\n}\n\nvar pulifier = new WaterPurifier(50);\nconsole.log(pulifier.waterAmount); // 50\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\n')),(0,a.kt)("p",null,"public\uc73c\ub85c \uc120\uc5b8\ud55c waterAmount\uc640 wash \ubaa8\ub450 \ud074\ub798\uc2a4 \uc678\ubd80\uc5d0\uc11c\ub3c4 \uc811\uadfc\uc774 \uac00\ub2a5\ud568."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"private")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class Person {\n  private name: string;\n  private skill: string;\n\n  constructor(name: string, skill: string) {\n    this.name = name;\n    this.skill = skill;\n  }\n\n  private sayHi() {\n    console.log("hi");\n  }\n}\n\nvar hulk = new Person("\ud5d0\ud06c", "\uc18c\ub9ac\uce58\uae30");\nconsole.log(hulk.name);\n')),(0,a.kt)("p",null,"\ud074\ub798\uc2a4 \uc18d\uc131\uc778 name\uacfc skill, \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\uc778 sayHi \ubaa8\ub450 private\ub85c \uc120\uc5b8. private\ub85c \uc120\uc5b8\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc678\ubd80\uc5d0\uc11c \uc811\uadfc \ubd88\uac00\ub2a5. \ud074\ub798\uc2a4\uc758 name \uc18d\uc131\ub3c4 private\ub85c \uc120\uc5b8\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc678\ubd80\uc5d0\uc11c \uc811\uadfc\ud558\ub824\uace0 \ud560 \ub54c, \uc624\ub958 \ubc1c\uc0dd."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"protected")),(0,a.kt)("p",null,"protected\ub85c \uc120\uc5b8\ub41c \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub294 \ud074\ub798\uc2a4 \ucf54\ub4dc \uc678\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc74c. \ud558\uc9c0\ub9cc \uc0c1\uc18d\ubc1b\uc740 \ud074\ub798\uc2a4\uc5d0\uc11c\ub294 protected\ub85c \uc120\uc5b8\ud588\uc5b4\ub3c4 \uc811\uadfc \uac00\ub2a5\ud568."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class Person {\n  private name: string;\n  private skill: string;\n\n  constructor(name: string, skill: string) {\n    this.name = name;\n    this.skill = skill;\n  }\n\n  protected sayHi() {\n    console.log("hi");\n  }\n}\n\nclass Developer extends Person {\n  constructor(name: string, skill: string) {\n    super(name, skill);\n    this.sayHi();\n  }\n\n  coding(): void {\n    console.log("fun doing " + this.skill + " by " + this.name);\n  }\n}\n\nvar capt = new Person("\ucea1\ud2f4", "\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8");\ncapt.sayHi();\n\nvar hulk = new Developer("\ud5d0\ud06c", "\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8");\nhulk.coding();\n')),(0,a.kt)("p",null,"protected\ub85c \uc120\uc5b8\ud55c sayHi \uba54\uc11c\ub4dc\ub294 Person\uc744 \uc0c1\uc18d\ud55c \uc790\uc2dd \ud074\ub798\uc2a4\uc778 Developer\uc5d0\uc11c\ub294 \uc0ac\uc6a9 \uac00\ub2a5. \ud558\uc9c0\ub9cc name\uacfc skill\uc740 private\ub85c \uc120\uc5b8\ud588\uae30 \ub54c\ubb38\uc5d0 Person \ud074\ub798\uc2a4 \uc548\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0, Developer \ud074\ub798\uc2a4 \uc548\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc74c."),(0,a.kt)("p",null,"\uc704 \ucf54\ub4dc\uc5d0\uc11c Person\uc744 \uc0dd\uc131\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"capt.sayHi()")," \ub85c \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud560 \uacbd\uc6b0 \uc624\ub958 \ubc1c\uc0dd. sayHi \uba54\uc11c\ub4dc\ub294 protected\ub85c \uc120\uc5b8\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38."),(0,a.kt)("p",null,"\uc790\uc2dd \ud074\ub798\uc2a4\uc778 Developer\ub97c \uc0dd\uc131\ud558\uace0, ",(0,a.kt)("inlineCode",{parentName:"p"},"hulk.coding()")," \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc74c. coding \uba54\uc11c\ub4dc\ub294 public\uc774\uace0, skill\uacfc name\uc744 \uc0c1\uc18d\ubc1b\uc558\uae30 \ub54c\ubb38."),(0,a.kt)("h3",{id:"953-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\ub85c-\uc815\uc218\uae30-\ubb38\uc81c-\ud574\uacb0\ud558\uae30"},"9.5.3 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\ub85c \uc815\uc218\uae30 \ubb38\uc81c \ud574\uacb0\ud558\uae30"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class WaterPurifier {\n  waterAmount: number;\n\n  constructor(waterAmount: number) {\n    this.waterAmount = waterAmount;\n  }\n\n  wash() {\n    if (this.waterAmount > 0) {\n      console.log("\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5");\n    }\n  }\n}\n\nvar pulifier = new WaterPurifier(30);\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\npulifier.waterAmount = 0;\npulifier.wash();\n')),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\uc758 \ubb38\uc81c\uc810\uc740 \ud074\ub798\uc2a4 \uc678\ubd80\uc5d0 \ub178\ucd9c\ub418\uc9c0 \ub9d0\uc544\uc57c \ud560 \uc18d\uc131\uc774 \ub178\ucd9c\ub41c\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\uc74c. wash \uba54\uc11c\ub4dc\ub294 \uc678\ubd80\uc5d0\uc11c \uc811\uadfc\ud574\ub3c4 \ub418\uc9c0\ub9cc \ubb3c\uc758 \uc591(waterAmount)\ub294 \uc678\ubd80\uc5d0\uc11c \uc81c\uc5b4\ud560 \uc218 \uc5c6\uc5b4\uc57c \ud568."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class WaterPurifier {\n  private waterAmount: number;\n\n  constructor(waterAmount: number) {\n    this.waterAmount = waterAmount;\n  }\n\n  public wash() {\n    if (this.waterAmount > 0) {\n      console.log("\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5");\n    }\n  }\n}\n\nvar pulifier = new WaterPurifier(30);\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\npulifier.waterAmount = 0;\n')),(0,a.kt)("p",null,"\uc815\uc218\uae30 \ud074\ub798\uc2a4\uc5d0 \uc811\uadfc \uc81c\uc5b4\uc790\ub97c \uc9c0\uc815\ud558\uc5ec \uae30\uc874\uc758 \ubb38\uc81c \ud574\uacb0. waterAmount\uc5d0 private \uc811\uadfc\uc790\ub97c \uc9c0\uc815\ud558\uc5ec \uc678\ubd80\uc5d0\uc11c \uc811\uadfc\ud560 \uc218 \uc5c6\uac8c \ub9cc\ub4e4\uc5c8\uc74c."),(0,a.kt)("h3",{id:"954-\ud074\ub798\uc2a4-\uc811\uadfc-\uc81c\uc5b4\uc790\ub97c-\uc0ac\uc6a9\ud560-\ub54c-\uc8fc\uc758\ud574\uc57c-\ud560-\uc810"},"9.5.4 \ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c \ud560 \uc810"),(0,a.kt)("p",null,"\ud074\ub798\uc2a4 \uc811\uadfc \uc81c\uc5b4\uc790\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c \ud560 \uc810\uc740 \uc811\uadfc \ubc94\uc704\uc5d0 \ub530\ub77c \uc2e4\ud589\uae4c\uc9c0 \ub9c9\uc544\uc8fc\uc9c0\ub294 \uc54a\ub294\ub2e4\ub294 \uc810\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class WaterPurifier {\n  private waterAmount: number;\n\n  constructor(waterAmount: number) {\n    this.waterAmount = waterAmount;\n  }\n\n  public wash() {\n    if (this.waterAmount > 0) {\n      console.log("\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5");\n    }\n  }\n}\n\nvar pulifier = new WaterPurifier(30);\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\npulifier.waterAmount = 0;\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\n')),(0,a.kt)("p",null,"\uadf8\ub9bc 9-12"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"9-12",src:t(8958).Z,width:"1808",height:"522"})),(0,a.kt)("p",null,'\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud50c\ub808\uc774\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud558\uba74 "\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5"\uc774 \ud55c\ubc88 \ucd9c\ub825\ub418\ub294\ub370, \uc774\ub294 ',(0,a.kt)("inlineCode",{parentName:"p"},"pulifier.waterAmount = 0;")," \uc774 \ucf54\ub4dc\uc5d0\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uc758 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38. \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa9\uc801\uc740 \uc5d0\ub7ec \ubc29\uc9c0\uac00 \uc544\ub2cc \uc5d0\ub7ec \ubc1c\uacac\uc774\ubbc0\ub85c \uc2e4\ud589 \uc2dc\uc810\uc758 \uc5d0\ub7ec\uae4c\uc9c0\ub294 \ub9c9\uc744 \uc218 \uc5c6\uc74c. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c\ub294 private \ubb38\ubc95(#)\uc744 \uc0ac\uc6a9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class WaterPurifier {\n  #waterAmount: number;\n\n  constructor(waterAmount: number) {\n    this.#waterAmount = waterAmount;\n  }\n\n  public wash() {\n    if (this.waterAmount > 0) {\n      console.log("\uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5");\n    }\n  }\n}\n\nvar pulifier = new WaterPurifier(30);\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\npulifier.#waterAmount = 0;\npulifier.wash(); // \uc815\uc218\uae30 \ub3d9\uc791 \uc131\uacf5\n')),(0,a.kt)("p",null,"\uadf8\ub9bc 9-15\n",(0,a.kt)("img",{alt:"9-15",src:t(4258).Z,width:"1803",height:"531"})),(0,a.kt)("p",null,"private \uc811\uadfc\uc790\ub97c \ubd99\uc600\uc744 \ub54c\uc640 \ub2e4\ub974\uac8c \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc74c. #\uc740 \ucf54\ub4dc\uc5d0 \uc5d0\ub7ec\uac00 \uc788\uc744 \uacbd\uc6b0 \uc544\uc608 \uc2e4\ud589\uc744 \ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc784."))}c.isMDXComponent=!0},8958:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/9-12-567abb9e0a3d6278e8bfdf5a6d1007cb.JPG"},4258:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/9-15-c2d9617e41581377df4321e08cf2f881.JPG"}}]);