import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";
import Comments from "./Comments";

const MovieDetails = () => {
  const link = process.env.REACT_APP_BE_URL;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const id = params.movieId;

  const fetchMovies = async () => {
    try {
      let response = await fetch(link + "/" + id);

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
      <h1 className="text-light font-italic mb-5">{movies.title}</h1>

      <Row className="justify-content-center" id="movie-detail-img">
        {isLoading ? (
          <Col xs={8} md={4} className="d-flex justify-content-center">
            <LoadingNetflix></LoadingNetflix>
          </Col>
        ) : (
          <>
            <Col
              xs={8}
              md={4}
              className="d-flex justify-content-center flex-column"
            >
              {/* <div className="d-flex flex-row align-items-start justify-content-between text-light ">
                <p className="text-light">
                  <i className="fab fa-imdb mr-3"></i>
                  IMDB: {movies.imdbRating}
                </p>
                <p>
                  {movies.Ratings[1].Source} : {movies.Ratings[1].Value}
                </p>

                <p>
                  {movies.Ratings[2].Source} : {movies.Ratings[2].Value}
                </p>
              </div> */}
              <img className="movie-cover" src={movies.poster} alt="poster" />
            </Col>
          </>
        )}

        <Col
          xs={8}
          md={4}
          className="d-flex justify-content-center flex-column text-center"
        >
          {/* <h5 className="text-light">{movies.Plot}</h5>
          <p className="text-light">
            <strong>Director :</strong> {movies.Director}
          </p>
          <p className="text-light">
            <strong>Actors :</strong> {movies.Actors}
          </p> */}
          <p className="text-light">
            <strong>Genre :</strong> {movies.category}
          </p>
          <p className="text-light">
            <strong className="text-align-center">Story:</strong>
            <br></br>
            {movies.story}{" "}
          </p>
        </Col>
      </Row>
      <Comments id={id} movieForComment={movies}></Comments>
    </>
  );
};

export default MovieDetails;
