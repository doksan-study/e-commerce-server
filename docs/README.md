## nestjs

<br>
<br>

### nest 시작하기

---

<br>

https://docs.nestjs.com/cli/usages

```js
// nest 로 시작하는 명령어가 많기 때문에
// nestjs를 global로 설치하는 것을 추천합니다.

npm install -g @nestjs/cli


// nest project 생성
nest new <name>
```

<br>
<br>

### 명령어

---

<br>

- module 생성

```js
nest generate module <name>


nest g mo <name>
```

<br>

- controller 생성

```js
nest g co <name>
```

<br>

- service 생성

```js
nest g service <name>
```

<br>
<br>

### common

---

<br>

**middleware**

https://docs.nestjs.com/middleware#middleware

<br>

**interceptor**

https://docs.nestjs.com/interceptors#interceptors

<br>
<br>

### 부록

---

**Date.prototype.toISOString()**

<br>

toISOString() 메서드는 단순화한 확장 ISO 형식(ISO 8601)의 문자열을 반환합니다. <br>

반환값은 YYYY-MM-DDTHH:mm:ss.sssZ 입니다.

```js
const event1 = new Date();

const event2 = new Date().toISOString();

console.log(event1);
// Wed Sep 28 2022 10:04:22 GMT+0900 (한국 표준시)

console.log(event2);
// 2022-09-28T01:05:53.847Z
```
