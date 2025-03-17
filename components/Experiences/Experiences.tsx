import OSFLogo from '../../assets/img/osf.jpeg';
import EnvatoLogo from '../../assets/img/envato.png';
import UpworkLogo from '../../assets/img/upwork.png';
import HeliosXLogo from '../../assets/img/heliosx.jpeg';
import Image from 'next/image';

function Experiences() {
    const experiences = [
        {
            id: 1,
            img: UpworkLogo,
            date: 'June 2019 - Present',
            company: 'Upwork',
            title: 'Full Stack Engineer (Top-Rated Plus Freelancer)',
            highlights: [
                'Top 1% of freelancers on Upwork, with a 100% job success rate.',
                'Built custom <strong>WordPress</strong> and <strong>React.js</strong> websites for clients worldwide.',
                'Achieved <strong>Top-Rated Freelancer</strong> status by maintaining high-quality work & client satisfaction.',
                'Developed <strong>conversion-optimized landing pages</strong> and <strong>CRO-focused websites</strong>.',
                'Specialized in <strong>Figma to React/WordPress conversions</strong> and <strong>SEO-friendly websites</strong>.',
            ],
            url: 'https://upwork.com/freelancers/cagrioz',
        },
        {
            id: 2,
            img: HeliosXLogo,
            date: 'Aug 2022 - May 2024',
            company: 'HeliosX Group',
            title: 'Frontend/Growth Engineer (Contract)',
            highlights: [
                'Converted <strong>Figma designs</strong> into high-performance <strong>React.js</strong> pages.',
                'Developed scalable <strong>Next.js & TypeScript</strong> applications.',
                'Ran <strong>A/B tests</strong> using <strong>Amplitude Experiment</strong> for CRO optimization.',
                'Collaborated cross-functionally to develop <strong>technical solutions</strong>.',
                'Managed <strong>GitLab CI/CD pipelines</strong> for continuous integration & deployment.',
                'Wrote clean, modular, and well-documented <strong>TypeScript</strong> code.',
                'Implemented <strong>unit testing</strong> with Jest to ensure code quality.',
                'Enhanced site speed and scalability with <strong>React & Tailwind CSS</strong>.',
                'Ensured <strong>website accessibility and compliance</strong> with standards.',
                'Stayed up-to-date with <strong>industry trends and technologies</strong>.',
            ],
        },
        {
            id: 3,
            img: OSFLogo,
            date: 'Aug 2021 - Sep 2021',
            company: 'OSF Digital',
            title: 'Backend Developer (Full-Time)',
            highlights: [
                'Developed an <strong>eCommerce platform</strong> with a <strong>RESTful API architecture</strong>.',
                'Implemented <strong>secure authentication</strong> and <strong>user management</strong> using JWT.',
                'Wrote unit tests with <strong>Mocha & Chai</strong> to ensure robust API performance.',
                'Optimized the website speed by nearly <strong>300%</strong> by caching API calls.',
                'Used <strong>JIRA</strong> for agile task management and team collaboration.',
            ],
        },
        {
            id: 4,
            img: OSFLogo,
            date: 'Jul 2021 - Aug 2021',
            company: 'OSF Digital',
            title: 'Backend Developer Intern',
            highlights: [
                'Gained in-depth knowledge of <strong>Node.js</strong> backend architecture and middleware stack.',
                'Developed an <strong>eCommerce website</strong> via <strong>RESTful API</strong> using Express.js.',
                'Wrote unit tests with <strong>Mocha & Chai</strong> to ensure all modules worked properly.',
                'Rendered dynamic data using <strong>Pug and EJS</strong> for server-side templating.',
            ],
        },
        {
            id: 5,
            img: EnvatoLogo,
            date: 'Mar 2017 - Mar 2019',
            company: 'Envato Market',
            title: 'Web Developer (Freelance)',
            highlights: [
                'Designed <strong>custom WordPress themes</strong> and <strong>HTML templates</strong>.',
                'Converted <strong>Figma/PSD designs into fully responsive websites</strong>.',
                'Optimized <strong>website speed & performance</strong>, ensuring high Lighthouse scores.',
                'Created modular and maintainable <strong>CSS frameworks</strong> for projects.',
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-t from-slate-800 to-slate-900 py-20">
            <div className="container">
                <h2 className="section-title mb-14">My Experience 👨‍💻</h2>

                <div className="flex flex-col gap-6">
                    {experiences.map((experience) => (
                        <div
                            key={`experience-${experience.id}`}
                            className="flex flex-col items-start border-b border-dotted border-slate-600 py-14 px-14 bg-slate-800 rounded-lg shadow-lg"
                        >
                            <div className="flex gap-6 items-center mb-4">
                                <div>
                                    <a href={experience.url || '#'} target="_blank" rel="noopener noreferrer">
                                        <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                                            <Image
                                                src={experience.img}
                                                alt={experience.company}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <time className="text-gray-400 text-base tracking-widest">{experience.date}</time>
                                    <h1 className="text-3xl text-gray-200 font-extrabold tracking-wide mt-1">
                                        {experience.company}
                                    </h1>
                                    <span className="text-lg text-gray-400 font-bold mt-1">{experience.title}</span>
                                </div>
                            </div>
                            <ul className="text-gray-300 tracking-wide text-lg list-disc pl-6 mt-4 space-y-2">
                                {experience.highlights.map((highlight, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: highlight }}></li>
                                ))}
                            </ul>
                            {experience.url && (
                                <a
                                    className="secondary-cta inline-block mt-4 text-blue-400 hover:text-blue-500"
                                    href={experience.url}
                                    target="_blank"
                                >
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
