import React from "react";
import footerBg from "../../assets/ui/footerBg.jpg";
import footerLogo from "../../assets/ui/headerLogo.png";
import { FaWindows, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-fit pt-16">
      <div
        className="w-full min-h-fit relative flex flex-col h-fit bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto "
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        {/* overlay  */}
        <div className="absolute inset-0 bg-[#12121266] " />

        {/* ====== footer content ====== */}
        <div className="w-full h-fit px-6 lg:px-[80px] py-16 z-10  ">
          <div className="w-full h-fit flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
            {/* left logo and content  */}

            <div className="w-full lg:w-fit h-full flex flex-col justify-between items-start gap-4 lg:gap-3.75 ">
              <img
                src={footerLogo}
                alt="logo image"
                className=" rounded h-12 lg:h-14 w-auto  "
              />

              <h3 className="text-white font-redHat font-semibold text-xl lg:text-[24px] leading-tight ">
                We growing up your business with{" "}
                <br className="hidden lg:block" /> personal AI manager.
              </h3>

              <span className="font-dmSans text-sm text-white/70">
                K Market 2025
              </span>
            </div>

            {/* right side content  */}

            <div className="w-full lg:w-fit h-full pt-2 flex flex-wrap lg:flex-nowrap flex-row gap-10 lg:gap-14 text-white font-dmSans ">
              {/* Company  */}
              <div className="flex flex-col gap-3 lg:gap-4 min-w-[120px]">
                <h4 className="text-xs lg:text-[14px] font-medium text-white/60 mb-1 lg:mb-2 uppercase tracking-wider">
                  Company
                </h4>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  News
                </a>
              </div>

              {/* Resources  */}
              <div className="flex flex-col gap-3 lg:gap-4 min-w-[120px]">
                <h4 className="text-xs lg:text-[14px] font-medium text-white/60 mb-1 lg:mb-2 uppercase tracking-wider">
                  Resources
                </h4>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  Papers
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-sm lg:text-[16px]"
                >
                  Press Conferences
                </a>
              </div>

              {/* Get the app  */}
              <div className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-0">
                <h4 className="text-xs lg:text-[14px] text-white/60 font-medium mb-1 uppercase tracking-wider">
                  Get the app
                </h4>

                <div className="flex flex-row lg:flex-col gap-3 lg:gap-4">
                  <button className="flex w-fit items-center gap-2 lg:gap-3 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all group">
                    <FaWindows className="text-lg lg:text-xl group-hover:text-primary" />
                    <span className="text-sm lg:text-[16px]">Windows</span>
                  </button>

                  <button className="flex w-fit items-center gap-2 lg:gap-3 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all group">
                    <FaApple className="text-lg lg:text-xl group-hover:text-primary" />
                    <span className="text-sm lg:text-[16px]">macOS</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Bottom Bar ====== */}
      <div className="w-full bg-[#87DB1C] py-6 px-6 lg:px-[80px]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-black font-dmSans text-[14px] gap-4">
          <div className="text-center md:text-left">
            © 2025 K market. All rights reserved.
          </div>
          <div className="flex flex-row gap-6 lg:gap-10">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
