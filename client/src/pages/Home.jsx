import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";

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
                <section className="section">Section 1</section>
                <section className="section">Section 2</section>
                <section className="section">Section 3</section>
                <section className="section">Section 4</section>
                <section className="section">Section 5</section>
            </>
        );
    }

    // Desktop - Vertical Slider
    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            speed={900}
            modules={[Mousewheel, Keyboard]}
            style={{ height: "100vh" }}
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

            preventInteractionOnTransition={true}
        >
            <SwiperSlide>
                <section className="section">Section 1</section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="section">Section 2</section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="section">Section 3</section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="section">Section 4</section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="section">Section 5</section>
            </SwiperSlide>
        </Swiper>
    );
};

export default Home;
