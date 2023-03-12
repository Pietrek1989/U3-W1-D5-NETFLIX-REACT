// import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";
import Genre from "./Genre";

const CarouselParent = () => {
  return (
    <div>
      <Genre></Genre>

      <div id="carousel-parent">
        <CarouselRow
          titleOf="fantasy"
          link={process.env.REACT_APP_BE_URL}
        ></CarouselRow>
        <CarouselRow
          titleOf="comedy"
          link={process.env.REACT_APP_BE_URL}
        ></CarouselRow>
        <CarouselRow
          titleOf="fantasy"
          link={process.env.REACT_APP_BE_URL}
        ></CarouselRow>
      </div>
    </div>
  );
};

export default CarouselParent;
