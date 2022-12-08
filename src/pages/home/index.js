import { Container, MovieList, Movie } from "./styles";

const Home = () => {
  const movies = [
    {
      id: 1,
      tittle: "A procura da felicidade",
      image_url:
        "https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg",
    },
    {
      id: 2,
      tittle: "Lobo de wall Street",
      image_url:
        "https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg",
    },
    {
      id: 3,
      tittle: "Thor",
      image_url:
        "https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg",
    },
  ];

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="https: //google.com.br">
                <img src={movie.image_url} alt={movie.tittle} />
              </a>
              <span>{movie.tittle}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;
