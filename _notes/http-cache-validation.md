---
title: 'HTTP 캐시 검증 헤더와 조건부 요청'
description: 'HTTP 캐시 검증 헤더와 조건부 요청에 대해서'
date: '2024-05-27'
author:
  name: mtseo
---

#### 검증 헤더

ETag(Entity Tag): 리소스의 고유 식별자를 나타내는 문자열. 서버는 이를 통해 클라이언트가 가지고 있는 리소스가 최신인지 확인함.

Last-Modified: 리소스의 마지막 수정 날짜 및 시간을 나타냄.

#### 조건부 요청 헤더

**Last-Modified**

- If-Modified-Since: 지정된 시간 이후 리소스가 수정되었는지 확인함.
  - 변경이 있다면 200 OK (HTTP Body 전송)
  - 변경이 없다면 304 Not Modified (HTTP Body 전송X)
- 단점:
  - 1초 미만 단위로 캐시 조정 불가능
  - 같은 데이터라도 날짜가 다르면 다시 데이터를 받아옴 (ETag로 보완)

**ETag**

- If-None-Match: 지정된 ETag 값이 서버의 현재 리소스와 일치하지 않는지 확인함.
  - 변경이 있다면 200 OK (HTTP Body 전송)
  - 변경이 없다면 304 Not Modified (HTTP Body 전송X)

이러한 조건부 요청 헤더로 클라이언트는 캐시된 리소스의 유효성을 검증하고 필요한 경우에 새로운 데이터를 요청하여 네트워크 부하를 줄이고 성능을 향상시킬 수 있음.

참고 자료:

- 김영한님의 '모든 개발자를 위한 HTTP 웹 기본 지식' 강의
- Chat GPT
