import blog1 from '/images/blog-cards/1.avif';

const LatestNews = () => {
    return (
        <>
            <div className="
                py-[3.5rem]
                px-[7%]
                flex
                flex-col
                justify-center
                h-full
            ">
                <h5 className="
                    text-[3.2rem]
                    text-[#000]
                    font-[600]
                ">
                    LATEST <span className="text-[#e9202a]">BLOGS</span> & <span className="text-[#e9202a]">ARTICLES</span>
                </h5>

                {/* Latest News Row */}
                <div className="
                    mt-[3rem]
                    flex
                    flex-wrap
                    justify-between
                ">
                    {/* Left Card */}
                    <div className="
                        w-[24%]
                        shadow-[rgba(0,0,0,0.5)_0px_3px_8px]
                        p-[1rem]
                        rounded-[10px]
                    ">
                        <img src={blog1} alt="" loading="lazy" className="w-full rounded-md" />
                        <span className="
                            text-[1.2rem]
                            text-[#0a2946]
                            mt-[1rem]
                            block
                        ">
                            Lorem ipsum dolor.
                        </span>
                        <p className="
                            text-[0.9rem]
                            mt-[0.5rem]
                        ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus est maiores, consequatur nostrum sint magnam unde blanditiis quos iusto.
                        </p>
                        <button className="
                            bg-[#e9202a]
                            text-[#fff]
                            text-[0.9rem]
                            px-[0.5rem]
                            pt-[0.17rem]
                            pb-[0.2rem]
                            rounded-[3px]
                            mt-[1rem]
                            hover:bg-[#d6151f]
                        ">
                            READ MORE
                        </button>
                    </div>

                    {/* Center Card */}
                    <div className="
                        w-[49%]
                        flex
                        flex-col
                        gap-[1.3rem]
                    ">
                        {/* Center Top Card */}
                        <div className="
                            w-full
                            shadow-[rgba(0,0,0,0.5)_0px_3px_8px]
                            p-[1rem]
                            rounded-[10px]
                            flex
                            justify-between
                        ">
                            <div className="
                                w-[46%]
                            ">
                                <img src={blog1} alt="" loading="lazy" className="w-full rounded-md" />
                            </div>
                            <div className="
                                w-[51%]
                            ">
                                <span className="
                                    text-[1.2rem]
                                    text-[#0a2946]
                                ">
                                    Lorem ipsum dolor.
                                </span>
                                <p className="
                                    text-[0.9rem]
                                    mt-[0.5rem]
                                ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus est maiores, consequatur nostrum sint magnam unde blanditiis quos iusto.
                                </p>
                                <button className="
                                    bg-[#e9202a]
                                    text-[#fff]
                                    text-[0.9rem]
                                    px-[0.5rem]
                                    pt-[0.17rem]
                                    pb-[0.2rem]
                                    rounded-[3px]
                                    mt-[1rem]
                                    hover:bg-[#d6151f]
                                ">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                        {/* Center Bottom Card */}
                        <div className="
                            w-full
                            shadow-[rgba(0,0,0,0.5)_0px_3px_8px]
                            p-[1rem]
                            rounded-[10px]
                            flex
                            justify-between
                        ">
                            <div className="
                                w-[51%]
                            ">
                                <span className="
                                    text-[1.2rem]
                                    text-[#0a2946]
                                ">
                                    Lorem ipsum dolor.
                                </span>
                                <p className="
                                    text-[0.9rem]
                                    mt-[0.5rem]
                                ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus est maiores, consequatur nostrum sint magnam unde blanditiis quos iusto.
                                </p>
                                <button className="
                                    bg-[#e9202a]
                                    text-[#fff]
                                    text-[0.9rem]
                                    px-[0.5rem]
                                    pt-[0.17rem]
                                    pb-[0.2rem]
                                    rounded-[3px]
                                    mt-[1rem]
                                    hover:bg-[#d6151f]
                                ">
                                    READ MORE
                                </button>
                            </div>
                            <div className="
                                w-[46%]
                            ">
                                <img src={blog1} alt="" loading="lazy" className="w-full rounded-md" />
                            </div>
                        </div>

                    </div>

                    {/* Right Card */}
                    <div className="
                        w-[24%]
                        shadow-[rgba(0,0,0,0.5)_0px_3px_8px]
                        p-[1rem]
                        rounded-[10px]
                    ">
                        <img src={blog1} alt="" loading="lazy" className="w-full rounded-md" />
                        <span className="
                            text-[1.2rem]
                            text-[#0a2946]
                            mt-[1rem]
                            block
                        ">
                            Lorem ipsum dolor.
                        </span>
                        <p className="
                            text-[0.9rem]
                            mt-[0.5rem]
                        ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus est maiores, consequatur nostrum sint magnam unde blanditiis quos iusto.
                        </p>
                        <button className="
                            bg-[#e9202a]
                            text-[#fff]
                            text-[0.9rem]
                            px-[0.5rem]
                            pt-[0.17rem]
                            pb-[0.2rem]
                            rounded-[3px]
                            mt-[1rem]
                            hover:bg-[#d6151f]
                        ">
                            READ MORE
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LatestNews