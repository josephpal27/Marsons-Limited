import FacilityImageCard from "./FacilityImageCard";
import FacilityTextBlock from "./FacilityTextBlock";

const facilityData = [
    {
        id: 1,
        type: "image",
        title: "CORE ASSEMBLY",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum laboriosam ipsum autem adipisicing.",
        img: "/images/facility/1.avif",
    },
    {
        id: 2,
        type: "image",
        title: "COIL ASSEMBLY",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum laboriosam ipsum autem adipisicing.",
        img: "/images/facility/2.avif",
    },
    {
        id: 3,
        type: "text",
        para: "Lorem ipsum dolor sit amet, consectetur elit. Commodi laboriosam autem adipisicing quae reiciendis veniam dignissimos. Laboriosam adipisicing possimus fugit aliquid expedita consectetur laboriosam.",
    },
    {
        id: 4,
        type: "text",
        para: "Lorem ipsum dolor sit amet, consectetur elit. Commodi laboriosam autem adipisicing quae reiciendis veniam dignissimos. Laboriosam adipisicing possimus fugit aliquid expedita consectetur laboriosam.",
    },
    {
        id: 5,
        type: "image",
        title: "WINDING DEPARTMENT",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum laboriosam ipsum autem adipisicing.",
        img: "/images/facility/3.avif",
    },
    {
        id: 6,
        type: "image",
        title: "VACUUM DRYING SYSTEM",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum laboriosam ipsum autem adipisicing.",
        img: "/images/facility/4.avif",
    },
];

const Facility = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[3rem]
                pb-[2.5rem]
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                ">
                    <h3 className="
                        text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    ">
                        PRODUCTION FACILITY
                    </h3>
                    <p className="
                        w-[70%]
                        text-center
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        font-[500] text-[#000]
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam autem adipisicing quae reiciendis veniam dignissimos. Laboriosam adipisicing possimus fugit aliquid expedita.
                    </p>
                </div>

                {/* ROW 1 */}
                <div className="
                    mt-[3rem] flex flex-col lg:flex-row gap-7
                ">
                    <FacilityImageCard {...facilityData[0]} />
                    <FacilityImageCard {...facilityData[1]} />
                    <FacilityTextBlock {...facilityData[2]} />
                </div>

                {/* ROW 2 */}
                <div className="
                    mt-[1.8rem] flex flex-col lg:flex-row gap-7
                ">
                    <FacilityTextBlock {...facilityData[3]} />
                    <FacilityImageCard {...facilityData[4]} />
                    <FacilityImageCard {...facilityData[5]} />
                </div>
            </section>
        </>
    )
}

export default Facility