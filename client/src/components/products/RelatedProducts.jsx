import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

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
                <div className="
                    mt-[3rem]
                ">
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
                                        flex flex-col overflow-hidden group
                                        px-[1rem]
                                    ">
                                        <div className="
                                            shadow-[-5px_5px_8px_rgba(0,0,0,0.25)] 
                                            overflow-hidden
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="w-full group-hover:scale-[1.04] transition duration-300" />
                                        </div>
                                        <div className="
                                            mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                                        ">
                                            <span className="
                                                text-[1.2rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                                text-[#e9202a] font-[600] leading-[1.3]
                                            ">
                                                {item.title}
                                            </span>
                                            <p className="
                                                text-[0.7rem] sm:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                                mt-[0.5rem] 
                                            ">
                                                {item.desc}
                                            </p>
                                            <Link to="/products/product-name" className="
                                                text-[0.7rem] sm:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                                block bg-[#e9202a] hover:bg-[#d6151f] text-[#fff] w-max rounded-[3px] transition
                                                py-[0.2rem] 
                                                px-[1rem]
                                                mt-[1rem]
                                            ">
                                                Explore
                                            </Link>
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
