// Smooth Scrolling ///////

$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -70
            }, 1000);
            return false;
        }
    }
  });
});

// bxSlider //////

$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 20
  });
});

// Subscribe Alert //////

$(document).ready(function(e){
  $('#subscribe').click(function(e) {
    var email = $('#email').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!(email).match(emailReg)) {
    alert('Please submit a valid email address.');
    e.preventDefault();
    } else {
    alert('Thanks for subscribing!');
      e.preventDefault();
    }
  });
});

// Add to Cart //////

$(document).ready(function(){
  var $totalCart = 0,
      $totalItems = $('.total-cart');

  $('.prodmove').on('click','button',function(e) {
        e.preventDefault();
        $totalCart++;
        $totalItems.text($totalCart).show();
  });
});
