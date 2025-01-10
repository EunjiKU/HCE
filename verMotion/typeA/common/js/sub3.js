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
          gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
        }
      }
    }

    if(_isScrollTop < _this_scroll) { // up
      gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
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


  // 스크롤 영역 - 가로 값 증가
  gsap.to($(".map-sec"), {
    scrollTrigger: {
      trigger: $(".map-sec"),
      start: "top center",
      end: "90% bottom",
      // markers: true,
      scrub: 1,
      onUpdate: function (self) {
        if (self.progress.toFixed(3) > 0.9) {
          $(".map-sec").addClass("on");
          $("header").addClass("hide");
        } else {
          $(".map-sec").removeClass("on");
          $("header").removeClass("hide");
        }
      }
    },
  });

  gsap.to($(".map-wrap"), {
    width: "100%",
    scrollTrigger: {
      trigger: $(".map-sec"),
      start: "top center",
      end: "90% bottom",
      // markers: true,
      scrub: 1,
    },
  });

  ScrollTrigger.create({
    trigger: $(".map-sec"),
    start: "top top",
    end: "+=" + ($(".map-sec").height()),
    pin: true,
    pinSpacing: true,
    // markers: true,
  });
});