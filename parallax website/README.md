#스크롤을 해도 배경은 고정된 Website

.pimg1, .pimg2, .pimg3{
    position: relative;
    opacity: 0.7;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
- background-image가 적용되는 태그에 대해서 속성들을 지정



#background-attachment

- 기본 값은 scroll // 화면이 스크롤되면서 배경도 같이 scrolling

- fixed  // 화면이 스크롤되면 배경은 고정된 상태
