'use client';

import { useEffect, useRef } from 'react';
import { waapi } from 'animejs';

type Logo = {
  src: string;
  url: string;
};

export default function LogoCarousel({ logos }: { logos: Logo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof waapi.animate> | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    animationRef.current = waapi.animate(trackRef.current, {
      translateX: [0, '-50%'],
      duration: 20000,
      ease: 'linear',
      loop: true,
    });

    return () => {
      animationRef.current?.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.speed = 0.3; // Double duration = half speed
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.speed = 1; // Original speed
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex flex-row gap-14 lg:gap-16 w-max"
        style={{ willChange: 'transform' }}
      >
        {/* Duplicate logos for seamless infinite loop */}
        {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
          (logo, i) => (
            <div
              key={i}
              className="text-alternative text-2xl font-mono whitespace-nowrap"
            >
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.src}
                  className="max-h-10 lg:max-h-12"
                />
              </a>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
