import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import HomeBanner from "../components/home/HomeBanner";
import MyNavbar from './../components/Navbar';
import WhatWeDo from "../components/home/WhatWeDo";
import OurGoals from "../components/home/OurGoals";
import OurProducts from "../components/home/OurProducts";
import LatestNews from "../components/home/LatestNews";
import Footer from "../components/Footer";
import OurClientLogos from "../components/OurClientLogos";
import Manufacturer from "../components/home/Manufacturer";

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 640);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Mobile - Normal Scroll
    if (isMobile) {
        return (
            <>
                <section className="section">
                    <MyNavbar />
                    <HomeBanner />
                </section>
                <section className="section">
                    <WhatWeDo />
                </section>
                <section className="section">
                    <OurGoals />
                </section>
                <section className="section">
                    <OurProducts />
                </section>
                <section className="section">
                    <LatestNews />
                </section>
                <section className="section footer-section">
                    <div className="
                        px-[1rem]
                    ">
                        <OurClientLogos />
                    </div>
                    <Footer />
                </section>
            </>
        );
    }

    // Desktop - Vertical Slider
    return (
        <>
            <Swiper
                direction="vertical"
                slidesPerView={1}
                speed={900}
                modules={[Mousewheel, Keyboard, Pagination]}
                style={{ height: "100vh" }}
                className="vertical-slider"
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 0.4,      // prevents fast momentum
                    thresholdDelta: 60,    // ignores tiny gestures
                    thresholdTime: 500,    // blocks rapid repeats
                    releaseOnEdges: false,
                }}

                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}

                pagination={{
                    clickable: true,
                }}

                preventInteractionOnTransition={true}
            >
                <SwiperSlide>
                    <section className="section">
                        <MyNavbar />
                        <HomeBanner />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">
                        <WhatWeDo />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">
                        <OurGoals />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">
                        <OurProducts />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">
                        <Manufacturer />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">
                        <LatestNews />
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section footer-section">
                        <div className="
                            px-[7%]
                            pb-[3.5rem]
                        ">
                            <OurClientLogos />
                        </div>
                        <Footer />
                    </section>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Home;
