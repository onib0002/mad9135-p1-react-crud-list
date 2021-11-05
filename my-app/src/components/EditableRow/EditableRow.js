import React from "react";

const EditableRow = ({
  
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName">
          </input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address">
          </input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber">
          </input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email">
       </input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
