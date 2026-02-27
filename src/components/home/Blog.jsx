import React from "react";
import blogBg from "../../assets/ui/blogBg.png";
import bottomDesign from "../../assets/ui/bottomShape.png";
import { blogData } from "@/index";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div
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
          className="w-full object-cover object-center "
        />
      </div>

      {/* dark layout  */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* ====== content ======  */}
      <div className="w-full p-16 h-full z-10 flex flex-col gap-5.5 items-start ">

        {/* ===== header =====  */}
        <div className="w-fit h-fit flex flex-col gap-7  ">

          <div className="flex flex-col w-fit">
            <h5 className="font-dmSans w-fit px-2.75 pb-1 font-bold text-white text-sm border-b border-[#A4F000] uppercase ">
              Business Sector
            </h5>
            <div className="w-full h-2.25 bg-[#727171]"></div>
          </div>

          <h2 className="text-[#DDDDDD] font-bold text-[48px] font-redHat leading-14 ">
            Our Core Areas
          </h2>

        </div>

        <div className="w-full h-fit flex flex-row justify-between  ">
            {blogData.map((itm,idx)=>(
                <BlogCard key={idx} item={itm} />
            ))}

        </div>
      </div>
    </div>
  );
};

export default Blog;
