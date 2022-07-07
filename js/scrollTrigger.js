gsap.registerPlugin(ScrollTrigger);

gsap.from(".introF1", {
  scrollTrigger:{ 
    trigger: ".introF1",
    toggleractions: "restart none none none"
  },
  x: -600,
  opacity: 0,
  duration: 1
});

gsap.from(".introF2", {
  scrollTrigger: ".introF2",
  x: 1000,
  opacity: 0,
  duration: 1
});

