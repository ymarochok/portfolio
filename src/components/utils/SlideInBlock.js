import { useEffect, useRef, useState } from "react";

export default function SlideInBlock({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (ref.current) observer.unobserve(ref.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`slide-in ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
