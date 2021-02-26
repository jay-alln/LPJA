const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.3, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(
	".big-text",
	{ opacity: 0, y: 100 },
	{ opacity: 1, duration: 1, y: 0 },
	"-=1"
);
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.from(".btn", { opacity: 0, duration: 0.2 });
