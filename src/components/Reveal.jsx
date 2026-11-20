import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal Component
 * Smooth artisan entrance animation powered by IntersectionObserver
 * Supports: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 650,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  className = '',
  as: Component = 'div',
  threshold = 0.12,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    if (direction === 'up') return 'translate3d(0, 24px, 0)';
    if (direction === 'down') return 'translate3d(0, -24px, 0)';
    if (direction === 'left') return 'translate3d(-32px, 0, 0)';
    if (direction === 'right') return 'translate3d(32px, 0, 0)';
    if (direction === 'scale') return 'scale(0.96)';
    return 'none';
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
