$(document).ready(function () {
  // favicon based on color scheme
  function setFavicon() {
    const darkFavicon = $("#browser-dark-theme-favicon");
    const lightFavicon = $("#browser-light-theme-favicon");
    if (darkFavicon.length > 0 && lightFavicon.length > 0) {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (isDarkMode) {
        lightFavicon.removeAttr("href");
        // lightFavicon.attr("disabled", "disabled");
      } else {
        darkFavicon.removeAttr("href");
        // darkFavicon.attr("disabled", "disabled");
      }
    }
  }
  setFavicon();
  // listen for changes in the color scheme and update the favicon
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      setFavicon();
    });
  $(".navbar-toggler").on("click", function () {
    // Toggle the "show" class on the navbar-nav element
    $(".navbar-nav").toggleClass("show");
  });
  // Add a click event listener to the document
  $(document).on("click", function (event) {
    // Check if the clicked element is not part of the navbar
    if (!$(event.target).closest(".navbar").length) {
      // Remove the "show" class from the navbar-nav element
      $(".navbar-nav").removeClass("show");
    }
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });

  ////////////////////////////// ///////////////////////
  // Text Animation
  ////////////////////////////// ///////////////////////
  // lines
  const animate_lines = document.querySelectorAll(".animate_lines");
  animate_lines.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.08;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.lines, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.lines, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // words
  const animate_words = document.querySelectorAll(".animate_words");
  animate_words.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.02;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.words, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.words, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // chars
  const animate_chars = document.querySelectorAll(".animate_chars");
  animate_chars.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.003;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });

  //history Slider
  var historySlider = new Swiper(".historySlider", {
    pagination: {
      el: ".historyPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".historyNext",
      prevEl: ".historyPrev",
    },
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
      1800: {
        slidesPerView: 6,
      },
    },
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});
