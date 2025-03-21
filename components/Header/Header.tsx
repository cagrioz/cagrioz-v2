import Image from 'next/image';

import BannerImg from '../../assets/img/me.jpg';

function Header() {
    return (
        <header className="z-50 h-full flex flex-col justify-center grow gap-7 md:gap-20 container relative">
            <div className="flex justify-between items-center pt-16">
                <div className="grow flex flex-col gap-4">
                    <h3 className="text-slate-400 text-lg sm:text-2xl uppercase font-semibold tracking-widest">
                        Hi, My Name Is
                    </h3>
                    <div>
                        <h1 className="fancy-title">Cagri Ozarpaci.</h1>
                        <h1 className="fancy-title">I am a full-stack dev.</h1>
                    </div>
                    <div className="mt-4">
                        <p className="hidden md:inline-flex text-gray-200 text-2xl">
                            🚀 Building fast, scalable, and growth-focused web apps.
                        </p>
                        <p className="hidden md:inline-flex text-gray-200 text-2xl mt-2">
                            💡 Optimizing performance, scalability, and seamless experiences.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-32 h-32 relative lg:w-48 lg:h-48">
                        <Image
                            className="rounded-full shadow-md shadow-slate-700"
                            objectFit="cover"
                            objectPosition="50% 30%"
                            src={BannerImg}
                            alt="Cagri Oz"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <a
                    target="_blank"
                    href="https://wa.me/+14152304342"
                    className="shadow-md shadow-cyan-900 border-0 inline-flex py-4 px-7 lg:py-5 lg:px-12 lg:text-2xl bg-cyan-600 hover:bg-cyan-500 hover:scale-105 transition duration-200 ease-in-out text-white font-bold rounded-[0.5rem]"
                >
                    Contact me!
                </a>
            </div>
        </header>
    );
}

export default Header;
