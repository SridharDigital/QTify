import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Collection from "../../components/Collection";

const topAlbumURL = "https://qtify-backend-labs.crio.do/albums/top";
const newAlbumURL = "https://qtify-backend-labs.crio.do/albums/new";

const Home = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <div className="max-w-[1400px] m-auto">
        <Hero />
        <Collection url={topAlbumURL} categoryTitle="Top Albums" />
        <Collection url={newAlbumURL} categoryTitle="New Albums" />
      </div>
    </div>
  );
};

export default Home;
