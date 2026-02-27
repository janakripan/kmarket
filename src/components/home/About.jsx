import { branchesLogo } from "@/index";
import React from "react";
import aboutImage from "../../assets/home/aboutImage.jpg";
import whatWeDo from "../../assets/home/whatWeDoImage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import aboutSign from "../../assets/home/about-sign.png";

const About = ({id}) => {
  return (
    <div  id={id} className="w-full h-fit min-h-screen flex flex-col gap-16 px-16 ">
      {/* ===== logo section =====  */}

      <div className="w-full h-fit flex flex-col gap-3.75 ">
        {/* header  */}
        <h5 className="font-dmSans w-fit px-2 pb-1 font-bold text-[#5D666F] text-sm border-b border-[#5E8409] ">
          OUR BRANCHES
        </h5>

        <div className="w-full h-fit flex flex-row justify-between">
          {branchesLogo.map((itm, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-black rounded-xl w-[156px] h-[156px] "
            >
              <img
                src={itm}
                alt="partner logo"
                className={` aspect-square ${idx !== 0 ? "w-28" : " w-14"} `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== about content ===== */}

      {/* about kmart  */}
      <div className="w-full h-fit flex flex-row items-start ">
        {/* left contetn  */}
        <div className="w-1/2 h-full flex flex-col justify-between items-start gap-24">
          <div className="w-full h-fit flex flex-col items-start gap-2.25 ">
            <h5 className="font-dmSans w-fit px-2 pb-1 font-bold text-[#5D666F] text-sm border-b border-[#5E8409] ">
              About K MART GROUP
            </h5>

            <div className="w-full h-fit flex flex-col gap-5.5 items-start">
              <div className="w-full h-fit flex flex-col gap-2.25 items-start">
                {/* header  */}
                <h2 className="font-bold font-redHat text-[48px] text-[#1C2539] leading-12 ">
                  Smart and effective <br /> business Group in{" "}
                  <span className="text-primary">UAE</span>.
                </h2>

                {/* description  */}
                <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-normal text-sm font-dmSans ">
                  Since 1983, Kmart Group has transformed from a single
                  supermarket into a vibrant retail and hospitality powerhouse
                  in the UAE. Thanks to the inspiring vision of the Late Moossa
                  Haji Kombantavida, we now boast 11 supermarkets, 16 grocery
                  stores, and 9 restaurants throughout the region. We're all
                  about growth and innovation, constantly launching new projects
                  to keep our commitment to quality and customer happiness
                  alive!
                </p>
              </div>

              {/* call details and sign  */}

              <div className="w-fit h-fit flex flex-row items-center gap-14 ">
                {/* contact no  */}

                <div className="w-fit h-fit flex flex-row items-center gap-6 ">
                  <div className="w-12 h-12 text-white text-[16px] rounded-full flex items-center justify-center bg-[#FFCC00] ">
                    <FiPhoneCall className="rotate-45" />
                  </div>

                  <div className="w-fit h-full justify-between flex flex-col items-start gap-2.25">
                    <div className=" text-[14px] text-[#5D666F] font-normal font-dmSans ">
                      Call us anytime
                    </div>

                    <div className="text-lg font-dmSans text-[#1C2539] font-bold leading-5.5 ">
                      +971 5432145
                    </div>
                  </div>
                </div>

                <img
                  src={aboutSign}
                  alt=" sign image "
                  className=" h-10 w-auto  "
                />
              </div>
            </div>
          </div>

          <button className="p-3.5 rounded-[16px] bg-primary text-sm font-semibold text-[#F1F1F1] font-dmSans ">
            About Us
          </button>
        </div>

        {/* right image  */}
        <div className="w-1/2 aspect-square max-h-118 flex items-center justify-center relative rounded-3xl overflow-hidden ">
          {/* white layout  */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/40  to-transparent"></div>

          {/* about-image  */}
          <img
            src={aboutImage}
            alt="about image"
            className="h-full object-cover object-center"
          />

          {/* about percentage shape  */}

          <div className="absolute bottom-0 left-0 z-10 px-4.5 py-6 flex flex-col items-center w-fit h-fit ">
            <div className="w-20 h-20  relative rounded-full border-3 border-white overflow-hidden">
              <div className="w-24 h-24 rounded-full bg-linear-to-r from-[#787878] to-[#121212]  absolute left-[25%] top-1/2 -translate-y-1/2 "></div>

              <div className=" absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 font-dmSans text-base text-[#121212]  ">
                80%
              </div>
            </div>

            {/* text  */}

            <div className="font-dmSans font-bold text-lg text-[#121212]  ">
              Business Progress
            </div>
          </div>
        </div>
      </div>

      {/*===== what we do =====  */}
      <div className="w-full h-fit flex flex-row items-start gap-2.25">
        {/* left image  */}

        <div className="w-1/2 aspect-square max-h-[632px] flex items-center justify-center relative rounded-3xl overflow-hidden ">
          {/* about-image  */}
          <img
            src={whatWeDo}
            alt="about image"
            className="w-full object-cover object-center"
          />
        </div>

        {/* right content  */}

        <div className="w-1/2 h-full flex flex-col items-start gap-24">
          <div className="w-full h-fit flex flex-col items-start gap-2.25 ">
            <h5 className="font-dmSans w-fit px-2 pb-1 font-bold text-[#5D666F] text-sm border-b border-[#5E8409] ">
              What We Do
            </h5>

            <div className="w-full h-fit flex flex-col gap-5.5 items-start">
              <div className="w-full h-fit flex flex-col gap-5.5 items-start">
                {/* header  */}
                <h2 className="font-bold font-redHat text-[48px] text-[#1C2539] leading-12 ">
                  Our Retail & Hospitality
                  <br />
                  <span className="text-primary">Expertise</span>.
                </h2>

                {/* description  */}
                <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-normal text-sm font-dmSans ">
                  Supermarkets & Groceries: Offering a broad range of fresh and
                  everyday essentials sourced locally and internationally.
                </p>

                <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-normal text-sm font-dmSans ">
                  Restaurants & Dining: A selection of welcoming outlets serving
                  delectable meals for families and individuals alike
                </p>

                <p className="w-full h-fit text-left leading-6 text-[#5D666F] font-normal text-sm font-dmSans ">
                  Quality & Service: Every location upholds the highest
                  standards of customer care, ensuring fulfilling shopping and
                  dining experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
