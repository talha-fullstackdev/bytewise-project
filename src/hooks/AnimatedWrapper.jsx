import { useEffect, useRef, useState } from "react";
const AnimatedWrapper = ({ children, threshold = 0.3 }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation happened

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add("animate");
            setHasAnimated(true); // Prevent re-triggering animation
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, threshold]);

  return (
    <div ref={ref} className="animation">
      {children}
    </div>
  );
};

export default AnimatedWrapper;
