import { gsap, TimelineMax, TweenMax } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const fromScale = (id) => {
  const tl = new TimelineMax();
  tl.from(id, 5, {
    scale: 0,
    opacity: 0,
    ease: "bounce.out",
  });
};
const fromintro = () => {
  const tl = new TimelineMax();
  tl.set(".sanitizer", {
    fill: "none",
  });
  tl.to(".sanitizer", 1, {
    fill: "#55ddee",
    delay: 2,
  });
  tl.to(".sanitizer", 3, {
    scale: 0,
    opacity: 0,
    transformOrigin: "center",
  });
  tl.to(".intro", 3, {
    opacity: 0,
    display: "none",
  });
};
const forLoading = () => {
  const tl = new TimelineMax();
  tl.add("introCompleted");
  tl.fromTo(
    ".loading",
    1,
    {
      opacity: 0,
      display: "none",
    },
    {
      opacity: 1,
      display: "block",
    }
  );
  tl.to(
    "#front",
    1,
    {
      y: -10,
      x: -10,
      repeat: 3,
      yoyo: true,
    },
    "introCompleted"
  );
  tl.to(
    "#back",
    1,
    {
      transformOrigin: "center",
      y: -90,
      x: -235,
      repeat: 3,
      yoyo: true,
    },
    "introCompleted"
  );
  tl.to(
    "#OBJECTS",
    1,
    {
      opacity: 0,
    },
    "introCompleted+=5"
  );
  tl.to(
    ".loading",
    1,
    {
      display: "none",
    },
    "introCompleted+=5"
  );
};
export const intro = fromintro;
export const scale0 = fromScale;
export const loading = forLoading;
export default gsap;
