const animate = gsap.utils.toArray('.AnimText');
const movD = gsap.utils.toArray('.movder');
const movI = gsap.utils.toArray('.movizq');

gsap.registerPlugin(ScrollTrigger);

animate.forEach(AnimText => {
  gsap.from(AnimText, { 
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: AnimText,
      start: "top bottom-=50px",
      end: "top 50px",
      scrub: true,
      markers:false
    }
  })
});

movD.forEach(movder => {
  gsap.from(movder, { 
   x: -100,
      opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: movder,
      start: "top bottom-=50px",
      end: "top 50px",
      scrub: true
    }
  })
});

movI.forEach(movizq => {
  gsap.from(movizq, { 
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: movizq,
      start: "top bottom-=50px",
      end: "top 50px",
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