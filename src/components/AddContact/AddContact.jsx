import React, { useState } from "react";

function AddContact({ handleContact }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  function handleContactAdd() {
    if (!name.trim() || !img.trim() || !phone.trim()) {
      alert("заполните поля");
      return;
    }
    const newContact = {
      name: name,
      image: img,
      phone: phone,
      id: Date.now(),
    };
    handleContact(newContact);
    setName("");
    setImg("");
    setPhone("");
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="name"
      />
      <input type="text" onChange={handleImg} value={img} placeholder="image" />
      <input
        type="text"
        onChange={handlePhone}
        value={phone}
        placeholder="phone"
      />
      <button onClick={handleContactAdd}>Add</button>
    </div>
  );
}

export default AddContact;
