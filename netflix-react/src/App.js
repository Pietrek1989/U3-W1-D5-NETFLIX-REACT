import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CarouselParent from "./Components/CarouselParent.jsx";
import NavBar from "./Components/NavBar";
import logo from "./assets/netflix_logo.png";
import avatar from "./assets/avatar.png";
import Footer from "./Components/Footer";
import ProfilePage from "./Components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar logo={logo} avatar={avatar}></NavBar>
        </div>
        <Routes>
          <Route element={<CarouselParent />} path="/" />
          <Route element={<CarouselParent />} path="/movies" />
          <Route element={<MovieDetails />} path="/details/:movieId" />
          <Route
            element={<ProfilePage logo={logo} avatar={avatar}></ProfilePage>}
            path="/profile"
          />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
