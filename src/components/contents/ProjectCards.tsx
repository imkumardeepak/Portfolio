"use client";

import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Card from '../utils/Card';
import { getProjects } from '@/graphql';
import { Project as ProjectProps } from '@/types';

const ProjectCards = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                console.log('Fetched data:', data);
                setProjects(data);
            } catch (error) {
                console.log('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <AnimationContainer customClassName="w-full flex flex-col">
            <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">
                {isLoading ? (
                    <>
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                    </>
                ) : (
                    <>
                        {projects.length > 0 ? (
                            projects.slice(0, 4).map((project: ProjectProps) => (
                                project ? (
                                    <Card key={project.title} project={project} />
                                ) : (
                                    <div key="error">Error loading project</div>
                                )
                            ))
                        ) : (
                            <div>No projects available</div>
                        )}
                    </>
                )}
            </div>
        </AnimationContainer>
    );
};

export default ProjectCards;
