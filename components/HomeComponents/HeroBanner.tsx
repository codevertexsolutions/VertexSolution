import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="hero bg-[#fafafa] h-full 2xl:h-screen w-full pt-20"
      id="heroSection"
    >
      <div className="container  mx-auto px-5 h-full w-full grid lg:grid-cols-2 items-center">
        <div className="py-20">
          <span className="uppercase text-base font-bold py-1 inline-flex rounded-xl mb-4">
            Hey there, we&lsquo;are
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight up">
            Vertex Solution 👋
            <span className="text-dark-primary-color leading-tight inline-block">
              Da Tech Agency You Dserve
            </span>{" "}
            <br />
          </h1>
          <p className="text-base md:text-xl w-[80%] leading-9">
            We&lsquo;are specialize in building high-quality, fully responsive,
            and user-friendly websites and web applications using modern web
            tools & technologies.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="/services"
              className="inline-flex py-2 px-4 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex py-2 px-8 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <object
            data="/animated-svg/content-structure-animate.svg"
            aria-label="An Anmiated svg about html page"
          ></object>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
