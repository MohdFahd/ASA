// gsap.registerPlugin(DrawSVGPlugin);
gsap.fromTo(
  ".gsp-line",
  { x: 100, opacity: 0 }, // Start from the left (x: -500) and with opacity 0
  { x: 0, opacity: 1, duration: 1.5 } // Move to the center (x: 0) and fade in with a duration of 1.5 seconds
);
gsap.fromTo(
  ".gsp-social",
  { x: -100, opacity: 0 }, // Start from the left (x: -500) and with opacity 0
  { x: 0, opacity: 1, duration: 1.5 } // Move to the center (x: 0) and fade in with a duration of 1.5 seconds
);

gsap.fromTo(
  ".gsp-header",
  { y: -100, opacity: 0 }, // Start from the left (y: -500) and with opacity 0
  { y: 0, opacity: 1, duration: 1.5 } // Move to the center (x: 0) and fade in with a duration of 1.5 seconds
);
// gsap.to(".-rounded", {
//   rotation: 360, // Rotate 360 degrees
//   duration: 60, // Animation duration
//   ease: "none", // Linear easing for consistent speed
//   repeat: -1, // Repeat indefinitely
// });
// gsap.utils.toArray(".card").forEach((card) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 100,
//     scrollTrigger: {
//       trigger: card,
//       start: "top bottom", // Adjust as needed
//       end: "bottom top", // Adjust as needed
//       scrub: true, // Smooth animation during scroll
//     },
//   });
// });
gsap.fromTo(
  ".ASAIcone path",
  { yoyo: true, repeat: -1, duration: 5, drawSVG: "0%" },
  { drawSVG: "100%", duration: 5, yoyo: true, repeat: -1, repeatDelay: 0 }
);

// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the card element
  const card = document.querySelector(".card1");

  // Add event listener for mouseenter (hover) event
  card.addEventListener("mouseenter", function () {
    // GSAP animation
    gsap.fromTo(
      ".card1 .icon path",
      { yoyo: true, repeat: -1, duration: 4, drawSVG: "0%" },
      { drawSVG: "100%", duration: 4, repeatDelay: 0 }
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the card element
  const card = document.querySelector(".card2");

  // Add event listener for mouseenter (hover) event
  card.addEventListener("mouseenter", function () {
    // GSAP animation
    gsap.fromTo(
      ".card2 .icon path",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.5, repeatDelay: 0 }
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the card element
  const card = document.querySelector(".card3");

  // Add event listener for mouseenter (hover) event
  card.addEventListener("mouseenter", function () {
    // GSAP animation
    gsap.fromTo(
      ".card3 .icon path",
      { yoyo: true, repeat: -1, duration: 0.5, drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.5, repeatDelay: 0 }
    );
  });
});

// // Add event listeners

// gsap.to(".gsp-about", {
//   y: 500,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".gsp-about",
//     start: "top center",
//     end: "bottom center",
//     toggleActions: "play none none reverse",
//   },
// });
