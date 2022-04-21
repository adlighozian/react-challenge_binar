import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../stores/actions/moviesAction";

function MoviesList() {
  const { movies, loading, error } = useSelector(
    (state) => state.moviesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);
  console.log(movies);
  return (
    <div>
      <h4>moviesList</h4>
      <div>
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <h1>
                {item.title}
                <img src={item} alt=""></img>
              </h1>
            );
          })}
      </div>
    </div>
  );
}

export default MoviesList;
