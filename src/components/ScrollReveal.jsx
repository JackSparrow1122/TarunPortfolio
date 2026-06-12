import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, animation = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
      data-animate={animation || undefined}
    >
      {children}
    </div>
  );
}
