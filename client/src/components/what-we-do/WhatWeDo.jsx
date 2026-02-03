import './WhatWeDo.css';

import badge from '../../assets/images/icons/badge.png';

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do">

        <h1 className="text-red-600 text-[3rem]">Hello</h1>

        <div className="what-we-do-head">
          <h1>What We <span>Do</span></h1>
          <p>We manufacture Distribution & Power Transformers ranging from 10 KVA to 160 MVA 220 kV class, Furnace Transformers, Dry Type Transformers and various types of Special Application Transformers.</p>
          <p>Our main unit located in Kolkata is spread over an area of 4,00,000 square feet.</p>
          <div className="what-we-do-row">
            <div className="what-we-do-card">
              <img src={badge} alt="Icon" loading="lazy" />
              <span>Certified Products</span>
              <p>Our Transformers of various ratings, which includes 50 MVA 132 kV class, have been successfully type-tested at CPRI in Bhopal and Bangalore.</p>
            </div>
            <div className="what-we-do-card">
              <img src={badge} alt="Icon" loading="lazy" />
              <span>Trusted Expertise</span>
              <p>We have supplied more than 300,000 Transformers of different voltage and MVA across the globe over last 6 decades.</p>
            </div>
            <div className="what-we-do-card">
              <img src={badge} alt="Icon" loading="lazy" />
              <span>Certified Excellence</span>
              <p>Our fully equipped laboratory can efficiently carry out all required routine tests, for various ratings of Power Transformers up to the range of 160 MVA 220 kV class.</p>
            </div>
            <div className="what-we-do-card">
              <img src={badge} alt="Icon" loading="lazy" />
              <span>Responsive</span>
              <p>We have evolved over the years by introducing new range of products catering to the latest developments and requirements in the market.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
