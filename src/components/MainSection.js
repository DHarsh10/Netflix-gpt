import React from "react";
import BgVideo from "./BgVideo";
import VideoDesc from "./VideoDesc";
import { useSelector } from "react-redux";
import useFetchVideo from "../customHooks/useFetchVideo";

const MainSection = ({ movieId, mainMovie }) => {
  useFetchVideo(movieId);
  let movieVideos = useSelector((store) => store.movieSlice.moviesTrailer);
  
  if (!movieVideos) {
    return;
  }

  let trailerVideos = movieVideos.filter((video) => video.type === "Trailer");
  let trailerVideoKey = trailerVideos[0]?.key;

  return (
    <div className="relative">
      <BgVideo trailerVideoKey={trailerVideoKey} />
      <VideoDesc mainMovie = {mainMovie}/>
    </div>
  );
};

export default MainSection;
