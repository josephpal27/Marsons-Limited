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
                w-[28%]
            ">
                <h3
                    className="
                    absolute
                    left-[-13rem] sm:left-[-13rem] lg:left-[-11.5rem] xl:left-[-12.5rem] 2xl:left-[-13.5rem]
                    top-1/2 -translate-y-1/2
                    text-[6.5rem] sm:text-[5rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6rem]
                    font-[300] tracking-widest text-[#e6e6dc] whitespace-nowrap select-none leading-[0.9] rotate-90
                ">
                    OUR <br /> LEADERSHIP
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
                w-[28%]
            ">
                <div>
                    <span className="
                        text-[1.6rem] sm:text-[1.5rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.7rem]
                        text-[#e9202a] font-[700]
                    ">
                        Harshvardhan Kotia, CEO
                    </span>
                    <p className="
                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        text-[#000] font-[500]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        With a strong engineering background and 10 years of hands-on experience in the power sector, Harshvardhan is dedicated to upholding Marsons' 65-year legacy while exploring new frontiers in grid infrastructure and associated business verticals.
                    </p>
                </div>
                <div className="
                    flex justify-center
                    mt-[2rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                ">
                    <img src="/images/solar.avif" alt="Background Image" loading="lazy" className="w-[75%]" />
                </div>
            </div>
        </section>
    );
};

export default OurFounder;