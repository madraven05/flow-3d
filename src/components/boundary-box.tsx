import React, { useEffect, useRef, useState } from "react";

interface BoundaryBoxProps {
}

const BoundaryBox: React.FC<BoundaryBoxProps> = ({
}) => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const findNodePosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", findNodePosition);

    return () => {
      document.removeEventListener("mousemove", findNodePosition);
    };
  }, []);

  return (
    <div
      ref={boundaryRef}
      className="fixed z-10 h-24 w-24 transform border-2 border-green-700  bg-opacity-20 bg-green-400"
      style={{
        top: `${cursorPosition.y - 96/2}px`,
        left: `${cursorPosition.x - 96/2}px`,
        transform: "rotateX(54deg) rotateY(0deg) rotateZ(46deg)",
        transformStyle: "preserve-3d",
      }}
    ></div>
  );
};

export default BoundaryBox;
