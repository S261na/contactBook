import React, { useState } from "react";

function EditContact({ editedObj, saveChanges }) {
  const [editedContact, setEditedContact] = useState(editedObj);
  function editContactName(e) {
    setEditedContact({
      ...editedContact,
      name: e.target.value,
    });
  }
  function editContactImage(e) {
    setEditedContact({
      ...editedContact,
      image: e.target.value,
    });
  }
  function editContactPhone(e) {
    setEditedContact({
      ...editedContact,
      phone: e.target.value,
    });
  }

  function handleSaveChanges() {
    saveChanges(editedContact);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "300px",
        backgroundColor: "gray",
      }}
    >
      <div>
        <h2>Edit Contact</h2>
        <input
          type="text"
          onChange={editContactName}
          value={editedContact.name}
        />
        <input
          type="text"
          onChange={editContactImage}
          value={editedContact.image}
        />
        <input
          type="text"
          onChange={editContactPhone}
          value={editedContact.phone}
        />
        <button onClick={handleSaveChanges}>Save</button>
      </div>
    </div>
  );
}

export default EditContact;
