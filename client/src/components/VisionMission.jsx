import visionImage from '../assets/images/vision-mission/1.png';
import missionImage from '../assets/images/vision-mission/2.png';
import valuesImage from '../assets/images/vision-mission/3.png';

const visionMissionData = [
    {
        id: 1,
        type: "image",
        image: visionImage,
        alt: "Vision Image",
    },
    {
        id: 2,
        type: "content",
        title: "OUR",
        highlight: "VISION",
        align: "center",
        desc: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed
        do eiusmod tempor incididunt
        ut labore et dolore.`,
    },
    {
        id: 3,
        type: "image",
        image: missionImage,
        alt: "Mission Image",
    },
    {
        id: 4,
        type: "content",
        title: "OUR",
        highlight: "MISSION",
        align: "left",
        desc: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed
        do eiusmod tempor incididunt
        ut labore et dolore.`,
    },
    {
        id: 5,
        type: "image",
        image: valuesImage,
        alt: "Values Image",
    },
    {
        id: 6,
        type: "content",
        title: "OUR",
        highlight: "VALUES",
        align: "left",
        desc: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed
        do eiusmod tempor incididunt
        ut labore et dolore.`,
    },
];

const VisionMission = () => {
    return (
        <section className="
            px-[7%]
            mt-[4rem]
        ">
            <div className="
                flex
                flex-wrap
                justify-between
            ">

                {visionMissionData.map((item) => {
                    if (item.type === "image") {
                        return (
                            <div key={item.id} className="
                                w-[33.33%]
                            ">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={item.id}
                            className={`
                                w-[33.33%]
                                p-[2rem]
                                flex
                                flex-col
                                justify-center
                                ${item.align === "center" ? "text-center" : "text-left"}
                            `}
                        >
                            <span className="
                                text-[3rem]
                                font-[700]
                                leading-[1]
                            ">
                                {item.title} <br />
                                <span className="text-[#e9202a]">
                                    {item.highlight}
                                </span>
                            </span>

                            <p className="
                                text-[1.1rem]
                                text-[#000]
                                font-[500]
                                mt-[1rem]
                            ">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default VisionMission;