import React from "react";
import Hero from "../components/home/Hero";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Help from "@/components/home/Help";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-fit min-h-screen flex flex-col gap-16 ">
      <section id="hero">
        <Hero />
      </section>

      <section >
        <About id="about" />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="help">
        <Help />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
