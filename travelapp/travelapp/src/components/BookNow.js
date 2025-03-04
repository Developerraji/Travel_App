import React, { useState } from "react";
import "../components/booknow.css";

const destinations = [
  { id: 1, name: "Paris,The Ritz-Carlton", price: 1500 },
  { id: 2, name: "Maldives,Baros Maldives", price: 3000 },
  { id: 3, name: "New York,The Plaza Hotel", price: 1800 },
  { id: 4, name: "Swiss Alps,Kulm Hotel", price: 2500 },
  { id: 5, name: "Bali,Grand Hyatt", price: 2000 },
];

const BookNow= () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    if (selectedDestination && startDate && endDate && name && email) {
      setBookingConfirmed(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Your Hotel</h2>

      <label>Choose Destination:</label>
      <select value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)}>
        <option value="">Select Hotel</option>
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.name}>
            {destination.name} - {destination.price}
          </option>
        ))}
      </select>

      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label>End Date:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <label>Full Name:</label>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email Address:</label>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleBooking}>Confirm Booking</button>

      {bookingConfirmed && (
        <div className="confirmation-message">
          <h3>Booking Confirmed!</h3>
          <p>Thank you, {name}! Your accomodation {selectedDestination} is booked from {startDate} to {endDate}.</p>
        </div>
      )}
    </div>
  );
};

export default BookNow;
