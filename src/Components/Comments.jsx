import { useEffect, useState } from "react";
import { Col, ListGroup, ListGroupItem, Row, Button } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";
import LoadingNetflix from "./LoadingNetflix";
import AddComment from "./AddComment";

const Comments = (props) => {
  const linkComments = "http://localhost:3001/reviews/";
  let counter = 0;
  const [comments, setComments] = useState([]);
  //   const [currentComment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const id = props.id;
  const afterLoad = () => {
    fetchComments();
  };
  const fetchComments = async () => {
    try {
      let response2 = await fetch(linkComments + id);
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

  const deleteComment = async (commentId) => {
    try {
      console.log("I'm about to delete this:", commentId);
      let response = await fetch(linkComments + id + "/" + commentId, {
        method: "DELETE",
      });
      console.log(response);
      if (response.ok) {
        alert("comment deleted!");
        fetchComments();
      } else {
        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error);
    }
  };

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
        <Row className="justify-content-center my-5 comment-section">
          <Col lg={8}>
            <ListGroup>
              {comments.map((comment) => {
                return (
                  <ListGroupItem className="py-3" key={comment.id}>
                    <div className="pb-2">
                      {new Array(comment.rate).fill(null).map(() => (
                        <i className="bi bi-star-fill" key={counter++}></i>
                      ))}
                    </div>
                    <p className="mb-1 text-light">{comment.comment}</p>
                    <div className="d-flex justify-content-between">
                      {/* <small className="text-light text-muted">
                        Review by <strong>{comment.author}</strong>
                      </small> */}
                      <Button
                        variant="danger"
                        size="sm"
                        className="mt-0 mb-3 delete-button"
                        type="submit"
                        onClick={() => {
                          //   setComment(comment._id);
                          deleteComment(comment.id);
                        }}
                      >
                        DELETE
                      </Button>
                    </div>
                  </ListGroupItem>
                );
              })}
              <AddComment id={id} onLoad={afterLoad}></AddComment>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Comments;
