#Smooth Scroll with AOS library

1. 마우스 스크롤
- 각 div요소들이 마우스를 스크롤 하면 사용자가 지정한 효과대로 나타난다.
- fade-left : 좌측에서 나타남 //  fade-right : 우축에서 나타남
<hr>
2. AOS library
<a href = "https://github.com/michalsnik/aos"><strong>바로가기</strong></a>

1) <head>에 link태그 추가
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
2) body에 script태그 추가
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  
3) 추가 settings을 지정
- offset : trigger 포인트 지정
- duration등 지정 가능

4) 효과 부여 대상 지정
- data-os속성을 지정한다.
- fade-left / fade-right / fade-up / fade-down
