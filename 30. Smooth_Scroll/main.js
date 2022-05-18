// Option 2 - jquery Smooth Scorll
/* $('.navbar a').on('click', function(e){
    /* console.log(this.hash);  
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
 */

// Option # - SmoothScroll Script
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});