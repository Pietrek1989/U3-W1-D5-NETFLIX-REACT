import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";
import { Link } from "react-router-dom";

const CarouselRow = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErorr, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      let response = await fetch(props.link);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        setIsLoading(false);

        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="text-light ml-5">{props.titleOf} Collection</h2>

      {isLoading && <LoadingNetflix></LoadingNetflix>}

      {isErorr && <ErrorNetflix errorMessage={errorMessage}></ErrorNetflix>}
      <Carousel className="wrapper">
        <Carousel.Item className="section" id="section1">
          {movies.map((singleMovie) => {
            return (
              <div className="item" key={singleMovie.imdbID}>
                <Link to={"/details/" + singleMovie.imdbID}>
                  <img
                    className="movie-cover"
                    src={singleMovie.Poster}
                    alt="poster"
                  />
                </Link>
              </div>
            );
          })}
        </Carousel.Item>
        <Carousel.Item className="section" id="section2">
          {movies.map((singleMovie) => {
            return (
              <div className="item" key={singleMovie.imdbID}>
                <Link to={"/details/" + singleMovie.imdbID}>
                  <img
                    className="movie-cover"
                    src={singleMovie.Poster}
                    alt="poster"
                  />
                </Link>
              </div>
            );
          })}
          =
        </Carousel.Item>

        <Carousel.Item className="section" id="section3">
          =
          {movies.map((singleMovie) => {
            return (
              <div className="item" key={singleMovie.imdbID}>
                <Link to={"/details/" + singleMovie.imdbID}>
                  <img
                    className="movie-cover"
                    src={singleMovie.Poster}
                    alt="poster"
                  />
                </Link>
              </div>
            );
          })}
          =
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselRow;
