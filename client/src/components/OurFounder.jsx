import founderImage from '../assets/images/founder.png';
import birds from '../assets/images/birds.png';

const OurFounder = () => {
    return (
        <section className="
            relative overflow-hidden 
            flex
            justify-between
            items-center
            flex-wrap
            pr-[7%]
        ">

            {/* Left Vertical Heading */}
            <div className="
                w-[27%]
            ">
                <h3
                    className="
                    absolute
                    left-[-7rem]
                    top-1/2
                    -translate-y-1/2
                    rotate-90
                    text-[8rem]
                    font-[300]
                    tracking-widest
                    text-[#e6e6dc]
                    whitespace-nowrap
                    select-none
                    leading-[1]
                "
                >
                    OUR <br /> FOUNDER
                </h3>
            </div>

            {/* Founder Image */}
            <div className="
                w-[42%]
                flex
                justify-end
                relative
            ">
                <img src={founderImage} alt="Founder" loading="lazy" className="
                    w-[85%]
                    mt-[3rem]
                " />
                <img src={birds} alt="Birds" loading="lazy" className="
                    absolute
                    top-[6rem]
                    left-[0]
                    w-[150px]
                "/>
            </div>
            {/* Right Content */}
            <div className="
                w-[27%]
            ">
                <div>
                    <span className="
                        text-[3.2rem]
                        text-[#e9202a]
                        font-[700]
                    ">
                        Lorem Ipsum
                    </span>
                    <p className="
                        text-[1.1rem]
                        text-[#000]
                        font-[500]
                        mt-[1rem]
                    ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet aspernatur repellat incidunt repellendus fuga, facilis excepturi at saepe ex?
                    </p>
                </div>
                <div>
                    <img src="/images/solar.png" alt="Background Image" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default OurFounder;