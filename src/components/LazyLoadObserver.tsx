import * as React from "react";
import { useState, useEffect, useRef } from "react";

interface LazyLoadObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  onIntersection?: () => void;
  placeholder?: React.ReactNode;
}

const LazyLoadObserver: React.FC<LazyLoadObserverProps> = ({
  children,
  threshold = 0,
  rootMargin = "0px",
  onIntersection,
  placeholder,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      // SSR or no IntersectionObserver support
      setIsIntersecting(true);
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          onIntersection?.();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, onIntersection, hasIntersected]);

  return (
    <div ref={ref}>
      {isIntersecting || hasIntersected ? children : placeholder}
    </div>
  );
};

export default LazyLoadObserver;
