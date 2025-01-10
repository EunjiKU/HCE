$(function() {
  var _this_scroll;
  var _isScrollTop;
  var _isScroll = false;
  const maskBg = $(window).height();

  //헤더 컬러로 변경
  function headerColor() {
    var myElement = document.getElementById('header');
    let whHeader = `
      <div class="inner">
        <a class="gnb" href="javascript:"
          ><img src="./common/images/main-header-gnb.png" alt=""
        /></a>
        <a class="logo" href="javascript:"
          ><img src="./common/images/main-logo.svg" alt=""
        /></a>
        <a class="util" href="javascript:"
          ><img src="./common/images/main-header-util.png" alt=""
        /></a>
      </div>`;
    myElement.innerHTML = whHeader; 
  }

  //헤더 화이트로 변경
  function headerWh() {
    var myElement = document.getElementById('header');
    let whHeader = `
      <div class="inner">
        <a class="gnb" href="javascript:"
          ><img src="./common/images/main-header-gnb-wh.png" alt=""
        /></a>
        <a class="logo" href="javascript:"
          ><img src="./common/images/main-logo-wh.svg" alt=""
        /></a>
        <a class="util" href="javascript:"
          ><img src="./common/images/main-header-util-wh.png" alt=""
        /></a>
      </div>`;
    myElement.innerHTML = whHeader; 
  }
  
  
  $(window).on("scroll", function () {

    //header 컬러 변경으로 인한 변수선언
    const visionTop = $(".sc_vision").offset().top;
    const productTop = $(".sc_carlist").offset().top + $(".sc_carlist").height() + maskBg * .5;
    
    _isScrollTop =  $(window).scrollTop();
    
    //header 컬러 변경 boolean
    if (visionTop <= _isScrollTop) {
      _isScroll = true;
    } else {
      _isScroll = false;
    }
    
    // header
    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), .5, {top: -130, ease:Power2.easeOut});
        }
      }

      if (_isScroll) {
        headerColor();
      }
    } else if (!_isScroll && $(".mask_bg_bk").css("opacity") > 0.599) {
      headerWh();
    }
    
    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), .5, {top: 0, ease:Power2.easeOut});
      }

      if (productTop >= _isScrollTop ) {
        headerColor();
      }
    }
    _this_scroll = _isScrollTop;
 });

  //메인 비주얼 마스크 이미지
  setTimeout(function() {
    $(".masking_area .mask_image").removeClass("on");
  }, 1000);

  //arrow버튼 컬러 변경
  setTimeout(function() {
    $(".down_arrow .arr_wh").css("display", "none");
    $(".down_arrow .arr_bk").css("display", "block");
    $("body").removeClass("stop_scroll");
  }, 1800);

  //메인 비주얼 텍스트 나오게
  setTimeout(function() {
    $(".main_area .main_txt").addClass("on");
  }, 2300);


  //현대 건설기계 제품 모션
  var full01Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_product",
      start: "top top",
      end() {
        return "+=".concat($(".sc_product").height() * 10)
      },
      // endTrigger:$(".left")
      scrub: 1.5,
      // markers: true,
      pin: ".sc_product",
      // onEnter: function(){
      //   console.log("enter");
      //   var myElement = document.getElementById('header');
      //   let whHeader = `
      //     <div class="inner">
      //       <a class="gnb" href="javascript:"
      //         ><img src="./common/images/main-header-gnb-wh.png" alt=""
      //       /></a>
      //       <a class="logo" href="javascript:"
      //         ><img src="./common/images/main-logo-wh.svg" alt=""
      //       /></a>
      //       <a class="util" href="javascript:"
      //         ><img src="./common/images/main-header-util-wh.png" alt=""
      //       /></a>
      //     </div>`;
      //   myElement.innerHTML = whHeader; 
      // },
      // onEnterBack: function(){
      //   console.log("leave");
      //   var myElement = document.getElementById('header');
      //   let whHeader = `
      //     <div class="inner">
      //       <a class="gnb" href="javascript:"
      //         ><img src="./common/images/main-header-gnb-wh.png" alt=""
      //       /></a>
      //       <a class="logo" href="javascript:"
      //         ><img src="./common/images/main-logo-wh.svg" alt=""
      //       /></a>
      //       <a class="util" href="javascript:"
      //         ><img src="./common/images/main-header-util-wh.png" alt=""
      //       /></a>
      //     </div>`;
      //   myElement.innerHTML = whHeader; 
      // },
      onUpdate: function(self){
        // console.log(self.progress.toFixed(3));
        if(self.progress.toFixed(3) <= 0.549){
          if(self.progress.toFixed(3) >= 0.225){
            if(self.progress.toFixed(3) <= 0.326){
              $(".sc_product .sc_txt").css("opacity", "1");
            }

            headerWh();
          } else {
            headerColor();
          }
          

          gsap.to(".sc_product .pin_desc .ig_wrap:not(.one)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_desc .ig_wrap.one", {opacity: 1, ease: Power3.easeOut})

          gsap.to(".sc_product .pin_bg .ig_wrap:not(.one)", {opacity: 0, duration: .5, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_bg .ig_wrap.one", {opacity: 1, duration: .5, ease: Power3.easeOut})
          
        } else if (self.progress.toFixed(3) <= 0.642) {
          $(".sc_product .sc_txt").css("opacity", "0");

          gsap.to(".sc_product .pin_desc .ig_wrap:not(.two)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_desc .ig_wrap.two", {opacity: 1, ease: Power3.easeOut})

          gsap.to(".sc_product .pin_bg .ig_wrap:not(.two)", {opacity: 0, duration: .5, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_bg .ig_wrap.two", {opacity: 1, duration: .5, ease: Power3.easeOut})

        } else if (self.progress.toFixed(3) <= 0.75) {
          gsap.to(".sc_product .pin_desc .ig_wrap:not(.three)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_desc .ig_wrap.three", {opacity: 1, ease: Power3.easeOut})

          gsap.to(".sc_product .pin_bg .ig_wrap:not(.three)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_bg .ig_wrap.three", {opacity: 1, ease: Power3.easeOut})

        } else if (self.progress.toFixed(3) <= 1) {
          gsap.to(".sc_product .pin_desc .ig_wrap:not(.four)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_desc .ig_wrap.four", {opacity: 1, ease: Power3.easeOut})

          gsap.to(".sc_product .pin_bg .ig_wrap:not(.four)", {opacity: 0, ease: Power3.easeOut})
          gsap.to(".sc_product .pin_bg .ig_wrap.four", {opacity: 1, ease: Power3.easeOut})
        }
      }
    },
  });
  full01Tl.addLabel("m1")
  .to(".sc_product .sc_tit", {top: "35%"}, "m1")
  .to(".sc_product .sc_tit > *", {scale: .5}, "m1")
  .to(".sc_product .sc_txt", {top: "44%", scale: 1}, "m1+=.1")
  .addLabel("m2")
  .to(".sc_product .mask_bg_bk", {opacity: 1},"m2")
  .to(".sc_product .txt_wrap", {className: "on txt_wrap"}, "m2+=.21")
  .to(".sc_product .sc_tit", {className: "on sc_tit"}, "m2+=.21")
  .to(".sc_product .pin_bg", {top: "78vh"}, "-=.4")
  .addLabel("m3")
  .to(".sc_product .pin_bg", {width: "100%", top: "0"}, "m3")
  .to(".sc_product .sc_tit .pos_ab", {className: "on pos_ab"}, "m3")
  .to(".sc_product .sc_txt", {opacity: 0}, "m3-=.3")
  .to(".sc_product .sc_tit .pos_ab", {top: "275%", left: "-200%"}, "m3")
  .to(".sc_product .pin_desc", 3, {top: "-950px"})

  
  // 공통 스크롤 모션
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "-350px 60%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
})