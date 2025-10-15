import React from "react";

export default function PatientCard({ patient, onView }) {
  return (
    <div className="card">
      <h3>{patient.name}</h3>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Contact:</strong> {patient.contact}</p>
      <div className="card-actions">
        <button onClick={() => onView(patient)} className="btn">
          View Details
        </button>
      </div>
    </div>
  );
}
