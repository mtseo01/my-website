---
title: 'Forward Proxy와 Reverse Proxy'
description: 'Forward Proxy와 Reverse Proxy에 대해 간단 정리'
date: '2024-06-14'
author:
  name: mtseo
tags: ['HTTP', 'Network', 'Proxy']
---

#### Forward Proxy

- 클라이언트 측에서 사용
- 클라이언트가 인터넷/서버에 직접 접근하는 대신 프록시를 통해 요청을 전달
- 익명성 유지, 인터넷 사용 제어, 캐싱, 콘텐츠 필터링 등

#### Reverse Proxy

- 서버 측에서 사용
- 클라이언트가 서버에 직접 접근하는 대신 프록시 서버가 요청을 받아 서버에 전달
- 로드 밸런싱, 캐싱, DDOS 방어, 내부 서버 IP 보호

---

참고 자료:

- 유튜브 [Proxy(프록시)란?? Forward vs Reverse Proxy 차이점은 무엇일까? [시스템 디자인] - 코딩문](https://www.youtube.com/watch?v=Rt-KdCpsmdc)
