import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About <span>Travel Explorer</span></h1>
        <p>Embark on a journey to the world's most breathtaking destinations.</p>
      </section>
      <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dt-xybQe_ZJmJvkShlQtFSLYWZlt855x3Q&s" alt="Travel" />
      </div>
      <section className="about-content">
        <div className="about-card glass-effect">
          <h2>Our Mission</h2>
          <p>
            At <strong>Travel Explorer</strong>, our goal is to make travel effortless, exciting, 
            and accessible for everyone. We provide handpicked destinations, expert travel tips, and 
            seamless booking options to turn your dream vacations into reality.
          </p>
        </div>
        <div className="about-card glass-effect highlight-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Explore stunning locations worldwide.</li>
            <li>Get insider travel guides and expert tips.</li>
            <li>Plan trips easily with smart booking assistance.</li>
            <li>Connect with a global community of travelers.</li>
          </ul>
        </div>

        <div className="about-card glass-effect">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need recommendations? <a href="/contact">Contact us</a>, and let’s make your travel dreams come true! 
          </p>
        </div>
      </section>
    </div>
  );
}
