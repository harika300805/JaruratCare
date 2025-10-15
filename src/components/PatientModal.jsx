import React from "react";

export default function PatientModal({ patient, onClose }) {
  if (!patient) return null; 
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Email:</strong> {patient.email}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>Notes:</strong> {patient.notes}</p>
      </div>
    </div>
  );
}
