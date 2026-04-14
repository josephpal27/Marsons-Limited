
const ehvHighlightData = [
    {
        id: 1,
        unit: "~200",
        desc: "EHV Units Commissioned",
    },
    {
        id: 2,
        unit: "1,600 kV",
        desc: "Haefely Trench Lab",
    },
    {
        id: 3,
        unit: "220 kV",
        desc: "Current EHV Capability",
    },
    {
        id: 4,
        unit: "400 kV",
        desc: "315 MVA — In Pipeline",
    },
]

const ehvData = [
    {
        id: 1,
        title: "ISO 9001:2008",
        desc: "Quality Management System — DNV Certified",
    },
    {
        id: 2,
        title: "NABL Accreditation",
        desc: "Electrical Testing — Power Transformers up to 200 MVA 220 kV",
    },
    {
        id: 3,
        title: "BIS Approval",
        desc: "Type tested energy efficient transformers — Level 1, 2, 3",
    },
    {
        id: 4,
        title: "CPRI Type Tested",
        desc: "Up to 160 MVA 220 kV Class & 17.6 MVA IDT Dynamic SC",
    },
    {
        id: 5,
        title: "CE Certified",
        desc: "Conformité Européenne — Export to Europe",
    },
    {
        id: 6,
        title: "IEEE C57 Series",
        desc: "US Standards — IEEE / ANSI / DOE / NERC / FERC",
    },
    {
        id: 7,
        title: "ISO 14001 & 45001",
        desc: "Environmental & Occupational Safety — DNV Certified",
    },
    {
        id: 8,
        title: "DSIR Certified R&D",
        desc: "Dept. of Scientific & Industrial Research, Govt. of India",
    },
]

const Manufacturer = () => {
    return (
        <>
            <div className="
                py-[1.5rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                flex justify-between items-center flex-wrap relative h-full
            ">
                {/* Left */}
                <div className="w-[47%]">
                    <h5 className="
                        text-[1.8rem] sm:text-[3rem] lg:text-[2.9rem] xl:text-[3.2rem] 2xl:text-[3.5rem]
                        text-[#000] font-[600] uppercase
                        mb-[1rem] sm:mb-[1rem] lg:mb-[0.6rem] xl:mb-[0.8rem] 2xl:mb-[1rem]
                    ">
                        Only <span className="text-[#e9202a]">EHV</span> Manufacturer in <span className="text-[#e9202a]">Eastern India</span>
                    </h5>
                    <p className="
                        text-[1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500]
                    ">
                        No other transformer manufacturer in Eastern India — including the North Eastern Region — produces Extra-High Voltage transformers. Nearly 200 EHV units commissioned across India's most demanding grid projects. 150 MVA 220 kV class impulse-tested at our own NABL accredited laboratory.
                    </p>

                    {/* Cards */}
                    <div className="
                        mt-[2rem]
                        flex justify-between flex-wrap
                    ">
                        {ehvHighlightData.map((item) => {
                            return (
                                <div className="
                                    mb-[1.2rem]
                                    w-[48.5%] bg-[#0a2946] p-[1rem]
                                    shadow-[3px_3px_2.6px_#e9202a]
                                " key={item.id}>
                                    <span className="
                                        text-[#fff] font-[700]
                                        text-[1.8rem]
                                    ">
                                        {item.unit}
                                    </span>
                                    <p className="
                                        text-[#c8c8c8]
                                        text-[0.9rem]
                                        mt-[0.3rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right */}
                <div className="
                    w-[47%]
                    flex justify-between flex-wrap
                ">
                    {ehvData.map((item) => {
                        return (
                            <div className="
                                mb-[1.2rem]
                                w-[48.5%] bg-[#0a2946] px-[1rem] py-[1.75rem]
                                hover:shadow-[3px_3px_2px_#0a2946] transition-all duration-300 hover:bg-[#e9202a] group
                            " key={item.id}>
                                <span className="
                                    text-[#fff] font-[600]
                                    text-[1.2rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[#c8c8c8] group-hover:text-[#fff]
                                    text-[0.9rem]
                                    mt-[0.5rem]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Manufacturer
