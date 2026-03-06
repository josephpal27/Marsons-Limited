import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { journeyData } from "../data/journeyData";

const OurJourney = () => {
    const sectionRef = useRef(null);
    const dotRefs = useRef([]);
    const location = useLocation();

    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    // Measure exact line start & end (static)
    useLayoutEffect(() => {
        const calculate = () => {
            if (!sectionRef.current || dotRefs.current.length === 0) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();

            const firstRect = dotRefs.current[0].getBoundingClientRect();
            const lastRect =
                dotRefs.current[dotRefs.current.length - 1].getBoundingClientRect();

            const start =
                firstRect.top - sectionRect.top + firstRect.height / 2;

            const end =
                lastRect.top - sectionRect.top + lastRect.height / 2;

            setLineTop(start);
            setLineHeight(end - start);
        };

        const images = sectionRef.current?.querySelectorAll("img");
        let loaded = 0;

        images?.forEach((img) => {
            if (img.complete) {
                loaded++;
            } else {
                img.onload = () => {
                    loaded++;
                    if (loaded === images.length) calculate();
                };
            }
        });

        if (loaded === images?.length) calculate();

        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, [location]);

    return (
        <section className="px-[7%] mt-[6rem]">

            {/* Head */}
            <div className=" flex justify-between items-center ">
                <div className=" w-[35%] ">
                    <h4 className=" text-[5.5rem] font-[700] leading-[1] ">
                        OUR <br /> <span className="text-[#e9202a]">JOURNEY</span> 
                    </h4>
                </div>
                <div className=" w-[60%] "> 
                    <p className=" text-[1.1rem] text-[#000] font-[500] ">Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    <p className=" text-[1.1rem] text-[#000] font-[500] mt-[1rem] ">Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div ref={sectionRef} className="relative mt-[4rem]">

                {/* Static Vertical Line */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-[7px] bg-[#bebebe]"
                    style={{
                        top: lineTop,
                        height: lineHeight,
                    }}
                />

                {journeyData.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={item.id}
                            className="relative flex items-center justify-between mb-[5rem]"
                        >
                            {/* Left */}
                            <div className="w-[45%]">
                                {isLeft ? (
                                    <img src={item.image} alt="Journey Image" className="w-full" data-aos="fade" />
                                ) : (
                                    <div className="text-right pr-[2rem]">
                                        <span 
                                            className="text-[4rem] font-[700] text-[#0f2b3a] block"
                                            data-aos="fade-up"
                                        >
                                            {item.year}
                                        </span>
                                        <span 
                                            className="text-[2.5rem] font-[700] mt-[0.5rem] block"
                                             data-aos="fade-up"
                                        >
                                            {item.title.split(item.highlight)[0]}
                                            <span className="text-[#e9202a]">
                                                {item.highlight}
                                            </span>
                                        </span>
                                        <p 
                                            className="text-[1.1rem] text-[#000] font-[500] mt-[0.7rem]"
                                             data-aos="fade-up"
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Center Dot */}
                            <div
                                ref={(el) => (dotRefs.current[index] = el)}
                                className="absolute left-1/2 -translate-x-1/2 z-10"
                            >
                                <div 
                                    className="w-[18px] h-[18px] bg-black rounded-full border-[15px] border-black"
                                     data-aos="zoom-in" data-aos-duration="500"
                                 />
                            </div>

                            {/* Right */}
                            <div className="w-[45%]">
                                {!isLeft ? (
                                    <img src={item.image} alt="Journey Image" className="w-full" data-aos="fade" />
                                ) : (
                                    <div className="pl-[2rem]">
                                        <span 
                                            className="text-[4rem] font-[700] text-[#0f2b3a] block"
                                            data-aos="fade-up"
                                        >
                                            {item.year}
                                        </span>
                                        <span 
                                            className="text-[2.5rem] font-[700] mt-[0.5rem] block"
                                             data-aos="fade-up"
                                        >
                                            {item.title.split(item.highlight)[0]}
                                            <span className="text-[#e9202a]">
                                                {item.highlight}
                                            </span>
                                        </span>
                                        <p 
                                            className="text-[1.1rem] text-[#000] font-[500] mt-[0.7rem]"
                                             data-aos="fade-up"
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurJourney;