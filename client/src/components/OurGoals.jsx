import visionIcon from '../assets/images/icons/vision.avif';
import missionIcon from '../assets/images/icons/mission.avif';

let missionVisionData = [
    {
        id: 1,
        Image: visionIcon,
        title: "VISION",
        desc: "Through Quality Assurance and stringent evaluations, provide our customers with quality products with affordable prices and consistency in services. Develop and maintain suppliers/customers relationship based on open communication, mutual trust and respect.",
    },
    {
        id: 2,
        Image: missionIcon,
        title: "MISSION",
        desc: "To establish Marsons as a global brand and one of the most trusted names in transformers.",
    },
]


const MissionVision = () => {
    return (
        <>
            <div className="
                py-[3.5rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                px-[7%]
                flex justify-between items-center flex-wrap bg-[url('/images/mission-vision-bg.avif')] bg-no-repeat bg-cover bg-center relative
                h-full
            ">
                {/* White Overlay */}
                <div className="absolute inset-0 bg-[#ffffffe4]"></div>

                {/* Left */}
                <div className="
                    w-[35%]
                    z-10
                ">
                    <h3 className="
                        text-[3.5rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600]
                        mb-[2rem] sm:mb-[2rem] lg:mb-[1.6rem] xl:mb-[1.8rem] 2xl:mb-[2rem]
                    ">
                        OUR <span className="text-[#e9202a]">GOALS</span>
                    </h3>
                    <ul className="
                        list-disc text-[#000] font-[500]
                        pl-[1.5rem] sm:pl-[1.5rem] lg:pl-[1.3rem] xl:pl-[1.4rem] 2xl:pl-[1.5rem]
                        space-y-[0.6rem] sm:space-y-[0.5rem] lg:space-y-[0.4rem] xl:space-y-[0.5rem] 2xl:space-y-[0.6rem]
                        text-[1.1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    ">
                        <li>Customer services and seamless support.</li>
                        <li>Continued quality improvements and R&D initiatives.</li>
                        <li>Leadership and professional growth within the organisation.</li>
                        <li>Innovation and resource planning.</li>
                        <li>Customization services.</li>
                        <li>Competitive prices, quality products and timely services.</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="
                    w-[63%]
                    flex justify-between flex-wrap z-10
                ">
                    {
                        missionVisionData.map((item, index) => {
                            return (
                                <div className="
                                    w-[47%]
                                    p-[2rem] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                    bg-[#0a2946] text-[#fff] aspect-square relative
                                " key={index}>
                                    <span className="
                                        text-[2rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                        font-[550]
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[1.4rem] sm:mt-[1.4rem] lg:mt-[1.2rem] xl:mt-[1.3rem] 2xl:mt-[1.4rem]
                                    ">
                                        {item.desc}
                                    </p>
                                    <div className="
                                        w-[80px] sm:w-[80px] lg:w-[65px] xl:w-[73px] 2xl:w-[80px]
                                        h-[80px] sm:h-[80px] lg:h-[65px] xl:h-[73px] 2xl:h-[80px]
                                        position-absolute bg-[#e9202a] rounded-[5px]
                                        bottom-[-15px] sm:bottom-[-15px] lg:bottom-[-11px] xl:bottom-[-13px] 2xl:bottom-[-15px]
                                        right-[-15px] sm:right-[-15px] lg:right-[-11px] xl:right-[-13px] 2xl:right-[-15px]
                                        p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                    ">
                                        <img src={item.Image} alt={item.title} loading="lazy" className="w-full"/>
                                    </div>
                                    <div className="
                                        w-[70%]
                                        h-[80%]
                                        position-absolute bg-[#e9202a] -z-10
                                        top-[-10px] sm:top-[-10px] lg:top-[-8px] xl:top-[-9px] 2xl:top-[-10px]
                                        left-[-10px] sm:left-[-10px] lg:left-[-8px] xl:left-[-9px] 2xl:left-[-10px]
                                        rounded-tr-[20px]
                                        rounded-bl-[20px]
                                    "></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MissionVision