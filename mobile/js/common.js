$(document).ready(function(){
    /*counter header*/
    var clockTime = 052517;
    var clock = $('.footer__content-timer-clock').FlipClock(clockTime, {
        countdown: 10,
        interval:2000
    });
    var clockTime1 = 052517;
    var clock1 = $('.header__sale-timer-clock').FlipClock(clockTime1, {
        countdown: 10,
        interval:2000
    });

    /*counter footer*/
    // var clock, countdown;
    // clock = new FlipClock($('.counter-footer'),54, {
    //     clockFace: 'Counter',
    //     minimumDigits: 2,
    //     countdown:true,
    //     autoStart:true,
    //     interval:3000
    // });
    // countdown = setInterval(function() {
    //         if(clock.getTime().time < 7) {
    //         clock.stop();
    //         }
    // }, 0);


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

  /*slick carousel*/
  $('.result__people-list').slick({
       adaptiveHeight:false,
       autoplay:true,
       pauseOnHover:true,
       responsive:true,
       slidesToShow:1,
       slidesToScroll:1,
       prevArrow:"",
       nextArrow:"",
       dots:false,
       arrows:true,
       prevArrow:'<div class="prev-arrow"></div>',
       nextArrow:'<div class="next-arrow"></div>'
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

   });//end
