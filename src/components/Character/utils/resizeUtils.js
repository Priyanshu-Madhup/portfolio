import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll.js";

let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

export default function handleResize(renderer, camera, canvasDiv, character) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Mobile browsers fire a "resize" event when the address bar shows or
  // hides while scrolling, which only changes viewport height. Rebuilding
  // the scroll-tied character timelines below resets them to their "from"
  // pose and re-syncs to the current scroll position, which reads as the
  // avatar snapping/distorting mid-scroll. Only rebuild on a real width
  // change (actual resize/orientation change), not a scroll-driven one.
  if (window.innerWidth === lastWidth) return;
  lastWidth = window.innerWidth;

  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
