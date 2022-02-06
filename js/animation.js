const tl = gsap.timeline();
const tl2 = gsap.timeline({paused: true});

let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');


tl.fromTo(".hero__title", {opacity: 0, y: 70}, {opacity: 1, y: 0, duration: 0.8, ease: "sine.out"})
  .fromTo(".hero__btn", {opacity: 0, y: 100}, {opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "sine.out"}, "-=1")
  .fromTo(".hero__descr", {opacity: 0}, {opacity: 1, scale: 1, duration: 1.5, ease: "sine.out"})
  .fromTo("#img1", {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, duration: 0.6}, "-=1")
  .fromTo("#img2", {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, duration: 0.3}, "-=0.6")
  .fromTo("#img3", {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, duration: 0.3}, "-=0.3")
  .fromTo(".photos__author", {opacity: 0}, {opacity: 1, duration: 2}, "-=0.3");

burger.addEventListener("click", function() {
  tl2.play()
});

close.addEventListener("click", function() {
  tl2.reverse()
});


tl2.fromTo(".menu", 1, {opacity: 0}, {display: 'block', opacity: 1})
  .from(".menu__top", {opacity: 0, y: -30}, "-=1")
  .from(".menu__container", {opacity: 0, y: 100}, "-=0.7")
  .from(".nav__list", {opacity: 0, y: 30})
  .from(".social", {opacity: 0, y: 20})
  .from(".menu__right", {opacity: 0, y: 30}, "-=0.7");
