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
        <div className="w-full h-fit px-[80px] py-16 z-10  ">
          <div className="w-full h-fit flex flex-row justify-between items-start">
            {/* left logo and content  */}

            <div className="w-fit h-full flex flex-col justify-between items-start gap-3.75 ">
              <img
                src={footerLogo}
                alt="logo image"
                className=" rounded h-14 w-auto  "
              />

              <h3 className="text-white font-redHat font-semibold text-[24px] ">
                We growing up your business with <br /> personal AI manager.
              </h3>

              <span className="font-dmSans text-sm text-white">
                K Market 2025
              </span>
            </div>

            {/* right side content  */}

            <div className="w-fit h-full pt-2 flex flex-row gap-14 text-white font-dmSans ">
              {/* Company  */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[14px] font-medium text-white/80 mb-2">
                  Company
                </h4>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  News
                </a>
              </div>

              {/* Resources  */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[14px] font-medium text-white/80 mb-2">
                  Resources
                </h4>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  Papers
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[16px]"
                >
                  Press Conferences
                </a>
              </div>

              {/* Get the app  */}
              <div className="flex flex-col gap-6">
                <h4 className="text-[14px] text-white/80 font-medium mb-1">
                  Get the app
                </h4>

                <button className="flex w-fit items-center gap-3 px-3.25 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all group">
                  <FaWindows className="text-xl group-hover:text-primary" />
                  <span className="text-[16px]">Windows</span>
                </button>

                <button className="flex w-fit items-center gap-3 px-3.25 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all group">
                  <FaApple className="text-xl group-hover:text-primary" />
                  <span className="text-[16px]">macOS</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Bottom Bar ====== */}
      <div className="w-full bg-[#87DB1C] py-6 px-[80px]">
        <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center text-black font-dmSans text-[14px]">
          <div>© 2025 K market. All rights reserved.</div>
          <div className="flex flex-row gap-10">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
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
