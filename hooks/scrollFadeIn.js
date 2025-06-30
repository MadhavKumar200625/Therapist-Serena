import { useEffect, useRef, useState } from 'react';

export default function scrollFadeIn() {
  const ref = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (!ref.current || hasViewed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, hasViewed]);

  return [ref, hasViewed];
}