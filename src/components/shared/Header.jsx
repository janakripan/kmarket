import React, { useEffect, useState } from "react";
import { headerLinks, socialLinks } from "@/index";
import { HiOutlineMail, HiMenu, HiX } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/ui/headerLogo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, {
        offset: -140,
        duration: 1.2,
      });
    }
    setIsMenuOpen(false);
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
    w-full hidden lg:flex flex-row justify-between
    bg-linear-to-r from-[#1F2C00] to-[#659201]
    px-16 py-2.75
    transition-all duration-300 ease-in-out
    
    ${showTopBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  `}
      >
        {/* left side data  */}
        <div className="w-fit h-fit flex flex-row gap-5 items-center ">
          {/* email  */}
          <div className="w-fit h-fit flex flex-row items-center font-dmSans text-white gap-2.75 text-[14px]">
            <HiOutlineMail size={16} />
            <span className="h-full flex items-center">
              supportkmarket@gmail.com
            </span>
          </div>

          {/* working time  */}
          <div className="w-fit h-fit flex flex-row items-center font-dmSans text-white gap-2.75 text-[14px]">
            <FaRegClock size={16} />
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
      <div
        className={`w-full h-fit px-6 lg:px-16 transition-all duration-300 ease-in-out  ${
          showTopBar
            ? "pt-4 translate-y-0"
            : "pt-0 translate-y-0 lg:-translate-y-8"
        }`}
      >
        <div className="w-full relative h-fit flex flex-row justify-between items-center px-5 py-3 bg-white/10 rounded-lg backdrop-blur-lg border border-white/40 border-b-2 border-b-white/75 ">
          {/* left logo  */}
          <div className="w-fit h-fit ">
            <img src={logo} alt="logo image" className="w-10 lg:w-12 h-auto " />
          </div>

          {/* right nav (Desktop) */}
          <nav className="hidden lg:flex w-fit h-fit flex-row items-center gap-6 ">
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

          {/* Hamburger Icon (Mobile) */}
          <button
            className="lg:hidden text-white text-3xl p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-[#121212] z-60 lg:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <img src={logo} alt="logo" className="w-10 h-auto" />
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {headerLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.scrollTo)}
                className={`text-2xl font-redHat text-left ${
                  activeSection === link.scrollTo
                    ? "text-[#A4F000] font-bold"
                    : "text-white"
                }`}
              >
                {link.title}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-6 py-4 rounded-xl bg-[#73A700] text-white text-xl font-bold text-center"
            >
              Contact Us
            </button>
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-white/60 text-sm font-dmSans uppercase tracking-widest">
                Email Us
              </p>
              <p className="text-white text-lg">supportkmarket@gmail.com</p>
            </div>
            <div className="flex flex-row gap-6 mt-4">
              {socialLinks.map((itm, idx) => {
                const Icon = itm.icon;
                return (
                  <Link key={idx} to={itm.link} className="text-white text-2xl">
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
