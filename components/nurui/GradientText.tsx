"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the props interface for type safety
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  // Define the gradient style object
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    // The parent motion.div handles the hover animation
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur-sm transition-shadow duration-500 overflow-hidden cursor-pointer group ${className}`}
    >
      {/* The style tag is moved to the component to define the keyframes */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* This div creates the gradient border effect */}
      {showBorder && (
        <div
          className="absolute inset-0 z-0 bg-cover pointer-events-none group-hover:blur-md transition-all duration-300"
          style={gradientStyle}
        >
          {/* This inner div masks the gradient to create the border */}
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}

      {/* This is the main text content with the gradient fill */}
      <div
        className="relative z-10 text-transparent bg-cover px-6 py-3"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GradientText;
