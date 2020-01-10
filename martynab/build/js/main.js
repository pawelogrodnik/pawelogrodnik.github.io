$(document).ready(function() {
  "use strict";
  const squareInner = $(".square__inner");
  if (squareInner) {
    squareInner.mouseover(function() {
      setTimeout(() => {
        $(this)
          .find(".square__content h2, .square__content p")
          .addClass("animated fadeInUp square__content--visible");
      }, 200);
    });
    squareInner.mouseout(function() {
      setTimeout(() => {
        $(this)
          .find(".square__content h2, .square__content p")
          .removeClass("animated fadeInUp square__content--visible");
      }, 200);
    });
  }
  const images = $(".single-page--image");
  if (images) {
    const popup = $(".single-page__image_view");
    images.on("click", function() {
      const src = $(this)
        .find("img")
        .attr("src");
      popup.find("img").attr("src", src);
      popup.css("display", "flex");
    });
    $(".single-page__image_view--exit").on("click", () =>
      popup.css("display", "none")
    );
  }
});
