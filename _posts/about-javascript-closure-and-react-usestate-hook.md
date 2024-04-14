---
title: 'JavaScript 클로저(Closure)와 React useState Hook'
excerpt: 'JavaScript 클로저(closure)를 정리하고 클로저와 연관성 있는 React useState Hook 코드까지 살펴 보았습니다.'
description: 'JavaScript 클로저에 대해 정리하였습니다.'
date: '2024-03-27'
author:
  name: mtseo
---

### 클로저(Closure)

JavaScript에서 클로저(closure)는 함수와 그 함수가 선언될 때의 렉시컬 환경(Lexical Environment)과의 조합이다. 이는 함수가 자신이 선언될 때의 **환경을 기억**하고, 그 환경 밖에서 호출될 때도 그 환경에 접근할 수 있는 특징을 의미한다. 이러한 특징은 **상태 유지**, **데이터 은닉**, **함수 팩토리[^1]** 등 다양한 패턴을 구현하는 데 사용된다.

---

클로저 예제 코드:

```js
const y = 1; // 전역 스코프

function outer() {
  let y = 10; // outer 함수의 지역 스코프
  const inner = function () {
    y++;
    console.log(y);
  };

  return inner;
}

const innerFunc = outer();
innerFunc(); // 11
innerFunc(); // 12
```

여기서 `outer` 함수는 `inner` 함수를 반환한다. `inner` 함수는 `outer` 함수의 스코프에 있는 `y` 변수를 참조하고 있다. `outer` 함수를 호출하여 반환된 `inner` 함수를 `innerFunc`에 할당하고, 이 `innerFunc`를 호출할 때마다 `y`의 값이 증가하고 그 값이 출력된다. 이는 `inner` 함수가 `outer` 함수의 스코프에 있는 `y`를 **기억**하고 있기 때문인데, 이 현상을 클로저라고 한다.

---

### React useState Hook

멀게만 느껴졌던 클로저 개념은 사실 매일 쓰고 있던 가까운 사이었다.
React Hooks 중 하나인 `useState` Hook도 클로저의 개념을 활용한다고 한다.

다음은 `useState` Hook을 모방한 예제 코드:

```jsx
function useState(initialValue) {
  let state = initialValue; // useState 함수의 지역 스코프

  function getState() {
    return state;
  }

  function setState(newState) {
    if (typeof newState === 'function') {
      state = newState(state);
    } else {
      state = newState;
    }
  }

  return [getState, setState];
}

const [getState, setState] = useState([
  { title: 'DUNE part1', year: '2021' },
  { title: 'DUNE part2', year: '2024' },
]);

console.log(getState()); // [{title: 'DUNE part1', year: '2022'}, {title: 'DUNE part2', year: '2024'}]

setState((prev) => [...prev, { title: 'DUNE part3', year: '2026' }]);

console.log(getState()); // [{title: 'DUNE part1', year: '2022'}, {title: 'DUNE part2', year: '2024'}, {title: 'DUNE part3', year: '2026'}]

setState((prev) => prev.filter((movie) => movie.year !== '2024'));

console.log(getState()); // [{title: 'DUNE part1', year: '2022'}, {title: 'DUNE part3', year: '2026'}]
```

`useState` 함수는 `state` 라는 지역 변수를 가지고 있다. 이 `state` 변수는 `useState` 함수의 스코프 안에서만 직접 접근할 수 있다.

여기서 `useState` 함수에서 반환한 `getState`와 `setState` 이 두 개의 함수로 `state` 변수에 접근할 수 있다.
`getState` 함수는 `state`의 현재 값을 반환하고, `setState` 함수는 `state`의 값을 변경한다.

실제 React `useState` Hook은 더 복잡하게 구현되어 있겠지만, 이 예제 코드를 통해 클로저에 조금 더 가까워(?) 진 거 같다.

[^1]: 함수 팩토리: 객체를 반환하는 함수
