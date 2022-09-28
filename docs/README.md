## nestjs

<br>
<br>

**코드 분석**

<br>

주관적인 내용이니 참고만 하시면 좋을 것 같습니다.

질문 있으면 저에게 남겨주세요.

얕은 지식이지만 성심성의껏 알려드리겠습니다.

```
module.ts

controller.ts

service.ts 순으로 보는 것을 추천드립니다
```

```
1. main.ts
2. app.module.ts
3. app.controller.ts
4. app.service.ts

<product>
5. product.module.ts
6. product.controller.ts
7. product.service.ts

<user>
8. user.module.ts
9. user.controller.ts
10. user.service.ts
```

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
