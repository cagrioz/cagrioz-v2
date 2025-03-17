import { ProjectData } from '../../typings';
import Project from '../Project/Project';

import LevityImg from '../../assets/img/levity2.png';
import MedExpressImg from '../../assets/img/medexpress.jpg';
import RocketRxImg from '../../assets/img/rocketrx.jpg';
import UrbxImg from '../../assets/img/urbx.jpg';
import OsmosisImg from '../../assets/img/osmosis.png';
import VeslImg from '../../assets/img/vesl.jpg';
import OSFImg from '../../assets/img/ecomm.jpg';

function Projects() {
    const projects: ProjectData[] = [
        {
            id: 1,
            title: 'Levity - Online Weight Loss Platform',
            description:
                'Levity is a healthcare platform specializing in weight loss. As part of the HeliosX Group, I developed the front-end, conducted A/B tests, and optimized conversion rates.',
            tech: ['React.js', 'Next.js', 'TailwindCSS', 'GraphQL'],
            image: LevityImg,
        },
        {
            id: 2,
            title: 'MedExpress - Leading UK Healthcare Platform',
            description:
                "MedExpress is one of the UK's top healthcare platforms. As a Growth Engineer, I contributed to both front-end and back-end development, implemented A/B testing, and improved user experience and conversion rates.",
            tech: ['React.js', 'Next.js', 'TailwindCSS', 'A/B Testing', 'AWS (S3, Lambda)', 'GraphQL'],
            image: MedExpressImg,
        },
        {
            id: 3,
            title: 'RocketRx - Men’s Health Platform',
            description:
                "RocketRx is a healthcare platform focused on men's wellness. I worked on full-stack development, enhancing both the front-end and back-end. Additionally, I ran A/B tests to improve performance and conversion rates.",
            tech: ['React.js', 'Next.js', 'TailwindCSS', 'A/B Testing', 'AWS (S3, Lambda)', 'GraphQL'],
            image: RocketRxImg,
        },
        {
            id: 4,
            title: 'Urbx - AI-Powered Logistics Platform',
            description:
                'Urbx is an AI-driven logistics platform optimizing supply chain management. I was involved in developing the front-end and integrating AI-based logistics solutions.',
            tech: ['React.js', 'Next.js', 'GitLab CI/CD', 'Node.js'],
            image: UrbxImg,
        },
        {
            id: 5,
            title: 'Osmosis - Medical Education by Elsevier',
            description:
                'Osmosis is a medical education platform by Elsevier. My role included developing the front-end, implementing scalable architecture, and improving user engagement.',
            tech: ['React.js', 'Redux', 'Next.js', 'Docker'],
            image: OsmosisImg,
        },
        {
            id: 6,
            title: 'Vesl - Next-Gen 3PL Solutions',
            description:
                'Vesl is a logistics and supply chain management platform. I contributed to the front-end and back-end development, ensuring seamless user experience and system scalability.',
            tech: ['React.js', 'Next.js', 'TailwindCSS', 'Netlify'],
            image: VeslImg,
        },
        {
            id: 7,
            title: 'eCommerce REST API - Glorious Store',
            description:
                'A full-stack eCommerce REST API built for the Glorious Store. It includes authentication with JWT, secure transactions, and seamless API integration for handling orders and users.',
            tech: ['Node.js', 'Express.js', 'RESTful API', 'Mocha & Chai'],
            image: OSFImg,
            github: [
                {
                    label: 'GitHub Repository',
                    url: 'https://github.com/cagrioz/ecommerce-api',
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
