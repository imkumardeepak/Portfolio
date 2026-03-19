"use client";

import Image from "next/image";
import AnimationContainer from "../utils/AnimationContainer";
import WavesHero from "../../../components/nurui/waves-hero";
const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between w-full py-4 lg:py-8 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Welcome to my universe
        </div>

        <div className="relative mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
            Hello <br />
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Deepak Verma
            </span>
          </h1>
        </div>

        <p className="mt-4 text-base text-center lg:text-start lg:text-lg text-white/80">
          Building scalable, user-centric applications with .NET Core, C#,
          React.js, Next.js, and databases such as SQL Server, PostgreSQL, and
          Oracle.
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="mb-4 relative lg:mb-0">
        <Image
          src="/images/Deepak.jpg"
          alt="Deepak Kumar"
          height={2190}
          width={2190}
          sizes="50vw"
          priority
          className="object-cover object-top w-32 h-32 transition duration-300 ease-out rounded-lg filter grayscale-0 lg:w-40 lg:h-40"
        />
        <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-violet-500/40 blur-[5rem]"></div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
