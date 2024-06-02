---
title: 'HTTP 캐시 제어 헤더와 캐시 무효화'
description: 'HTTP 캐시 제어 헤더와 캐시 무효화에 대해서 정리'
date: '2024-05-28'
author:
  name: mtseo
tags: ['HTTP', 'Network']
---

#### Cache-Control(캐시 제어)

- public: 응답을 모든 브라우저와 프록시 캐시 서버에 저장할 수 있음
- private: 응답을 브라우저에서만 캐시할 수 있음(기본 값)

- max-age: 캐시 유효 시간 설정(초 단위)
- s-maxage: 프록시 캐시에만 적용되는 max-age
- no-cache: 데이터는 캐시하지만, 항상 origin 서버에 검증하고 사용
- no-store: 캐시하면 안 됨(민감한 정보)

- must-revalidate:
  - 캐시 만료 후 최초 조회시 origin 서버에 검증
  - origin 서버 접근 실패시 반드시 504(Gateway Timeout) 오류 발생
  - 캐시 유효 시간이라면 캐시를 사용

캐시 제어 하위호환용

- Pragma: no-cache
- Expires

---

#### 캐시 무효화

확실한 캐시 무효화 응답:

```HTTP
Cache-Control: no-cache, no-store, must-revalidate
Pragma: no-cache
```

.

---

참고 자료:

- 김영한님의 '모든 개발자를 위한 HTTP 웹 기본 지식' 강의
