import React from "react";
import { 
  Button,
  Input 
} from "reactstrap";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></Input>
      </td>
      <td>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
