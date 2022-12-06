# 03 this

> 다른 객체지향 언어에서는 클래스로 생성한 인스턴스 객체를 말합니다.
> 자바스크립트에서의 this는 어디서든 사용할 수 있고, 상황에 따라 this가 바라보는 대상이 달라집니다.
> this는 함수와 객체(메서드)를 실질적으로 구분해줍니다.

## 3-1 상황에 따라 달라지는 this

- this는 실행 컨텍스트가 생성될 때 함께 결정됨
- 실행 컨텍스트는 함수를 호출할 때 생성됨

​ **⇒ this는 함수를 호출할 때 결정됨**

### 3-1-1 전역 공간에서의 this

전역 공간에서 this는 전역 객체를 가리킵니다.

- 브라우저 환경의 this : window

  ```javascript
  console.log(this === window); // true
  ```

- Node.js 환경의 this : global

  ```javascript
  console.log(this === global); // true
  ```

#### [배경 지식:bulb:] 전역 공간에서만 발생하는 특이한 성질

> 전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당한다.

**예제 3-3 전역변수와 전역 객체(1)**

```javascript
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1
```

- 자바스크립트의 모든 변수는 실은 **특정 개체**의 프로퍼티로서 동작함.
  (전역변수 선언시 특정 객체란 **실행 컨텍스트의 L.E**)
- a를 직접 호출해도 1이 나오는 이유 :
  변수 a에 접근하고자 하면 스코프 체인에서 a를 검색하다 가장 마지막에 도달하는 전역스코프의 L.E, 즉 전역 객체에서 해당 프로퍼티 a를 발견해서 그 값을 반환하기 때문

​ **⇒ 단순하게 `window.`이 생략된 것으로 여겨도 무방함**

**:question: 전역 공간에서 1. var로 변수 선언 == 2. window의 프로퍼티에 직접 할당 **

대부분의 경우에 그렇지만, '**삭제**' 명령시 다름

**예제 3-5 전역변수와 전역 객체**

```javascript
// var로 변수 선언 - 삭제 안 됨
var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1

var b = 2;
delete b; // false
console.log(b, window.b, this.b); // 2 2 2
```

```javascript
// 전역객체의 프로퍼티에 할당 - 삭제 됨
window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncauht ReferenceError: c is not defined

window.d = 3;
delete d; // true
console.log(d, window.d, this.d); // Uncauht ReferenceError: d is not defined
```

**⇒ 사용자가 의도치 않게 삭제하는 것 방지**

### 3-1-2 메서드로 호출할 때 그 메서드 내부에서의 this

#### 함수 vs 메서드

**함수**

- 그 자체로 독립적인 기능을 수행

**메서드**

- 자신을 호출한 대상 객체에 관한 동작 수행
- 메서드는 <u>1. 객체의 프로퍼티에 할당되고</u>, <u>2.객체의 메서드로서 호출할 경우</u> 메서드로 동작함.
  그렇지 않으면 함수로 동작함.

**예제 3-6 함수로서 호출, 메서드로서 호출**

```javascript
// 함수로 호출
var func = function (x) {
  console.log(this, x);
};
func(1); // Window{...} 1

// 메서드로 호출
var obj = {
  method: func,
};
obj.method(2); // { method: f } 2
```

:question: 어떻게 구분

**함수 앞에 객체가 명시되어 있으면 메서드로 호출**

**예제 3-7, 8**

```javascript
var obj = {
    method: function () { console.log(this); }
    inner: {
    	methodB: function () { console.log(this); }
	}
};

obj.method();			// { method: f }    ( === obj )
obj['method']();		// { method: f }    ( === obj )

obj.inner.methodB()	// { methodB: f }		( === obj.inner )
```

#### 매서드 내부에서의 this

- this에는 호출한 주체에 대한 정보가 담김
- 호출 주체 = 함수명(프로퍼티명) 앞의 객체

### 3-1-3 함수로서 호출할 때 그 함수 내부에서의 this

#### 함수 내부에서의 this

this = 전역 객체

#### 매서드의 내부함수에서의 this

함수로 호출했는지, 메서드로 호출했는지만 파악하면 됨

**예제 3-9 내부함수에서의 this**

```javascript
var obj1 = {
  outer: function () {
    console.log(this); // (1)
    var innerFunc = function () {
      console.log(this); // (2)  (3)
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};
obj1.outer();
```

**출력값**

> (1) : obj1
> (2) : 전역객체(Window)
> (3) : obj2

**(1) obj1.outer - 메서드로 호출**

마지막 점 앞의 객체인 obj1이 this에 바인딩

**(2) innerFunc() - 함수로 호출**

