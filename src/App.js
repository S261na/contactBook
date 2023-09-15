import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editedObj, setEditedObj] = useState(null);

  function handleContact(newContact) {
    let newContacts = [...contacts];
    newContacts.push(newContact);
    setContacts(newContacts);
  }

  function deleteContact(id) {
    let delContact = contacts.filter((item) => item.id !== id);
    setContacts(delContact);
  }

  function getEditedObj(id) {
    let oneObj = contacts.find((item) => item.id === id);
    setEditedObj(oneObj);
  }

  function saveChanges(newObj) {
    let newContacts = [...contacts];
    newContacts = newContacts.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setContacts(newContacts);
    setEditedObj(null);
  }

  return (
    <div>
      <AddContact handleContact={handleContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        getEditedObj={getEditedObj}
      />
      {editedObj ? (
        <EditContact editedObj={editedObj} saveChanges={saveChanges} />
      ) : null}
    </div>
  );
}

export default App;
