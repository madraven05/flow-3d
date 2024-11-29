import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LaserPointerProps {
  trailLength?: number;
}

const LaserPointer: React.FC<LaserPointerProps> = ({ trailLength = 50 }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const pointerRefs = useRef<HTMLDivElement[]>([]);

  const pointerDivs = Array.from({ length: trailLength }, (_, i) => i + 1).map(
    (_, idx) => {
      return (
        <div
          ref={(el) => el && (pointerRefs.current[idx] = el)}
          className="fixed circle w-3 h-3 rounded-full bg-red-700"
          style={{
            left: `0px`,
            top: `0px`,
          }}
        />
      );
    }
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.body.style.cursor = "none";
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x: x, y: y });

      pointerRefs.current.forEach((dot, i) => {
        gsap.to(dot, {
          x,
          y,
          duration: 0.1 + i * 0.02,
          scale: (trailLength - i) / trailLength,
          ease: "power2.out",
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.style.cursor = "pointer";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {pointerDivs}
    </div>
  );
};

export default LaserPointer;
