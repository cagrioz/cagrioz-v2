import { ProjectData } from '../../typings';
import Project from '../Project/Project';

import Project1 from '../../assets/img/project1.png';
import Project2 from '../../assets/img/project2.png';
import Project3 from '../../assets/img/project3.png';
import Project4 from '../../assets/img/project4.png';
import Project5 from '../../assets/img/project5.png';
import Project6 from '../../assets/img/project6.png';
import Project7 from '../../assets/img/project7.png';

function Projects() {
    const projects: ProjectData[] = [
        {
            id: 1,
            title: 'Glorious Store eCommerce REST API',
            description:
                'eCommerce REST API for the Glorious Store. This is a full-stack project that uses Node.js, Express, and JWT used for Authentication.',
            tech: ['Node.js', 'Express.js', 'EJS', 'Mocha & Chai'],
            image: Project2,
            github: [
                {
                    label: 'Github Repo',
                    url: ' https://github.com/cagrioz/ecommerce-api',
                },
            ],
        },
        {
            id: 2,
            title: 'Airbnb Frontend Clone With Search',
            description:
                "A clone of Airbnb's frontend with search functionality that iscreated by using Next.js, TypeScript, TailwindCSS. For the state managements, React's Context API is used.",
            tech: ['React.js', 'Next.js', 'TailwindCSS', 'TypeScript'],
            image: Project1,
            github: [
                {
                    label: 'Github Repo',
                    url: ' https://github.com/cagrioz/airbnb-dev',
                },
            ],
            demo_url: 'https://airbnb-dev.vercel.app/',
        },
        {
            id: 3,
            title: 'Rache Premium HTML & WordPress Blog Theme',
            description:
                'A Blog design coded in both WordPress and plain HTML, CSS, JS tech stack. This is a custom theme designed & developed by me and accepted by Envato Market and published.',
            tech: ['HTML5', 'CSS3 / Bootstrap', 'JS (jQuery)', 'PHP / WordPress'],
            image: Project3,
            github: [
                {
                    label: 'Github HTML',
                    url: ' https://github.com/cagrioz/Rache-HTML',
                },
                {
                    label: 'Github WordPress',
                    url: ' https://github.com/cagrioz/Rache',
                },
            ],
            demo_url: 'https://cagrioz.com/rache/',
        },
        {
            id: 4,
            title: 'Callie Advanced Blog With Instagram Stories',
            description:
                'A Blog design coded in both WordPress and plain HTML, CSS, JS tech stack. This is a custom theme designed & developed by me and accepted by Envato Market and published.',
            tech: ['HTML5', 'CSS3 / Bootstrap', 'JS (jQuery)', 'PHP / WordPress'],
            image: Project4,
            github: [
                {
                    label: 'Github WordPress',
                    url: ' https://github.com/cagrioz/Callie',
                },
            ],
        },
        {
            id: 5,
            title: 'SaaS Landing Page Light / Dark Mode in React',
            description:
                'A React front-end that built using React and SCSS that has a light and dark mode dynamic switch. For the state management, React Context API has been used.',
            tech: ['ReactJS', 'JavaScript', 'React Context API', 'SCSS / SASS'],
            image: Project5,
            github: [
                {
                    label: 'Github Repo',
                    url: ' https://github.com/cagrioz/bring-landing',
                },
            ],
            demo_url: 'https://bring-landing.vercel.app',
        },
        {
            id: 6,
            title: 'LMS WordPress Website',
            description: 'A WordPress website that is used for a learning management system with active +10K students.',
            tech: ['Elementor Builder', 'PHP / WordPress', 'JS (jQuery)', 'CSS3 & Bootstrap'],
            image: Project6,
            demo_url: 'https://www.radikaluzem.com',
        },
        {
            id: 7,
            title: 'React Native & Expo App',
            description: 'A WordPress website that is used for a learning management system with active +10K students.',
            tech: ['React Native', 'Expo', 'React Navigation', 'CSS3'],
            image: Project7,
            github: [
                {
                    label: 'Github Repo',
                    url: ' https://github.com/cagrioz/FitPods',
                },
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-t from-slate-800 to-slate-900 py-20">
            <div className="container">
                <h2 className="section-title mb-14">My Coding Projects 🛠</h2>

                <div className="flex flex-col alternate-order gap-20">
                    {projects.map(({ id, title, description, image, github, demo_url, tech }: ProjectData) => (
                        <Project
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            image={image}
                            github={github}
                            demo_url={demo_url}
                            tech={tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
