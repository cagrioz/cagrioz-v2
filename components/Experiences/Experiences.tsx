import OSFLogo from '../../assets/img/osf.jpeg';
import EnvatoLogo from '../../assets/img/envato.png';
import UpworkLogo from '../../assets/img/upwork.png';
import FiverrLogo from '../../assets/img/fiverr.png';
import MediumLogo from '../../assets/img/medium.png';
import Image from 'next/image';
import { FolderRemoveIcon } from '@heroicons/react/solid';

function Experiences() {
    const experiences = [
        {
            id: 3,
            img: MediumLogo,
            date: 'June 2020 - Present',
            company: 'Medium',
            title: 'Technical & Lifestyle Writer (Freelance)',
            description:
                'Besides my technical skills and experience, I am quite confident in my communication skills. I am also writing mostly tech-based articles in Medium and got approved by publications with +50K subscribers.',
            url: 'https://medium.com/@cagrioz',
        },
        {
            id: 4,
            img: UpworkLogo,
            date: 'June 2019 - Present',
            company: 'Upwork',
            title: 'Web Developer (Top-Rated Freelancer)',
            description:
                'Working with the clients all over the world; designing and creating high-quality PSD, ReactJS, WordPress websites for them.',
            url: 'https://upwork.com/freelancers/cagrioz',
        },
        {
            id: 5,
            img: FiverrLogo,
            date: 'Dec 2018 - Present',
            company: 'Fiverr',
            title: 'Web Developer (Level-one Seller)',
            description:
                'Working with the clients all over the world; designing and creating high-quality PSD, ReactJS, WordPress websites for them.',
            url: 'https://fiverr.com/cagrioz',
        },

        {
            id: 2,
            img: OSFLogo,
            date: 'July 2021 - Aug 2021',
            company: 'OSF Digital',
            title: 'Backend Developer (Full-Time)',
            description:
                'I have developed an e-commerce website via RESTful API; the technologies I used were Node.js, Express.js, and server-side rendering with template engines such as Pug and EJS.',
            stack: ['Node.js', 'Express.js', 'EJS', 'Mocha & Chai (Unit Testing)', 'JIRA', 'CSS'],
        },
        {
            id: 1,
            img: EnvatoLogo,
            date: 'Mar 2017 - Mar 2019',
            company: 'Envato Market',
            title: 'Web Developer (Freelance)',
            description: 'Designed PSD websites and converted them to modular and clean HTML & WordPress websites.',
            stack: ['HTML5', 'CSS3 / Bootstrap', 'JS (jQuery)', 'PHP / WordPress'],
        },
    ];

    return (
        <section className="bg-gradient-to-t from-slate-800 to-slate-900 py-20">
            <div className="container">
                <h2 className="section-title mb-14">My Experience 👨‍💻</h2>

                <div className="flex flex-col gap-0">
                    {experiences.map((experience) => (
                        <div
                            key={`experience-${experience.id}`}
                            className="flex flex-col items-center gap-2 border-b border-t border-dotted border-slate-600 py-16 px-8 bg-slate-800"
                        >
                            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                                <Image src={experience.img} alt={experience.company} layout="fill" objectFit="cover" />
                            </div>
                            <time className="text-gray-400 text-lg tracking-widest">{experience.date}</time>
                            <h1 className="text-3xl text-gray-200 font-extrabold tracking-wide">
                                {experience.company}
                            </h1>
                            <span className="text-lg text-gray-400 font-bold">{experience.title}</span>
                            <p className="text-gray-300 font-extralight tracking-wide text-center text-xl">
                                {experience.description}
                            </p>
                            {experience.url && (
                                <a className="secondary-cta inline-block mt-3" href={experience.url}>
                                    View on {experience.company}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experiences;
