# Getting Started with Create React App

[Create React App](https://github.com/facebook/create-react-app).
+ npx create-react-app 프로젝트명

### 실행 `npm start`

## 리엑트 주요 개념
1.컴포넌트 만들기
    - 사용자 정의 태그 > 자바스크립트 함수(반드시 대문자, 반드시 return으로 반환 : 하나의 요소만 반환)

2.컴포넌트 추가
    - import로 추가 >> <커포넌트명 />

3.컴포넌트 변수 사용
    - {} 안에 변수명을 넣어서 사용

4.props
    - 부모 컴포넌트에서 자식 컴포넌트로 자료 전달시 사용
    - <컴포넌트명 속성명={값} />
    - probs를 자식 컴포넌트에서 사용할 때 함수의 파라미터로 사용
        - export default function Recoil2(props)
            -변수 접근시 props.변수명

5.usestae 변수
    - 화면의 변경을 감지하기 위한 장치
    - 선언 [변수명, set변수명] = usestate(초기값)
        - import {usestae} from "react"; 로 임포트 해야함

6.이벤트 달기
    - onClick, onChange, onFocus 등의 이벤트 발생시 처리할 함수 지정

7.useEffect
    - 사이드 이펙트 처리
    - 선언 : useEffect (() => {},[]);
        - import {useEffect} from "react";
        - **[]에 따라 실행 시점 결정**
            - [] 컴포넌트 생성시
            - [State변수] : 특정 state변수가 변경 되었을 때
            - [] 생략 : 컴포넌트가 변경이 될때 마다

8.useRef
    - 폼요소 참조시 사용 가능
    - current 사용
    -선언 : const 변수명ref = useRef() 
        - const {useRef} from "react";
        - 폼요소에 ref속성으로 연결 :  <input type='number' ref = {inRef} />

9.recoil로 전역변수 관리




## TailwindCss
1.classname에 클래스명으로 추가
2. 크기
    - 너비 w-n , w-full (상위컴포넌트 너비를 모두 차지)
    - 높이 h-n , w-full (상위컴포넌트 높이를 모두 차지) , h-screen(화면높이)
3. 박스
    - flex 박스
        - flex-row : 블록요소를 가로로 배치
        - flex-col : 블록요소를 세로로 배치
        - justify- : 기준축으로 정렬
        - items- : 기준축 반대 방향 정렬
    
    - grid 박스
        - grid-col- : 칸 개수 설정
        - 반응형 : sm, md, lg :화면크기로 설정
        - grid-gap- : 칸 간격
    
    - 테두리 설정
        - m- : 마진설정 ml-, mr-, mx-, mt-, mb-, my- 등
        - p- : 패딩 설정
    
    - 배경생 : bg-
    - 글자색 : text-