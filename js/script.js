/* ====================================================================================================================
  Javascript Document
  Author: Jean Cuadros
/* ===================================================================================================================*/

(function ($) {
  "use strict"; // Start of use strict

  // Preloader
  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });
  // Collapse Navbar Animation
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-animation");
    } else {
      $("#mainNav").removeClass("navbar-animation");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // FORM CONTACT
  if (document.querySelector("#contactForm")) {
    $(function () {
      $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  }


// $(document).ready(function () {
/* ====================================================================================================================
 * SWEET ALERT
 * ====================================================================================================================*/
  if (document.querySelector(".sweetalert")) {
    document.querySelector('.sweetalert').onclick = function () {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    };
  }
/* ====================================================================================================================
 * NANO SCROLL
 * ====================================================================================================================*/
  if (document.querySelector(".nano")) {
    $('.nano').nanoScroller({
      preventPageScrolling: true,
      alwaysVisible: true
    });
  }
/* ====================================================================================================================
 * FANCYBOX
 * ====================================================================================================================*/
  if (document.querySelector(".fancybox")) {
    $('.fancybox').fancybox();
  }
/* ====================================================================================================================
 * WOW ANIMATION
 * ====================================================================================================================*/
  // if (document.querySelector(".wow")) {
    new WOW().init();
  // }
// });

})(jQuery); // End of use strict