//scroll navigation
let head = 200;
window.addEventListener('scroll',
    function(e){
    if(window.scrollY >= 200){
            if(window.scrollY > head){
            console.log("â")
            $(".header-main").css({"top": -100 + "px" });
            head = window.scrollY;
            }
            else{
                console.log("b")
            $(".header-main").css({"top":"0" , "background-color":"white"});
            head = window.scrollY;
            
            }
    } else{
        $(".header-main").css({"top":"0", "background-color":"#f1e4dc"});
    }
})
//end scroll navigation
//animation banner 
window.addEventListener ('scroll', function(e){
    let value = window.scrollY;
    let bannerleft = $(".banner-left");
    let bannerright =$(".banner-right");
    bannerleft.css({top: value * 0.3 +"px"})
    bannerright.css({top: value* -0.3 +"px"})
})