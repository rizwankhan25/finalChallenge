document
  .querySelector("nav #btn a")
  .addEventListener("mouseenter", function () {
    document.querySelector("nav #btn a").style.backgroundColor = "#50f7a6";
    document.querySelector("nav #btn a").style.color = "#000";
  });
document
  .querySelector("nav #btn a")
  .addEventListener("mouseleave", function () {
    document.querySelector("nav #btn a").style.backgroundColor = "initial";
    document.querySelector("nav #btn a").style.color = "#fff";
  });

let tl1 = gsap.timeline();
tl1.to(".loader", {
  y: "-100%",
  delay: 1,
});
tl1.from(
  ".part-1-middle .anim1",
  {
    y: 130,
    opacity: 0,
    ease: Power1,
  },
  "same"
);
tl1.from(
  ".part-1-middle .anim2",
  {
    y: 130,
    opacity: 0,
    delay: 0.1,
    ease: Power1,
  },
  "same"
);
tl1.from(".part-1 #img", {
  y: 200,
  // ease: Power1,
});
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "10% 60%",
    end: "150% 100%",
    // markers: true,
    scrub: true,
  },
});
tl.to(".videotag", {
  width: "100%",
  height: "100vh",
  duration: 2,
  ease: Power1,
});
