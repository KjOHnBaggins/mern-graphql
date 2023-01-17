import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FontAwesomeIcon icon={faIdBadge} className="icon" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          {client.phone}
        </li>
      </ul>
    </>
  );
}

export default ClientInfo;
