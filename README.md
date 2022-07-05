# 트리플 과제

> 트리플 홈페이지의 한 섹션을 구현하는 과제로, fade in 효과와 숫자가 올라가는 애니메이션을 구현했다.

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Styled--components-DB7093?style=flat&logo=Styled-components&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=Storybook&logoColor=white"/></a>

## 배포

[스토리북](https://62c3d3e520efb96e583b77f0-odsedjggng.chromatic.com/) Chromatic으로 배포 후 Github Actions 배포 자동화 구현

## 설치 방법

### 클라이언트 실행

```
npm install
npm start
```

## 기능

### Fade In

Fade In 효과는 css의 애니메이션을 활용했습니다.

```javascript
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

애니메이션이 끝나고 컴포넌트의 opacity가 다시 0으로 리셋되는 이슈가 생겼는데, animation에 forwards를 추가해서 해결했습니다.

### 숫자 올라가는 애니메이션

```javascript
function startCountingUp(time: number) {
  // startTimeRef에 값이 있는지 확인하고 없으면 현재 시간을 시작시간으로 할당해준다.
  if (startTimeRef.current !== 0) {
    // 애니메이션이 시작하고 몇초가 흘렀는지 계산한다.
    const delta = (time - startTimeRef.current) / 1000
    // Exponential Ease-Out 함수를 사용해서 숫자가 올라가는 효과가 점점 느려지게 구현했다.
    const inc = Number(target) * (-1 * Math.pow(2, (-10 * delta) / 2) + 1)
    // 원하는 값 또는 2초를 도달했으면 currentNum에 target을 할당한다.
    // 아니면 계산식의 결과값을 할당한다.
    if (inc >= target || delta >= 2) {
      return setCurrentNum(target)
    } else {
      setCurrentNum(Math.floor(inc))
    }
  } else {
    startTimeRef.current = time
  }
  // requestAnimationFrame은 항상 자기자신을 호출해줘야 반복적으로 실행할 수 있다.
  rafRef.current = requestAnimationFrame(startCountingUp)
}

rafRef.current = requestAnimationFrame(startCountingUp)
```

setInterval을 사용해서 애니메이션을 구현했지만 최적화를 위해 requestAnimationFrame으로 변경했습니다.  
숫자가 빠르게 올라가다 점점 느려지는 효과를 주기 위해 Exponential Ease-Out 함수를 사용했습니다.
