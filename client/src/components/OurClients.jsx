import OurClientLogos from "./OurClientLogos";

const OurClients = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[2rem] sm:py-[2rem] lg:py-[1rem] xl:py-[1.5rem] 2xl:py-[2rem]
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                ">
                    <h5 className="
                        text-[3.5rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        font-[700] leading-[1.1] text-center
                    ">
                        OUR <br /> <span className="text-[#e9202a]">CLIENTS</span>
                    </h5>
                    <p className="
                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500] text-center
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        w-[60%]
                    ">
                        Trusted by industry leaders worldwide, we deliver reliable power solutions to state utilities, infrastructure projects, and multinational corporations.
                    </p>
                </div>

                {/* Row */}
                <div className="
                    mt-[0.5rem]
                    py-[2rem] sm:py-[2rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                 ">
                    <OurClientLogos />
                </div>
            </section>
        </>
    )
}

export default OurClients;