함수명 앞에 점 없었으므로 함수로 호출한 것.
this가 지정되지 않았고 자동으로 스코프 체인 최상위 객체인 전역객체(Window)가 바인딩

**(3) obj2.innerMethod() - 메서드로 호출**

마지막 점 앞의 객체인 obj2가 this에 바인딩

**⇒ this 바인딩은 함수를 실행하는 당시의 주변 환경은 중요하지 않고, 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지가 관건인 것 :heavy_exclamation_mark:**

#### 메서드의 내부 함수에서의 this를 우회하는 방법

내부 함수에 this를 상속할 방법은 없지만 우회할 방법은 있는데, 바로 변수를 활용하는 것이다.

```javascript
var obj = {
  outer: function () {
    console.log(this); // {outer: f}
    var innerFunc1 = function () {
      console.log(this); // window
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self); // {outer: f}
    };
    innerFunc2();
  },
};
obj.outer();
```

상위 스코프의 this인 outer를 저장해서 내부함수에서 활용할 수 있다. `var self = this;`

#### this를 바인딩하지 않는 함수

화살표 함수는 this를 바인딩하지 않는다. 실행 컨텍스트를 생성할 때, this 바인딩 과정이 발생하지 않으므로 화살표 함수는 상위 스코프의 this를 그대로 활용할 수 있다.

```javascript
var obj = {
  outer: function () {
    console.log(this); // {outer: f}
    var innerFunc = () => {
      console.log(this); // {outer: f}
    };
    innerFunc();
  },
};
obj.outer();
```

### 3-1-4 콜백 함수 호출 시 그 함수 내부에서의 this

콜백 함수도 함수이므로 기본적으로 this는 전역객체를 참조하게 된다. 하지만 제어권을 받은 함수에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.

```javascript
setTimeout(function () {
  console.log(this);
}, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
});
```

setTimeout과 forEach 모두 콜백 함수의 첫 번째 인자로 this를 출력하고 있다. 콜백 함수의 this는 전역객체를 참조하기 때문에 window가 출력된다. 반면 addEventListener는 지정한 HTML 엘리먼트에 'click' 이벤트가 발생할 때마다 그 이벤트 정보를 콜백 함수의 첫 번째 인자로 삼아 함수를 실행하라는 명령이다. HTML 엘리먼트를 지정했기 때문에 this가 상속된다. 메서드 명의 점 앞부분이 this가 되기 때문에 this는 `<button id="a">클릭</button>` 가 된다.

### 3-1-5 생성자 함수 내부에서의 this

생성자 함수는 어떤 공통된 성질을 지니는 객체들을 생성하는데 사용하는 함수이다. 생성자를 클래스, 클래스를 통해 만든 객체를 인스턴스라고 한다. 생성자 함수를 호출하면 우선 생성자의 프로토타입 프로퍼티를 참조하는 `__proto__` 라는 프로퍼티가 있는 객체를 만들고, 미리 준비된 공통 속성 및 개성을 해당 객체 (this)에 부여한다.

```javascript
var Cat = function (name, age) {
  this.bark = "야옹";
  this.name = name;
  this.age = age;
};

var choco = new Cat("초코", 7);
var nabi = new Cat("나비", 5);
console.log(choco, nabi); // Cat {bark: '야옹', name: '초코', age: 7}
// Cat {bark: '야옹', name: '나비', age: 5}
```

생성자 함수에서 this는 생성될 객체(인스턴스)를 가리킨다.

## 3-2 명시적으로 this를 바인딩하는 방법

### 3-2-1 call 메서드

```javascript
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
```

call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령이다. 이때 call 메서드의 첫 번째 인자를 this로 바인딩하고, 이후의 인자들을 호출할 함수의 매개변수로 한다.

```javascript
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // window{ ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x : 1 } 4 5 6
```

```javascript
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
```

### 3-2-2 apply 메서드

```javascript
Function.prototype.apply(thisArg[, argsArray])
```

apply 메서드는 call 메서드와 기능적으로 완전히 동일하다. 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다는 점에서만 차이가 있다.

```javascript
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method.apply({ a: 4 }, [5, 6]);
```

### 3-2-3 call / apply 메서드의 활용

