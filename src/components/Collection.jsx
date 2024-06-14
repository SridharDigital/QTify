import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import axios from "axios";
import Carousel from "./Carousel";

const Collection = ({ url, categoryTitle }) => {
  const [albums, setAlbums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    (async () => {
      const albums = await fetchAlbums();
      console.log({ albums });
      setAlbums(albums);
    })();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-6">
      <div className="flex text-light justify-between mb-6 font-semibold text-xl">
        <p>{categoryTitle}</p>
        <button
          className="text-primary"
          onClick={() => setShowCarousel(!showCarousel)}
        >
          {showCarousel ? "Show all" : "Collapse"}
        </button>
      </div>
      {showCarousel ? (
        <>
          <Carousel albums={albums} />
        </>
      ) : (
        <div className="flex flex-wrap gap-8">
          {albums?.map((album) => (
            <MusicCard
              key={album.id}
              image={album.image}
              title={album.title}
              likes={album.follows}
              id={album.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
