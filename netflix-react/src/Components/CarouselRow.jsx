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
                    src={singleMovie.poster}
                    s
                    alt="poster"
                  />
                </Link>
                <div className="infos-container p-3">
                  <div className="d-flex justify-content-between py-2 icon-group">
                    <div className="d-flex icon-group-left">
                      <li className="circle play-circle">
                        <i className="bi bi-play-fill"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-plus"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-hand-thumbs-up"></i>
                      </li>
                    </div>
                    <div>
                      <li className="circle">
                        <i className="bi bi-arrow-down py-2"></i>
                      </li>
                    </div>
                  </div>
                  <div className="info-row2 py-2 d-flex justify-content-around flex-row">
                    {/* <span className="text-success">98% Match</span> */}
                    <span className="border border-ligh">16+</span>
                    <span>{singleMovie.year}</span>
                    <span>
                      <small className="border border-light">HD</small>
                    </span>
                  </div>
                  <div className="info-row3">
                    <ul className="d-flex py-1 px-0">
                      <li className="mx-3">Emotional</li>
                      <li className="mx-3">Drama</li>
                      <li className="mx-3">Medical</li>
                    </ul>
                  </div>
                </div>
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
                    src={singleMovie.poster}
                    alt="poster"
                  />
                </Link>
                <div className="infos-container p-3">
                  <div className="d-flex justify-content-between py-2 icon-group">
                    <div className="d-flex icon-group-left">
                      <li className="circle play-circle">
                        <i className="bi bi-play-fill"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-plus"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-hand-thumbs-up"></i>
                      </li>
                    </div>
                    <div>
                      <li className="circle">
                        <i className="bi bi-arrow-down py-2"></i>
                      </li>
                    </div>
                  </div>
                  <div className="info-row2 py-2 d-flex justify-content-around flex-row">
                    {/* <span className="text-success">98% Match</span> */}
                    <span className="border border-ligh">16+</span>
                    <span>{singleMovie.year}</span>
                    <span>
                      <small className="border border-light">HD</small>
                    </span>
                  </div>
                  <div className="info-row3">
                    <ul className="d-flex py-2 px-0">
                      <li className="mx-3">Emotional</li>
                      <li className="mx-3">Drama</li>
                      <li className="mx-3">Medical</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          =
        </Carousel.Item>

        <Carousel.Item className="section" id="section3">
          {movies.map((singleMovie) => {
            return (
              <div className="item" key={singleMovie.imdbID}>
                <Link to={"/details/" + singleMovie.imdbID}>
                  <img
                    className="movie-cover"
                    src={singleMovie.poster}
                    alt="poster"
                  />
                </Link>
                <div className="infos-container p-3">
                  <div className="d-flex justify-content-between py-2 icon-group">
                    <div className="d-flex icon-group-left">
                      <li className="circle play-circle">
                        <i className="bi bi-play-fill"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-plus"></i>
                      </li>
                      <li className="circle">
                        <i className="bi bi-hand-thumbs-up"></i>
                      </li>
                    </div>
                    <div>
                      <li className="circle">
                        <i className="bi bi-arrow-down py-2"></i>
                      </li>
                    </div>
                  </div>
                  <div className="info-row2 py-2 d-flex justify-content-around flex-row">
                    {/* <span className="text-success">98% Match</span> */}
                    <span className="border border-ligh">16+</span>
                    <span>{singleMovie.year}</span>
                    <span>
                      <small className="border border-light">HD</small>
                    </span>
                  </div>
                  <div className="info-row3">
                    <ul className="d-flex py-2 px-0">
                      <li className="mx-3">Emotional</li>
                      <li className="mx-3">Drama</li>
                      <li className="mx-3">Medical</li>
                    </ul>
                  </div>
                </div>
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