- [유사배열객체에 배열 메서드를 적용](#유사배열객체에-배열-메서드를-적용)

- [생성자 내부에서 다른 생성자를 호출](#생성자-내부에서-다른-생성자를-호출)

- [여러 인수를 묶어 하나의 배열로 전달하고 싶을 때 - apply 활용](#여러-인수를-묶어-하나의-배열로-전달하고-싶을-때---apply-활용)

#### 유사배열객체에 배열 메서드를 적용

##### (1) 유사배열객체에 배열 메서드를 적용

```javascript
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
Array.prototype.push.call(obj, "d");
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
```

- 객체에는 배열 메서드를 직접 적용할 수 없다.
- **키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티의 값이 0 또는 양의 정수인 객체**
  - 유사배열객체(배열의 구조와 유사한 객체)
  - call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있다.
- slice 메서드를 사용할 때 매개변수를 넘기지 않으면 **원본 배열의 얕은 복사본을 반환**한다.
  - call 메서드를 이용해 원본인 유사배열객체의 얕은 복사를 수행한 것인데, slice 메서드가 배열 메서드이기 때문에 복사본도 배열로 반환!

##### (2) arguments, NodeList에 배열 메서드를 적용

```javascript
function a() {
  var argv = Array.prototype.slice.call(arguments);
  argv.forEach(function (arg) {
    console.log(arg);
  });
}
a(1, 2, 3);
```

![image03-1](/img/this/image03-1.JPG)

- 함수 내부에서 접근할 수 있는 arguments 객체도 유사배열객체이므로 위의 방법으로 배열로 전환해서 활용할 수 있다.

  - arguments란?

    - 함수에 전달된 인수에 해당하는 **<u>Array 형태</u>**의 객체.

      - Array 형태란 arguments가 **length 속성**과 더불어 인덱스와 이에 대응하는 데이터들로 이루어진 자료구조

        ![image03-3](/img/this/image03-3.JPG)

```javascript
document.body.innerHTML = "<div>a</div><div>b</div><div>c</div>";
var nodeList = document.querySelectorAll("div");
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
  console.log(node);
});
```

![image03-2](/img/this/image03-2.JPG)

- querySelectorAll, getElementsByClassName 등의 Node 선택자로 선택한 결과인 NodeList도 마찬가지이다.

##### (3) 문자열에 배열 메서드 적용

```javascript
var str = "abc def";

Array.prototype.push.call(str, ", pushed string"); // Error
Array.prototype.concat.call(str, "string"); // [String { 'abc def'}, 'string']		==> 예상값 : ["abc def", "string"]
Array.prototype.every.call(str, function (char) {
  return char !== " ";
}); // false		==> 모든 요소에 대해서 조건을 만족하는지
Array.prototype.some.call(str, function (char) {
  return char === " ";
}); // true			==> 어떤 요소에 대해서 조건을 만족하는지
var newArr = Array.prototype.map.call(str, function (char) {
  return char + "!";
});
console.log(newArr); // [ 'a!', 'b!', 'c!', '!', 'd!', 'e!', 'f!' ]

var newStr = Array.prototype.reduce.apply(str, [
  function (string, char, i) {
    return string + char + i;
  },
  "",
]);
console.log(newStr); // "a0b1c2 3d4e5f6"
```

- 문자열의 경우 length 프로퍼티가 읽기 전용이기 때문에 원본 문자열에 변경을 가하는 메서드(push, pop, shift, unshift, splice 등)는 에러를 던진다.
- concat처럼 대상이 반드시 배열이어야 하는 경우에는 에러는 나지 않지만, 제대로 된 결과는 얻을 수 없다.

##### (4) ES6의 Array.from 메서드 적용

```javascript
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

var arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']
```

- call / apply를 이용해 형변환하는 것은 본래 메서드의 의도(this를 원하는 값으로 지정해서 호출한다)와는 동떨어진 활용법
- ES6에서는 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환하는 **<u>Array.from</u>** 메서드를 새로 도입했다.

#### 생성자 내부에서 다른 생성자를 호출

```javascript
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}

var by = new Student("보영", "female", "단국대");
var jn = new Employee("재난", "male", "구글");

console.log(by); // Student { name: '보영', gender: 'female', school: '단국대' }
console.log(jn); // Employee { name: '보영', gender: 'female', company: '구글' }
```

- 생성자 내부에 다른 생성자와 공통된 내용이 있을 경우 call 또는 apply를 이용해 다른 생성자를 호출하면 간단하게 반복을 줄일 수 있다.
  - 생성자란?
    - 정해진 키밸류를 가진 객체를 편리하게 생성할 수 있게 도와주는 역할. 비슷한 객체들을 여러개 생성하기 위해서 생성할때마다 키 / 밸류 값을 일일이 입력해서 만드는 것이 아닌, 하나의 생성자를 만들어놓으면 그 생성자를 이용하여 간편하게 해당 객체(인스턴스)를 생성할 수 있게 해준다.
    - Tip : 생성자의 이름 첫 시작은 대문자로 시작. 필수는 아니지만 대문자로 시작하는것이 관습이다.

#### 여러 인수를 묶어 하나의 배열로 전달하고 싶을 때 - apply 활용

##### (1) 여러 인수를 받는 메서드(Math.max / Math.min)에 apply를 적용

```javascript
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
```

- 첫 번째 파라미터인 null은 써도 되고 안 써도 된다.
  - apply() 메서드의 첫 번째 인자는 this에 연결되는 값이므로 this가 상관없는 함수라면(this를 받고 싶지 않다면) null 이나 undefined를 넣는다.
- 두 번째 파라미터에는 배열만 들어간다.

##### (2) ES6의 펼치기 연산자(spread operator) 활용

```javascript
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3
```

### 3-2-4 bind 메서드

```javascript
Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
```

- ES5에서 추가된 기능으로, call과 비슷하지만 즉시 호출하지 않고 넘겨 받은 this및 인수들을 바탕으로 새로운 함수를 반환.
- 함수에 this를 미리 적용하는 것과 부분 적용 함수를 구현하는 두 가지 목적을 지닌다.

##### [예제. this 지정과 부분 적용 함수 구현]

```javascript
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4)									// Window{ ... } 1 2 3 4

-- this만 지정 --
var bindFunc1 = func.bind({ x: 1 })
bindFunc1(5, 6, 7, 8)								// { x: 1 } 5 6 7 8

-- 부분 적용 함수 --
var bindFunc2 = func.bind({ x: 1 }, 4, 5)
bindFunc2(6, 7)										// { x: 1 } 4 5 6 7
bindFunc2(8, 9)										// { x: 1 } 4 5 8 9
```

#### name 프로퍼티

- bind 메서드를 적용해서 새로 만든 함수는 'bound'라는 접두어가 붙는다.

- 어떤 함수의 name 프로퍼티가 'bound xxx'라면 함수명이 xxx인 원본 함수에 bind를 적용한 새로운 함수라는 의미이다.

  ```javascript
  var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
  };
  var bindFunc = func.bind({ x: 1 }, 4, 5);
  console.log(func.name); // func
  console.log(bindFunc.name); // bound func
  ```

#### 상위 컨텍스트의 this를 내부함수나 콜백 함수에 전달하기

- self 변수를 활용한 우회법 대신 call, apply 또는 bind 메서드를 이용하면 더 깔끔하게 처리할 수 있다.

  ```javascript
  var obj = {
    outer: function () {
      console.log(this); // { outer: f }
      var innerFunc = function () {
        console.log(this); // { outer: f }
      };
      innerFunc.call(this);
    },
  };
  obj.outer();
  ```

  ```javascript
  var obj = {
    outer: function () {
      console.log(this); // { outer: f }
      var innerFunc = function () {
        console.log(this); // { outer: f }
      }.bind(this);
      innerFunc();
    },
  };
  obj.outer();
  ```

  ```javascript
  var obj = {
    logThis: function () {
      console.log(this);
    },
    logThisLater1: function () {
      setTimeout(this.logThis, 500);
    },
    logThisLater2: function () {
      setTimeout(this.logThis.bind(this), 1000);
    },
  };
  obj.logThisLater1(); // Window { ... }
  obj.logThisLater2(); // obj { logThis: f, ... }
  ```

### 3-2-5 화살표 함수의 예외사항

- ES6에 도입된 화살표 함수는 실행 컨텍스트 생성 시 this를 바인딩하는 과정이 제외되었다.

- 함수 내부에는 this가 아예 없으며, 접근하고자 하면 스코프체인상 가장 가까운 this에 접근하게 된다.

  ```javascript
  var obj = {
    outer: function () {
      console.log(this); // { outer: f }

      var innerFunc = () => {
        console.log(this); // { outer: f }
      };
      innerFunc();
    },
  };

  obj.outer();
  ```

### 3-2-6 별도의 인자로 this를 받는 경우(콜백 함수 내에서의 this)

- 콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체(thisArg)를 인자로 지정할 수 있다.
- 이러한 메서드의 thisArg 값을 지정하면 콜백 함수 내부에서 this 값을 원하는 대로 변경할 수 있다.
- forEach, Set, Map 등

##### [thisArg를 받는 경우 예시 - forEach 메서드]

```javascript
var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  },
  average: function () {
    return this.sum / this.count;
  },
};
report.add(60, 85, 95);
console.log(report.sum, report.count, report.average()); // 240 3 80
```

1. add 메서드를 호출하면 forEach 메서드가 실행된다.
2. 콜백 함수 내부에서의 this는 add 메서드에서의 this가 전달된 상태이므로 add 메서드의 this(report)를 가리키고 있다.
3. 배열로 변환된 args 를 순회하며 report의 sum / count 값이 갱신되며 참조할 수 있게 된다.
