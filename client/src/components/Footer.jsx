import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="
                bg-[#0a2946] text-[#fff]
                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
            ">
                {/* Content */}
                <div className="
                    px-[7%]
                    py-[3.5rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                    flex justify-between flex-wrap
                ">
                    {/* Left */}
                    <div className="
                        w-[35%]
                    ">
                        <img src={logo} alt="Logo" loading="lazy" className="
                            w-[300px] sm:w-[250px] lg:w-[240px] xl:w-[270px] 2xl:w-[300px]
                            rounded-[10px] sm:rounded-[10px] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px]
                        " />
                        <p className="
                            text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        ">
                            Marsons Limited is an ISO-certified manufacturer of Power, Distribution, and Special Purpose transformers. For 65 years, we have delivered reliable, high-quality power solutions across the globe.
                        </p>
                    </div>
                    {/* Right */}
                    <div className="
                        w-[60%]
                        flex justify-between flex-wrap
                    ">
                        <div className="
                            footer-links
                            w-[30%]
                        ">
                            <span>Quick Links</span>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            {/* <Link to="/clientele">Clientele</Link> */}
                            {/* <Link to="/csr">CSR</Link> */}
                            {/* <Link to="/career">Career</Link> */}
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="
                            footer-links
                            w-[30%]
                        ">
                            <span>Investor Corner</span>
                            <Link to="/investor-corner/financials">Financials</Link>
                            <Link to="/investor-corner/regulation">Regulation 46(2)</Link>
                            <Link to="/investor-corner/corporate-governance">Corporate Governance</Link>
                            <Link to="/investor-corner/shareholding-pattern">Shareholding Pattern</Link>
                            <Link to="/investor-corner/notices-and-results">Notices & Results</Link>
                            <Link to="/investor-corner/policies">Policies</Link>
                            <Link to="/investor-corner/unclaimed-dividend">Unclaimed Dividend</Link>
                            <Link to="/investor-corner/contact-details">Contact Details</Link>
                        </div>
                        <div className="
                            footer-links
                            w-[30%]
                        ">
                            <span>Contact Info</span>
                            <a href="">example@gmail.com</a>
                            <a href="">+91 0000000000</a>
                            <a href="">Address</a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="
                    px-[7%]
                    py-[1rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                    border-t-[1px] border-[#b4b4b4]
                ">
                    <p className="
                        text-center
                        text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        Copyright © 2025 | Marsons Limited | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
