import Image from 'next/image';
import React from 'react';

import BannerImg from '../../assets/img/bball_star.jpg';

import { CheckIcon } from '@heroicons/react/solid';

function About() {
    return (
        <section className="flex h-fit py-20 bg-gradient-to-l from-slate-800 to-slate-900">
            <div className="container flex flex-col sm:flex-row gap-10 items-center justify-between">
                <div className="relative w-full sm:basis-[45%] shrink-0 h-[450px] sm:h-[600px] rounded-lg overflow-hidden">
                    <Image src={BannerImg} alt="Cagri Oz" layout="fill" objectFit="cover" />
                </div>
                <div className="sm:basis-[55%]">
                    <h3 className="text-3xl sm:text-4xl text-gray-100 font-extrabold">
                        I'm <span className="fancy-title-sub">Cagri Ozarpaci</span>
                    </h3>
                    <div className="text-lg font-light text-gray-300 mt-5 tracking-wide flex flex-col gap-3">
                        <p className="font-bold text-white text-xl">🚀 Full-Stack Developer | Growth Engineer</p>
                        <p>
                            I build scalable, high-performance web apps with a focus on frontend-heavy{' '}
                            <b className="font-bold text-white">full-stack development.</b> With 6+ years of experience,
                            I’ve worked on{' '}
                            <b className="font-bold text-white">SaaS, eCommerce, and growth-driven platforms</b>, and
                            <b className="font-bold text-white">optimizing conversion rates.</b>
                        </p>
                        <p>When I'm not coding, you’ll find me on the basketball court 🏀 or listening deep music 🎧</p>

                        <p className="font-semibold underline">My preferred weapons of choice 👇</p>

                        <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />{' '}
                                React.js
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />
                                Next.js
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />{' '}
                                TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />
                                Redux/Context API
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" /> MongoDB
                                / Firebase
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" /> REST /
                                GraphQL
                            </li>
                        </ul>

                        <div className="mt-3">
                            <a className="secondary-cta" href="https://github.com/cagrioz" target="_blank">
                                My Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
