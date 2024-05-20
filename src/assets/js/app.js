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

gsap.fromTo(
  ".ASAIcone path",
  { drawSVG: "0%" },
  { drawSVG: "100%", duration: 15, yoyo: true, repeat: -1 }
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
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 12, yoyo: true, repeat: -1 }
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
      { drawSVG: "100%", duration: 3, repeatDelay: 0 }
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
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 3, yoyo: true, repeat: -1 }
    );
  });
});

gsap.fromTo(
  ".section-02 div",
  { x: -500 },
  {
    x: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      scroller: ".section-snap",
      trigger: ".section-01",
      start: "bottom center",
      toggleActions: "play none none reset",
    },
  }
);
gsap.fromTo(
  ".section-02 img",
  { y: 500 },
  {
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      scroller: ".section-snap",
      trigger: ".section-01",
      start: "bottom center",
      toggleActions: "play none none reset",
    },
  }
);
gsap.fromTo(
  ".section-03 .info",
  { y: -500 },
  {
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      scroller: ".section-snap",
      trigger: ".section-02",
      start: "bottom bottom",
      toggleActions: "play none none reset",
    },
  }
);
// Create a GSAP timeline
const tl = gsap.timeline({
  scrub: true,
  scrollTrigger: {
    scroller: ".section-snap", // Make sure this matches your scroller
    trigger: ".section-02", // Element that triggers the animation
    start: "bottom bottom",
    toggleActions: "play none none reset",
  },
});

// Add animations to the timeline
tl.fromTo(
  ".card1",
  { y: 500, opacity: 0 },
  { x: 0, y: 0, opacity: 1, duration: 1, ease: "power1.out" }
)
  .fromTo(
    ".card2",
    { y: 500, opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: 1, ease: "power1.out" },
    "-=0.5" // Overlap the second animation by 0.5 seconds
  )
  .fromTo(
    ".card3",
    { y: 500, opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: 1, ease: "power1.out" },
    "-=0.5" // Overlap the third animation by 0.5 seconds
  );
gsap.fromTo(
  ".section-04 iframe",
  { scale: 0.5 },
  {
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      scroller: ".section-snap",
      trigger: ".section-03",
      start: "bottom center",
      toggleActions: "play none none reset",
    },
    scale: 1,
  }
);
