import { gsap } from 'gsap';
const fromintro = () => {
	const tl = gsap.timeline();
	tl.set('.sanitizer', {
		fill: 'none',
	});
	tl.to('.sanitizer', 1, {
		fill: '#55ddee',
		delay: 2,
	});
	tl.to('.sanitizer', 3, {
		scale: 0,
		opacity: 0,
		transformOrigin: 'center',
	});
	tl.to('.introContainer', 2, {
		opacity: 0,
		display: 'none',
	});
};

export const intro = fromintro;

export default gsap;
