import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ErrorNetflix from "./ErrorNetflix";

const AddComment = (props) => {
  const [commentState, setCommentState] = useState({
    rate: "1",
    comment: "",
    elementId: props.id.imdbID,
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendComment = async () => {
    try {
      console.log("I'm about to send this:", commentState);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(commentState),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Comment saved!");
        props.onLoad();
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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info">Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter comment"
          value={commentState.comment}
          onChange={(e) => {
            setCommentState({
              ...commentState,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-info">Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rating"
          value={commentState.rate}
          onChange={(e) => {
            setCommentState({
              ...commentState,
              rate: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Button
        variant="info"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          sendComment();
        }}
      >
        Submit
      </Button>
      {isError && <ErrorNetflix errorMessage={errorMessage}></ErrorNetflix>}
    </Form>
  );
};

export default AddComment;
