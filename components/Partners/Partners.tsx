import Image from 'next/image';

import FiverrP from '../../assets/img/fiverr-p.webp';
import MediumP from '../../assets/img/medium-p.png';
import UpworkP from '../../assets/img/upwork-p.png';
import OSFDigitalP from '../../assets/img/osf-p.png';
import UdemyP from '../../assets/img/udemy-p.png';

function Partners() {
    return (
        <div className="container">
            <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center md:gap-10 relative">
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={FiverrP}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={UpworkP}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={OSFDigitalP}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={MediumP}
                        alt="Netflix"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative basis-[47%] h-5 md:h-8">
                    <Image
                        className="brightness-[.6] invert"
                        src={UdemyP}
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
