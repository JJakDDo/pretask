# 트리플 과제
> 트리플 홈페이지의 한 섹션을 구현하는 과제로, fade in 효과와 숫자가 올라가는 애니메이션을 구현했다.

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Styled--components-DB7093?style=flat&logo=Styled-components&logoColor=white"/></a>

## 설치 방법
### 클라이언트 실행
```
npm install
npm start
```

## 기능
### Fade In
Fade In 효과는 css의 애니메이션을 활용했다.  
```
// Styled-Components 코드
const entranceAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`
```
애니메이션이 끝나고 컴포넌트의 opacity가 다시 0으로 리셋되는 이슈가 생겼는데, animation에 forwards를 추가해서 해결했다.

## 라이센스

## 외부 리소스
