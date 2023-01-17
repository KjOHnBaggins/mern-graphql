import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5 p-5 text-bg-dark rounded">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-danger mb-5"
        size="7x"
      />
      <h1>404</h1>
      <p className="lead fw-bold">Nothing's ahead.</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
