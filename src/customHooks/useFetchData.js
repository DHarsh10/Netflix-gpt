import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "../Utils/constants";

const useFetchData = (NOW_PLAYING_MOVIES_API, MOVIES_ACTION, MOVIES_LIST_KEY) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        let response = await fetch(NOW_PLAYING_MOVIES_API, OPTIONS);
        let data = await response.json();
        const movieData = data.results;
        dispatch(MOVIES_ACTION(movieData));
      } catch (msg) {
        console.log(msg);
      }
    };

    fetchMoviesData();
  }, []);

  const moviesList = useSelector((state) => state.movieSlice);
  return moviesList[MOVIES_LIST_KEY];
};

export default useFetchData;
