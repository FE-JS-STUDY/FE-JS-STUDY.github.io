# 05 ref: DOM에 이름 달기

**html에서 DOM 요소에 이름 달 때는 id를 사용**

```html
<div id="my-element"></div>
```

특정 DOM 요소에 작업을 할 때 요소에 id를 달면 CSS나 Javascript 에서 해당 id를 가진 요소를 찾아서 작업할 수 있다.

public/index.html에도 있음.

```javascript
// public/index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <meta name="vieport" content="width=divice-width, initial-scale=1">
      <link rel="shorcut icon" href="%PUBLIC_URL%/favicon.ico">
      <title>React App</title>
  </head>
  <body>
      <div id="root"></div>
  </body>
</html>
```

src/index.js파일중 id가 root인 요소에 리엑트 컴포넨트를 렌더링하라는 코드가 있음.

```javascript
//src/index.js
//(...)

const root = ReactDOM.createRoot(document.getElementById('root'));
```



**리액트 컴포넌트 안에서는 id를 사용하면 안 되나요?**

사용할 수는 있지만 권장하지 않습니다. 같은 컴포넌트를 여러 번 사용한다고 가정하면 HTML에서 DOM의 id는 유일해야 하는데, 이런 상황에서 중복 id를 가진 DOM이 여러 개 생기니 잘못된 사용입니다. **ref**는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않습니다.

## 5.1 ref는 어떤 상황에서 사용해야 할까?

:bulb: 특정 DOM 요소에 **어떤 작업**을 해야 할 때

:exclamation: **DOM을 꼭 직접적으로 건드려야 할 때**



- 바닐라 JS 및 jQuery로 만든 웹사이트에서 input 검증할 때 :arrow_forward: 특정 id를 가진 input에 클래스 설정함

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <meta name="vieport" content="width=divice-width">
      <title>Example</title>
      <style>
        .success {
          background-color: green;
        }

        .failure {
          background-color: red;
        }
      </style>
      <script>
        function validate() {
          var input = document.getElementById('password');
          input.className = '';
          if(input.value === '0000') {
            input.className = 'success';
          } else {
            input.className = 'failure';
          }
        }
      </script>
  </head>
  <body>
      <input type="password" id="password"></input>
      <button onclick="validate()">Validate</button>
  </body>
</html>
```

![image-20230414121936744](/img/05/image-20230414121936744.png)

### 5.1.1 예제 컴포넌트 생성

- 리액트에서는 DOM에 접근하지 않고 state로 구현 가능.

```javascript
import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  }

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          />
          <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```





### 5.1.2 App 컴포넌트에서 예제 컴포는트 렌더링

```javascript
// App.js

import ValidationSample from './ValidationSample';

function App() {
  return (
    <ValidationSample />
  );
}

export default App;
```

![image-20230414142233315](/img/05/image-20230414142233315.png)

### 5.1.3 DOM을 꼭 사용해야 하는 상황

state만으로 해결할 수 없는 경우 DOM에 접근해야 하는데, 이 때 **ref**를 사용

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

## 5.2 ref 사용

ref를 사용하는 방법에는 두 가지가 있다.

### 5.2.1 콜백 함수를 통한 ref 설정

`ref`를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것으로 `ref`를 달고자 하는 요소에 `ref`라는 콜백 함수를 props로 전달해 주면 된다.

콜백 함수는` ref` 값을 파라미터로 전달받고, 함수 내부에서 파라미터로 받은 `ref`를 컴포넌트의 멤버 변수로 설정해 준다.

```javascript
<input
  ref={(ref) => {
    this.input = ref;
  }}
/>
```

이렇게 하면 앞으로 `this.input`은 `input`요소의 DOM을 가리킨다.

\*`ref`의 이름은 원하는 것으로 자유롭게 지정가능.

### 5.2.2 createRef를 통한 ref 설정

`ref`를 만드는 또 다른 방법으로 리액트에 내장되어 있는 `createRef`라는 함수를 사용하는 것이다.

\*이 기능은 리액트 v16.3부터 도입되었으며 이전 버전에서는 작동하지 않는다.

```jsx
import { Component } from "react";
import React from "react";

