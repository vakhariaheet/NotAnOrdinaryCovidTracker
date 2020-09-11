import { gsap, TimelineMax } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
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
  tl.to(".introContainer", 2, {
    opacity: 0,
    display: "none",
  });
};
const forLoading = () => {
  const tl = new TimelineMax();
  tl.add("introCompleted");
  tl.to(
    "#front",
    { duration: 1, y: -10, x: -10, repeat: -1, yoyo: true },
    "introCompleted"
  );
  tl.to(
    "#back",
    {
      duration: 1,
      transformOrigin: "center",
      y: -90,
      x: -235,
      repeat: -1,
      yoyo: true,
    },
    "introCompleted"
  );
  tl.to("#back", {
    duration: 1,
    transformOrigin: "center",
    y: -95,
    x: -245,
  });
};
export const intro = fromintro;
export const loading = forLoading;
export default gsap;
