'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function LogoCarousel({ logos }: { logos: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const animation = animate(trackRef.current, {
      translateX: [0, '-50%'],
      duration: 20000,
      ease: 'linear',
      loop: true,
    });

    return () => {
      animation.revert();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={trackRef} className="flex flex-row gap-14 lg:gap-16 w-max">
        {/* Duplicate logos for seamless infinite loop */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="text-alternative text-2xl font-mono whitespace-nowrap"
          >
            <img src={logo} alt={logo} className="max-h-8 lg:max-h-12" />
          </div>
        ))}
      </div>
    </div>
  );
}
