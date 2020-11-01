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
  tl.to("#countryName", { duration: 0.5, opacity: 0 });
  tl.to("#countryName", { duration: 0.5, delay: 0.4, opacity: 1 });
};
export const intro = fromintro;
export const loading = forLoading;
export default gsap;
