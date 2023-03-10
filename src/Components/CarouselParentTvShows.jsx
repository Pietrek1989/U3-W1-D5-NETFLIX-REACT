// import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";
import Genre from "./Genre";

const CarouselParentTvShows = () => {
  return (
    <div>
      <Genre></Genre>

      <div id="carousel-parent">
        <CarouselRow
          titleOf="Comedy"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=comedy"
        ></CarouselRow>
        <CarouselRow
          titleOf="Fantasy"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=fantasy"
        ></CarouselRow>
        <CarouselRow
          titleOf="Thriller"
          link="https://www.omdbapi.com/?apikey=4f6eac88&s=thriller"
        ></CarouselRow>
      </div>
    </div>
  );
};

export default CarouselParentTvShows;
