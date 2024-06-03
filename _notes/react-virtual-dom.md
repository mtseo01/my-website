---
title: 'React 가상돔(Virtual DOM) 정리'
description: 'React 가상 DOM에 대해 정리'
date: '2024-03-20'
author:
  name: mtseo
tags: ['React']
---

![react](/assets/blog/images/react.png)

### React의 가상 DOM은 무엇인가?:

실제 DOM에 변화를 주기 전에 React의 가상의 DOM에서 먼저 변화를 일으키고 이를 실제 DOM에 반영하는 방식이다. 실제 DOM 조작으로 드는 비용을 최소화해 주는 React의 핵심 특징 중 하나이다.

### 가상 DOM의 동작 방식:

1. 상태가 업데이트되면 전체 UI를 Virtual DOM에 렌더링한다.
2. 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교한다.
3. 두 가지를 비교하고 나서, 실제 DOM에서 **바뀌어야 할 부분만** 업데이트(재조정)를 한다.

이런 동작 방식은 불필요한 DOM 조작을 줄여주고, 개발자가 직접 상태를 관리하는 것을 최소화하여 성능을 향상시킨다. 또한, UI가 어떻게 보여질지 설계하는 것에 집중할 수 있게 해 준다.

### 가상 DOM을 사용하는 것이 실제 DOM을 조작하는 것보다 빠른가?

**항상 그런 것은 아니다**. 개발자 포럼에서 가상 DOM 포스팅을 보게 되었는데 속도에 관해 꽤나 뜨겁게 토론한 것들이 보여서 흥미를 갖고 속도 관련 자료도 찾아 보았다.

> 가상 DOM이 동작하는 과정에서 불필요한 DOM 업데이트를 방지하고 이로 인한 성능 저하를 줄일 수는 있으나, 결국 이 과정 자체도 CPU 시간을 소비하며, 매우 복잡하거나 빈번하게 업데이트되는 UI에 대해서는 가상 DOM의 비용이 실제 DOM 조작의 비용보다 클 수 있다.

참고 자료:

- [DOM vs Virtual DOM: How React is Revolutionizing Web Development](https://dev.to/roktim32/dom-vs-virtual-dom-how-react-is-revolutionizing-web-development-2g6g)
