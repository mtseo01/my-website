---
title: '서버로부터 받은 Blob 데이터를 클라이언트에서 다운로드하기'
description: '서버로 받은 Blob 데이터를 클라이언트에서 다운로드하기'
date: '2024-09-02'
author:
  name: mtseo
tags: ['HTTP', 'Network', 'React', 'JavaScript']
---

```js
// 전체 코드
import axios from 'axios';

export async function download() {
  try {
    const { data, headers, status } = await axios.get(`/end-point`, {
      responseType: 'blob',
    });
    if (status === 200) {
      let fileName = 'file';
      const disposition = headers['content-disposition'];

      if (disposition) {
        const fileNameMatch = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
          disposition
        );
        if (fileNameMatch !== null && fileNameMatch[1]) {
          fileName = fileNameMatch[1].replace(/['"]/g, '');
        }
      } else {
        throw new Error(
          'Content-Disposition header is missing or inaccessible.'
        );
      }

      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      link.style.display = 'display: none';
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    throw error;
  }
}
```

`response`의 `header`에 접근이 안 되는 경우:

서버에서 `header`에 접근할 수 있게 CORS 설정을 해 주어야 한다.

```js
// 서버 express 코드
const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: 'https://domain.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Disposition'], // 클라이언트에게 노출할 헤더
  })
);
```
