import React from "react";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="bg-primary h-16 flex justify-center">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <Logo />
        <Search />
        <button className="h-11 bg-dark py-[10px] px-4 rounded-xl text-primary font-bold">
          Give Feedback
        </button>
      </div>
    </div>
  );
};

export default Navbar;
