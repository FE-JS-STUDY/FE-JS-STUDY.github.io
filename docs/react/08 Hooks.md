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

## 8.3 useReducer

`useReducer`는 `useState`보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 HOOK.

리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 **액션 값을 전달받아 새로운 상태를 반환**하는 함수입니다. 리듀서 함수에서 새로운 상태를 만들 때는 반드시 **불변성**을 지켜주어야 합니다.

```javascript
function reducer(state, action) {
    return { ... };  // 불변성을 지키면서 업데이트한 새로운 상태를 반환
}
```

액션 값은 주로 다음과 같은 형태로 이루어져 있음.

```javascript
{
    type: 'INCREMENT',
    // 다른 값들이 필요하다면 추가로 들어감
}
```

! 리덕스를 사용하는 액션 객체에는 어떤 액션인지 알려주는 type 필드가 꼭 있어야 하지만, `useReducer`에서 사용하는 액션 객체는 반드시 type 지니고 있을 필요가 없습니다.

### 8.3.1 카운터 구현하기

`useReducer`를 사용하여 기존 `Counter` 컴포넌트를 다시 구현

```javascript
// Counter.js
import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무 것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  // 1. 첫 번째 파라미터에 리듀서 함수를, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어줌.
  // 2. 이 Hook을 사용하면 state 값과 dispatch 함수를 받아 옴
  // 2-1. state : 현재 가리키고 있는 상태
  // 2-2. dispatch : 액션을 발생시키는 함수.
  // dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값 넣어주면 리듀서 함수가 호출되는 구조
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
export default Counter;
```

[`useEffect`로 구현한 것과 비교](#8.2-useeffect)

- 첫 번째 파라미터에 리듀서 함수를, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어줌.

- 이 Hook을 사용하면 state 값과 dispatch 함수를 받아 옴
- state : 현재 가리키고 있는 상태
- dispatch : 액션을 발생시키는 함수.
- dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값 넣어주면 리듀서 함수가 호출되는 구조

**`useReduce`의 장점**

컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺄 수 있다는 것

### 8.3.2 인풋 상태 관리하기

`useReducer` 이용하여 Info 컴포넌트에서 인풋 상태를 관리하기

기존에는 인풋이 여러 개여서 `useState`도 여러개 사용. => `useReducer`를 사용하면 기존에 클래스형 컴포넌트에서 `input`태그에 `name`값을 할당하고 `e.target.name`을 참조하여 `setState`를 해준 것과 유사한 방식으로 작업을 처리할 수 있음.

```javascript
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: " ",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target); // dispatch(action) 형태로 사용: action 값을 e.target 자체로 사용.
    // console.log(e.target)  =>  <input name="nickname" value="ㅎㅎ">
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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

이런 식으로 인풋 관리하면 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있음.

## 8.4 useMemo

`useMemo` 사용시 함수 내부에서 발생하는 연산을 최적화할 수 있음.

```javascript
import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

![0809](/img/08/0809.png)

숫자를 등록할 때 뿐만 아니라 인풋 내용이 수정될 때도 `getAverage`함수가 호출됨. 인풋 내용이 바뀔 때는 평균값을 다시 계산할 필요가 없음.

```javascript
import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

![0810](/img/08/0810.png)

## 8.5 useCallback

useCallback은 useMemo와 비슷한 함수로, 주로 렌더링 성능을 최적화해야 하는 상황에서 사용한다. useCallback은 만들어 놨던 함수를 재사용할 수 있도록 한다. 리액트는 기본적으로 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하게 되는데, 이는 성능을 낮추는 원인이 된다.

> useCallback은 함수를 재사용, useMemo는 값을 재사용하는 것이다.

```javascript
import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // useCallback
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
```

onChange와 onInsert 함수를 useCallback을 통해 선언하였다. useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 된다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시한다. 이 값이 바뀌면 함수를 새로 생성하고, 값에 변화가 없다면 함수를 새로 생성하지 않는다.

## 8.6 useRef

useRef는 함수 컴포넌트에서 ref를 쉽게 사용할 수 있게 해준다. 아래 코드는 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 만든 것이다.

```javascript
import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus(); // focus 변경
    },
    [number, list] // number 혹은 list가 바뀌었을 때만 함수 생성
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
```

### 8.6.1 로컬 변수 사용하기

```javascript
import { Component } from "react";

class MyComponent extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div>MyComponent</div>;
  }
}

export default MyComponent;
```

로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다. 로컬 변수는 렌더링과 상관없이 바뀔 수 있는 값을 의미한다. 클래스형 컴포넌트에서는 로컬 변수(id)를 사용하기 위해 this를 써야 한다.

```javascript
import { Component } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refSample</div>;
};

export default MyComponent;
```

로컬 변수를 사용한 함수형 컴포넌트이다. 함수형 컴포넌트에서는 useRef를 통해 로컬 변수에 접근할 수 있다. ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않으므로 렌더링과 관련되지 않은 값을 관리할때 사용한다.

## 8.7 커스텀 Hooks 만들기

여러 컴포넌트에서 비슷한 기능을 공유할 경우, Hook으로 작성하여 로직을 재사용할 수 있다. 아래 코드는 useReducer를 사용한 것이다.

```javascript
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

useReducer 훅을 Info 컴포넌트에서 사용하였다.

```javascript
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```
