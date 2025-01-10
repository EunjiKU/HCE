$(function() {
  // 스크롤모션
  setTimeout(() => {
    $(".scroll-motion").each(function(idx){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top bottom",
          end:"top top",
          toggleClass: {targets: $(".scroll-motion").eq(idx), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }, 400)


  // 헤더 영역
  gsap.to("header", 1.0, {top: 0, ease: Power2.easeOut,});

  let _this_scroll = 0;
  let _isScrollTop = 0;

  $(window).on("scroll", function () {
    // header
    _isScrollTop =  $(window).scrollTop();

    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), 1.0, {top: -130, ease:Power2.easeOut});
        }
      }
    }

    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), 1.0, {top: 0, ease:Power2.easeOut});
        $("header").addClass("up-scroll");
      }else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }
    }
    _this_scroll = _isScrollTop;
  });


  // 타이틀 영역 - 고정
  gsap.to(".tit-sec", {
    scrollTrigger: {
      trigger: ".tit-sec",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      // markers: true,
      onUpdate: function (self) {
        if (self.progress.toFixed(3) > 0.225) {
          gsap.to(".tit-area", {
            opacity: "0",
          });
        } else {
          gsap.to(".tit-area", {
            opacity: "1",
          });
        }
      }
    },
  });


  // 마우스 영역
  let mouseX = 0;
  let mouseY = 0;

  $(window).on("mousemove", function(e) { 
    mouseX = e.clientX;
    mouseY = e.clientY;
    // $(".cursor").css({"left": mouseX, "top": mouseY});
    gsap.to(".cursor", { duration: .4, left: mouseX, top: mouseY,});
  });

  $("footer").on("mouseleave", function() {
    $(".cursor").addClass("on");
  });
  $("footer").on("mouseenter", function() {
    $(".cursor").removeClass("on");
  });


  // 스크롤 영역 - 가로 값 증가
  gsap.to($(".box"), {
    width: 0,
    scrollTrigger: {
        trigger: $(".one"),
        start: "top center",
        end: "90% bottom",
        // markers: true,
        scrub: 1,
    },
  });


  // 스크롤 영역 - 패럴렉스
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.defaults({ease: "power1", duration: 30}); // 해당 트윈에 재정의되지 않는 한 설정 되지 않는 모든 트윈에 의해 상속되어야 하는 속성을 설정할 수 있다!
  $scrollItem = $(".scroll-item")

  const tl = gsap.timeline();
  tl.from(".one .txt-box", {opacity: 0, duration: .1})
    .from(".one .txt-box .txt", {opacity: 0, duration: .1}, "<")
    .from(".two", {yPercent: 100})
    .to(".one .bg", {yPercent: -30}, "<")
    .from(".two .bg", {yPercent: -30}, "<")
    .to(".one .txt-box", {yPercent: .4, opacity: 0}, "<")
    // .to($(".two .txt-box .line"), {top:0, opacity:0, stagger:0.025, duration:0.5, ease: Power3.ease})
    .from(".two .txt-box", {yPercent: -80, opacity: 0}, "<")
    .from(".two .txt-box .txt", {opacity: 0}, "<")
    
    .from(".three", {yPercent: 100})
    .to(".two .bg", {yPercent: -30}, "<")
    .from(".three .bg", {yPercent: -30}, "<")
    .to(".two .txt-box", {yPercent: .4, opacity: 0}, "<")
    .from(".three .txt-box", {yPercent: -80, opacity: 0}, "<")
    .from(".three .txt-box .txt", {opacity: 0}, "<")
    .to(".three", {yPercent: 0, duration: .1})

  ScrollTrigger.create({
    animation: tl,
    trigger: ".scroll-sec",
    start: "top top", 
    end: "+=" + $($scrollItem).height() * 4,
    // markers: true,
    pin: true,
    scrub: 2,
    anticipatePin: 1,
    onLeaveBack: () => {
      $(".cursor").removeClass("on");
      $("header").removeClass("wht");
    },
    // onLeave: () => {
    //   $(".cursor").removeClass("on");
    // },
    // onEnterBack: () => {
    //   $(".cursor").addClass("on");
    // },
    onEnter: () => {
      $(".cursor").addClass("on");
      $("header").addClass("wht");
    }
  });

});