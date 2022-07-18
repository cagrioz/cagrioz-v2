import Image from 'next/image';
import React from 'react';

import BannerImg from '../../assets/img/bball.jpg';

import { CheckIcon } from '@heroicons/react/solid';

function About() {
    return (
        <section className="flex h-fit py-20 bg-gradient-to-l from-slate-800 to-slate-900">
            <div className="container flex flex-col sm:flex-row gap-10 items-top justify-between">
                <div className="relative w-full sm:basis-2/5 h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
                    <Image src={BannerImg} alt="Cagri Oz" layout="fill" objectFit="cover" />
                </div>
                <div className="sm:basis-3/5">
                    <h3 className="text-3xl sm:text-4xl text-gray-100 font-extrabold">
                        I'm <span className="fancy-title-sub">Cagri Oz</span>
                    </h3>
                    <div className="text-lg font-light text-gray-300 mt-5 tracking-wide flex flex-col gap-3">
                        <p>
                            😎 I have been coding for nearly 6 years. I'm a full-stack developer with undying passion of
                            learning new stuff! Completed plenty of succesfull projects as a freelancer with raving
                            5-star reviews.
                        </p>
                        <p>A Thinker and engineer who is huge fan of technology and uses 🏀 & 🎙 as a fuel!</p>

                        <p className="font-semibold underline">My preferred weapons of choice 👇</p>

                        <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />{' '}
                                JavaScript
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />
                                TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />{' '}
                                SASS/SCSS
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" /> NextJS
                                / React
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" /> Context
                                / Express
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="h-5 w-5 inline-flex bg-sky-400 text-white rounded-full" />{' '}
                                Elementor
                            </li>
                        </ul>

                        <div className="mt-3">
                            <a className="secondary-cta" href="https://github.com/cagrioz">
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
