import React from 'react'
import { useSelector } from 'react-redux'
import CarouselComponent from './CarouselComponent';

const SecondarySection = () => {
const nowPlayingMovies = useSelector(store => store.movieSlice.nowPlayingMovies);
  return (
    <div>
        <CarouselComponent title = "Trending Now" nowPlayingMovies = {nowPlayingMovies}/>
    </div>
  )
}

export default SecondarySection