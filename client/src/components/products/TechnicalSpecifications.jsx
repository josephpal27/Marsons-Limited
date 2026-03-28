
// const data = [
//     ["Rating Range", "10 KVA to 2,500 KVA"],
//     ["Number of Phases", "Single-phase and three-phase"],
//     ["Voltage Class", "Up to 33 kV (HV side)"],
//     ["HV Winding Voltages", "3.3 kV, 6.6 kV, 11 kV, 22 kV, 33 kV (standard)"],
//     ["LV Winding Voltages", "433 V (3-phase) / 240 V (single-phase) and others as specified"],
//     ["Frequency", "50 Hz standard | 60 Hz on request for export"],
//     ["Vector Group", "Dyn11, Yyn0, Dzn0, Yzn11 and others per IS / IEC"],
//     ["Applicable Standards", "IS 1180 Parts 1 & 2, IEC 60076, ANSI, IEEE"],
//     ["Insulating Fluid", "PCB-free Mineral Oil per IS 335 / IEC 60296. FR3 biodegradable on request."],
//     ["Insulation Class", "Class A (maximum hot-spot temperature 105°C)"],
//     ["Temperature Rise", "Oil: 50°C max | Winding: 55°C max above 40°C ambient"],
//     ["Cooling Class", "ONAN standard | ONAF on request"],
//     ["Tap Changer", "OCTC: ±2 × 2.5% standard | OLTC on request"],
//     ["No-Load Losses", "Per IS 1180 BIS Star Rating — Level 1, Level 2, Level 3 compliant"],
//     ["Load Losses", "Per IS 1180 guaranteed loss levels. Test certificate supplied with each unit."],
//     ["Impedance Voltage", "4–6% standard | Custom values on request"],
//     ["Sealing Options", "Free-breathing with silica gel breather | Conservator-type | Hermetically sealed"],
//     ["Standard Fittings", "Oil-level gauge, dial thermometer, drain valve, sampling valve, pressure relief device, rating plate"],
//     ["Optional Fittings", "Buchholz relay, OTI, WTI, marshalling box, conservator with silica gel breather"],
//     ["Type Tests", "BIS approved. Type tested at NABL accredited laboratory. Energy efficient up to Level 3 per IS 1180."]
// ];

const TechnicalSpecifications = ({specs}) => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[2rem] sm:pt-[2rem] lg:pt-[2.4rem] xl:pt-[2.7rem] 2xl:pt-[3rem]
            ">
                <h3 className="
                    text-[1.5rem] sm:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                    text-[#e9202a] font-[600] text-center
                ">
                    TECHNICAL SPECIFICATIONS
                </h3>

                {/* Table */}
                <div className="
                    mt-[2rem]
                ">
                    <table className="
                        w-full border border-gray-300
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                    ">

                        {/* Table Header */}
                        <thead className="bg-[#0a2946] text-[#fff]">
                            <tr className="">
                                <th className="
                                    px-[1.2rem]
                                    py-[0.9rem]
                                    w-[25%]
                                ">
                                    Parameter
                                </th>
                                <th className="
                                    px-[1.2rem] 
                                    py-[0.9rem]
                                "> 
                                    Value / Description
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {specs?.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 
                                        "bg-gray-100 hover:bg-gray-50 transition group" : 
                                        "bg-[#fff] hover:bg-[#f9f9f9] transition group"
                                    }
                                >
                                    <td className="
                                        px-[1.2rem]
                                        py-[0.8rem]
                                        font-semibold text-[#0a2946] border group-hover:text-[#e9202a]
                                    ">
                                        {item[0]}
                                    </td>
                                    <td className="
                                        px-[1.2rem]
                                        py-[0.8rem]
                                        font-[500] border text-gray-700
                                    ">
                                        {item[1]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default TechnicalSpecifications
