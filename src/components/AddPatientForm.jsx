import React, { useState } from "react";

export default function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name) return; 
    onAdd({
      id: Date.now(), 
      name,
      age: Number(age) || 0,
      contact,
      email: "",
      address: "",
      notes: "",
    });

    // Reset form
    setName("");
    setAge("");
    setContact("");
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <h3>Add New Patient</h3>
      <input
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
