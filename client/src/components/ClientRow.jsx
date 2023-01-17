import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations.js";
import { GET_CLIENTS } from "../queries/clientQueries.js";
import { GET_PROJECTS } from "../queries/projectQueries.js";

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    refetchQueries: [
      {
        query: GET_CLIENTS,
      },
      {
        query: GET_PROJECTS,
      },
    ],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={deleteClient} className="btn btn-danger btn-sm">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
