import React from 'react'

const CarouselComponent = ({title, nowPlayingMovies}) => {
    nowPlayingMovies.map(a => console.log(a.title))
  return (
    <div>
        <div className='mx-12'>
            <h1>{title}</h1>
            <div className='flex gap-4 overflow-auto '>
                {
                   nowPlayingMovies.map(a => <img className='w-72' src={'https://image.tmdb.org/t/p/w500/' + a.backdrop_path}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default CarouselComponent