import { Spinner } from "react-bootstrap";

const LoadingNetflix = () => {
  return (
    <>
      <h3>Loading</h3>
      <Spinner animation="grow" variant="danger" />
    </>
  );
};

export default LoadingNetflix;
