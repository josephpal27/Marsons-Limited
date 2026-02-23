import OurClientLogos from "./OurClientLogos";

const OurClients = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[1rem]
            ">
                {/* Head */}
                <div className="
                    flex
                    flex-col
                    items-center
                ">
                    <h5 className="
                        text-[3.5rem]
                        font-[700] leading-[1.1] text-center
                    ">
                        OUR <br /> <span className="text-[#e9202a]">CLIENTS</span>
                    </h5>
                    <p className="
                        text-[1.1rem] 
                        text-[#000] font-[500] text-center
                        mt-[1rem]
                        w-[50%]
                    ">
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Row */}
                <div className="
                    mt-[0.5rem]
                    py-[2rem]
                 ">
                    <OurClientLogos />
                </div>
            </section>
        </>
    )
}

export default OurClients;
