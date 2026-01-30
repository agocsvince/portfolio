'use client';

import { useEffect, useRef } from 'react';
import { waapi, onScroll } from 'animejs';
import { MorphingText } from '@/components/ui/morphing-text';

// Scroll breakpoints: animation progress 0→1 is synced to scroll between enter and leave.
// Format is "container edge, target edge" (see Anime.js ScrollObserver thresholds).
// - enter: when this line is crossed, progress = 0 (scale animation starts).
// - leave: when this line is crossed, progress = 1 (scale animation ends).
const SCROLL_ENTER = 'bottom top'; // viewport bottom meets section top → start scaling
const SCROLL_LEAVE = 'center center'; // viewport top meets section center → scaling done

export default function HeroImage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    let animation: ReturnType<typeof waapi.animate> | null = null;

    const startAnimation = () => {
      if (!sectionRef.current || !imageRef.current) return;
      animation = waapi.animate(imageRef.current, {
        scale: [0.05, 1],
        height: ['25%', '100%'],
        ease: 'linear',
        autoplay: onScroll({
          target: sectionRef.current,
          enter: SCROLL_ENTER,
          leave: SCROLL_LEAVE,
          sync: window.innerWidth <= 768 ? true : 0.4, // playback progress: seek animation to scroll position between enter and leave
        }),
      });
    };

    // Defer until after layout so scroll observer bounds (offsetStart/offsetEnd) are correct.
    // Otherwise progress can be wrong on first frame and the animation snaps to 1.
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(startAnimation);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (animation) animation.revert();
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative w-full"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex min-h-[100vh] w-full items-center justify-center bg-primary">
        <h3 className="absolute w-max text-xl top-[25%] text-center lg:text-2xl left-1/2 -translate-x-1/2 text-primary z-20">
          Hi, my name is{' '}
          <span className="font-gothic text-2xl lg:text-3xl">Vince</span>
        </h3>
        <div
          className="font-gothic absolute flex min-w-[80vw]
         max-w-[100vw] items-center justify-center z-10 uppercase text-primary overflow-hidden"
        >
          {/* <MorphingText
            texts={['Web developer', 'Videographer']}
            className="!text-xl md:!text-4xl lg:!text-7xl !h-8 lg:!h-20 !font-gothic tracking-widest"
          /> */}
        </div>
        <h4 className="absolute w-max text-lg lg:text-xl text-center top-[66.666666%] left-1/2 -translate-x-1/2 text-primary z-20">
          based in{' '}
          <span className="font-gothic text-lg lg:text-xl tracking-wide">
            Budapest
          </span>
        </h4>
        <h1 className="text-terminal font-gothic text-2xl lg:text-5xl absolute bottom-8 lg:bottom-auto lg:top-1/2 lg:-left-22 z-20 lg:-rotate-90 uppercase tracking-wider">
          [Agocs Vince]
        </h1>
        <div className="flex flex-col items-center justify-center h-screen w-screen ">
          <img
            ref={imageRef}
            src="/assets/hero_2.jpg"
            alt="Hero"
            className="max-h-[100vh] w-full object-cover grayscale-60"
            style={{
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>
      </div>
    </section>
  );
}
