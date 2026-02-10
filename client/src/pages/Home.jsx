import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

import HomeBanner from "../components/HomeBanner";
import MyNavbar from './../components/Navbar';
import WhatWeDo from "../components/WhatWeDo";
import OurGoals from "../components/OurGoals";
import OurProducts from "../components/OurProducts";
import LatestNews from "../components/LatestNews";

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
                        <LatestNews />
                    </section>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Home;
