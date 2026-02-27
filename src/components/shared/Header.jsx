import React, { useEffect, useState } from "react";
import GlassSurface from "../GlassSurface";
import { headerLinks, socialLinks } from "@/index";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/ui/headerLogo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showTopBar, setShowTopBar] = useState(true);

  const scrollToSection = (id) => {
    window.lenis.scrollTo(`#${id}`, {
      offset: -140,
      duration: 1.2,
    });
  };

  useEffect(() => {
    const sections = headerLinks.map((link) =>
      document.getElementById(link.scrollTo),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {

  let cleanup;

  const setup = () => {

    if (window.lenis) {

      const lenis = window.lenis;

      const handleScroll = ({ scroll }) => {

        if (scroll > 20) {
          setShowTopBar(false);
        } else {
          setShowTopBar(true);
        }

      };

      lenis.on("scroll", handleScroll);

      cleanup = () => lenis.off("scroll", handleScroll);

    } else {

      requestAnimationFrame(setup);

    }

  };

  setup();

  return () => cleanup?.();

}, []);

  return (
    <div className="w-full h-fit z-50 fixed top-0 ">
      {/*===== top bar  =====*/}
      <div
        className={`
    w-full flex flex-row justify-between
    bg-linear-to-r from-[#1F2C00] to-[#659201]
    px-5.5 py-2.75
    transition-all duration-300 ease-in-out
    
    ${showTopBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  `}
      >
        {/* left side data  */}
        <div className="w-fit h-fit flex flex-row gap-5 items-center ">
          {/* email  */}
          <div className="w-fit h-fit flex flex-row items-center font-dmSans text-white gap-2.75 text-[14px]  ">
            <HiOutlineMail style={{ size: 16 }} />

            <span className="h-full flex items-center">
              supportkmarket@gmail.com
            </span>
          </div>

          {/* working time  */}
          <div className="w-fit h-fit flex flex-row items-center font-dmSans text-white gap-2.75 text-[14px]  ">
            <FaRegClock style={{ size: 16 }} />

            <span className="h-full flex items-center">
              Working: 8.00am - 5.00pm
            </span>
          </div>
        </div>

        {/* right side data  */}
        <div className="w-fit h-fit flex flex-row items-center gap-2.75">
          {socialLinks.map((itm, idx) => {
            const Icon = itm.icon;
            return (
              <Link
                key={idx}
                to={itm.link}
                className=" text-white text-base cursor-pointer pb-2 "
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>

      {/*====== header navigaton bar======  */}
      <div className={`w-full h-fit px-16 transition-all duration-300 ease-in-out  ${showTopBar ? "pt-4 translate-y-0" : "pt-0 -translate-y-8"}`}>
        <GlassSurface
          width="100%"
          height="fit-content"
          borderRadius={8}
          distortionScale={-180}
          blur={25}
           redOffset={0}
  greenOffset={10}
  blueOffset={20}
          mixBlendMode="screen"
          
        >
         
         <div className="w-full relative h-fit flex flex-row justify-between items-center px-5 py-3 bg-white/10 rounded-lg backdrop-blur-lg border border-white/40 border-b-2 border-b-white/75 ">
          {/* left logo  */}

          <div className="w-fit h-fit ">
            <img src={logo} alt="logo image" className="w-12 h-auto " />
          </div>

          {/* right nav  */}

          <nav className="w-fit h-fit flex flex-row items-center gap-6 ">
            <div className=" w-fit flex flex-row items-center gap-2 ">
              {headerLinks.map((link, index) => {
                const isActive = activeSection === link.scrollTo;

                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.scrollTo)}
                    className={`
          px-4 py-1 rounded-lg transition-all  duration-300

          ${
            isActive
              ? "bg-white text-[#1E1E1E] shadow-lg"
              : "text-white hover:bg-white/40"
          }
        `}
                  >
                    {link.title}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className=" px-4 py-2 rounded-lg bg-[#73A700] text-white text-base "
            >
              Contact Us
            </button>
          </nav>
        </div>
        </GlassSurface>

        
      </div>
    </div>
  );
};

export default Header;
