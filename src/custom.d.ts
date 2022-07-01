// 이미지를 import하는 과정에서 "*.png 모듈 또는 해당 형식 선언을 찾을 수 없습니다." 에러가 떳다.
// 해결 방법으로 src 폴더에 custom.d.ts 파일을 생성하고 다음과 같은 코드를 작성해준다.
declare module '*.png'
