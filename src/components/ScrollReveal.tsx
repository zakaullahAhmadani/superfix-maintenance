'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'slide-up';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = ''
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    const animationClasses = {
      'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      'fade-down': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
      'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
      'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
      'scale-up': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
      'slide-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
    };

    return `${baseClasses} ${animationClasses[animation]}`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

