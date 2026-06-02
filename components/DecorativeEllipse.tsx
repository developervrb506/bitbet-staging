import React from "react";

interface DecorativeEllipseProps {
  width?: string | number;
  height?: string | number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  background?: string;
  blur?: string | number;
  transform?: string;
  className?: string;
}

export default function DecorativeEllipse({
  width = "151.69px",
  height = "519.01px",
  left,
  top,
  right,
  bottom,
  background = "#EB6331",
  blur = "175px",
  transform = "matrix(-0.77, 0.64, 0.64, 0.77, 0, 0)",
  className = "",
}: DecorativeEllipseProps) {
  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{
        width,
        height,
        left,
        top,
        right,
        bottom,
        background,
        filter: `blur(${blur})`,
        transform,
      }}
    />
  );
}
