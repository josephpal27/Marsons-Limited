import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const relatedProductsData = [
    {
        id: 1,
        image: "/images/product-slider/1.png",
        title: "Distribution transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "#",
    },
    {
        id: 2,
        image: "/images/product-slider/1.png",
        title: "Distribution transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "#",
    },
    {
        id: 3,
        image: "/images/product-slider/1.png",
        title: "Distribution transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "#",
    },
    {
        id: 4,
        image: "/images/product-slider/1.png",
        title: "Distribution transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "#",
    },
    {
        id: 5,
        image: "/images/product-slider/1.png",
        title: "Distribution transformers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta.",
        url: "#",
    },
]

const RelatedProducts = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[3rem]
            ">
                <h4 className="
                        text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    ">
                    RELATED PRODUCTS
                </h4>
                <p className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    font-[500] text-[#000]
                    w-[70%]
                ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit adipisci nemo perspiciatis soluta libero optio, dolor quas illum ipsum! Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>

                {/* Slider */}
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={30}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // for mobile
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3, // tablet
                                spaceBetween: 60,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 40,
                            },
                        }}
                    >

                        {
                            relatedProductsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        flex flex-col overflow-hidden
                                        p-[1rem]
                                    ">
                                        <div className="
                                            shadow-[-3px_3px_5px_rgba(0,0,0,0.25)]
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                        </div>
                                        <div className="
                                            p-[1rem] sm:p-[1.5rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
                                        ">
                                            <span>
                                                {item.title}
                                            </span>
                                            <p>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default RelatedProducts
