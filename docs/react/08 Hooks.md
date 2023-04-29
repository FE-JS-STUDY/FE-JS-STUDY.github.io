# 08 Hooks

## 8.1 useState

`useState`는 가장 기본적인 Hooks이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 준다.

```jsx
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

- useState 함수가 호출되면 배열을 반환한다.
- 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수이다.
- 이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀐다.

![0801](/img/08/0801.JPG)

### 8.1.1 useState를 여러 번 사용하기

하나의 `useState`함수는 하나의 상태 값만 관리할 수 있기에 컴포넌트에서 관리해야 할 상태가 여러 개라면 `useState`를 여러 번 사용하면 된다.

```jsx
import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

![0802](/img/08/0802.JPG)

## 8.2 useEffect

`useEffect`는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks이다.

클래스형 컴포넌트의 `componentDidMount`와 `componentDidUpdate`를 합친 형태로 생각해도 된다.

```jsx
import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname,
    });
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
  	(...)
  );
};

export default Info;
```

![0803](/img/08/0803.JPG)

### 8.2.1 마운트될 때만 실행하고 싶을 때

`useEffect`에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행되고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 된다.

```jsx
useEffect(() => {
  console.log("마운트될 때만 실행됩니다.");
}, []);
```

![0804](/img/08/0804.JPG)

### 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때

`useEffect`를 사용할 때, 특정 값이 변경될 때만 호출하고 싶은 경우 클래스형 컴포넌트는 다음과 같이 작성한다.

```jsx
componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
        doSomething()
    }
}
```

`useEffect`를 통해 특정 값이 변경될 때 호출하려면 두 번째 파라미터로 전달되는 배열 안에 검사하려는 값을 넣어 주면 된다.

```jsx
useEffect(() => {
  console.log(name);
}, [name]);
```

![0805](/img/08/0805.JPG)

### 8.2.3 뒷정리하기

`useEffect`는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.

컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 `useEffect`에서 뒷정리(cleanup)함수를 반환해 주어야 한다.

```jsx
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

```jsx
<!-- App.js -->
import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
```

![0806](/img/08/0806.JPG)

컴포넌트가 나타날 때 콘솔에 `effect`가 나타나고, 사라질 때 `cleanup`이 타나난다.

![0807](/img/08/0807.JPG)

렌더링될 때마다 뒷정리 함수가 계속 나타나는 것을 확인할 수 있다. 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여 준다.

언마운트될 때만 뒷정리 함수를 호출하고 싶다면 `useEffect`함수의 두 번째 파라미터에 비어있는 배열을 넣으면 된다.

```jsx
useEffect(() => {
  console.log("effect");
  return () => {
    console.log("unmount");
  };
}, []);
```

![0808](/img/08/0808.JPG)
