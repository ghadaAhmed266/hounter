import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});

  import './owl.carousel.min.js';