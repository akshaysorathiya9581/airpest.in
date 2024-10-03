$(window).on("load", function () {
  "use strict";

  /* ========================================================== */
  /*   Owl Carousel                                             */
  /* ========================================================== */

  $("#owl1").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $("#owl2").owlCarousel({
    center: true,
    autoplay: true,
    loop: true,
    margin: 40,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: true,
      },
    },
  });

  /* ========================================================== */
  /*   Slider                              */
  /* ========================================================== */

  $(function () {
    $.vegas("slideshow", {
      backgrounds: [
        { src: "images/slider-bg0.jpg", fade: 1500 },
        { src: "images/slider-bg1.jpg", fade: 1500 },
        { src: "images/slider-bg2.jpg", fade: 1500 },
      ],
      loading: false,
    });
  });

  /* ========================================================== */
  /*   Navigation Background Color                              */
  /* ========================================================== */

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 450) {
      $(".navbar-fixed-top").addClass("opaque");
    } else {
      $(".navbar-fixed-top").removeClass("opaque");
    }
  });

  /* ========================================================== */
  /*   Hide Responsive Navigation On-Click                      */
  /* ========================================================== */

  $(".navbar-nav li a").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
  });

  /* ========================================================== */
  /*   Navigation Color                                         */
  /* ========================================================== */

  $("#navbar-collapse-02").onePageNav({
    filter: ":not(.external)",
  });

  /* ========================================================== */
  /*   SmoothScroll                                             */
  /* ========================================================== */

  $(".nav.navbar-nav li a, a.scrool").on("click", function (e) {
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top;

    $("html,body").animate({ scrollTop: target_top - 70 }, 1000);
    return false;
  });
});

/* ========================================================== */
/*   Popup-Gallery                                            */
/* ========================================================== */
$(".popup-gallery")
  .find("a.popup1")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup2")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup3")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup4")
  .magnificPopup({
    type: "iframe",
    gallery: {
      enabled: false,
    },
  });
