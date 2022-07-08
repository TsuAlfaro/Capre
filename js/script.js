const brand = document.querySelector('.navbar-brand');
const menu = document.querySelector('.navbar-nav');
const slide = document.querySelector('.slider');
const cCaptions = document.querySelector('.carousel-caption');
const hamburger = document.querySelector('.navbar-toggler');
const nosImg = document.querySelector('.img-nos');

const tl = new TimelineMax();

tl.from(slide, 1, {height:0}, {height:100},"+=0.5")
.from(brand, 1, {opacity:0, y:-100}, {opacity:1, y:0},"+=1")
.from(menu, 1, {opacity:0, y:-100}, {opacity:1, y:0},"+=0.5")
.from(hamburger, 1, {opacity:0, y:-100}, {opacity:1, y:0}, "+=0.5" )
.from(cCaptions, 1, {opacity:0}, {opacity:1}, "+=1")
.from(nosImg, 1, {opacity:0, y:100}, {opacity:1, y:0},"+=0.5")
;
