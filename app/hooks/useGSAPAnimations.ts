// app/hooks/useGSAPAnimations.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  trigger?: string;
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

    const element = elementRef.current;
    
    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: config.trigger || element,
        start: config.start || "top 80%",
        end: config.end || "bottom 20%",
        scrub: config.scrub || false,
        pin: config.pin || false,
        markers: config.markers || false,
      },
    });

    timelineRef.current = tl;

    return () => {
      // Cleanup
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [config.trigger, config.start, config.end, config.scrub, config.pin, config.markers]);

  return { elementRef, timelineRef };
};