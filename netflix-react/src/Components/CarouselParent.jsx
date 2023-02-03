import { Component } from "react";
// import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";

class CarouselParent extends Component  {
    render () {
        return (
            <div id="rows-parent">
            <CarouselRow titleOf="Harry Potter" link="https://www.omdbapi.com/?apikey=4f6eac88&s=harry%20potter"></CarouselRow>
            <CarouselRow titleOf="Matrix" link="https://www.omdbapi.com/?apikey=4f6eac88&s=matrix"></CarouselRow>
            <CarouselRow titleOf="Star Wars" link="https://www.omdbapi.com/?apikey=4f6eac88&s=star%20wars"></CarouselRow>
            </div>

        )
    }

}

export default CarouselParent;


