# 02 JSX

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
