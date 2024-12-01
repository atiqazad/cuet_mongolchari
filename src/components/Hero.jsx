import React from "react";
import imaginary_rover from "../../public/imaginary-rover .webp";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <>
      <div
        className="h-[600px] lg:h-[600px] bg-cover bg-center sm:p-32 pt-16 pl-16 filter brightness-50"
        style={{
          backgroundImage: `url(${imaginary_rover})`,
        }}
      >
        <HeroText />
      </div>
    </>
  );
};

export default Hero;
