import { StaticImageData } from 'next/image';

export interface GithubRepo {
    url: string;
    label: string;
}

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: StaticImageData | string;
    github?: GithubRepo[];
    demo_url?: string;
}
