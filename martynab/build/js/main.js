$(document).ready(function() {
  "use strict";
  //   initCursor();
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
});

// function initCursor() {
// 	var follower, init, mouseX, mouseY, positionElement, printout, timer;

// 	follower = document.getElementById('follower');

// 	printout = document.getElementById('printout');

// 	mouseX = event => {
// 	  return event.clientX;
// 	};

// 	mouseY = event => {
// 	  return event.clientY;
// 	};

// 	positionElement = event => {
// 	  var mouse;
// 	  mouse = {
// 		x: mouseX(event),
// 		y: mouseY(event) };

// 	  follower.style.top = mouse.y + 'px';
// 	  return follower.style.left = mouse.x + 'px';
// 	};

// 	timer = false;

// 	window.onmousemove = init = event => {
// 	  var _event;
// 	  _event = event;
// 	  return timer = setTimeout(() => {
// 		return positionElement(_event);
// 	  }, 1);
// 	};

//   };
