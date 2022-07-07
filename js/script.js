const brand = document.querySelector('.navbar-brand');
const menu = document.querySelector('.navbar-nav');
const slide = document.querySelector('.slider');
const cCaptions = document.querySelector('.carousel-caption');


const tl = new TimelineMax();

tl.from(brand, 1, {opacity:0, x:-100}, {opacity:1, x:0}, "-=0.5" )
.from(menu, 1, {opacity:0}, {opacity:1}, "-=0.5")
.from(slide, 1, {width:0}, {width:100},"-=0.5" )
.from(cCaptions, 1.5, {opacity:0}, {opacity:1}, "-=2")
;
