---
title: 'JavaScript 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)'
description: 'JavaScript 얕은 복사와 깊은 복사 정리'
date: '2024-06-03'
author:
  name: mtseo
tags: ['JavaScript', 'React']
---

#### 얕은 복사(Shallow Copy)

얕은 복사는 1 depth 만 불변 데이터로 복사

```js
const user = {
  name: 'kim',
  age: 20,
  detail: {
    phone: '010-0000-0000',
    city: 'seoul',
  },
};

const copiedUser = { ...user };

console.log(user === copiedUser); // false

console.log(user.detail === copiedUser.detail); // true
```

#### 깊은 복사(Deep Copy)

깊은 복사는 2 depth 이상의 데이터도 모두 불변 데이터로 복사

```js
const user = {
  name: 'kim',
  age: 20,
  detail: {
    phone: '010-0000-0000',
    city: 'seoul',
  },
};

const copiedUser = JSON.parse(JSON.stringify(user));

console.log(user === copiedUser); // false
```

---

#### 참조형 타입의 불변 처리에 대한 중요성

불변성이란 메모리에 한 번 저장된 데이터는 바뀌지 않는 성질을 가진 것을 말한다. 자세한 내용은 이전 글([JavaScript 원시형(Primitive) 타입과 참조형(Reference) 타입](https://mtseo.dev/notes/about-javascript-data-type))을 참조.

> 리액트 상태 값은 불변성을 지켜야 한다.

리액트 개발을 하면서 많이 들은 얘기이다.

리액트에서는 상태 값이 변경된 것이 리렌더링의 트리거 역할이다. **_참조형 타입(객체, 배열, 함수)_** 등은 가변성을 띄기에 데이터를 직접 변경했을 시 리액트에서 감지하지 못 한다. 상태를 변경할 때는 불변 데이터로 처리하여 현재 데이터에서 다른 데이터로 변경된 것을 리액트에서 감지할 수 있도록 처리해 줘야 한다.
