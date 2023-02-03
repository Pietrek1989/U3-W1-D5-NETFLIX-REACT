import { Component } from "react";
import { Carousel } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";

class CarouselRow extends Component {

state = {
        movies: [],
        isLoading: true,
        isError: false,
        errorMessage: "",
      }

fetchMovies = async () => {
    try {
        let response = await fetch(this.props.link)

        if (response.ok) {

          let data = await response.json() 
          console.log(data) 

          this.setState({
            movies: data.Search,
            isLoading: false,
          })
        }
        else  { 
          this.setState({
              isLoading: false,

            })
            throw response.status + " " + response.statusText;
        }
      } catch (error) {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error,
        })

      }
  
    }
    
    

    
componentDidMount() {

      this.fetchMovies() //
}



    render() {
        return (

          <>
                <h2 className="text-light ml-5">{this.props.titleOf}  Collection</h2>
              
          
            <Carousel className="my-3">

         
            {this.state.isLoading &&
          (<LoadingNetflix></LoadingNetflix>)
          }
           
           {this.state.isError && 
          (<ErrorNetflix errorMessage={this.state.errorMessage}></ErrorNetflix>)
          }

               {this.state.movies.map((singleMovie) => {
                return (
                  

                    <Carousel.Item  className="col-md-2" interval={1000} key={singleMovie.imdbID}>
      
                                    <img className="movie-cover" src={singleMovie.Poster} alt="poster"/>
                    </Carousel.Item>
   
                   

                )
            })

        }

        </Carousel>
                 
</>
        )


}
}

export default CarouselRow;



