import React from "react";

const BlogCard = ({ item }) => {
  return (
    <div className="w-full max-w-[419px] aspect-square  relative border border-[#A4F000] rounded-[16px]  ">
      <div className="w-full h-full flex items-center justify-center rounded-[16px] overflow-hidden ">
        <img
        src={item.image}
        alt={item.title}
        className=" h-full w-full object-cover object-center"
      />
      </div>

      <div className="w-full h-fit flex items-center justify-center  px-3.75 absolute -bottom-9 z-10 ">
        <div className=" w-full border border-[#A4F000] rounded-lg px-2.75 py-5.75 backdrop-blur-xs  text-center text-white font-bold font-redHat text-xl ">

            {item.title}

        </div>
      </div>
    </div>
  );
};

export default BlogCard;
