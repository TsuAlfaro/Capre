const brand = document.querySelector('.navbar-brand');
const menu = document.querySelector('.navbar-nav');
const slide = document.querySelector('.slider');

const tl = new TimelineMax();

tl.from(brand, 1, {opacity:0, y:-50}, {opacity:1, y: 0}, "-=0.5" )
.from(menu, 1, {opacity:0, y:-50}, {opacity:1, y:0}, "-=0.5")
.from(slide,0.5, {width:0}, {width:100},"-=0.5" )
;
