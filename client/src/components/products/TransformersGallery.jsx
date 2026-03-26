const transformersGalleryData = [
    { id: 1, image: "/images/transformers/distribution/7.png", },
    { id: 2, image: "/images/transformers/distribution/7.png", },
    { id: 3, image: "/images/transformers/distribution/7.png", },
    { id: 4, image: "/images/transformers/distribution/7.png", },
    { id: 5, image: "/images/transformers/distribution/7.png", },
    { id: 6, image: "/images/transformers/distribution/7.png", },
]

const TransformersGallery = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
            ">
                <h2 className="
                    text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600]
                ">
                    TRANSFORMERS
                </h2>
                <p className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    font-[500] text-[#000]
                ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis eos neque veritatis officia tempore ullam, vel qui molestias. Atque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis eos neque veritatis officia tempore ullam, vel qui molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque Lorem, ipsum dolor.
                </p>

                {/* Row */}
                <div className="
                    mt-[03rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                    flex flex-wrap
                    gap-[2.7%]
                ">
                    {
                        transformersGalleryData.map((item, index) => {
                            return (
                                <div className="
                                    w-[31.5%] relative bg-[#f5f4f4] group
                                    mb-[2rem] sm:mb-[1.5rem] lg:mb-[1.8rem] xl:mb-[2.1rem] 2xl:mb-[2.3rem]
                                    p-[2rem]
                                    shadow-[0px_4px_6px_rgba(0,0,0,0.5)]
                                    overflow-hidden
                                " key={index}>

                                    {/* Top */}
                                    <span className="
                                        absolute top-0 left-0 h-[3px] w-full bg-[#e9202a]
                                        scale-x-0 origin-left transition duration-300
                                        group-hover:scale-x-100
                                    "></span>
                                    {/* Left */}
                                    <span className="
                                        absolute top-0 left-0 w-[3px] h-full bg-[#e9202a]
                                        scale-y-0 origin-top transition duration-300
                                        group-hover:scale-y-100
                                    "></span>
                                    {/* Bottom */}
                                    <span className="
                                        absolute bottom-0 left-0 h-[3px] w-full bg-[#e9202a]
                                        scale-x-0 origin-left transition duration-300 delay-300
                                        group-hover:scale-x-100
                                    "></span>
                                    {/* Right */}
                                    <span className="
                                        absolute top-0 right-0 w-[3px] h-full bg-[#e9202a]
                                        scale-y-0 origin-top transition duration-300 delay-300
                                        group-hover:scale-y-100
                                    "></span>

                                    <img
                                        src={item.image}
                                        alt="Transformers"
                                        loading="lazy"
                                        className="
                                            w-full grayscale group-hover:grayscale-0 transition-all duration-300
                                            contrast-[150%] aspect-[3/2] object-contain
                                        "
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default TransformersGallery
