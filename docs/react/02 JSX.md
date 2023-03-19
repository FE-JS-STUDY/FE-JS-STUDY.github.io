# 02 JSX

## 2.1 코드 이해하기

1장에서 `create-react-app`으로 만든 hello-react의 src/App.js 파일

```javascript
// src/App.js
import logo from './logo.svg';
import './App.css';
```

**`import` 구문의 사용**

- 특정 파일을 불러오는 것. 리액트로 만든 프로젝트의 자바스크립트 파일에서는 `import`를 사용하여 다른 파일들을 불러와 사용할 수 있음

- 모듈을 불러와서 사용하는 것은 원래 브라우저에는 없던 기능이고, 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 해주는 환경인 Node.js에서 지원하는 기능 (Node.js에서는 `require`을 사용)

**번들러(bundler)의 사용**

- 모듈을 불러와서 사용하는 기능을 브라우저에서도 사용하기 위해 번들러를 사용 
- 번들러를 사용하면 `import`(또는 `require`)로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 줌

- 대표적인 번들러 :  웹팩, Parcel, browsenify 

**웹팩** 

- 리엑트에서 자주 사용하는 번들러. 
- 편의성과 확장성이 다른 도구보다 뛰어남.
- 웹팩 사용시 SVG나 CSS 파일도 불러와서 사용할 수 있다. (웹팩의 로더(loader)가 담당함)

**로더(loader)**

- css-loader 
- file-loader
- babel-loader : 자바스크립트 파일들을 불러오면서 최신 자바스크립트 문법으로 작성된 코드를 바벨이라는 도구를 사용하여 ES5 문법으로 변환해줌

- 원래는 직접 설치하고 설정해야 하지만, `create-react-app`이 이 과정을 대신해 줌으로 별도 설정할 필요 없음



**최신 자바스크립트 코드로 작성된 코드를 변환하는 이유 :question:**

구버전 웹브라우저와 호환하기 위해서.
리액트 컴포넌트에서 사용하는 JSX라는 문법도 정식 잦바스크립트 문법이 아니므로  ES5 형태의 코드로 변환해야 함.



```javascript
function App() {
    return (
    <div className="App">
    	<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            	Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
   );
}

export default App;
```

이 코드는 App이라는 컴포넌트를 만들어 준다. 이러한 컴포넌트를 **함수 컴포넌트** 라고 부른다. 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용(마치 html과 같은) 을 보여준다.  이 코드는 html도 아니고 문자열 템플릿도 아닌 **JSX** 코드이다.





## 2.2 JSX란?

**JSX**는 자바스크립트의 확장 문법으로 XML과 매우 비슷하게 생겼다. 브라우저에서 실행되기 전 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다. (JSX -(babel)-> JS)

```jsx
// JSX

function App() {
    return (
    	<div>
        	Hello <b>react</b>
        </div>
    );
}
```

이 코드는 다음과 같이 변환된다.

```js
// JS

function App() {
    return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}
```

만약 컴포넌트를 렌더링할 때마다 JSX 코드를 작성하는 것이 아니라 매번 `React.createElement` 함수를 사용해야 한다면 매우 불편할 것.



**JSX는 자바스크립트 문법인가 :question:**

:x: 리액트로 프로젝트 개발시 사용되므로 공식적인 자바스크립트 문법 아님.



## 2.3 JSX의 장점

### 2.3.1 보기 쉽고 익숙하다

가독성이 높고 작성하기 쉽다.



### 2.3.2 더욱 높은 활용도

- `<div>` 나 `<span>` 같은  HTML 태그와 컴포넌트를 JSX안에서 작성할 수 있다.
- src/index.js 파일을 보면 App 컴포넌트를 HTML태그 쓰듯이 그냥 작성한다.

```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    	<App />
    </React.StrictMode>
);

reportWebVitals();
```

- `document.getElementById`를 사용하여 id가 root인 HTML 요소를 찾기(public/index.html에 있음)

- 리액트 컴포넌트를 보여줄 수 있는 루트 인스턴스를 `createRoot` 함수를 사용하여 생성
- `root.render`함수에 JSX코드를 인자로 넣어서 보여주고 싶은 컴포넌트 화면에 보여줌

- **`React.StrictMode`** : 앞으로 사라질 레거시 기능을 사용할 때 경고를 주고 앞으로 미래의 리액트 버전에 도입될 기능들이 정상적으로 호환될 수 있도록 유도하는 개발환경에서만 활성화되는 디버깅용 컴포넌트
- **`reportWebVitals`** : 웹 성능을 측정하는 도구



## 2.4 JSX 문법

### 2.4.1 감싸인 요소

컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.

```javascript
function App() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  );
}

export default App;
```

리액트 컴포넌트에서 요소 여러 개를 하나의 요소로 감싸주어야 하는 이유는 Virtual DOM에서 컴포넌트 변화를 감지해낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문이다. div 요소를 사용하고 싶지 않다면 Fragment 기능을 사용할 수 있다.

