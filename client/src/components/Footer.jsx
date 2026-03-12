import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="
                bg-[#0a2946] text-[#fff]
                mt-[1rem]
            ">
                {/* Content */}
                <div className="
                    px-[7%]
                    py-[3.5rem]
                    flex
                    justify-between
                    flex-wrap
                ">
                    {/* Left */}
                    <div className="
                        w-[35%]
                    ">
                        <img src={logo} alt="Logo" loading="lazy" className="
                            w-[300px]
                            rounded-[10px]
                        " />
                        <p className="
                            text-[1.1rem]
                            mt-[1.5rem]
                        ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugiat.
                        </p>
                    </div>
                    {/* Right */}
                    <div className="
                        w-[60%]
                        flex
                        justify-between
                        flex-wrap
                    ">
                        <div className="
                            footer-links
                            w-[30%]
                        ">
                            <span>Quick Links</span>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/">Products</Link>
                            <Link to="/">Clientele</Link>
                            <Link to="/">CSR</Link>
                            <Link to="/">Career</Link>
                            <Link to="/">Contact</Link>
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
                    py-[1rem]
                    border-t-[1px] border-[#b4b4b4]
                ">
                    <p className="
                        text-center
                        text-[0.9rem]
                    ">
                        Copyright © 2025 | Marsons Limited | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
