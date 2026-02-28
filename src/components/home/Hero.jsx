import React, { useLayoutEffect, useRef } from "react";
import heroBg from "../../assets/home/heroImage.jpg";
import bottomDesign from "../../assets/ui/bottomShape.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Text animation
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative h-[60vh] md:min-h-screen flex flex-col bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/*===== bottom ui design ===== */}
      <div className="w-full h-fit absolute z-10 bottom-0">
        <img src={bottomDesign} alt="" className="w-full object-cover " />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-[#FFFFFF00]"></div>

      {/* ===== content =====  */}

      <div className="w-full h-fit flex flex-col z-10 items-start px-6 lg:px-16 pt-32 lg:pt-40 gap-6 lg:gap-9 ">
        <h1
          ref={headingRef}
          className="text-white font-redHat font-bold text-4xl md:text-5xl lg:text-7xl leading-tight  "
        >
          Building a <br className="hidden lg:block" />
          Legacy of Trust
        </h1>

        <p
          ref={textRef}
          className="text-left text-balance text-[#F1F1F1] max-w-[840px] text-base lg:text-xl leading-relaxed "
        >
          Kmart Group, founded by the visionary Late Moossa Haji Kombantavida 41
          years ago in 1983, has made a significant mark on the UAE's business
          scene. Our journey started at the Rashidiya Ummu Ramool branch,
          setting the stage for our mission to create a network of supermarkets,
          groceries, and restaurants.
        </p>
      </div>
    </div>
  );
};

export default Hero;
