import Image from 'next/image';

import NetflixLogo from '../../assets/img/netflix.png';

function Partners() {
    return (
        <div className="container">
            <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center md:gap-10 relative">
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={NetflixLogo}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={NetflixLogo}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={NetflixLogo}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={NetflixLogo}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={NetflixLogo}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}

export default Partners;
