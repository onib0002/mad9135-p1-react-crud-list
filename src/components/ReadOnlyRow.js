import React from "react";
import { Button} from "reactstrap";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <Button
          type="button"
          color="info"
          onClick={(event) =>handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button type="button" color="danger" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
