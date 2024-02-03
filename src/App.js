import React, { useState } from "react";
import "./App.css";
import XModal from "./XModal/XModal";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = (e) => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={handleButtonClick} className="submit-button">
        Open Form
      </button>
      {showForm && <XModal closeModal={handleCloseModal} />}
    </div>
  );
}

export default App;
