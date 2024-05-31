---
title: 'URI, URL, URN 정리'
description: 'URI, URL, URN에 대해서'
date: '2024-05-16'
author:
  name: mtseo
tags: ['HTTP', 'Network']
---

### URI(Uniform Resource **Identifier**)

Identifier: 다른 항목과 구분하는데 필요한 정보

**_URI = URL + URN_**

- URL(Uniform Resource **Locator**): 리소스가 있는 **위치**를 지정, 보편적으로 사용.
- URN(Uniform Resource **Name**): 리소스에 **이름**을 부여, 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되지 않음.

---

### URL 전체 문법

https://google.com:443/search?q=hello&hl=ko

- https(프로토콜)
- google.com(호스트명)
- 443(포트 번호)
- /search(패스)
- q=hello&hl=ko(쿼리 파라미터)

---

참고 자료:

- 김영한님의 '모든 개발자를 위한 HTTP 웹 기본 지식' 강의
