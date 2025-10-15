import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PatientCard from "./components/PatientCard";
import PatientModal from "./components/PatientModal";
import AddPatientForm from "./components/AddPatientForm";
import { fetchPatients } from "./api";

export default function App() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPatients()
      .then((data) => {
        if (mounted) {
          setPatients(data);
          setFiltered(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "Error fetching patients");
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) setFiltered(patients);
    else setFiltered(patients.filter((p) => p.name.toLowerCase().includes(q)));
  }, [query, patients]);

  function handleAdd(newPatient) {
    setPatients((prev) => [newPatient, ...prev]);
  }

  return (
    <div>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>Patient Records</h1>
          <p>Quick view of patients — search, view details, add locally.</p>
        </section>

        <section className="controls">
          <input
            aria-label="Search patients"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </section>

        <section className="grid-area">
          <div className="left">
            <AddPatientForm onAdd={handleAdd} />
          </div>

          <div id="patients" className="right">
            {loading && <div className="state">Loading patients...</div>}
            {error && <div className="state error">{error}</div>}
            {!loading && !error && (
              <div className="grid">
                {filtered.length === 0 && (
                  <div className="state">No patients found.</div>
                )}
                {filtered.map((p) => (
                  <PatientCard key={p.id} patient={p} onView={setSelected} />
                ))}
              </div>
            )}
          </div>
        </section>

        <footer id="about" className="footer">
          — Jarurat Care
        </footer>

        <PatientModal patient={selected} onClose={() => setSelected(null)} />
      </main>
    </div>
  );
}