class RefSample extends Component {
  input = React.createRef(); //		(1)

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} /> // (2)
      </div>
    );
  }
}

export default RefSample;
```

`createRef`를 사용하여 `ref`를 만들려면

- (1) 컴포넌트 내부에서 멤버 변수로 `React.createRef()`를 담아 주어야 한다.
- (2) 해당 멤버 변수를 `ref`를 달고자 하는 요소에 `ref props`로 넣어 주면 `ref`설정이 완료된다.

설정한 뒤 나중에 `ref`를 설정해 준 DOM에 접근하려면 `this.input.current`를 조회하면 된다.

\*콜백 함수를 사용할 때와 다른 점은 뒷부분에 `.current`를 넣어 주어야 한다.

### 5.2.3 적용

#### 5.2.3.1 input에 ref 달기

콜백 함수를 사용하여 `ValidationSample` 컴포넌트에 `ref` 달기

```jsx
import { Component } from "react";
import React from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  input = React.createRef(); // 추가된 부분

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={(ref) => (this.input = ref)} // 추가된 부분
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

#### 5.2.3.2 버튼 onClick 이벤트 코드 수정

버튼에서 `onClick` 이벤트가 발생할 때 `input`에 포커스를 주도록 코드 수정.

```javascript
(...)

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();									// 추가된 부분
  };

(...)
```

버튼을 클릭했을 때 포커스가 `input`으로 넘어가는 것을 확인할 수 있다.

## 5.3 컴포넌트에 ref 달기

컴포넌트에도 ref를 달 수 있는데, 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다.

### 5.3.1 사용법

```javascript
<MyComponent ref={(ref) => (this.myComponent = ref)} />
```

이렇게 하면 MyCompoent 내부의 메서드 및 멤버 변수에도 접근할 수 있다. 아래와 같은 과정을 통해 스크롤바를 내릴 수 있는 컴포넌트를 만들 것이다.

ScrollBox 컴포넌트 만들기 -> 컴포넌트에 ref 달기 -> ref를 이용하여 컴포넌트 내부 메서드 호출하기

### 5.3.2 컴포넌트 초기 설정

#### 5.3.2.1 컴포넌트 파일 생성

먼저 ScrollBox라는 컴포넌트 파일을 만든다.

```javascript
import { Compoent } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, blcak)",
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

#### 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

App 컴포넌트에서 ScrollBox 컴포넌트를 렌더링한다.

```javascript
import { Compoent } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <scrollBox />
      </div>
    );
  }
}
export default App;
```

![image-20230414154850553](/img/05/image-20230414154850553.png)

### 5.3.3 컴포넌트에 메서드 생성

컴포넌트에 스크롤바를 맨 아래쪽으로 내리는 메서드를 만든다. 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용할 수 있다.

- scrollTop : 세로 스크롤바 위치
- scrollHeiht : 스크롤이 있는 박스 안의 div 높이
- clientHeight : 스크롤이 있는 박스의 높이

```javascript
import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

스크롤바를 맨 아래쪽으로 내리기 위해서는 scrollHeight에서 clientHeight를 빼면 된다.

### 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용

아래 코드는 App 컴포넌트에서 ScrollBox에 ref를 달고, 버튼을 만들어 누르면 ScrollBox 컴포넌트의 scrollToBottom 메서드를 실행하는 것이다.

```javascript
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
export default App;
```

onClick 이벤트에서 화살표 함수를 사용해서 써야 하는 이유는 화살표 함수로 사용하지 않았을 경우에 값을 읽어오는 과정에서 오류가 발생할 수 있기 때문이다. this.scrollBox 값이 렌더링될 때는 undefined 상태이기 때문에 오류 없이 값을 사용하기 위해서는 화살표 함수를 사용하여 아예 새로운 함수를 만들어야 한다.

![image-20230414155608648](/img/05/image-20230414155608648.png)
