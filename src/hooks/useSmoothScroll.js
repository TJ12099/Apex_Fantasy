import { useEffect } from 'react';

const EASE = 9;
const LINE_HEIGHT = 16;

function canScrollInside(node, deltaY) {
  while (node && node !== document.body && node !== document.documentElement) {
    if (node instanceof HTMLElement) {
      const { overflowY } = getComputedStyle(node);
      const scrollable = (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight;
      if (scrollable) {
        const atTop = node.scrollTop <= 0;
        const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
        if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
      }
    }
    node = node.parentNode;
  }
  return false;
}

export default function useSmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduce) return;

    let current = window.scrollY;
    let target = current;
    let frame = 0;
    let last = 0;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      current = target = window.scrollY;
    };

    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      current += (target - current) * (1 - Math.exp(-EASE * dt));
      if (Math.abs(target - current) < 0.5) current = target;
      window.scrollTo({ top: current, behavior: 'instant' });
      frame = current === target ? 0 : requestAnimationFrame(step);
    };

    const onWheel = (event) => {
      if (event.ctrlKey || event.defaultPrevented) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (canScrollInside(event.target, event.deltaY)) return;

      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= LINE_HEIGHT;
      else if (event.deltaMode === 2) delta *= window.innerHeight;

      event.preventDefault();
      if (!frame) current = target = window.scrollY;
      target = Math.min(maxScroll(), Math.max(0, target + delta));
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    };

    const onScroll = () => {
      if (!frame) current = target = window.scrollY;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', stop);
    window.addEventListener('mousedown', stop);
    window.addEventListener('hashchange', stop);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', stop);
      window.removeEventListener('mousedown', stop);
      window.removeEventListener('hashchange', stop);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
