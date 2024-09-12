import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AboutMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>
            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                About Me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-neutral-200'>
                I am a highly motivated full-stack developer with over 2 years of experience in building robust web and Windows applications. My expertise includes <strong>.NET Core</strong>, <strong>React.js</strong>, and <strong>Python</strong>, enabling me to create efficient and scalable solutions across diverse platforms. I am skilled in data engineering, machine learning, and have a strong foundation in <strong>React Native</strong> for mobile app development.
                <br /><br />
                Currently, I am pursuing a B.Tech in <strong>Mechanical Engineering</strong>, which complements my technical skills with analytical and problem-solving abilities. I am also proficient in designing intuitive interfaces using <strong>Figma</strong> and enthusiastic about exploring new technologies such as <strong>TypeScript</strong> and <strong>Node.js</strong>.
                <br /><br />
                Let's collaborate to turn innovative ideas into reality! ✨
            </p>
        </AnimationContainer>
    )
}

export default AboutMe
