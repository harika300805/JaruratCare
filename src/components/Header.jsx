import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">Jarurat Care</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#patients">Patients</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
