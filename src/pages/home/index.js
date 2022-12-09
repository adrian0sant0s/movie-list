import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, MovieList, Movie } from "./styles";
import { ApiKey } from "../../config/key";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const imageMovie = "https://image.tmdb.org/t/p/w500/";

  console.log(movies);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Últimos lançamentos</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imageMovie}${movie.poster_path}`}
                  alt={movie.tittle}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;
