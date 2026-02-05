import certified from '../assets/images/icons/certified.avif';
import excellence from '../assets/images/icons/excellence.avif';
import responsive from '../assets/images/icons/responsive.avif';
import trust from '../assets/images/icons/trust.avif';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

let whatWeDoCardsData = [
  {
    id: 1,
    image: certified,
    title: "Certified Products",
    desc: "Our Transformers of various ratings, which includes 50 MVA 132 kV class, have been successfully type-tested at CPRI in Bhopal and Bangalore.",
  },
  {
    id: 2,
    image: trust,
    title: "Trusted Expertise",
    desc: "We have supplied more than 300,000 Transformers of different voltage and MVA across the globe over last 6 decades.",
  },
  {
    id: 3,
    image: excellence,
    title: "Certified Excellence",
    desc: "Our fully equipped laboratory can efficiently carry out all required routine tests, for various ratings of Power Transformers up to the range of 160 MVA 220 kV class.",
  },
  {
    id: 4,
    image: responsive,
    title: "Responsive",
    desc: "We have evolved over the years by introducing new range of products catering to the latest developments and requirements in the market.",
  },
]

const WhatWeDo = () => {
  return (
    <>
      <div className="
        py-[3.5rem]
        px-[7%]
        flex
        flex-col
        justify-center
        h-full
      ">
        <h2 className="
          text-[3.2rem]
          text-[#000]
          font-[600]
          mb-[1rem]
        ">
          WHAT WE <span className="text-[#e9202a]">DO</span>
        </h2>
        <p className="
          text-[1rem]
          text-[#000]
          font-[500]
          mt-[1rem]
        ">
          We manufacture Distribution & Power Transformers ranging from 10 KVA to 160 MVA 220 kV class, Furnace Transformers, Dry Type Transformers and various types of Special Application Transformers.
        </p>
        <p className="
          text-[1rem]
          text-[#000]
          font-[500]
          mt-[0.5rem]
        ">
          Our main unit located in Kolkata is spread over an area of 4,00,000 square feet.
        </p>

        {/* Cards Row */}
        <div className="
          mt-[4rem]
          flex
          justify-between
          flex-wrap
          overflow-hidden
        ">
          {
            whatWeDoCardsData.map((item, index) => {
              return (
                <div className="
                  what-we-do-card
                  w-[25%]
                  p-[1rem]
                  flex
                  flex-col
                  relative
                  group
                " key={index}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-[30%]"
                  />
                  <span className="
                    text-[#e9202a]
                    text-[1.5rem]
                    mt-[2rem]
                    block
                  ">
                    {item.title}
                  </span>
                  <p className="
                    text-[0.9rem]
                    text-[#323232]
                    font-[450]
                    mt-[0.7rem]
                  ">
                    {item.desc}
                  </p>
                  <Link to="/" className="
                    text-[#e9202a]
                    text-[1rem]
                    font-[500]
                    mt-auto
                    flex
                    items-center
                    pt-[2rem]
                    w-max
                    hover:text-[#d6151f]
                  ">
                    View Details <FaArrowRightLong className="
                      ml-[0.7rem]
                      group-hover:ml-[1rem]
                      transition-all duration-[0.2s]
                    " />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
