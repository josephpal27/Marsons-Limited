import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import '../css/Home.css';
import HomeBanner from "../components/home-banner/HomeBanner";
import MyNavbar from './../components/navbar/Navbar';

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
                <section className="section">Section 2</section>
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
                    <MyNavbar />
                    <HomeBanner />
                </SwiperSlide>

                <SwiperSlide>
                    <section className="section">ABOUT</section>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Home;
