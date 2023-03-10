import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();

  return (
    <Row className="text-light flex-column align-items-center">
      <img src={props.logo} alt="logo" style={{ width: "50vw" }} />
      <h2>Whoops something went wrong...</h2>
      <p>Press here to get back to Home</p>
      <Button
        style={{ width: "100px", lineHeight: 2, padding: 5 }}
        variant="danger"
        onClick={() => navigate("/")}
      >
        HOME
      </Button>
    </Row>
  );
};
export default NotFound;
