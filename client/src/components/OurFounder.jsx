import founderImage from '../assets/images/founder.avif';
import birds from '../assets/images/birds.avif';

const OurFounder = () => {
    return (
        <section className="
            relative overflow-hidden flex justify-between items-center flex-wrap
            pr-[7%]
            min-h-[90vh]
        ">

            {/* Left Vertical Heading */}
            <div className="
                w-[27%]
            ">
                <h3
                    className="
                    absolute
                    left-[-13rem] sm:left-[-13rem] lg:left-[-9.5rem] xl:left-[-11rem] 2xl:left-[-13rem]
                    top-1/2 -translate-y-1/2
                    text-[7.5rem] sm:text-[7rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]
                    font-[300] tracking-widest text-[#e6e6dc] whitespace-nowrap select-none leading-[0.9] rotate-90
                ">
                    OUR <br /> FOUNDER
                </h3>
            </div>

            {/* Founder Image */}
            <div className="
                w-[42%]
                flex justify-end relative
            ">
                <img src={founderImage} alt="Founder" loading="lazy" className="
                    w-[85%]
                    mt-[3rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                " />
                <img src={birds} alt="Birds" loading="lazy" className="
                    absolute
                    top-[7rem] sm:top-[7rem] lg:top-[5rem] xl:top-[6rem] 2xl:top-[7rem]
                    left-[0]
                    w-[180px] sm:w-[180px] lg:w-[150px] xl:w-[160px] 2xl:w-[180px]
                "/>
            </div>
            {/* Right Content */}
            <div className="
                w-[27%]
            ">
                <div>
                    <span className="
                        text-[2.5rem] sm:text-[2.5rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                        text-[#e9202a] font-[700]
                    ">
                        Lorem Ipsum
                    </span>
                    <p className="
                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet aspernatur repellat incidunt repellendus fuga, facilis excepturi at saepe ex?
                    </p>
                </div>
                <div className="
                    mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                ">
                    <img src="/images/solar.avif" alt="Background Image" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default OurFounder;