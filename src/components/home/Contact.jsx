import React, { useLayoutEffect, useRef } from "react";
import contactBg from "../../assets/home/contact-bg.png";
import { socialLinks } from "@/index";
import contactSuite from "../../assets/home/contact-suit-image.png";
import bottomDesign from "../../assets/ui/bottomShape.png";
import contact2 from "../../assets/home/contactImage2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Main contact box
      gsap.from(".contact-box-content", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-box",
          start: "top 75%",
        },
      });

      // Bottom section
      gsap.from(".bottom-contact-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bottom-contact-card",
          start: "top 80%",
        },
      });

      gsap.from(".bottom-contact-text", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".bottom-contact-card",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-fit relative   min-h-screen flex flex-col  max-w-screen-2xl mx-auto gap-16  "
    >
      {/* ======= contact input section ======= */}
      <div
        className="w-full h-fit lg:h-[80vh] shadow-[0_-15px_40px_15px_#A4F000,0_15px_40px_15px_#A4F000] bg-cover bg-center bg-no-repeat px-6 lg:px-16 py-14 contact-box overflow-x-hidden "
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row justify-between border-2 lg:border-5 border-[#A4F000] backdrop-blur bg-black/12 contact-box-content overflow-hidden">
          {/* left content  */}
          <div className="w-full lg:w-[593px] h-full py-12 lg:py-16 px-6 lg:px-7 ">
            <div className="w-full h-full flex flex-col justify-center gap-6 lg:gap-3.75 lg:p-11 items-start ">
              <h2 className=" font-redHat font-normal text-3xl lg:text-4xl text-white ">
                Get In Touch
              </h2>

              <div className=" w-full h-fit flex flex-col sm:flex-row items-start sm:items-center py-2 gap-4 ">
                <div className="w-full sm:w-fit h-fit flex flex-row gap-2.5 ">
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    className="flex-1 w-full sm:w-64 px-3 py-2 rounded-lg border bg-white border-gray-300 outline-none focus:border-[#A4F000] focus:ring-2 focus:ring-primary/20 transition-all "
                  />

                  <button
                    className="
                    px-4 py-2 bg-[#A4F000] rounded-lg text-[#121212] text-sm font-dmSans hover:bg-[#A4F000]/90 active:scale-95 transition-all border border-[#2C2C2C] "
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="w-fit h-fit flex flex-col gap-3.75 ">
                <span className=" text-[#F1F1F1] font-dmSans text-sm  ">
                  Follow us on
                </span>

                <div className="flex flex-row w-fit h-fit gap-2 ">
                  {socialLinks.map((itm, idx) => {
                    const Icon = itm.icon;
                    return (
                      <div
                        key={idx}
                        className="text-xs w-7 h-7 rounded-full flex items-center justify-center bg-[#A4F000] "
                      >
                        <Icon />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right image  */}
          <div className="flex-1 w-full lg:min-w-1/2 lg:max-w-[722px] h-64 lg:h-full ">
            <div className="w-full h-full lg:rounded-tl-[174px] bg-[radial-gradient(112.78%_112.78%_at_53.84%_58.31%,#A4F000_0%,#5E8A00_100%)] flex justify-center items-end lg:items-center ">
              <img
                src={contactSuite}
                alt=""
                className="h-full object-contain z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit relative overflow-hidden px-6 lg:px-16 mb-12 lg:mb-0">
        {/*===== bottom ui design ===== */}
        <div className="w-full h-fit absolute z-10 bottom-0">
          <img
            src={bottomDesign}
            alt=""
            className="w-full object-cover object-center "
          />
        </div>

        <div className="w-full h-fit lg:h-[478px] bg-linear-to-r from-[#787878] via-[#121212] to-[#121212] flex flex-col lg:flex-row overflow-hidden rounded-[24px] border border-[#333333] gap-7 bottom-contact-card ">
          <div className="w-full lg:w-1/2 aspect-video lg:h-full bottom-contact-image ">
            <img
              src={contact2}
              alt=""
              className="h-full w-full object-center object-cover "
            />
          </div>

          <div className=" relative w-full lg:w-1/2 h-full py-12 lg:py-0 flex items-center justify-center bottom-contact-text px-6 lg:px-0 ">
            {/* ===gradient overlay ===== */}
            <div className="w-full h-full absolute -right-50 rounded-full  bg-[radial-gradient(circle_at_center,#121212_0%,#333333_25%,transparent_70%)] blur-3xl"></div>

            <h3 className="text-center text-white font-bold font-redHat text-2xl lg:text-4xl z-10 leading-snug ">
              Kmart Group UAE — Your <br className="hidden lg:block" />{" "}
              destination for premium retail <br className="hidden lg:block" />{" "}
              shopping and memorable dining <br className="hidden lg:block" />{" "}
              experiences across the United <br className="hidden lg:block" />{" "}
              Arab Emirates. Since 1983.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
