import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AboutMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>
              <div>
              <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                About Me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-neutral-200'>
    I am a highly motivated full-stack developer with over 3+ years of experience in building robust web and Windows applications. My expertise spans <strong>.NET Core</strong>, <strong>React.js</strong>, and <strong>Python</strong>, which enables me to craft efficient and scalable solutions across diverse platforms.
    <br /><br />
    My technical proficiency includes data engineering, machine learning, and mobile app development with <strong>Flutter</strong>. I have completed a B.Tech in <strong>Computer Science and Engineering</strong>, which has enhanced my analytical and problem-solving skills. I am also passionate about designing intuitive interfaces using <strong>Figma</strong> and am actively exploring technologies like <strong>TypeScript</strong> and <strong>Node.js</strong>.
    <br /><br />
    I thrive in dynamic environments and am eager to leverage my skills to create innovative solutions.  Let&apos;s collaborate to build something exceptional! ✨
</p>

              </div>
          
        </AnimationContainer>
    )
}

export default AboutMe
