import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";


export default function ListView (props)  {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

      const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
    
        const formValues = {
          fullName: contact.fullName,
          address: contact.address,
          phoneNumber: contact.phoneNumber,
          email: contact.email,
        };
    
        setEditFormData(formValues);
      };

  const handleCancelClick = () => {
      };

  return (
    <div className="list-view">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                  <EditableRow />
                  <ReadOnlyRow
                   contact={contact}
                    handleEditClick={handleEditClick}
                  />
               
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};


