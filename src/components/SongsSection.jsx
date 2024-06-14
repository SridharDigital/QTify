import axios from "axios";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "./Carousel";

let allSongs = [];

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async () => {
      const genres = await fetchGeneres();
      const songs = await fetchSongs();
      setGenres(genres);
      setSongs(songs);
      allSongs = songs;
    })();
  }, []);

  const fetchGeneres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filteredSongs = getFilteredSongs(value);
    setSongs(filteredSongs);
  }, [value]);

  const getFilteredSongs = (category) => {
    if (category === "all") return allSongs;
    const fiteredSongs = allSongs.filter((song) => song.genre.key === category);
    return fiteredSongs;
  };

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(value);
  return (
    <div className="max-w-[1400px] m-auto">
      <h2 className="text-light text-2xl font-semibold mb-3">Songs</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          sx={{
            "& .MuiTab-root": { color: "#ffffff", fontWeight: "bold" }, // Setting the default color of the tabs
            "& .Mui-selected": { color: "#ffffff" }, // Setting the color of the selected tab
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--primary)",
              height: "4px",
            }, // Setting the indicator color
          }}
        >
          <Tab value="all" label="All" />
          {genres?.map((genre) => (
            <Tab value={genre.key} label={genre.label} />
          ))}
        </Tabs>
      </Box>
      <div className="mt-5">
        <Carousel albums={songs} />
      </div>
    </div>
  );
};

export default SongsSection;
