import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";

const Comments = (props) => {
  const linkComments = "https://striveschool-api.herokuapp.com/api/comments/";
  let counter = 0;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const id = props.id;
  const fetchComments = async () => {
    try {
      let response2 = await fetch(linkComments + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
        },
      });

      if (response2.ok) {
        let data2 = await response2.json();
        console.log(data2);
        setComments(data2);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        // eslint-disable-next-line no-throw-literal
        throw response2.status + " " + response2.statusText;
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error);
    }
  };
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && <LoadingNetflix></LoadingNetflix>}
      {isError && <ErrorNetflix errorMessage={errorMessage}></ErrorNetflix>}

      <div className="container-lg">
        <div className="text-center  mt-3">
          <h2 className="text-light ">
            <i className="bi bi-stars"></i>Movie Reviews
          </h2>
        </div>
        <Row className="justify-content-center my-5">
          <Col lg={8}>
            <ListGroup>
              {comments.map((comment) => {
                return (
                  <ListGroupItem className="py-3" key={comment._id}>
                    <div className="pb-2">
                      {new Array(comment.rate).fill(null).map(() => (
                        <i className="bi bi-star-fill" key={counter++}></i>
                      ))}
                    </div>
                    <p className="mb-1 text-light">{comment.comment}</p>
                    <small className="text-light text-muted">
                      Review by <strong>{comment.author}</strong>
                    </small>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Comments;
