import { SmoothScroll } from './smooth-scroll.js';
import initMenuActive from './menu-active.js';
import initSlider from './slider.js';

//Init scroll smooth
const scroll = new SmoothScroll("a[href^='#']");
scroll.init();

//Init slider
initSlider();

//Init menu active
initMenuActive();
