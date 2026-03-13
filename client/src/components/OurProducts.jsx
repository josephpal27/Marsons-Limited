import { Link } from "react-router-dom"

let productsData = [
    {
        id: 1,
        name: "Distribution Transformers",
        image: "/images/products/1.jpg",
    },
    {
        id: 2,
        name: "Power Transformers",
        image: "/images/products/2.jpg",
    },
    {
        id: 3,
        name: "Furnace Transformers",
        image: "/images/products/3.jpg",
    },
    {
        id: 4,
        name: "USS Transformers",
        image: "/images/products/4.jpg",
    },
    {
        id: 5,
        name: "Dry Type Transformers",
        image: "/images/products/5.jpg",
    },
    {
        id: 6,
        name: "Cast Resin Transformers",
        image: "/images/products/6.jpg",
    },
    {
        id: 7,
        name: "Solar Transformers",
        image: "/images/products/7.jpg",
    },
    {
        id: 8,
        name: "Instrumental Transformers",
        image: "/images/products/8.png",
    },
]

const OurProducts = () => {
    return (
        <>
            <div className="
                py-[3.5rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                px-[7%]
                flex flex-col justify-center
                h-full
            ">
                <h4 className="
                    text-[3.5rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                    text-[#000] font-[600]
                ">
                    OUR <span className="text-[#e9202a]">PRODUCTS</span>
                </h4>

                {/* Products Row */}
                <div className="
                    flex flex-wrap justify-between
                    mt-[3rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {
                        productsData.map((item, index) => {
                            return (
                                <div className="
                                    w-[23.7%]
                                    shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),_0px_3px_7px_-3px_rgba(0,0,0,0.3)]
                                    mb-[1.4rem] sm:mb-[1.4rem] lg:mb-[1.2rem] xl:mb-[1.3rem] 2xl:mb-[1.4rem]
                                    rounded-[7px]
                                    relative overflow-hidden group
                                " key={index}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                            w-full
                                        "
                                    />
                                    {/* Title Layer */}
                                    <div className="
                                        w-full
                                        h-full
                                        absolute
                                        inset-0 bg-[#0a2946c0]
                                        rounded-[7px]
                                        flex justify-start items-end translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-in-out
                                        p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <span className="
                                            text-[#fff] font-[550]
                                            text-[1.2rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        ">
                                            {item.name}
                                        </span>
                                    </div>
                                    {/* Read More Layer */}
                                    <div className="
                                        w-full
                                        h-full
                                        absolute
                                        inset-0 flex justify-end items-end translate-y-full group-hover:-translate-y-0 transition-transform duration-500 ease-in-out
                                        p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <Link to="/">
                                            <button className="
                                                bg-[#e9202a] text-[#fff] font-[500] rounded-[3px] hover:bg-[#d6151f]
                                                text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                                px-[0.5rem]
                                                pt-[0.17rem]
                                                pb-[0.2rem]
                                                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                            ">
                                                READ MORE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OurProducts
