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
                py-[3.5rem]
                px-[7%]
                flex
                justify-between
                items-center
                flex-wrap
                h-full
                bg-[url('/images/mission-vision-bg.avif')]
                bg-no-repeat
                bg-cover
                bg-center
            ">
                {/* White Overlay */}
                <div className="absolute inset-0 bg-[#ffffffe4]"></div>

                {/* Left */}
                <div className="
                    w-[35%]
                    z-10
                ">
                    <h3 className="
                        text-[3.2rem]
                        text-[#000]
                        font-[600]
                        mb-[2rem]
                    ">
                        OUR <span className="text-[#e9202a]">GOALS</span>
                    </h3>
                    <ul className="
                        list-disc
                        pl-[1.5rem]
                        space-y-[0.6rem]
                        text-[1.1rem]
                        text-[#000]
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
                    w-[64%]
                    flex
                    justify-between
                    flex-wrap
                    z-10
                ">
                    {
                        missionVisionData.map((item, index) => {
                            return (
                                <div className="
                                    w-[47%]
                                    p-[2rem]
                                    bg-[#0a2946]
                                    text-[#fff]
                                    aspect-square
                                    relative
                                    
                                " key={index}>
                                    <span className="
                                        text-[2rem]
                                        font-[500]
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1.1rem]
                                        font-[400]
                                        mt-[1.5rem]
                                    ">
                                        {item.desc}
                                    </p>
                                    <div className="
                                        w-[80px]
                                        h-[80px]
                                        position-absolute
                                        bottom-[-15px]
                                        right-[-15px]
                                        bg-[#e9202a]
                                        p-[1rem]
                                        rounded-[5px]
                                    ">
                                        <img src={item.Image} alt={item.title} loading="lazy" className="w-full"/>
                                    </div>
                                    <div className="
                                        w-[70%]
                                        h-[80%]
                                        position-absolute
                                        top-[-15px]
                                        left-[-15px]
                                        bg-[#e9202a]
                                        -z-10
                                        rounded-tr-[25px]
                                        rounded-bl-[25px]
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
