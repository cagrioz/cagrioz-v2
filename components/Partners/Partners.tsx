import Image from 'next/image';

import HeliosXLogo from '../../assets/img/heliosx.svg';
import ZiphealthLogo from '../../assets/img/ziphealth.png';
import UpworkLogo from '../../assets/img/upwork-p.png';
import OSFLogo from '../../assets/img/osf-p.png';
import MedExpressLogo from '../../assets/img/medexpress.png';

function Partners() {
    return (
        <div className="container">
            <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center md:gap-10 relative">
                <div className="relative w-1/5 h-7 md:h-10">
                    <Image
                        className="brightness-[.1] invert"
                        src={HeliosXLogo}
                        alt="HeliosX"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative w-1/5 h-7 md:h-10">
                    <Image
                        className="brightness-[.1] invert"
                        src={UpworkLogo}
                        alt="Upwork"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative w-1/5 h-7 md:h-10">
                    <Image
                        className="brightness-[.6] invert"
                        src={OSFLogo}
                        alt="OSF"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative w-1/5 h-7 md:h-10">
                    <Image
                        className="brightness-[.1] invert"
                        src={ZiphealthLogo}
                        alt="Ziphealth"
                        objectFit="contain"
                        layout="fill"
                    />
                </div>
                <div className="relative w-1/5 h-9 md:h-10">
                    <Image
                        className="brightness-[.1] invert"
                        src={MedExpressLogo}
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
