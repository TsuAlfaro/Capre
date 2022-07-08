const animate = gsap.utils.toArray('.AnimText');
const mov1 = gsap.utils.toArray('.movder');

gsap.registerPlugin(ScrollTrigger);

animate.forEach(AnimText => {
  gsap.from(AnimText, { 
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: AnimText,
      start: "top center",
        end: "top 50px",
      scrub: true,
      markers:true
    }
  })
});

mov1.forEach(movder => {
  gsap.from(movder, { 
   x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: movder,
      start: "top bottom=0px",
      scrub: true
    }
  })
});

gsap.from(".introF1", {
  scrollTrigger:{ 
    trigger: ".introF1",
    start: "top center",
    end: "top 50px",
    scrub: 1,
    markers:false
  },
  x: -100,
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
  x: 50,
  opacity: 0,
  duration: 1
});