```javascript
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </Fragment>
  );
}

export default App;
```

### 2.4.2 자바스크립트 표현

자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 `{}` 로 감싸면 된다.

```javascript
function App() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

**ES6의 const와 let**

const는 한번 지정하면 변경이 불가능한 상수를 선언할 때 사용하는 키워드이고, let은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드이다. var는 let과 기능이 동일하지만 함수 단위라는 점에서 차이가 있다. let과 const는 블록 단위이다.

```javascript
function myFunction() {
  var a = "hello";
  if (true) {
    var a = "bye";
    console.log(a); // bye
  }
  console.log(a); // bye
}
myFunction();

function myFunction() {
  let a = 1;
  if (true) {
    let a = 2;
    console.log(a); // 2
  }
  console.log(a); // 1
}
myFunction();
```

let은 값을 선언한 후 값이 유동적으로 변할 수 있을 때 사용하고, const는 한번 설정한 후 변할 일이 없는 경우에만 사용하면 된다.

### 2.4.3 if문 대신 조건부 연산자

조건부 연산자의 다른 이름은 삼항 연산자이다. JSX 내에서 조건문을 사용하는 경우에는 삼항 연산자를 쓰면 된다.

```javascript
function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

export default App;
```

### 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

false일 때, null 값을 넣는 경우에는 삼항 연산자 대신 AND 연산자를 사용할 수 있다. 훨씬 코드가 깔끔해진다.

```javascript
function App() {
  const name = "리액트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

export default App;
```

### 2.4.5 undefined를 렌더링하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하면 안된다.

```javascript
function App() {
  const name = undefined;
  return name;
}

export default App;
```

따라서 어떤 값이 undefined일 수도 있다면, OR 연산자를 사용하면 오류를 방지할 수 있다.

```javascript
function App() {
  const name = undefined;
  return name || '값이 undefined입니다.'
}

export default App;
```

JSX 내부에서 undefined를 렌더링하는 것은 괜찮다.

```javascript
function App() {
  const name = "undefined";
  return <div>{name}</div>;
}

export default App;

// name 값이 undefined일 때 특정 값을 보여주고 싶을 때
function App() {
  const name = "undefined";
  return <div>{name || '리액트'}</div>;
}

export default App;
```

### 2.4.6 인라인 스타일링

리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아닌 객체 형태로 넣어 주어야 한다. 카멜 표기법으로 작성해야함.

```javascript
function App() {
  const name = "리액트";
  const style = {
      backgroundColor: 'black',		//	background-color --> backgroundColor
      fontSize: '48px',				//	font-size --> fontSize
      fontWeight: 'bold'			//	font-weight --> fontWeight
  }
  return <div style={style}>{name}</div>;
}

// style 객체를 미리 선언하지 않고 바로 지정해서 사용해도 된다.
function App() {
  const name = "리액트";
  return 
    <div style = {{
      backgroundColor: 'black',		//	background-color --> backgroundColor
      fontSize: '48px',				//	font-size --> fontSize
      fontWeight: 'bold'			//	font-weight --> fontWeight
  	}}>
      {name}
	</div>;
}
```

### 2.4.7 class 대신 className

JSX에서는 class가 아닌 className으로 css 클래스를 사용한다.

```javascript
//App.css
.react {
    background: aqua;
    color: black
    ...
}

// App.js
import './App.css'
    
function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}
```

JSX를 작성할 때 className이 아닌 class 값을 설정해도 적용이 되지만, 브라우저 개발자 도구의 Console 탭에 경고가 뜬다.

### 2.4.8 꼭 닫아야 하는 태그

HTML 코드를 작성할 때 태그를 닫지 않아도 작동하는 경우가 있다.

```html
<form>
    성: <br>
    <input><br>
    이름: <br>
    <input>
</form>
```

JSX에서 input 태그를 닫지 않으면 오류가 발생한다.

```javascript
import './App.css'
    
function App() {
  const name = "리액트";
  return (
      <>
          <div className="react">{name}</div>
		  <input></input>						//	input 태그를 닫지 않으면 오류가 난다.
	  </>
	);
}
```

태그 사이에 별도의 내용이 들어가지 않는 경우에는 `self-closing` 태그로 작성할 수 있다.

```javascript
import './App.css'
    
function App() {
  const name = "리액트";
  return (
      <>
          <div className="react">{name}</div>
		  <input />								// self-closing 태그
	  </>
	);
}
```

### 2.4.9 주석

JSX 안에서 주석을 작성하는 방법은 일반 자바스크립트에서 주석을 작성할 때와 조금 다르다.

```javascript
import './App.css'
    
function App() {
  const name = "리액트";
  return (
      <>
      	{/* 주석 작성 방법. */}
          <div 
      		className="react"				// 시작 태그를 여러 줄로 작성하면 여기에 주석을 작성할 수 있다.
      	  >
      		{name}
		  </div>
		  // 하지만 이런 주석이나
		  /* 이런 주석은 페이지에 그대로 나타난다. */
		  <input />
	  </>
	);
}
```

