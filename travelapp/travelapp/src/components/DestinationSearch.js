import React, { useState } from "react";
import'../components/destinationSearch.css';
const destinations = [
  {id: 1, name: "Paris", category: "City", price: 1500 },
    { id: 2, name: "Maldives", category: "Beach", price: 3000 },
    { id: 3, name: "New York", category: "City", price: 1800 },
    { id: 4, name: "Swiss Alps", category: "Mountains", price: 2500 },
    { id: 5, name: "Bali", category: "Beach", price: 2000 },
    { id: 6, name: "Bali", category: "Hotel", price: 2000 },
    {id: 7, name: "Paris", category: "Hotel", price: 1500 },
    { id: 8, name: "Maldives", category: "Hotel", price: 3000 },
    { id: 9, name: "New York", category: "Hotel", price: 1800 },
    { id: 10, name: "Swiss Alps", category: "Hotel", price: 2500 },

];

const DestinationSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const filteredDestinations = destinations.filter((destination) => {
    return (
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category ? destination.category === category : true) &&
      (priceRange
        ? (priceRange === "low" && destination.price < 2000) ||
          (priceRange === "mid" && destination.price >= 2000 && destination.price <= 2500) ||
          (priceRange === "high" && destination.price > 2500)
        : true)
    );
  });

  return (
    <div className="container">
      <h2 className="sd" >Search Destinations</h2>
      <input  type="text" placeholder="Search destination..."  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <div className="filters">
        <select
          value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="City">City</option>
          <option value="Beach">Beach</option>
          <option value="Mountains">Mountains</option>
          <option value="Hotel">Hotel</option>
        </select>
        <select
           value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All Prices</option>
          <option value="low">Below 5000</option>
          <option value="mid">5000 - 25000</option>
          <option value="high">Above 25000</option>
        </select>
      </div>
      <div className="filters">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <h3>{destination.name}</h3>
              <p>Category: {destination.category}</p>
              <p>Price: {destination.price}</p>
            </div>
          ))
        ) : (
          <p className="destination-list">No destinations found.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationSearch;
