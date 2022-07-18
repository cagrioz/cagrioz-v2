import { CheckIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { ProjectData, GithubRepo } from '../../typings';

function Project({ id, title, description, image, github, demo_url, tech }: ProjectData) {
    return (
        <div className="flex flex-col sm:flex-row gap-12">
            <div className="relative h-[300px] sm:basis-5/12 basis-12/12 shrink-0 hover:scale-105 transition duration-200">
                <a href={demo_url}>
                    <Image className="h-full" src={image} alt={title} layout="fill" objectFit="contain" />
                </a>
            </div>
            <div className="text-lg font-light text-gray-300 tracking-wide">
                <h2 className="text-gray-200 text-4xl font-bold tracking-wide mb-3">{title}</h2>
                <p>{description}</p>

                <div className="flex gap-4">
                    {github &&
                        github.map((repo: GithubRepo) => (
                            <a
                                key={repo.url}
                                href={repo.url}
                                className="font-bold mt-4 block hover:text-gray-400 transition duration-200"
                            >
                                🔗 {repo.label}
                            </a>
                        ))}
                </div>

                <ul className="grid grid-cols-2 gap-x-2 gap-y-3 my-5 basis-7/12">
                    {tech.map((tech) => (
                        <li key={`${tech}`} className="flex items-center gap-2">
                            <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" /> {tech}
                        </li>
                    ))}
                </ul>

                {demo_url && (
                    <a className="secondary-cta inline-block" href={demo_url}>
                        View Live
                    </a>
                )}
            </div>
        </div>
    );
}

export default Project;
