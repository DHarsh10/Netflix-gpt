import Header from "./Header";
import useFetchData from "../customHooks/useFetchData";
import { NOW_PLAYING_MOVIES_API, POPULAR_MOVIES_API } from "../Utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../Utils/moviesSlice";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchData(NOW_PLAYING_MOVIES_API, addNowPlayingMovies, "nowPlayingMovies");
  useFetchData(POPULAR_MOVIES_API, addPopularMovies, "popularMovies");

  let nowPlayingMovies = useSelector(
    (state) => state.movieSlice.nowPlayingMovies
  );
  let popularMovies = useSelector((state) => state.movieSlice.popularMovies);
  if (!nowPlayingMovies) {
    return;
  }
  // nowPlayingMovies.map(a => console.log(a))

  return (
    <div>
      <section className="h-32">
        <Header />
        <div className="flex gap-10">
          <div>
            <h1> Now Playing Movies</h1>
            <ol>
              {nowPlayingMovies.map((a) => (
                <li li className="text-red-700">{a.title}</li>
              ))}
            </ol>
          </div>

          <div>
            <h1> Popular Movies</h1>
            <ol>
              {popularMovies &&
                popularMovies.map((a) => (
                  <li className="text-green-800">{a.title}</li>
                ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Browse;
