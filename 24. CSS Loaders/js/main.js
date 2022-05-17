const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init(){
    setTimeout(() =>{
        loader.style.opacity = 0;   /* Loader 안보이게 설정 */
        loader.style.display = 'none';

        main.style.display ='block';  /* main이 보이게 설정 */
        setTimeout(()=>(main.style.opacity = 1), 50); /* Fade-in 효과 부여 */
        
    }, 4000);
}
init();