
const FacilityImageCard = ({img, title, desc}) => {
    return (
        <>
            <div className="w-full lg:w-[35%] relative group">
                <img
                    src={img}
                    className="w-full grayscale group-hover:grayscale-0 transition duration-300"
                />
                <div className="
                    absolute bg-[#0a29469f] group-hover:bg-[#0a2946e8] text-[#fff] transition-all
                    bottom-[-0.7rem] group-hover:bottom-[0]
                    left-[-0.7rem] group-hover:left-[0]
                    w-[80%] 
                    h-[50%] 
                    px-[1.5rem]
                    py-[1rem]
                ">
                    <span className="
                        text-[1.4rem] font-[600]
                    ">
                        {title}
                    </span>
                    <p className="
                        text-[0.85rem]
                        mt-[0.5rem]
                    ">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FacilityImageCard
