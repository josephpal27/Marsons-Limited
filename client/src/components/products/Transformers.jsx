
const transformersData = [
    {
        id: 1,
        image: "/images/transformers/distribution/1.png",
        title: "Transformers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    },
    {
        id: 2,
        image: "/images/transformers/distribution/2.png",
        title: "Transformers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    },
    {
        id: 3,
        image: "/images/transformers/distribution/3.png",
        title: "Transformers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    },
    {
        id: 4,
        image: "/images/transformers/distribution/4.png",
        title: "Transformers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    },
    {
        id: 5,
        image: "/images/transformers/distribution/5.png",
        title: "Transformers",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    },
    // {
    //     id: 6,
    //     image: "/images/transformers/1.avif",
    //     title: "Transformers",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in ab corrupti illum laudantium minus voluptate aut at aliquid repellendus.",
    // },
]

const Transformers = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
            ">
                <h2 className="
                    text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
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
                    flex flex-wrap justify-center
                    gap-[2.7%]
                ">
                    {
                        transformersData.map((item, index) => {
                            return (
                                <div className="
                                    w-[31.5%] relative group
                                    mb-[2rem] sm:mb-[1.5rem] lg:mb-[1.8rem] xl:mb-[2.1rem] 2xl:mb-[2.3rem]
                                " key={index}>
                                    <img
                                        src={item.image}
                                        alt="Transformers"
                                        loading="lazy"
                                        className="
                                            w-full grayscale-[100%] group-hover:grayscale-[0%] transition-all duration-300
                                            contrast-[150%]
                                        "
                                    />
                                    <div className="
                                        absolute top-0 w-full h-full
                                        flex flex-col justify-end
                                        p-[1.5rem] sm:p-[1.2rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem]
                                        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_10%,rgba(0,0,0,1)_80%)] text-[#fff]
                                    ">
                                        <span className="
                                            text-[1.6rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                            font-[550]
                                        ">
                                            {item.title}
                                        </span>
                                        <p className="
                                            text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                            mt-[0.5rem]
                                        ">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Transformers