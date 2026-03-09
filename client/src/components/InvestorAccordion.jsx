import Accordion from 'react-bootstrap/Accordion';
import { Link, useParams } from 'react-router-dom';

const InvestorAccordion = ({ accordionData }) => {

    const { slug } = useParams();

    return (
        <>
            <section className="
                px-[7%]
                pb-[2.5rem]
                mt-[8rem]
                investor-accordion
            ">
                <Accordion defaultActiveKey="0" key={slug}>
                    {
                        accordionData.map((item, index) => {

                            const hasBody = item.body && item.body.length > 0;

                            return (
                                <Accordion.Item eventKey={String(index)} key={index} className="
                                    mb-[1rem]
                                    border-none
                                ">
                                    <Accordion.Header
                                        onClick={!hasBody ? (e) => e.preventDefault() : undefined}
                                        className={!hasBody ? "no-accordion" : ""}
                                    >
                                        <span className="text-[1.3rem]">
                                            {item.title}
                                        </span>
                                    </Accordion.Header>
                                    {
                                        hasBody && (
                                            <Accordion.Body className="
                                                bg-[#d5d5d5]
                                                py-[2rem]
                                                px-[1.5rem]
                                                rounded-[20px]
                                                mt-[0.5rem]
                                            ">
                                                {
                                                    item.body && item.body.map((item, idx) => {
                                                        return (
                                                            <div className="
                                                                flex justify-between flex-wrap
                                                                py-[0.8rem]
                                                                border-b border-[#a2a2a2]
                                                                last:border-none
                                                            " key={idx}>
                                                                <div className="
                                                                    w-[88%]
                                                                ">
                                                                    <p className="
                                                                        text-[1.1rem]
                                                                        text-[#000] font-[550]
                                                                    ">
                                                                        {item.heading}
                                                                    </p>
                                                                </div>
                                                                <div className="
                                                                    w-[6%]
                                                                ">
                                                                    {
                                                                        !item.link ? (
                                                                            <span
                                                                                className="
                                                                                    bg-gray-400 text-white font-[500] block text-center rounded-[5px]
                                                                                    w-full py-[0.2rem] text-[0.9rem] cursor-not-allowed
                                                                                "
                                                                            >
                                                                                View
                                                                            </span>
                                                                        ) :
                                                                            item.type === "route" ? (
                                                                                <Link
                                                                                    to={item.link}
                                                                                    className="
                                                                                bg-[#0a2946] hover:bg-[#d61821] text-[#fff] font-[500] block text-center rounded-[5px] transition
                                                                                w-full
                                                                                py-[0.2rem]
                                                                                text-[0.9rem]
                                                                            ">
                                                                                    View
                                                                                </Link>
                                                                            ) : (
                                                                                <a
                                                                                    href={item.link}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="
                                                                                    bg-[#0a2946] hover:bg-[#d61821] text-[#fff] font-[500] block text-center rounded-[5px] transition
                                                                                    w-full
                                                                                    py-[0.2rem]
                                                                                    text-[0.9rem]
                                                                                ">
                                                                                    View
                                                                                </a>
                                                                            )
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Accordion.Body>
                                        )
                                    }
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </section>
        </>
    )
}

export default InvestorAccordion
