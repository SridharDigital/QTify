import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import axios from "axios";

const Collection = ({ url, categoryTitle }) => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const topAlbums = await fetchTopAlbums();
      console.log({ topAlbums });
      setTopAlbums(topAlbums);
    })();
  }, []);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="flex text-light justify-between mb-6 font-semibold text-xl">
        <p>{categoryTitle}</p>
        <button className="text-primary">Collapse</button>
      </div>
      <div className="flex flex-wrap gap-8">
        {topAlbums?.map((album) => (
          <MusicCard
            key={album.id}
            image={album.image}
            title={album.title}
            likes={album.follows}
            id={album.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
