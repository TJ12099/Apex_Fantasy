import { useEffect, useRef } from 'react';
import earthMap from '../assets/earth-map.jpg';

export default function EarthGlobe() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!node || reduce) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const hero = node.closest('.hero');
      if (!hero) return;
      const range = Math.max(hero.offsetHeight * 0.9, window.innerHeight);
      const progress = Math.min(1, Math.max(0, (window.scrollY - hero.offsetTop) / range));
      node.style.setProperty('--earth-shift', `${8 + progress * 62}%`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="earth-globe"
      style={{ backgroundImage: `url("${earthMap}")` }}
      aria-hidden="true"
    />
  );
}
