$(document).ready(function () {
  // Toggle the .advance-seacrh-wrap visibility on button click
  $(".advance-search button").on("click", function (event) {
    event.stopPropagation();
    if ($(".other-feature-wrap").is(":visible")) {
      $(".other-feature-wrap").slideUp();
    }
    $(".advance-seacrh-wrap").slideToggle();
  });

  // Toggle the .other-feature-wrap visibility on button click
  $(".other-feature button").on("click", function (event) {
    event.stopPropagation();
    $(".other-feature-wrap").slideToggle();
  });

  // Hide the .advance-seacrh-wrap and .other-feature-wrap if clicking outside of the .section-search-widget
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".section-search-widget").length) {
      $(".advance-seacrh-wrap, .other-feature-wrap").slideUp();
    }
  });

  // Prevent the .advance-seacrh-wrap and .other-feature-wrap from hiding when clicking inside the .section-search-widget
  $(".section-search-widget").on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).ready(function () {
  $(".js-select2").each(function () {
    var placeholder = $(this).data("placeholder");
    $(this).select2({
      placeholder: placeholder,
      allowClear: true, // Allows the user to clear the selection
    });
  });
});

$(".property-card_silder").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  autoplaySpeed: 2000,
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
$(".section_partner-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// HEADER SHIFT
$(document).ready(function () {
  var lastScroll = 5;

  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      setTimeout(function () {
        //gives 100ms to finish scrolling before doing a check
        var scroll = $(window).scrollTop();
        console.log("Scroll:", scroll);
        console.log("LastScroll:", lastScroll);

        if (scroll > 5) {
          $(".header").addClass("shift");
        } else {
          $(".header").removeClass("shift");
        }

        // if (scroll > 5 && scroll > lastScroll) {
        //   $(".header").addClass("shift");
        // } else if (scroll < lastScroll) {
        //   $(".header").removeClass("shift");
        // }

        lastScroll = scroll;
      }, 5);
    });
  });
});

// Scroll Down
$(function () {
  $(".animated-scrolling a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

//  Swiper slider
var swiper = new Swiper(".sidebySlider", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000, // delay between transitions in milliseconds
    disableOnInteraction: false, // autoplay won't stop after interactions
  },
  loop: true, // make sure the slider loops
  speed: 2000, // transition speed in milliseconds
});

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//   if (this.scrollY >= 5) {
//     headerMenu.classList.add("on-scroll");
//   } else {
//     headerMenu.classList.remove("on-scroll");
//   }
// });

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});

// Gallery
$(document).ready(function () {
  lightGallery(document.getElementById("animated-thumbnails"), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: "your_license_key",
    speed: 500,
  });

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-theVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src", videoSRC);
      });
    });
  }

  autoPlayYouTubeModal();
});

// Bootstrap tool tip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Add event listener for button click
document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with the class 'property-badge star'
  var starButtons = document.querySelectorAll(".property-badge.star");

  // Iterate over each button
  starButtons.forEach(function (starButton) {
    // Attach a click event listener to each button
    starButton.addEventListener("click", function () {
      // Toggle the display between none and initial state for.fa-regular and.fa-solid within the clicked button
      this.querySelector(".fa-regular").classList.toggle("d-none");
      this.querySelector(".fa-solid").classList.toggle("d-none");
    });
  });
});

// BACK TO TOP JS
!(function (s) {
  "use strict";
  s(".switch").on("click", function () {
    s("body").hasClass("light")
      ? (s("body").removeClass("light"), s(".switch").removeClass("switched"))
      : (s("body").addClass("light"), s(".switch").addClass("switched"));
  }),
    s(document).ready(function () {
      var e = document.querySelector(".back-to-top path"),
        t = e.getTotalLength();
      (e.style.transition = e.style.WebkitTransition = "none"),
        (e.style.strokeDasharray = t + " " + t),
        (e.style.strokeDashoffset = t),
        e.getBoundingClientRect(),
        (e.style.transition = e.style.WebkitTransition =
          "stroke-dashoffset 10ms linear");
      var o = function () {
        var o = s(window).scrollTop(),
          r = s(document).height() - s(window).height(),
          i = t - (o * t) / r;
        e.style.strokeDashoffset = i;
      };
      o(), s(window).scroll(o);
      jQuery(window).on("scroll", function () {
        jQuery(this).scrollTop() > 50
          ? jQuery(".back-to-top").addClass("active-progress")
          : jQuery(".back-to-top").removeClass("active-progress");
      }),
        jQuery(".back-to-top").on("click", function (s) {
          return (
            s.preventDefault(),
            jQuery("html, body").animate({ scrollTop: 0 }, 550),
            !1
          );
        });
    });
})(jQuery);
