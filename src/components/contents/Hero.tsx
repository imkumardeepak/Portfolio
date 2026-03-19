"use client";

import Image from "next/image";
import AnimationContainer from "../utils/AnimationContainer";
import WavesHero from "../../../components/nurui/waves-hero";
const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between w-full py-4 lg:py-8 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center lg:items-start max-w-lg p-0 lg:pr-8 space-y-4 sm:space-y-5 lg:space-y-6">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-200 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
          <span className="whitespace-nowrap">Welcome to my universe</span>
        </div>

        {/* Heading */}
        <div className="relative">
          <h1 className="text-center lg:text-left">
            <span className="block text-lg sm:text-xl text-white/60 font-medium mb-1 sm:mb-2">Hello</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.15] text-white">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Deepak Verma
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-center lg:text-left text-white/70 max-w-md lg:max-w-none leading-relaxed">
          Building scalable, user-centric applications with .NET Core, C#,
          React.js, Next.js, and databases such as SQL Server, PostgreSQL, and
          Oracle.
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="mb-4 relative lg:mb-0">
        <div className="relative group">
          {/* Outer gradient glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
          
          {/* Middle glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition duration-700"></div>
          
          {/* Sharp border ring */}
          <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>
          
          {/* Animated sparkles */}
          <div className="absolute inset-0 -m-8 pointer-events-none">
            {/* Sparkle 1 - Blue */}
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0s' }}>
              <div className="absolute inset-0 bg-blue-300 rounded-full blur-sm"></div>
            </div>
            {/* Sparkle 2 - Purple */}
            <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm"></div>
            </div>
            {/* Sparkle 3 - Pink */}
            <div className="absolute bottom-1/4 right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-pink-300 rounded-full blur-sm"></div>
            </div>
            {/* Sparkle 4 - Cyan */}
            <div className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2.2s', animationDelay: '1.5s' }}>
              <div className="absolute inset-0 bg-cyan-300 rounded-full blur-sm"></div>
            </div>
            {/* Sparkle 5 - Yellow */}
            <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm"></div>
            </div>
            {/* Orbiting dot 1 */}
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -ml-[52px] -mt-[52px] lg:-ml-[60px] lg:-mt-[60px]">
              <div className="w-full h-full bg-blue-400 rounded-full animate-spin" style={{ animationDuration: '8s', transformOrigin: '52px 52px' }}>
                <div className="absolute inset-0 bg-blue-300 rounded-full blur-sm"></div>
              </div>
            </div>
            {/* Orbiting dot 2 */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 -ml-[60px] -mt-[60px] lg:-ml-[70px] lg:-mt-[70px]">
              <div className="w-full h-full bg-purple-400 rounded-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse', transformOrigin: '60px 60px' }}>
                <div className="absolute inset-0 bg-purple-300 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Image container with backdrop */}
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-neutral-900">
            <Image
              src="/images/Deepak2.png"
              alt="Deepak Kumar"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              priority
              quality={100}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-neutral-900 z-10"></div>
          
          {/* Subtle decorative ring */}
          <div className="absolute -inset-4 border border-white/5 rounded-full pointer-events-none"></div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
