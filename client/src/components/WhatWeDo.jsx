import badge from '../assets/images/icons/badge.png';

const WhatWeDo = () => {
  return (
    <>
      <div className="
        py-[3rem]
        px-[7%]
      ">
        <h1 className="
          text-[3.2rem]
          text-[#000]
          font-[600]
          mb-[1rem]
        ">
          WHAT WE <span className="text-[#e9202a]">DO</span>
        </h1>
        <p className="
          text-[1.1rem]
          text-[#000]
          mt-[1.5rem]
        ">
          We manufacture Distribution & Power Transformers ranging from 10 KVA to 160 MVA 220 kV class, Furnace Transformers, Dry Type Transformers and various types of Special Application Transformers.
        </p>
        <p className="
          text-[1.1rem]
          text-[#000]
          mt-[0.3rem]
        ">
          Our main unit located in Kolkata is spread over an area of 4,00,000 square feet.
        </p>

        {/* Cards Row */}
        <div className="
          mt-[4rem]
          flex
          justify-between
          flex-wrap
        ">
          <div className="
            w-[25%]
            p-[1rem]
          ">
            <img 
              src={badge} 
              alt="Icon" 
              loading="lazy"
              className="w-[30%]"
            />
            <span className="
              text-[#e9202a]
              text-[1.5rem]
              mt-[2rem]
              block
            ">
              Certified Products
            </span>
            <p className="
              text-[1rem]
              text-[#323232]
              font-[400]
              mt-[1rem]
            ">
              Our Transformers of various ratings, which includes 50 MVA 132 kV class, have been successfully type-tested at CPRI in Bhopal and Bangalore.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
