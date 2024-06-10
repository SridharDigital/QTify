import React, { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-light flex h-10 rounded-lg border border-dark w-2/5 pl-3">
      <input
        type="search"
        placeholder="Search a album of your choice"
        className="outline-none w-full placeholder:text-dark"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="flex justify-center items-center border px-5 rounded-br-lg rounded-tr-lg ml-2 border-l-dark">
        <img src={searchIcon} alt="searchIcon" className="h-6" />
      </div>
    </div>
  );
};

export default Search;
