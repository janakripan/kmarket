import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Lenis from "lenis";

const MainLayout = () => {

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // scroll speed
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

      window.lenis = lenis;


    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col relative bg-[#F1F1F1] ">
      <Header />

      <div id="detail">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
