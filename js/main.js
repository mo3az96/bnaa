$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  sal({
    once: true,
  });
  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });
  /***** projects slider *****/
  var projectsSwiper = new Swiper(".projects-slider .swiper", {
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-slider .swiper-button-next",
      prevEl: ".projects-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  $(".menu-btn").on("click", function (e) {
    $(".header-nav").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".header-ul").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").on("click", function (e) {
    $(".header-nav").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-ul").removeClass("active");
    $("body").removeClass("overflow");
  });
});
