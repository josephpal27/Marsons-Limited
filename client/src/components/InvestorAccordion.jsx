import Accordion from 'react-bootstrap/Accordion';

const InvestorAccordion = () => {
    return (
        <>
            <section className="
                px-[7%]
                pb-[2.5rem]
                mt-[8rem]
            ">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="
                        mb-[1rem]
                        border-none
                    ">
                        <Accordion.Header>
                            <span className="text-[1.3rem]">
                                Annual Report
                            </span>
                        </Accordion.Header>
                        <Accordion.Body className="
                            bg-[#d5d5d5]
                            py-[2rem]
                            px-[1.5rem]
                            rounded-[20px]
                            mt-[0.5rem]
                        ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus?</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span>Financial Results</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus?</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <span>Statement of Deviation or Variation</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus?</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </>
    )
}

export default InvestorAccordion
