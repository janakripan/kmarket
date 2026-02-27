import React from "react";
import helpImage from "../../assets/home/helpImage.jpg";

const Help = () => {
  return (
    <div className="w-full h-fit max-w-screen-2xl mx-auto px-16 py-11  ">
      <div className="w-full h-fit flex flex-row items-start gap-7 ">
        {/* left contetn  */}
        <div className="w-1/2 h-fit flex flex-col items-start gap-2.25 ">
          <h5 className="font-dmSans w-fit px-2 pb-1 font-bold text-[#5D666F] text-sm border-b border-[#5E8409] ">
            Why choose
          </h5>

          <div className="w-full h-fit flex flex-col gap-5.5 items-start">
            <div className="w-full h-fit flex flex-col gap-5.5 items-start">
              {/* header  */}
              <h2 className="font-bold font-redHat text-[48px] leading-12 text-[#1C2539] ">
                <span className="font-normal"> Why Choose</span>
                <br />
                K-<span className="text-primary">market</span> Group
              </h2>

              {/* description  */}
              <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-normal text-sm font-dmSans ">
                A legacy of service since 1983 — decades of growth and community
                trust. A wide-reaching network of supermarkets, groceries, and
                eateries for everyday convenience. <br /> Commitment to innovation and
                continuously improving customer experiences.
              </p>

              <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-bold text-sm font-dmSans ">
                Discover top-tier retail shopping and family-friendly dining options across the UAE with Kmart Group — where quality meets everyday value.
              </p>

             
            </div>
          </div>
        </div>

        {/* right image  */}
        <div className="w-1/2 aspect-square max-h-118 flex items-center justify-center relative rounded-3xl overflow-hidden ">
          {/* about-image  */}
          <img
            src={helpImage}
            alt="about image"
            className="h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
