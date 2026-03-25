
const FacilityTextBlock = ({para}) => {
    return (
        <>
            <div className="w-full lg:w-[30%] flex items-center">
                <p className="
                    text-[1rem] text-[#000] font-[500]
                ">
                    {para}
                </p>
            </div>
        </>
    )
}

export default FacilityTextBlock
