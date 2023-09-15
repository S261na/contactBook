import React from "react";

function ContactList({ contacts, deleteContact, getEditedObj }) {
  return (
    <div>
      <h2>Contacts:</h2>
      <div>
        {contacts.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img
              src={item.image}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
            <p>{item.phone}</p>
            <button onClick={() => deleteContact(item.id)}>Delete</button>
            <button onClick={() => getEditedObj(item.id)}>Edit</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
