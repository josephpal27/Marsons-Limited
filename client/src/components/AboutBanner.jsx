import React from 'react'

const AboutBanner = () => {
    return (
        <>
            <section className="
                w-full
                h-screen
                relative
            ">
                <img src="/images/banners/about-banner.png" alt="About Banner" loading="eager" className="
                    w-full
                    h-screen
                " />
                <div className="
                    pb-[6.5rem]
                    px-[7%]
                    absolute
                    top-0
                    w-full
                    h-full
                    flex
                    items-end
                ">
                    <h1 className="
                        text-[3.2rem]
                        text-[#fff]
                        font-[700]
                    ">
                        <span className="font-[200]">SETTING POWER</span> <br /> IN MOTION
                    </h1>
                </div>
            </section>
        </>
    )
}

export default AboutBanner
