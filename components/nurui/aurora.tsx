"use client";

import React, { memo } from "react";

// Define the props interface for type safety
interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

// The main component, now including the necessary CSS
export const AuroraText: React.FC<AuroraTextProps> = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#f43f5e"],
    speed = 5,
  }) => {
    // The CSS for the animation keyframes is now a part of this component
    // This ensures the animation class is always available.
    // The @keyframes and the .animate-aurora class are essential for the animation to work.
    const auroraStyles = `
      @keyframes aurora {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-aurora {
        animation-name: aurora;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-aurora { animation: none; }
      }
    `;

    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      backgroundSize: "200% auto", // This is crucial for the animation to work
      animationDuration: `${10 / speed}s`, // The animation duration is applied here
    };

    return (
      <span className={`relative inline-block ${className}`}>
        {/* The screen-reader-only span ensures accessibility */}
        <span className="sr-only">{children}</span>

        {/* The style tag is used to inject the keyframes for this component */}
        <style>{auroraStyles}</style>

        <span
          className="relative animate-aurora bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";

export default AuroraText;
