import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';
$(document).ready(function () {
    $(".owl-carousel-featured").owlCarousel({
      loop: true,
      margin: 32,
      autoplay: true,
      autoplayTimeout:6000,
      items: 4,
      responsive: {
        0:{
            items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items:4,
        },
      },
    });
  });
$(document).ready(function () {
        $(".owl-carousel-review").owlCarousel({
          loop: true,
          margin: 56,
          dots: true,
          autoplay: true,
          center:true,
          items:2,
          autoplayTimeout:6000,
          responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
              },
            1000: {
              items: 2,
            },
          },
        });
      });