$(function() {
  let _thisScroll;
  let _isScrollTop;

  $("#mobileWrap .content .scroll").on("scroll", function(){
    _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

    if(_isScrollTop > _thisScroll) { // down
      if(_isScrollTop > 0){
        gsap.to(("header"), .4, {top: -70, ease:Power2.easeOut});
        // $("header").removeClass("up-scroll");
      }
    }
    
    if(_isScrollTop < _thisScroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), .4, {top: 0, ease:Power2.easeOut});
        $("header").addClass("up-scroll");
      }else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }
    }
  
    _thisScroll = _isScrollTop;
  });
});