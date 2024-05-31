---
title: 'JavaScript의 undefined와 null'
description: 'JavaScript의 undefined와 null'
date: '2024-05-29'
author:
  name: mtseo
tags: ['JavaScript']
---

`undefined`은 어떤 변수에 값이 존재하지 않을 경우를 의미하고,<br />
`null`은 사용자가 명시적으로 '없음'을 표현하기 위해 대입한 값이다.

`var` 변수는 자바스크립트가 실행될 때 `undefined`로 초기화된다.<br />
한편 ES6의 `let`, `const`에 대해서는 `undefined`를 할당하지 않은 채 초기화하며, 실제 변수에 값이 할당되기 전까지 해당 변수에 접근할 수 없다.

'없음'을 표현하기 위해 명시적으로 `undefined`를 대입하는 것은 지양하는 것이 좋다.
