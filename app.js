gsap.registerPlugin(RoughEase);
const tl = gsap.timeline({ default: { duration: 1, ease: "power1.out" } });

tl.fromTo(
  ".olas_pequenas",
  { x: -500, y: 20 },
  { x: -400, y: -30, yoyo: true, repeat: -1, duration: 1.5 }
);
tl.fromTo(
  ".otras_olas",
  { x: -700, y: -10 },
  { x: -500, y: -40, yoyo: true, repeat: -1, duration: 3 },
  "<"
);

/////////////////////////////////////////////////////////////////////
gsap.fromTo(
  ".subtitle",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1, duration: 10, delay: 2, ease: "elastic.out(1.5,1)" },
  "<"
);

gsap.fromTo(
  ".subtitle_marte",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
  }
);
gsap.fromTo(
  ".subtitle_earth",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 1,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_satur",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 0.5,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_jupiter",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 1,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_sun",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 1,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_UY_Scuti",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 2,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_milky_way",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 2,
  },
  "<100%"
);
gsap.fromTo(
  ".subtitle_andromeda",
  { x: 930, opacity: 0 },
  {
    x: 880,
    opacity: 1,
    duration: 2,
    yoyo: true,
    repeat: 1,
    ease: "elastic.out(2,1)",
    delay: 2,
  },
  "<100%"
);

/////////////////////////////////////////////////////////////////////////////////////

gsap.fromTo(
  ".mars",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  }
);
gsap.fromTo(
  ".mars",
  { scale: 3 },
  {
    x: -530,
    y: 100,
    scale: 0.2,
    duration: 5,
    ease: "none",
    delay: 3,
  }
);
tl.fromTo(
  ".mars",
  { rotation: "0deg" },
  { rotation: "-360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);

//////////////////////////////////////
gsap.fromTo(
  ".earth",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".earth",
  { scale: 3 },
  {
    x: -510,
    y: 100,
    scale: 0.3,
    duration: 4,
    ease: "none",
    delay: 4,
  },
  "<"
);
tl.fromTo(
  ".earth",
  { rotation: "0deg" },
  { rotation: "-360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);

/////////////////////////////////////
gsap.fromTo(
  ".tres",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".tres",
  { scale: 3 },
  {
    x: -485,
    y: 115,
    scale: 0.5,
    duration: 4,
    ease: "none",
    delay: 5,
  },
  "<"
);
tl.fromTo(
  ".tres",
  { rotation: "0deg" },
  { rotation: "-360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);
////////////////////////////////////
gsap.fromTo(
  ".cuatro",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".cuatro",
  { scale: 3 },
  {
    x: -435,
    y: 120,
    scale: 0.6,
    duration: 4,
    ease: "none",
    delay: 4,
  },
  "<"
);
tl.fromTo(
  ".cuatro",
  { rotation: "0deg" },
  { rotation: "360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);
//////////////////////////////////////////
gsap.fromTo(
  ".star1",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".star1",
  { scale: 3 },
  {
    x: -340,
    y: 100,
    scale: 0.01,
    opacity: 1,
    scale: 1,
    duration: 5,
    ease: "none",
    delay: 6,
  },
  "<"
);
tl.fromTo(
  ".star1",
  { rotation: "0deg" },
  { rotation: "360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);
///////////////////////////////////////////////
gsap.fromTo(
  ".star2",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".star2",
  { scale: 3 },
  {
    x: -290,
    y: 130,
    scale: 1.3,
    duration: 5,
    ease: "none",
    delay: 6,
  },
  "<"
);
tl.fromTo(
  ".star2",
  { rotation: "0deg" },
  { rotation: "-360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);
/////////////////////////////////////////////////
gsap.fromTo(
  ".gala1",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".gala1",
  { scale: 3 },
  {
    x: -180,
    y: 120,
    scale: 1.7,
    duration: 5,
    ease: "none",
    delay: 6,
  },
  "<"
);
tl.fromTo(
  ".gala1",
  { rotation: "0deg" },
  { rotation: "-360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);
//////////////////////////////////////////////////
gsap.fromTo(
  ".gala2",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    ease: "none",
  },
  "<"
);
gsap.fromTo(
  ".gala2",
  { scale: 3 },
  {
    x: -120,
    y: 120,
    scale: 1.5,
    opacity: 1,
    duration: 5,
    ease: "none",
    delay: 6,
  },
  "<"
);
tl.fromTo(
  ".gala2",
  { rotation: "0deg" },
  { rotation: "360deg", yoyo: true, repeat: -1, duration: 40 },
  "<"
);

//////////////////////////////////////////////////////////////////////////////////////
gsap.fromTo(
  ".starFugaz",
  { x: -80, y: 0, rotation: "10deg", opacity: 0.5 },
  {
    x: 3000,
    y: -1000,
    opacity: 1,
    rotation: "11deg",
    duration: 40,
    delay: 4,
  }
);
gsap.fromTo(
  ".starFugaz2",
  { x: 140, y: 0, rotation: "-120deg", opacity: 0.5 },
  {
    x: -3000,
    y: -1000,
    opacity: 1,
    rotation: "-60deg",
    duration: 30,
    ease: "none",
    delay: 16,
  }
);
/////////////////////////////////////

gsap.to(".satel", {
  duration: 40,
  ease: "rough({ strength: 1, points: 20, template: sine.inOut, taper: none, randomize: true, clamp: true })",
  y: -400,
  x: 2000,
});
///////////////////////////////////////
tl.fromTo(
  ".moon",
  { y: 0 },
  {
    y: 300,
    duration: 5,
    ease: "circ.in",
    yoyo: true,
    repeat: -1,
  },
  "<"
);
tl.fromTo(
  ".moon",
  { rotation: "0deg" },
  {
    duration: 20,
    rotation: "360deg",
    ease: "none",
    yoyo: true,
    repeat: -1,
  },
  "<"
);

tl.fromTo(
  ".barco",
  { x: 0, y: 0, rotation: "0deg" },
  {
    x: 650,
    y: 125,
    duration: 16,
    rotation: "10deg",
    ease: "none",
  },
  "<"
);
tl.fromTo(
  ".barco",
  { x: 650, y: 125, rotation: "10deg" },
  {
    x: 900,
    y: 115,
    rotation: "2deg",
    duration: 10,
    ease: "none",
  }
);
tl.fromTo(
  ".barco",
  { x: 900, y: 115, rotation: "2deg" },
  { x: 1250, y: 65, duration: 10, rotation: "-13deg", ease: "none" }
);
tl.fromTo(
  ".barco",
  { x: 1250, y: 65, rotation: "-13deg" },
  { x: 1500, y: 10, duration: 8, rotation: "-3deg", ease: "none" }
);
/////////////////////////////////////////////////////////////////////////////////////

const message2 = document.querySelector(".titulo2");
const letters2 = message2.textContent.split(" ");
message2.textContent = "";
letters2.forEach(
  (letter) =>
    (message2.innerHTML +=
      "   " + '<span class="letter2">' + letter + "</span>" + "   ")
);

gsap.set(".letter2", { display: "inline-block", overflow: "hidden" });
gsap.fromTo(
  ".letter2",
  { y: -30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    delay: 2,
    stagger: 2,
    ease: "elastic.out(10,4)",
    duration: 6,
  }
);
