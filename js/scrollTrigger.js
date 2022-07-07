gsap.registerPlugin(ScrollTrigger);

gsap.from(".introF1", {
  scrollTrigger:{ 
    trigger: ".introF1",
    start: "top center",
    end: "top 50px",
    scrub: 1,
    markers:false
  },
  x: -600,
  opacity: 0,
  duration: 1
});

gsap.from(".introF2", {
  scrollTrigger:{ 
    trigger: ".introF2",
    start: "top center",
    end: "top 50px",
    scrub: 1
  },
  x: 1000,
  opacity: 0,
  duration: 1
});
