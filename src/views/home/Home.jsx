import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Collection from "../../components/Collection";

const url = "https://qtify-backend-labs.crio.do/albums/top";
const categoryTitle = "Top Albums";

const Home = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-[1400px] m-auto">
        <Hero />
        <Collection url={url} categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default Home;
