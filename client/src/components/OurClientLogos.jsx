let clientData = [
    {
        id: 1,
        image: "/images/clients/1.png",
    },
    {
        id: 2,
        image: "/images/clients/2.png",
    },
    {
        id: 3,
        image: "/images/clients/3.png",
    },
    {
        id: 4,
        image: "/images/clients/4.png",
    },
    {
        id: 5,
        image: "/images/clients/5.png",
    },
    {
        id: 6,
        image: "/images/clients/6.png",
    },
]

const OurClientLogos = () => {
    return (
        <>
            <div className="
                bg-[#fff] flex justify-between items-center flex-wrap
            ">
                {
                    clientData.map((item, index) => {
                        return (
                            <div key={index} className="
                                    w-[10%]
                                ">
                                <img src={item.image} alt={`Client ${item.id}`} loading="lazy" className="
                                        w-full
                                    " />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OurClientLogos
