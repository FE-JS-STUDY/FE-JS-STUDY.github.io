# 05 ref: DOM에 이름 달기



## 5.2 ref 사용

ref를 사용하는 방법에는 두 가지가 있다.

### 5.2.1 콜백 함수를 통한 ref 설정

`ref`를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것으로 `ref`를 달고자 하는 요소에 `ref`라는 콜백 함수를 props로 전달해 주면 된다.

콜백 함수는` ref` 값을 파라미터로 전달받고, 함수 내부에서 파라미터로 받은 `ref`를 컴포넌트의 멤버 변수로 설정해 준다.

```javascript
<input ref={(ref) => {this.input=ref}} />
```

이렇게 하면 앞으로 `this.input`은 `input`요소의 DOM을 가리킨다.

*`ref`의 이름은 원하는 것으로 자유롭게 지정가능.

### 5.2.2 createRef를 통한 ref 설정

`ref`를 만드는 또 다른 방법으로 리액트에 내장되어 있는 `createRef`라는 함수를 사용하는 것이다.

*이 기능은 리액트 v16.3부터 도입되었으며 이전 버전에서는 작동하지 않는다.

```jsx
import { Component } from "react";
import React from "react";

class RefSample extends Component {
  input = React.createRef()				//		(1)

  handleFocus = () => {
    this.input.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.input} />		//		(2)
      </div>
    )
  }
}

export default RefSample
```

`createRef`를 사용하여 `ref`를 만들려면

- (1) 컴포넌트 내부에서 멤버 변수로 `React.createRef()`를 담아 주어야 한다.
- (2) 해당 멤버 변수를 `ref`를 달고자 하는 요소에 `ref props`로 넣어 주면 `ref`설정이 완료된다.

설정한 뒤 나중에 `ref`를 설정해 준 DOM에 접근하려면 `this.input.current`를 조회하면 된다.

*콜백 함수를 사용할 때와 다른 점은 뒷부분에 `.current`를 넣어 주어야 한다.

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

  input = React.createRef();							// 추가된 부분

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
          ref={(ref) => (this.input = ref)}				// 추가된 부분
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