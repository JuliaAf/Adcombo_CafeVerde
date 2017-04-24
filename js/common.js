$(document).ready(function(){
    /*counter header*/
      var clockTime1 = 052517;
    var clock1 = $('.sale__timer-clock').FlipClock(clockTime1, {
        countdown: 10,
        interval:2000
    });


  /*scroll*/
  $('.toform').click(function(e) {
  e.preventDefault();
  var a = $('.js_submit'),b = a.closest('form');
  if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
  if(b.length && a.is(':visible')){
  $("html,body").animate({scrollTop: b.offset().top}, 1000);
      }
  return false;
  });


    /*countdown*/
    function Random(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var count = $('.order__ship-count-number:eq(0)').text(),
    time = setTimeout(function t() {
      count--;
      $('.order__ship-count-number').text(count);
      var b = Random(1, 75);
      if (count > 4) {
        time = setTimeout(t, b * 1000);
      }
    }, Random(5, 10)* 1000);


    /*NAV*/
    var toggle = $(".nav ul li");
      toggle.click(function(e){
        e.preventDefault();
      var that = $(this),
          togglePosition = that.index(),
          item = $("main section");

        toggle.removeClass("active");
        that.addClass("active");

        item.removeClass("active");
        item.eq(togglePosition + 1).addClass("active");
      });
      $("h3").click(function(){
        $(".nav ul li").removeClass("active");
        $("main section").removeClass("active");
        $("main section:nth-of-type(1)").addClass("active");
      })

   });//end
