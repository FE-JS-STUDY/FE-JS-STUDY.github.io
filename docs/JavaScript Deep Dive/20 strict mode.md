# 20 strict mode

## 20.1 strict mode란?

```javascript
function foo() {
  x = 10;
}
foo();

console.log(x); // 10
```

변수 x가 함수 안에서 정의되었기 때문에 ReferenceError를 발생시킬 것 같지만 출력되는 x 값은 10이다. 그 이유는 자바스크립트 엔진은 암묵적으로 전역 객체테 x프로퍼티를 동적 생성하기 때문이다. 이때 전역 객체의 x프로퍼티는 마치 전역 변수처럼 사용할 수 있다. 이러한 현상을 암묵적 전역이라고 한다. 암묵적 전역은 오류를 발생시키는 원인이 될 가능성이 크기때문에 반드시 var, let, const 키워드를 사용하여 변수를 선언하고, 사용해야 한다.

strict mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다. ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다.

## 20.2 strict mode의 적용

strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict'; 를 추가한다. 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.

```typescript
"use strict";

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();
```

함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.

```typescript
function foo() {
  "use strict";

  x = 10; // ReferenceError: x is not defined
}
foo();
```

코드의 선두에 'use strict';를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.

```typescript
function foo() {
  x = 10; // 에러를 발생시키지 않는다.
  ("use strict");
}
foo();
```

## 20.3 전역에 strict mode를 적용하는 것은 피하자

전역에 strict mode를 적용하면 스크립트 단위로 적용된다.

```typescript
<!DOCTYPE html>
<html>
<body>
  <script>
    'use strict';
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다.
    console.log(x); // 1
  </script>
  <script>
    'use strict';

    y = 1; // ReferenceError: y is not defined
    console.log(y);
  </script>
</body>
</html>
```

위 예제와 같이 스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다. 하지만 strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.

## 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

함수 단위로 strict mode를 적용할 수도 있다. 하지만 어떤 함수는 strict mode를 적용하고, 어떤 함수는 적용하지 않는 것은 바람직하지 않다. strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.

```typescript
(function () {
  // non-strict mode
  var lеt = 10; // 에러가 발생하지 않는다.

  function foo() {
    "use strict";

    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();
```

strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

## 20.5 strict mode가 발생시키는 에러

### 20.5.1 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

```typescript
(function () {
  "use strict";

  x = 1;
  console.log(x); // ReferenceError: x is not defined
})();
```

### 20.5.2 변수, 함수, 매개변수의 삭제

delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

```typescript
(function () {
  "use strict";

  var x = 1;
  delete x;
  // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo;
  // SyntaxError: Delete of an unqualified identifier in strict mode.
})();
```

### 20.5.3 매개변수 이름의 중복

중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.

```typescript
(function () {
  "use strict";

  //SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
})();
```

### 20.5.4 with 문의 사용

with 문을 사용하면 SyntaxError가 발생한다. with문은 전달된 객체를 스코프 체인에 추가한다. with문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만 성능과 가독성이 떨어진다는 단점이 있다.

```typescript
(function () {
  "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ x: 1 }) {
    console.log(x);
  }
})();
```

## 20.6 strict mode 적용에 의한 변화

### 20.6.1 일반 함수의 this

strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.

```typescript
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo(); // 일반 함수

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})(); // 생성자 함수
```

### 20.6.2 arguments 객체

strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.

```typescript
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // { 0: 1, length: 1 }
})(1);
```
