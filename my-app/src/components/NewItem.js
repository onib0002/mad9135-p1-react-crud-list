import React, {useState, useEffect} from "react"
import { nanoid } from "nanoid";

export default function NewItem(props){


  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('onibile')));
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };


  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    console.log("new contact", newContacts);
    console.log('newdata', newContact);
    console.log('data before', newContacts);
    setContacts(newContacts);

    localStorage.setItem('onibile', JSON.stringify(newContacts));

    window.location.replace("/");
  };


  return(
    <>
    {console.log("rendering")}
    <div className="newItem">
      <h2>Add a Contact</h2>
      <form method="post">
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        
          
          <button className="btn btn-primary" to="/" onClick={handleAddFormSubmit}>Add New</button>
          
        

      </form>
    </div>

    </>
  );
}






      