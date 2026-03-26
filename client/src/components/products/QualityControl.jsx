const qualityControlData = [
    {
        id: 1,
        title: "Quality Control",
        desc: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consecteturehenderit rem quis nihil reiciendis perspiciatis veritatis voluptatum.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Repellendus molestiae, voluptatibus exercitationem quia incidunt deleniti architecto fugiat animi illo, molestias provident, saepe nostrum reprehenderit rem quis nihil deleniti reiciendis perspiciatis veritatis voluptatum.",
        ],
    },
    {
        id: 2,
        title: "Research & Development",
        desc: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consecteturehenderit rem quis nihil reiciendis perspiciatis veritatis voluptatum.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cum iure, deleniti tempora eos quisquam optio voluptate ut perferendis, natus corporis. Earum quasi quidem qui nihil, facilis sapiente itaque fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Repellendus molestiae, voluptatibus exercitationem quia incidunt deleniti architecto fugiat animi illo, molestias provident, saepe nostrum reprehenderit rem quis nihil deleniti reiciendis perspiciatis veritatis voluptatum.",
        ],
    },
]

const QualityControl = () => {
    return (
        <>
            <section className="mt-[2rem] sm:mt-[2rem] lg:mt-[1.9rem] xl:mt-[2.2rem] 2xl:mt-[2.5rem]">
                {/* Banner */}
                <div className="
                    relative
                ">
                    <img src="/images/quality-bg.avif" alt="Quality Control" loading="lazy" className="
                        w-full
                    " />
                    <div className="
                        absolute w-full h-full
                        top-0 flex justify-center
                        bg-[linear-gradient(to_bottom,#e9202ab3_30%,#fff_100%)]
                        pt-[8rem] sm:pt-[5rem] lg:pt-[6rem] xl:pt-[7rem] 2xl:pt-[8rem]
                    ">
                        <h5 className="
                            text-[1.8rem] sm:text-[3rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem]
                            font-[600] text-[#fff]
                        ">
                            QUALITY CONTROL & TESTING
                        </h5>
                    </div>
                </div>

                {/* Boxes Row */}
                <div className="
                    flex justify-between flex-wrap
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    mt-[-15rem] sm:mt-[-10rem] lg:mt-[-13rem] xl:mt-[-14rem] 2xl:mt-[-15rem]
                    z-10 relative
                ">
                    {
                        qualityControlData.map((item, index) => {
                            return (
                                <div key={index} className="
                                    w-[48%] bg-[#fff] shadow-[-8px_8px_9px_rgba(0,0,0,0.25)] 
                                    p-[3rem] sm:p-[2rem] lg:p-[2.4rem] xl:p-[2.7rem] 2xl:p-[3rem]
                                ">
                                    <span className="
                                        text-[1.3rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                        text-[#e9202a] font-[600]
                                    ">
                                        {item.title}
                                    </span>
                                    {
                                        item.desc.map((para, i) => (
                                            <p key={i} className="
                                                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                                text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                                font-[500]
                                            ">
                                                {para}
                                            </p>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default QualityControl
