import React, { useLayoutEffect, useRef } from "react";
import blogBg from "../../assets/ui/blogBg.png";
import bottomDesign from "../../assets/ui/bottomShape.png";
import { blogData } from "@/index";
import BlogCard from "./BlogCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.from(".blog-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-header",
          start: "top 80%",
        },
      });

      // Cards staggered animation
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".blog-cards-container",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-fit relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto   "
      style={{
        backgroundImage: `url(${blogBg})`,
      }}
    >
      {/*===== bottom ui design ===== */}
      <div className="w-full h-fit absolute z-10 bottom-0">
        <img
          src={bottomDesign}
          alt=""
          className="w-full object-cover object-bottom lg:object-center "
        />
      </div>

      {/* dark layout  */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* ====== content ======  */}
      <div className="w-full px-6 lg:px-16 py-16 lg:py-24 h-full z-10 flex flex-col gap-8 lg:gap-12 items-start  ">
        {/* ===== header =====  */}
        <div className="w-fit h-fit flex flex-col gap-4 lg:gap-7 blog-header ">
          <div className="flex flex-col w-fit">
            <h5 className="font-dmSans w-fit px-2.75 pb-1 font-bold text-white text-xs lg:text-sm border-b border-[#A4F000] uppercase ">
              Business Sector
            </h5>
            <div className="w-full h-1 lg:h-2.25 bg-[#727171]"></div>
          </div>

          <h2 className="text-[#DDDDDD] font-bold text-3xl lg:text-[48px] font-redHat leading-tight lg:leading-14 ">
            Our Core Areas
          </h2>
        </div>

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:justify-between blog-cards-container pb-2 ">
          {blogData.map((itm, idx) => (
            <div key={idx} ref={(el) => (cardsRef.current[idx] = el)}>
              <BlogCard item={itm} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
