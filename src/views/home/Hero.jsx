import React from "react";
import headphoneImage from "../../assets/headphoneImage.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-dark text-light h-[320px]">
      <div className="flex justify-center items-center max-w-[820px]">
        <h1 className="font-bold font text-3xl text-center leading-relaxed">
          100 Thousand Songs, ad-free
          <br />
          Over thousands podcast episodes
        </h1>
        <img
          src={headphoneImage}
          alt="headphoneImage"
          className="ml-6 h-[212px]"
        />
      </div>
    </div>
  );
};

export default Hero;
