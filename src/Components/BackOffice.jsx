import { useState } from "react";

const BackOffice = () => {
  const url = process.env.REACT_APP_BE_URL;
  const headers = {
    "Content-Type": "application/json",
  };
  const [genreMovies, setgenreMovies] = useState([]);
  const [movieState, setMovieState] = useState({
    title: "",
    year: 2011,
    type: "movie",
    category: "",
    poster: "",
  });

  const postMovies = async (e) => {
    e.preventDefault();
    try {
      //   const movie = {
      //     title: document.querySelector("#Title").value,
      //     year: document.querySelector("#Year").value,
      //     category: document.querySelector("#Category").value,
      //     poster: document.querySelector("#Poster").value,
      //   };
      console.log(movieState);
      let res = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify(movieState),
      });
      if (res.ok) {
      } else {
        console.log(res);
        // eslint-disable-next-line no-throw-literal
        throw res.status + " " + res.statusText;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editMovies = (e) => {
    e.preventDefault();
    const genre = document.getElementById("inputState").value;
    console.log(genre);
    fetch(`http://localhost:3001/movies?category=${genre}`)
      .then((dataRaw) => dataRaw.json())
      .then((data) => {
        console.log(data);

        // renderGenre(data);
        setgenreMovies(data);
        console.log(genreMovies);
      })
      .catch((error) => console.log(error));
  };

  const renderGenre = async (movies) => {
    let container = document.getElementById("list-movies");
    await movies.forEach((singleMovie) => {
      container.innerHTML += `
    <div class="d-flex justify-content-between flex-row">
      <div class="d-flex justify-content-between flex-row align-items-center w-50">
        <li id="${singleMovie.imdbID}" class="d-flex justify-content-between edit-list text-light">${singleMovie.title}</li>
        <img class="img-small-cover" src="${singleMovie.poster}">
      </div>
      <div class="d-flex justify-content-around w-50">
      <button class="btn-success" onclick='editEvent(${singleMovie.imdbID})'>Edit id:${singleMovie.imdbID}</button> 
      <button class="btn-danger" onclick='deleteEvent("${singleMovie.imdbID}")'>remove id:${singleMovie.imdbID}</button>
      </div>
      </div>`;
    });
  };

  const deleteEvent = async (id) => {
    try {
      let res = await fetch("http://localhost:3001/movies/" + id, {
        headers,
        method: "DELETE",
      });
      if (res.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editEvent = async (id) => {
    try {
      let res = await fetch(url + "/" + id, {
        headers,
        method: "PUT",
      });
      let data = await res.json();

      await console.log(data);
      await getMovieToEdit(data);
      let buttonContainer = document.getElementById("buttons");
      buttonContainer.innerHTML += `<button category="submit" className="btn btn-primary" onClick="editFinal('${data.imdbID}')">EDIT</button>`;
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieToEdit = async (data) => {
    try {
      let { title, year, poster, category } = await data;
      document.querySelector("#Title").value = title;
      document.querySelector("#Year").value = year;
      document.querySelector("#Category").value = category;
      document.querySelector("#Poster").value = poster;
    } catch (error) {
      console.log(error);
    }
  };

  const editFinal = async (id) => {
    console.log(id);
    try {
      console.log("runing");
      console.log(id);
      const editedEvent = {
        title: document.querySelector("#Title").value,
        year: document.querySelector("#Year").value,
        category: document.querySelector("#Category").value,
        poster: document.querySelector("#Poster").value,
      };
      console.log(id);
      let res = await fetch(url + "/" + id, {
        headers,
        method: "PUT",
        body: JSON.stringify(editedEvent),
      });
      if (res.ok) {
        console.log(res);
      } else {
        // eslint-disable-next-line no-throw-literal
        throw res.status + " " + res.statusText;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="error-container"></div>
      <div className="container backoffice-form-container">
        <div className="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            category="text"
            className="form-control"
            id="Title"
            value={movieState.title}
            onChange={(e) => {
              setMovieState({
                ...movieState,
                title: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <div className="form-group">
            <label for="exampleFormControlInput1">Year</label>
            <input
              category="text"
              className="form-control"
              id="Year"
              value={movieState.year}
              onChange={(e) => {
                setMovieState({
                  ...movieState,
                  year: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Category</label>
          <input
            category="text"
            className="form-control"
            id="Category"
            value={movieState.category}
            onChange={(e) => {
              setMovieState({
                ...movieState,
                category: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Poster</label>
          <input
            category="text"
            className="form-control"
            id="Poster"
            value={movieState.poster}
            onChange={(e) => {
              setMovieState({
                ...movieState,
                poster: e.target.value,
              });
            }}
          />
        </div>
        <div id="buttons" className="my-4">
          <button
            category="submit"
            className="btn btn-primary"
            onClick={postMovies}
          >
            Submit
          </button>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="inputState">EDIT LIST</label>
            <div className="d-flex align-items-center flex-row">
              <select id="inputState" className="form-control">
                <option selected>Choose a genre to edit</option>
                <option id="genre-action">fantasy</option>
                <option id="genre-horror">horror</option>
              </select>
              <button
                category="submit"
                className="btn btn-primary mx-3 font btn-get-movies p-2"
                onClick={editMovies}
              >
                Get movies
              </button>
            </div>
          </div>
        </div>
        <div>
          <ul id="list-movies" className="d-flex flex-column">
            {genreMovies &&
              genreMovies.map((singleMovie) => {
                return (
                  <div className="d-flex justify-content-between flex-row">
                    <div className="d-flex justify-content-between flex-row align-items-center w-50">
                      <li
                        id={singleMovie.imdbID}
                        className="d-flex justify-content-between edit-list text-light"
                      >
                        {singleMovie.title}
                      </li>
                      <img
                        className="img-small-cover"
                        src={singleMovie.poster}
                        alt="poster"
                      />
                    </div>
                    <div className="d-flex justify-content-around w-50">
                      <button
                        className="btn-success"
                        onclick={editEvent(singleMovie.imdbID)}
                      >
                        Edit id:{singleMovie.imdbID}
                      </button>
                      <button
                        className="btn-danger"
                        onclick={deleteEvent(singleMovie.imdbID)}
                      >
                        remove id:{singleMovie.imdbID}
                      </button>
                    </div>
                  </div>
                );
              })}
            ;
          </ul>
        </div>
      </div>
    </>
  );
};

export default BackOffice;
