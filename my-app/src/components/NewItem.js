import React, {useState, useEffect} from "react"
import { nanoid } from "nanoid";
import { 
  Button,
  Form,
  FormGroup,
  Input,
  Label 
} from "reactstrap";

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
        <Input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        /><br/>
        <Input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        /><br/>
        <Input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        /><br/>
        <Input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        /><br/>
        
          
          <Button className="btn btn-primary" color="primary" to="/" onClick={handleAddFormSubmit}>Add New</Button>
          
        

      </form>
    </div>

    </>
  );
}






      