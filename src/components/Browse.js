import Header from "./Header";
import useFetchData from "../customHooks/useFetchData";
import { NOW_PLAYING_MOVIES_API, POPULAR_MOVIES_API } from "../Utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../Utils/moviesSlice";
import MainSection from "./MainSection";
import { useSelector } from "react-redux";
import SecondarySection from "./SecondarySection";

const Browse = () => {
  useFetchData(NOW_PLAYING_MOVIES_API, addNowPlayingMovies, "nowPlayingMovies");
  useFetchData(POPULAR_MOVIES_API, addPopularMovies, "popularMovies");

  let nowPlayingMovies = useSelector(
    (store) => store.movieSlice.nowPlayingMovies
  );
  

  let pM = useSelector(
    (store) => store.movieSlice.popularMovies
  );



  if (!nowPlayingMovies || !pM) {
    return;
  }


  
  let mainMovie = nowPlayingMovies[0];
  const { id } = mainMovie;

  

  return (
    <div>
      <section className="bg-black">
        <Header />
        <MainSection movieId= {id} mainMovie = {mainMovie}/>
        <SecondarySection />
      </section>
    </div>
  );
};

export default Browse;
