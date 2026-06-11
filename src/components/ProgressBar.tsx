'use client';

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: string;
  height?: number;
  animationDelay?: number;
}

export default function ProgressBar({
  percentage,
  label,
  color = 'var(--color-teal)',
  height = 8,
  animationDelay = 0
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setWidth(percentage);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [percentage, animationDelay]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-500">{percentage}%</span>
        </div>
      )}
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full transition-all duration-2000 ease-out rounded-full"
          style={{
            width: isVisible ? `${width}%` : '0%',
            backgroundColor: color,
            transitionDelay: `${animationDelay}ms`
          }}
        ></div>
      </div>
    </div>
  );
}

