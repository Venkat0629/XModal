import React, { useState, useEffect } from "react";
import "./XModal.css";

const XModal = ({ closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.phone || !user.dob) {
      alert("Please fill in all fields.");
      return;
    }

    if (!user.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (user.phone.length !== 10 || isNaN(user.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(user.dob);
    if (selectedDate > currentDate) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    setUser({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
    closeModal();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".modal-content")) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="modal">
      <div className={`modal-content`}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={user.dob}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default XModal;
