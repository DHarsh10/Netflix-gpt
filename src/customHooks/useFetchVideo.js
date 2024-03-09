import React from "react";
import { useEffect } from "react";
import { VIDEO_API } from "../Utils/constants";
import { OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utils/moviesSlice";

const useFetchVideo = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchVideoFunc = async () => {
      try {
        const response = await fetch(
          VIDEO_API + id + "/videos?language=en-US",
          OPTIONS
        );
        const data = await response.json();
        dispatch(addMovieTrailer(data.results));
      } catch (msg) {
        console.log(msg);
      }
    };
    fetchVideoFunc();
  }, []);
};

export default useFetchVideo;
