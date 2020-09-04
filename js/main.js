(function ($) {
  "use strict";

  $(window).on("load", function () {
    $(".preloader").fadeOut("slow", function () {
      $(".preloader-left").addClass("slide-left");
    });

    $("#lionhero").owlCarousel({
      animateOut: "fadeOut",
      nav: true,
      navText: [
        '<i class="ion-ios-arrow-thin-left"></i>',
        '<i class="ion-ios-arrow-thin-right"></i>',
      ],
      items: 1,
      navSpeed: 400,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
    });

    $("#liontextslider").owlCarousel({
      nav: false,
      items: 1,
      navSpeed: 400,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
    });

    $("#liontestimonial").owlCarousel({
      nav: true,
      navText: [
        '<i class="ion-ios-arrow-thin-left"></i>',
        '<i class="ion-ios-arrow-thin-right"></i>',
      ],
      items: 1,
      navSpeed: 400,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
    });
  });

  $(".producer-block, .menu-item").on("click", function () {
    //producer masonry
    var $container = $("#producer-container");
    $container.isotope({
      masonry: {
        columnWidth: ".producer-item",
      },
      itemSelector: ".producer-item",
    });
    $("#filters").on("click", "li", function () {
      $("#filters li").removeClass("active");
      $(this).addClass("active");
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
    });
  });

  // Typing Animation (Typed.js)
  $("#element").typed({
    strings: [
      "Full Stack Developer",
      "Project Manager",
      "Event Producer",
      "Stage Performer",
      "Pinball Wizard",
    ],
    typeSpeed: -50,
    loop: true,
    startDelay: 500,
    backDelay: 3000,
    contentType: "html",
  });

  //Video background
  var myPlayer;
  $(function () {
    myPlayer = $("#bgndVideo").YTPlayer({
      useOnMobile: true,
      mobileFallbackImage: "assets/mask-4.png",
    });
  });

  //producer Modal
  $(document).on("click", ".open-project", function () {
    var projectUrl = $(this).attr("href");
    $(".inline-menu-container").removeClass("showx");
    $(".sidebar-menu").addClass("hidex");
    $(".content-blocks.pop").addClass("showx");
    $(".content-blocks.pop section").load(projectUrl + " .load-data > *");
    return false;
  });

  //performer post Modal
  $(".open-post").on("click", function () {
    var postUrl = $(this).attr("href");
    $(".inline-menu-container").removeClass("showx");
    $(".sidebar-menu").addClass("hidex");
    $(".content-blocks.pop").addClass("showx");
    $(".content-blocks.pop section").load(postUrl);

    return false;
  });

  //On Click Open Menu Items
  $(".menu-block, .menu-item").on("click", function () {
    $(".name-block").addClass("reverse");
    $(".name-block-container").addClass("reverse");
    $(".menu-blocks").addClass("hidex");
    $(".inline-menu-container").addClass("showx");
    $(".inline-menu-container.style2").addClass("dark");
  });
  //On Click Open developer/Resume Block
  $(".developer-block, .menu-item.developer").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.developer").addClass("showx");
    $(".menu-item").removeClass("active");
    $(".menu-item.developer").addClass("active");
    var videos = document.querySelectorAll("iframe");
    Array.prototype.forEach.call(videos, function (video) {
      var src = video.src;
      video.src = src;
    });
  });
  //On Click Open producer Block
  $(".producer-block, .menu-item.producer").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.producer").addClass("showx");
    $(".menu-item").removeClass("active");
    $(".menu-item.producer").addClass("active");
    var video = document.getElementById("stageReel");
    var src = video.src;
    video.src = src;
  });
  //On Click Open performer Block
  $(".performer-block, .menu-item.performer").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.performer").addClass("showx");
    $(".menu-item").removeClass("active");
    $(".menu-item.performer").addClass("active");

    var video = document.getElementById("eventReel");
    var src = video.src;
    video.src = src;
  });
  //On Click Open Contact Block
  $(".contact-block, .menu-item.contact").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.contact").addClass("showx");
    $(".menu-item").removeClass("active");
    $(".menu-item.contact").addClass("active");
    var videos = document.querySelectorAll("iframe");
    Array.prototype.forEach.call(videos, function (video) {
      var src = video.src;
      video.src = src;
    });
  });

  //On Click Close Blocks
  $("#close").on("click", function () {
    $(".name-block").removeClass("reverse");
    $(".name-block-container").removeClass("reverse");
    $(".content-blocks").removeClass("showx");
    $(".menu-blocks").removeClass("hidex");
    $(".inline-menu-container").removeClass("showx");
    $(".menu-item").removeClass("active");
    var videos = document.querySelectorAll("iframe");
    Array.prototype.forEach.call(videos, function (video) {
      var src = video.src;
      video.src = src;
    });
  });
  //On Click Close performer Post And Project Details
  $("#close-pop").on("click", function () {
    $(".content-blocks.pop").removeClass("showx");
    $(".sidebar-menu").removeClass("hidex");
    $(".inline-menu-container").addClass("showx");
    $(".content-blocks.pop section").empty();
  });

  $(".menu-block, .menu-item, #close").on("click", function () {
    $(".content-blocks").animate({ scrollTop: 0 }, 800);
  });

  //Function for 'Index-Menu2.html'
  $("#home").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".menu-item").removeClass("active");
    $(this).addClass("active");
    $(".inline-menu-container.style2").removeClass("dark");
  });

  //Custom Cursor
  if (".cursor".length > 0) {
    var $circleCursor = $(".cursor");

    function moveCursor(e) {
      var t = e.clientX + "px",
        n = e.clientY + "px";
      TweenMax.to($circleCursor, 0.2, {
        left: t,
        top: n,
        ease: "Power1.easeOut",
      });
    }
    $(window).on("mousemove", moveCursor);

    function zoomCursor() {
      TweenMax.to($circleCursor, 0.2, {
        borderWidth: "1px",
        opacity: 0.1,
        scale: 2,
        ease: "Power1.easeOut",
      });
    }

    $(document).on("mouseenter", "a, .zoom-cursor, .menu-item", zoomCursor);

    function noCursor() {
      TweenMax.to($circleCursor, 0.2, {
        opacity: 0,
        ease: "Power1.easeOut",
      });
    }
    $(document).on("mouseenter", "button, .btn", noCursor);

    function defaultCursor() {
      TweenLite.to($circleCursor, 0.1, {
        borderWidth: "2px",
        opacity: 0.5,
        scale: 1,
        ease: "Power1.easeOut",
      });
    }

    $(document).on(
      "mouseleave",
      "a, .zoom-cursor, .menu-item, button, .btn",
      defaultCursor
    );

    $(document).ready(function () {
      $(".cursor").css("transform", "scale(1)");
    });
  }

  //Leaflet Map

  var mymap = L.map("map").setView([29.95, -90.1], 12);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 18,
      attribution: "",
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);

  var icon = L.divIcon({
    className: "custom-div-icon",
    html: "<div class='map-marker'></div>",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  L.marker([40.67, -73.94], { icon: icon }).addTo(mymap);
})(jQuery);
