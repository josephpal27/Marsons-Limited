import highlight1 from '../assets/images/icons/quality.png';
import highlight2 from '../assets/images/icons/experience.png';
import highlight3 from '../assets/images/icons/infrastructure.png';
import highlight4 from '../assets/images/icons/increase.png';

let highlightsData = [
    {
        id: 1,
        image: highlight1,
        title: "Certified Products",
    },
    {
        id: 2,
        image: highlight2,
        title: "Credible & Longstanding Experience",
    },
    {
        id: 3,
        image: highlight3,
        title: "Quality-Accredited Infrastructure",
    },
    {
        id: 4,
        image: highlight4,
        title: "Responsive",
    },
]

const Highlights = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[3rem]
                flex
                flex-wrap
                justify-between
                bg-[#0a2946]
            ">
                {
                    highlightsData.map((item, index) => {
                        return(
                            <div key={index} className="
                                w-[20%]
                                flex
                                flex-col
                                items-center
                            ">
                                <img src={item.image} alt={item.title} loading="lazy" className="
                                    w-[40%]
                                "/>
                                <p className="
                                    text-[#fff]
                                    text-[1.1rem]
                                    font-[500]
                                    text-center
                                    mt-[1.2rem]
                                ">
                                    {item.title}
                                </p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Highlights
