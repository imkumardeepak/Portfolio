import { skills } from '@/lib/skills';
import AnimationContainer from '../utils/AnimationContainer';
import ShowSkills from '../utils/ShowSkills';

const MySkills = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <div className="flex justify-center md:justify-start">
                <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                    Skills & Tools
                </h2>
            </div>

            <p className='mb-4 text-justify lg:leading-7 text-neutral-200 lg:text-start'>
    With over 3+ years of programming experience, I am a versatile developer skilled in both frontend and backend technologies, as well as app development. My expertise spans a range of languages and frameworks including .NET Core, React.js, TypeScript, and Node.js. I have a proven track record of developing and integrating complex systems and solutions.
        </p>

        <p className='text-justify lg:leading-7 text-neutral-200 lg:text-start'>
            I am passionate about learning and continuously expanding my skill set in the ever-evolving tech landscape. My ability to adapt to new technologies and solve creative problems drives me to deliver high-quality, impactful solutions.
        </p>


            <div className="flex flex-col items-start mt-8">
                <div className="flex flex-col flex-wrap items-start mb-2 space-y-4">
                    {skills?.map(({ title, stack }) => (
                        <AnimationContainer key={title} customClassName="flex fex-col items-center">
                            <div>
                                <h3 className="items-start mb-3 text-lg font-bold text-white">
                                    {title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 mb-5">
                                    <ShowSkills stacks={stack} />
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>

        </AnimationContainer>
    )
};

export default MySkills
