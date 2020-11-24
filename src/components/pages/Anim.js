const tl = gsap.timeline({ defaults: {ease: "power1.out"}});

tl.to(".text-anim", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider-anim",{y: "-100%", duration: 1.5});
tl.to(".intro-anim", {y:"-100%", duration: 1}, "-=1");
// tl.fromTo("nav", {opacity: 0},{opacity:1, duration:1} );
// tl.fromTo("home", {opacity: 0},{opacity:1, duration:1}, "-=1" );