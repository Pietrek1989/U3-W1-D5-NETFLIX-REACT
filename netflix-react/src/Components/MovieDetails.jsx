import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";
import Comments from "./Comments";

const MovieDetails = () => {
  const link = "http://www.omdbapi.com/?apikey=4f6eac88&i=";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const id = params.movieId;

  const fetchMovies = async () => {
    try {
      let response = await fetch(link + id);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovies(data);
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
      {isError && <ErrorNetflix errorMessage={errorMessage}></ErrorNetflix>}
      <h1 className="text-light font-italic mb-5">{movies.Title}</h1>
      <Row className="justify-content-center" id="movie-detail-img">
        {isLoading ? (
          <Col xs={8} md={6} className="d-flex justify-content-center">
            <LoadingNetflix></LoadingNetflix>
          </Col>
        ) : (
          <Col xs={8} md={6} className="d-flex justify-content-center ">
            <img className="movie-cover" src={movies.Poster} alt="poster" />
          </Col>
        )}
      </Row>
      <Comments id={id} movieForComment={movies}></Comments>
    </>
  );
};

export default MovieDetails;
