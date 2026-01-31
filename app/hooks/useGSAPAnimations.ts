import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export const useGSAPAnimations = (config: AnimationConfig = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: config.trigger || elementRef.current,
          start: config.start ?? 'top 80%',
          end: config.end ?? 'bottom 20%',
          scrub: config.scrub ?? false,
          pin: config.pin ?? false,
          markers: config.markers ?? false,
        },
      });

      timelineRef.current = tl;
    }, elementRef);

    return () => {
      ctx.revert(); // 🔑 cleans ONLY this hook’s animations & triggers
    };
  }, [
    config.trigger,
    config.start,
    config.end,
    config.scrub,
    config.pin,
    config.markers,
  ]);

  return { elementRef, timelineRef };
};
