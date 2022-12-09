import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiKey } from "../../config/key";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
  const imageMovie = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${imageMovie}${data.poster_path}`,
          realeseDate: data.release_date,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="container-movie">
        <img src={`${movie.image}`} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="realeaseDate">
            Data de lançamento: {movie.realeseDate}
          </span>
          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
