"use client";

import React from 'react';
import Experience from '../contents/Experience';
import MySkills from '../contents/MySkills';
import { motion } from 'framer-motion';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import SectionContainer from '../utils/SectionContainer';

// Define your local data here
const aboutData = [
    {
        description: [
            "I am a passionate developer with a love for creating innovative solutions.",
            "With experience in various technologies and a keen interest in continuous learning, I strive to build impactful projects."
        ]
    }
];

const AboutSection = () => {

    // Directly use the local data
    const data = aboutData;

    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

                <Heading title="About Me" />

                <AnimationContainer customClassName="w-full flex flex-col relative gap-5 mb-8">
                    {/* No need for loading state */}
                    <>
                        {data.map((item, index) => (
                            <p key={index} className="flex flex-col w-full text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
                                {item.description && item.description.map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {line}
                                        {lineIndex !== item.description.length - 1 && (
                                            <span className="w-full h-4 bg-transparent" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        ))}
                    </>
                </AnimationContainer>

                <Experience />

                <MySkills />

                <div className="w-full mt-8">
                    <AnimationContainer customClassName="w-full flex flex-col">
                        <div className="flex justify-center w-full md:justify-start">
                            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                                Future Endeavors
                            </h2>
                        </div>
                        <div className="w-full mb-8 space-y-5">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.2,
                                }}
                                className="text-base leading-8 text-neutral-200"
                            >
                                Looking ahead, I&apos;m excited about creating 3D websites. I want to make online spaces that feel more real and fun for users.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.3,
                                }}
                                className="text-base leading-8 text-neutral-200"
                            >
                                I&apos;m also curious about machine learning, which is like teaching computers to learn and do smart things. I dream of building smart systems that work hand-in-hand with people, making tech a helpful companion in our daily lives.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.4,
                                }}
                                className="text-base leading-8 text-neutral-200"
                            >
                                As part of my coding adventure, I hope to join others in creating cool projects together. I want to be a part of the worldwide community of developers, learn lots, and bring some exciting ideas to life.
                            </motion.p>
                        </div>
                    </AnimationContainer>
                </div>

            </div>
        </SectionContainer>
    )
};

export default AboutSection;
