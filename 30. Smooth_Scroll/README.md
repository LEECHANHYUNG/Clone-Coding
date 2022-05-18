#Smooth Scroll - 3 Options
1. CSS 속성 이용 <br>
1) scroll-behavior : smooth<br>
- 스크롤 시 smooth하게 스크롤이 되게 하는 속성
2) scorll-snap-type : y mandatory <br>
- snap position을 지정하는 축을 결정할 수 있는 scroll snap axis(y)와 엄격도를 지정하는 scroll snap strictness (mandatory)를 지정<br>
3) scroll-snap-align : center<br>
- snap area안에서 정렬 방식을 지정<br>
<hr>
2. jquery 사용<br>
1) index.html에 minified jquery script를 넣어준다. (slim은 scoll효과가 없음) <br>
main.js<br>
<br>
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html , body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});
<br>
<hr>
3. github smooth scroll<br>
<a href = "https://github.com/cferdinandi/smooth-scroll"><strong>바로가기</strong></a><br>
1) cdn을 index.html에 추가<br>
2) smooth scroll을 시작<br>
→ Initialize Smooth Scorll<br>
3) (선택) speed 지정<br>
- speed : 800
