import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Partners from '../components/Partners/Partners';

import Particles from 'react-tsparticles';
import particleConfig from '../particles.config';
import { loadFull } from 'tsparticles';

import Projects from '../components/Projects/Projects';
import Experiences from '../components/Experiences/Experiences';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <div>
            <Head>
                <title>Cagri Oz - Web Dev.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-screen flex flex-col bg-gradient-to-t from-slate-800 to-slate-900">
                <div className="h-[80%] md:h-[85%]">
                    <Header />

                    <Particles
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
                        id="tsparticles"
                        init={particlesInit}
                        options={{ ...particleConfig }}
                    />
                </div>

                <div className="h-[20%] md:h-[15%] flex flex-col justify-center bg-gradient-to-t from-slate-800 to-slate-900 grayscale-[.4]">
                    <Partners />
                </div>
            </div>

            <About />

            {/* Projects */}
            <Projects />

            {/* Experiences */}
            <Experiences />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
