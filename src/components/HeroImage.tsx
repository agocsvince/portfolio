'use client';

import { useEffect, useRef, useState } from 'react';
import { waapi, onScroll } from 'animejs';
import { MorphingText } from '@/components/ui/morphing-text';

// Scroll breakpoints: animation progress 0→1 is synced to scroll between enter and leave.
// Format is "container edge, target edge" (see Anime.js ScrollObserver thresholds).
// - enter: when this line is crossed, progress = 0 (scale animation starts).
// - leave: when this line is crossed, progress = 1 (scale animation ends).
const SCROLL_ENTER = 'bottom top'; // viewport bottom meets section top → start scaling
const SCROLL_LEAVE = 'center center'; // viewport top meets section center → scaling done

// Detect Safari on mobile
const isSafariMobile = () => {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  return isIOS || (isSafari && window.innerWidth <= 768);
};

export default function HeroImage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSafariMobileBrowser, setIsSafariMobileBrowser] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const safariMobile = isSafariMobile();
    const mobile = window.innerWidth <= 768;
    setIsSafariMobileBrowser(safariMobile);
    setIsMobile(mobile);
    
    // For Safari mobile, set image height to 100% immediately to prevent wrong initial height
    // This ensures the image fills the wrapper which will animate its height
    if (safariMobile && mobile && imageRef.current) {
      imageRef.current.style.height = '100%';
      // Prevent any height animation from being applied to the image
      imageRef.current.style.setProperty('height', '100%', 'important');
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !image) return;

    // Check Safari directly here to avoid state timing issues
    const isSafari = isSafariMobile();
    const isMobileWidth = window.innerWidth <= 768;

    let animation: ReturnType<typeof waapi.animate> | null = null;
    let wrapperAnimation: ReturnType<typeof waapi.animate> | null = null;

    const startAnimation = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const scrollConfig = {
        target: sectionRef.current,
        enter: SCROLL_ENTER,
        leave: SCROLL_LEAVE,
        sync: isMobileWidth ? true : 0.4,
      };

      // For Safari mobile, use a wrapper approach to avoid rendering issues with height + transform
      // Safari has issues when animating both height and transform on the same element
      if (isSafari && isMobileWidth && wrapper) {
        // Ensure image height is set to 100% BEFORE animation starts
        const img = imageRef.current;
        img.style.height = '100%';
        // Add a class to enforce height via CSS as well
        img.classList.add('safari-mobile-hero-image');
        
        // Animate wrapper height and image scale separately to avoid Safari rendering bugs
        // Image height should always be 100% to fill the wrapper, never animated
        wrapperAnimation = waapi.animate(wrapper, {
          height: ['25%', '100%'],
          ease: 'linear',
          autoplay: onScroll(scrollConfig),
        });

        // Only animate scale, NOT height for Safari - explicitly exclude height
        animation = waapi.animate(img, {
          scale: [0.05, 1],
          ease: 'linear',
          autoplay: onScroll(scrollConfig),
        });
      } else if (isMobileWidth && wrapper) {
        // For other mobile browsers, animate image directly
        animation = waapi.animate(imageRef.current, {
          scale: [0.05, 1],
          height: ['25%', '100%'],
          ease: 'linear',
          autoplay: onScroll(scrollConfig),
        });
      } else {
        // Desktop: original animation
        animation = waapi.animate(imageRef.current, {
          scale: [0.05, 1],
          height: ['25%', '100%'],
          ease: 'linear',
          autoplay: onScroll(scrollConfig),
        });
      }
    };

    // Defer until after layout so scroll observer bounds (offsetStart/offsetEnd) are correct.
    // Otherwise progress can be wrong on first frame and the animation snaps to 1.
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(startAnimation);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (animation) animation.revert();
      if (wrapperAnimation) wrapperAnimation.revert();
      // Clean up Safari class
      if (imageRef.current) {
        imageRef.current.classList.remove('safari-mobile-hero-image');
      }
    };
  }, [isSafariMobileBrowser, isMobile]);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative w-full"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex min-h-dvh w-full items-center justify-center bg-primary">
        <h3 className="absolute w-max text-xl top-[25%] text-center lg:text-2xl left-1/2 -translate-x-1/2 text-primary z-20">
          Hi, my name is{' '}
          <span className="font-gothic text-2xl lg:text-3xl">Vince</span>
        </h3>
        <div
          className="font-gothic absolute flex min-w-[80vw]
         max-w-[100vw] items-center justify-center z-10 uppercase text-primary overflow-hidden"
        >
          <MorphingText
            texts={['Web developer', 'Videographer']}
            className="!text-xl md:!text-4xl lg:!text-7xl !h-8 md:!h-10 lg:!h-20 !font-gothic tracking-wider"
          />
        </div>
        <h4 className="absolute w-max text-lg lg:text-xl text-center top-[66.666666%] left-1/2 -translate-x-1/2 text-primary z-20">
          based in{' '}
          <span className="font-gothic text-lg lg:text-xl tracking-wide">
            Budapest
          </span>
        </h4>
        <h1 className="text-terminal font-gothic text-3xl lg:text-5xl absolute bottom-8 lg:bottom-auto lg:top-1/2 lg:-left-22 z-20 lg:-rotate-90 uppercase tracking-wider">
          [Agocs Vince]
        </h1>
        <div className="flex flex-col items-center justify-center h-dvh w-full">
          {isMobile ? (
            <div
              ref={wrapperRef}
              className="w-full overflow-hidden md:hidden"
              style={{
                height: '25%',
                ...(isSafariMobileBrowser && {
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                }),
              }}
            >
              <img
                ref={imageRef}
                src="/assets/hero_2.jpg"
                alt="Hero"
                className="w-full h-full object-cover grayscale-60"
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform',
                  // For Safari: height stays 100%, wrapper animates. For others: height animates 25%->100%
                  height: isSafariMobileBrowser ? '100%' : undefined,
                  ...(isSafariMobileBrowser && {
                    WebkitTransform: 'translateZ(0)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                  }),
                }}
              />
            </div>
          ) : (
            <img
              ref={imageRef}
              src="/assets/hero_2.jpg"
              alt="Hero"
              className="max-h-dvh w-full object-cover grayscale-60"
              style={{
                transformOrigin: 'center center',
                willChange: 'transform',
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
