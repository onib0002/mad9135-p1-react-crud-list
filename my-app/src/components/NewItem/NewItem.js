import React, {useState, useEffect} from "react"
import { nanoid } from "nanoid";
import data from "../mock-data.json";


export default function NewItem(props){
  const [contacts, setContacts] = useState(data);
  console.log(contacts);
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
      fullName:  contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  
  return(
    <>
    {console.log("rendering")}
    <div className="newItem">
      <h2>Add an Employee</h2>
      <form method="post">
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          
        />
        
          
          <button className="btn btn-primary" to="/" >Add New</button>
          
        

      </form>
    </div>

    </>
  );
}






      