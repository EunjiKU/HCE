var _this_scroll;
var _isScrollTop;

$(function() {
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.scrollEvtFn();
  main.clickEvtFn();
});

var main = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll-motion").each(function (q) {
      _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    commonFn: function () {
      gsap.to(".main-copy1", {opacity: 1, duration: 0.8, delay: 1.2, ease: Power2.easeOut, onComplete:function(){}});
      gsap.to("header", {top: 0, duration: 1.0, ease: Power2.easeOut, onComplete:function(){
        setTimeout(function(){
          $("header").addClass("wht");
        }, 1500)
        
        gsap.to(".main-copy1 .inner .copy", {opacity: 0, duration: 1.0, delay: 1.5, ease: Power2.easeOut, onComplete:function(){}});
        gsap.to(".main-copy .inner .txt", {opacity: 1, 'transform': 'translate(0, 0)', duration: 1.0, delay: 1.6, ease: Power2.easeOut, onComplete:function(){}});
        gsap.to(".main-copy", {opacity: 1, duration: 1.0, delay: 1.5, ease: Power2.easeOut, onComplete:function(){
          $("header").addClass("wht");
          $(".fir-video").css('display', 'none');
        }});
      }});
    },
    scrollEvtFn: function () {
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
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }
        }
        _this_scroll = _isScrollTop;
        scrollMotionTrigger();
      });

      var video1 = $('#myVideo1')[0];
      var video2 = $('#myVideo2')[0];
      var video3 = $('#myVideo3')[0];
      var video4 = $('#myVideo4')[0];
      var video5 = $('#myVideo5')[0];
      var video6 = $('#myVideo6')[0];
      
      gsap.to(".main-top-con .videos", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "top top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onEnter: function(){
            gsap.to(".main-copy1 .wht-arrow", {opacity: 0, duration: 0.8, ease: Power2.easeOut, onComplete:function(){}});
            // $(".main-top-con video").css('opacity', 0);
            // $(".main-top-con video").eq(0).css('opacity', 1);
            // video1.play();
          },

          onEnterBack: function(){
            gsap.to(".main-copy1 .wht-arrow", {opacity: 1, duration: 0.8, ease: Power2.easeOut, onComplete:function(){}});
            // video1.pause();
            // video1.currentTime = 0;
          },
        },
        'top': 0
      });

      gsap.to(".main-copy .inner .copy", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "top top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'transform': 'translate(0, -300px)'
      });

      gsap.to(".main-copy .inner .txt img", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "top top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'opacity': 0
      });

      gsap.to(".main-top-con .main-copy2 .inner .txt1", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "10% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': '50%',
        'opacity': 1,
      });

      gsap.to(".main-top-con .main-copy2 .inner .txt2", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "20% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'bottom': 224,
        'opacity': 1,
      });
      

      gsap.to(".main-con1", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "150% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': 0
      });

      gsap.to(".main-top-con .main-copy2 .inner img", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "150% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'transform': 'translate(0, -200px)',
        'opacity': 0,
      });

      gsap.to(".main-copy .inner .copy", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "150% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
          onEnter: function(){
            setTimeout(function(){
              $(".main-top-con video").css('opacity', 0);
              $(".main-top-con video").eq(1).css('opacity', 1);
              video2.play();
            }, 2000);

            gsap.to(".main-top-con .white-arrow-bt", {opacity: 1, scale: 1, duration: 0.5, ease: Power2.easeOut});
          },

          onEnterBack: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(0).css('opacity', 1);
            video1.pause();
            video1.currentTime = 0;

            gsap.to(".main-top-con .white-arrow-bt", {opacity: 0, scale: 0.5, duration: 0.5, ease: Power2.easeOut});
          },
        },
        'top': '300px',
        'width': 144,
        'height': 36,
      });

      gsap.to(".main-con1 .part1 .inner", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "300% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
          onEnter: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(1).css('opacity', 1);
            video2.play();
          },

          onEnterBack: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(0).css('opacity', 1);
            video2.pause();
            video2.currentTime = 0;
          },
        },
        'top': '30%',
        'opacity': 0,
      });

      gsap.to(".main-con1 .part2 ul", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "340% top",
          end: "+=350%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onUpdate: function (self) {
            if(self.progress.toFixed(3) <= 0.2){
              $(".main-con1 .part2 ul li").removeClass("active");

            }else if(self.progress.toFixed(3) > 0.2 && self.progress.toFixed(3) <= 0.4){
              $(".main-con1 .part2 ul li").removeClass("active");
              $(".main-con1 .part2 ul li").eq(0).addClass("active");

            }else if(self.progress.toFixed(3) > 0.4 && self.progress.toFixed(3) <= 0.7){
              $(".main-con1 .part2 ul li").removeClass("active");
              $(".main-con1 .part2 ul li").eq(1).addClass("active");
            }else if(self.progress.toFixed(3) > 0.7){
              $(".main-con1 .part2 ul li").removeClass("active");
              $(".main-con1 .part2 ul li").eq(2).addClass("active");
            }
          },
        },
        'top': -870,
      });

      gsap.to(".main-con1 .part2", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "650% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': -200,
        'opacity': 0
      });

      gsap.to(".main-con2", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "650% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onEnter: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(2).css('opacity', 1);

            setTimeout(function(){
              gsap.to(".main-top-con .bgs .two", {opacity: 0, duration: 1, ease: Power2.easeOut});
              gsap.to(".main-top-con .bgs .one", {opacity: 0.5, duration: 1, ease: Power2.easeOut});
              video3.play();
            }, 1000)
            
          },

          onEnterBack: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(1).css('opacity', 1);
            gsap.to(".main-top-con .bgs .two", {opacity: 0, duration: 1, ease: Power2.easeOut});
            gsap.to(".main-top-con .bgs .one", {opacity: 0, duration: 1, ease: Power2.easeOut});
            video3.pause();
            video3.currentTime = 0;
          },
        },
        'top': 0,
      });

      gsap.to(".main-con2 .part1", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "800% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': -500,
        opacity: 0
      });

      gsap.to(".main-con2 .part2 ul", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "840% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onUpdate: function (self) {
            if(self.progress.toFixed(3) <= 0.35){
              $(".main-con2 .part2 ul li").removeClass("active");
            }else if(self.progress.toFixed(3) > 0.35 && self.progress.toFixed(3) <= 0.8){
              $(".main-con2 .part2 ul li").removeClass("active");
              $(".main-con2 .part2 ul li").eq(0).addClass("active");
            }else if(self.progress.toFixed(3) > 0.8){
              $(".main-con2 .part2 ul li").removeClass("active");
              $(".main-con2 .part2 ul li").eq(1).addClass("active");
            }
          },
        },
        'top': -280,
      });

      gsap.to(".main-con2 .part2", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "950% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': -280,
        'opacity': 0
      });

      gsap.to(".main-con3", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "950% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onEnter: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(3).css('opacity', 1);
            setTimeout(function(){
              gsap.to(".main-top-con .bgs .one", {opacity: 0, duration: 1, ease: Power2.easeOut});
              gsap.to(".main-top-con .bgs .two", {opacity: 0.5, duration: 1, ease: Power2.easeOut});
              video4.play();
            }, 1500)
          },

          onEnterBack: function(){
            $(".main-top-con video").css('opacity', 0);
            $(".main-top-con video").eq(2).css('opacity', 1);
            gsap.to(".main-top-con .bgs .one", {opacity: 0, duration: 1, ease: Power2.easeOut});
            gsap.to(".main-top-con .bgs .two", {opacity: 0, duration: 1, ease: Power2.easeOut});
            video4.pause();
            video4.currentTime = 0;
          },
        },
        'top': 0,
      });

      gsap.to(".main-con3 .inner", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "1100% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,
          
        },
        'top': -500,
        'opacity': 0,
      });

      gsap.to(".main-con3 .part2 ul", {
        scrollTrigger: {
          trigger: ".main-copy",
          start: "1140% top",
          end: "+=150%",
          //pin: true,
          scrub: 1,
          //markers: true,

          onUpdate: function (self) {
            if(self.progress.toFixed(3) <= 0.25){
              $(".main-con3 .part2 ul li").removeClass("active");
            }else if(self.progress.toFixed(3) > 0.25 && self.progress.toFixed(3) <= 0.4){
              $(".main-con3 .part2 ul li").removeClass("active");
              $(".main-con3 .part2 ul li").eq(0).addClass("active");
            }else if(self.progress.toFixed(3) > 0.4 && self.progress.toFixed(3) <= 0.75){
              $(".main-con3 .part2 ul li").removeClass("active");
              $(".main-con3 .part2 ul li").eq(1).addClass("active");
            }else if(self.progress.toFixed(3) > 0.75){
              $(".main-con3 .part2 ul li").removeClass("active");
              $(".main-con3 .part2 ul li").eq(2).addClass("active");
            }
          },
        },
        'top': -550,
      });

      gsap.to(".main-con4 .dimd", {
        scrollTrigger: {
          trigger: ".main-con4",
          start: "50% top",
          end: "bottom top",
          //pin: true,
          scrub: 1,
          // markers: true,
        },
        'opacity': 1,
      });

      gsap.to(".main-con5 .bgs > p.ori", {
        scrollTrigger: {
          trigger: ".main-con4",
          start: "50% top",
          end: "bottom top",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        'background-color': '#000000',
      });

      gsap.to(".main-con5", {
        scrollTrigger: {
          trigger: ".main-con5",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
      });

      gsap.to(".main-con5 .copys", {
        scrollTrigger: {
          trigger: ".main-con5",
          start: "top top",
          end: "+=100%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },

        'transform': 'translate(0, -1000px)',
        opacity: 0
      });

      gsap.to(".main-con5 .inner .list", {
        scrollTrigger: {
          trigger: ".main-con5",
          start: "top top",
          end: "+=100%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },

        'top': -180,
        'opacity': 1,
      });


      gsap.to(".main-con6 .inner1 > .mask", {
        scrollTrigger: {
          trigger: ".main-con6",
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          //markers: true,

          onUpdate: function (self) {
            console.log(self.progress.toFixed(3))
            if(self.progress.toFixed(3) > 0.15){
              gsap.to(".main-con6 .inner1 .inner2 .txt2", {opacity: 1, 'transform': 'translate(0, 0)', duration: 0.8, ease: Power2.easeOut});
              gsap.to(".main-con6 .inner1 .inner2 ul", {opacity: 1, 'transform': 'translate(0, 0)', duration: 0.8, delay: 0.1, ease: Power2.easeOut});
            }else{
             gsap.to(".main-con6 .inner1 .inner2 .txt2", {opacity: 0, 'transform': 'translate(0, 100px)', duration: 0.8, ease: Power2.easeOut});
             gsap.to(".main-con6 .inner1 .inner2 ul", {opacity: 0, 'transform': 'translate(0, 100px)', duration: 0.8, delay: 0.1, ease: Power2.easeOut});
            }


            if(self.progress.toFixed(3) > 0.3){
              $(".main-con6 .inner1 > .mask").css('display', 'none');
            }else{
              $(".main-con6 .inner1 > .mask").css('display', 'block');
            }
          },
        },

        'top': "-1000vh",
        'left': "-100vh",
        scale: 30,
      });

      gsap.to(".main-con6 .inner1 .bottom .bg", {
        scrollTrigger: {
          trigger: ".main-con6",
          start: "top top",
          end: "+=400%",
          //pin: true,
          scrub: 1,
          //markers: true,
        },
        scale: 1.3,
      });

      gsap.to(".main-con6 .inner1 > .mask", {
        scrollTrigger: {
          trigger: ".main-con6",
          start: "-30% top",
          end: "+=10%",
          //pin: true,
          scrub: 1,
          //markers: true,
          
          onEnter: function(){
            gsap.to(".main-con6 .inner1 > .txt1", {opacity: 1, 'transform': 'translate(0, 0)', duration: 0.8, ease: Power2.easeOut});
          },
        },
      });

      gsap.to(".main-con6 .inner1 .inner2", {
        scrollTrigger: {
          trigger: ".main-con6 .inner1 .inner2",
          start: "100% top",
          end: "+=100%",
          //pin: true,
          scrub: 1,
          // markers: true,
        },

        top: -240
      });

      gsap.to(".main-con6 .inner1 > .txt1", {
        scrollTrigger: {
          trigger: ".main-con6 .inner1 .inner2",
          start: "100% top",
          end: "+=100%",
          //pin: true,
          scrub: 1,
          // markers: true,
        },

        top: -240
      });

      var videoList = $('#videoList')[0];
      var _clickNum = 0;

      $(".main-con4 .inner .bt-area a").eq(1).on('click', function(){
        if(_clickNum == 0){
          $(".main-con4 .inner .indicator > a").removeClass("on");
          $(".main-con4 .inner .indicator > a").eq(1).addClass("on");

          gsap.to(".main-con4 .inner .sec", {opacity: 0, duration: 0.5, ease: Power2.easeOut});
          gsap.to(".main-con4 .inner .sec.two", {opacity: 1, duration: 0.5, ease: Power2.easeOut});

          videoList.currentTime = 2;
          videoList.playbackRate = 2.0;
          videoList.play();
          setTimeout(function(){
            videoList.pause();
          }, 2000);

          _clickNum = 1;          
        }else if(_clickNum == 1){
          $(".main-con4 .inner .indicator > a").removeClass("on");
          $(".main-con4 .inner .indicator > a").eq(2).addClass("on");

          gsap.to(".main-con4 .inner .sec", {opacity: 0, duration: 0.5, ease: Power2.easeOut});
          gsap.to(".main-con4 .inner .sec.thr", {opacity: 1, duration: 0.5, ease: Power2.easeOut});

          videoList.currentTime = 6;
          videoList.playbackRate = 2.0;
          videoList.play();
          setTimeout(function(){
            videoList.pause();
          }, 2000);
        }
      })


      $(".main-con5 .inner .list > a").each(function(index){
        $(this).hover(function(){
          gsap.to(".main-con5 .inner .list > a", {opacity: 0.2, duration: 0.5, ease: Power2.easeOut});
          gsap.to($(this), {opacity: 1, duration: 0.5, ease: Power2.easeOut});
          
          gsap.to($(".main-con5 .bgs > p"), {opacity: 0, duration: 0.5, ease: Power2.easeOut});
          gsap.to($(".main-con5 .bgs > p").eq(index+1), {opacity: 1, duration: 0.5, ease: Power2.easeOut});
          
        }, function(){
  
        })
      });


      const circleBtn = document.querySelector(".white-arrow-bt");

      document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        circleBtn.style.left = mouseX + 'px';
        circleBtn.style.top = mouseY + 'px';
      });

      $(".topbt").on('click', function(){
        gsap.to($("body, html"), {scrollTop: 0, duration: 2, ease: Power2.easeOut});
      });

      $("header .menu1").hover(function(){
        $("nav").addClass("hover");
        $("header").removeClass("white").addClass("hover");
      }, function(){
        $("nav").removeClass("hover");
        $("header").removeClass("hover").addClass("white")
      })
    },
    clickEvtFn: function () {
    },
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
      var _getScrollObjY = function () {
      var _arrY = [];
      $(".scroll-motion").each(function (q) {
        _arrY.push(parseInt($(".scroll-motion").eq(q).offset().top) + ($(".colorful-bg").hasClass("scroll_motion") ? 150 : ($(window).height()/50)));
      });
      return _arrY;
    };
    $(".scroll-motion").each(function (q) {
      if($(window).scrollTop() + $(window).height() - 500 > _getScrollObjY()[q]){
        $(".scroll-motion").eq(q).addClass("active");
      }
    });
  }
}