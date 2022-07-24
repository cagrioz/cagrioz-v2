import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="flex items-center justify-center gap-5 pt-10 pb-5">
                <SocialIcon
                    url="https://twitter.com/cagrioz30"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://facebook.com/cagrioz30"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://instagram.com/cagrioz30"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/cagrioz"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://upwork.com/freelancers/cagrioz"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://medium.com/@cagrioz"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://github.com/cagrioz"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://www.tiktok.com/@cagrioz30"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="mailto:devcagri@gmail.com"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
                <SocialIcon
                    url="https://wa.me/16282610782"
                    network="whatsapp"
                    bgColor="#1ca14d"
                    fgColor="#ccc"
                    className="border border-gray-500 rounded-full hover:opacity-75 transition duration-200"
                />
            </div>
            <div className="bg-slate-900 text-center text-gray-400 py-5 border-t border-slate-700 border-dotted mt-5 shadow-xl shadow-slate-400">
                © {new Date().getFullYear()} - Created with ❤️ by Cagri Oz
            </div>
        </footer>
    );
};
export default Footer;
