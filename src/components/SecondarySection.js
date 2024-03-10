import React from 'react'
import { useSelector } from 'react-redux'
import CarouselComponent from './CarouselComponent';

const SecondarySection = () => {
const nowPlayingMovies = useSelector(store => store.movieSlice.nowPlayingMovies);
const popularMovies = useSelector(store => store.movieSlice.popularMovies);
console.log(popularMovies)

  return (
    <div className="bg-black">
      <div className='z-20 relative -mt-44'>
        <CarouselComponent title="Trending Now" moviesType={nowPlayingMovies} />
        <CarouselComponent title="Popular Movies" moviesType={popularMovies} />
      </div>
    </div>
  );
}

export default SecondarySection