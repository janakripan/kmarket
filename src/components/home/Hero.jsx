import React from "react";
import heroBg from "../../assets/home/heroImage.jpg";
import bottomDesign from "../../assets/ui/bottomShape.png";


const Hero = () => {
  return (
    <div
      className="w-full relative h-screen flex flex-col bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/*===== bottom ui design ===== */}
      <div className="w-full h-fit absolute z-10 bottom-0">
        <img src={bottomDesign} alt="" className="w-full object-cover " />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-[#FFFFFF00]">

      </div>


      {/* ===== content =====  */}

      <div className="w-full h-fit flex flex-col z-10 items-start px-16 pt-40 gap-9 ">

        <h1 className="text-white font-redHat font-bold text-7xl  ">
          Building a <br />Legacy of Trust
        </h1>

        <p className="text-left text-balance text-[#F1F1F1] max-w-[840px] text-xl ">
        Kmart Group, founded by the visionary Late Moossa Haji Kombantavida 41 years ago in 1983, has made a significant mark on the UAE's business scene. Our journey started at the Rashidiya Ummu Ramool branch, setting the stage for our mission to create a network of supermarkets, groceries, and restaurants.
        </p>

      </div>

     


    </div>
  );
};

export default Hero;
