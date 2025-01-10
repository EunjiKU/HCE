$(function(){
    // loading screen
    var loadTl = gsap.timeline({ defaults: {duration: 1, ease: "Power3.ease"} });
    loadTl.to(".loading .txt-bg", {duration: 1.2, y: "100%"})
    loadTl.to('.loading', {duration: 0.6, y: "-100%"})
    loadTl.fromTo(".inner", {scale: 1.2}, {duration: 1.2, scale: 1}, "-=1")
    loadTl.fromTo(".type-wrap .type", {x: "-200%"}, {duration: 0.6, x: 0, stagger: 0.1}, "-=1.2")
    
    $(".type-wrap .type").on("mouseenter", function() {
        var typeIdx = $(this).index();
        
        $(this).addClass("on").siblings().removeClass("on");
        $(".type-img").eq(typeIdx).addClass("show").siblings().removeClass("show");
        $(".type-img").eq(typeIdx).find("video").trigger("play");
        $(".bg-wrap .img-wrap").eq(typeIdx).addClass("on").siblings().removeClass("on");
        
    });
});