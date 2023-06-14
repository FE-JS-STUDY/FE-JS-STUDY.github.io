# 14 외부 API를 연동하여 뉴스 뷰어 만들기

## 14.1 비동기 작업의 이해

API 사용할 때 응답을 받을 때까지 기다렸다가 전달 받은 응답 데이터를 처리함. 이 과정에서 **비동기**적으로 처리하게 됨. 

작업을 동기적으로 처리하면 요청이 끝날 때까지 기다려야 함.

- **setTimeout 예제**

```javascript
function printMe() {
    console.log('Hello World!');
}

setTimeout(printMe, 3000);
console.log('대기 중...')
```

[실행 결과]

```text
대기 중...
'Hello World!'
```



### 14.1.1 콜백 함수

```javascript
function increase(number, callback) {
    setTimeout(()=> {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000)
}

increase(0, result => {
    console.log(result);
});
```

[실행 결과]

```text
// ... (1초)
10
```

중첩된 경우 콜백 지옥 발생 가능

```javascript
function increase(number, callback) {
    setTimeout(()=> {
        const result = number + 10;
        if (callback) {
            callback(result);
        }
    }, 1000)
}

increase(0, result => {
    console.log(result);
    increase(result, result => {
    	console.log(result);
	});
});
```

[실행 결과]

```text
// ... (1초)
10
// ... (2초)
20
```



### 14.1.2 Promise

```javascript
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve: 성공, reject: 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    // Promise에서 resolve 된 값은 .then을 통해 받아올 수 있음
    console.log(number);
    return increase(number); // Promise를 리턴하면
  })
  .then((number) => {
    // 또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    // 도중에 에러 발생시 catch를 통해 알 수 있음.
    console.log(e);
  });
```

[실행 결과]

```text
// 1초 간격을 두고 한 줄씩 실행된다.
10
20
30
40
50
Error: NumberTooBig
    at <anonymous>:8:19
```



### 14.1.3 async/await

async/await는 Promise를 쉽게 사용할 수 있도록 해주는 ES2017 문법. 

1. 함수의 앞부문에 async 키워드 추가
2. 해당 함수 내부에서 Promise의 앞부분에 await 키워드 사용
3. Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있음.

```javascript
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve: 성공, reject: 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    // try/catch 구문 사용해 에러 처리
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
  } catch (e) {
    console.log(e);
  }
}
```



