// Home.js
import React from "react";
import "./Home.css";
import backgroundImage from "../../../assets/bamiyan.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Welcome to Ayendah Sazan Community Center</h1>
          <p>
            Your mission statement or a brief description of the community
            center can go here.
          </p>
          <div className="buttons-container">
            <Link to="/about">
              <button>Our Mission</button>
            </Link>
            <Link to="/events">
              <button>Our Events</button>
            </Link>
            <Link to="/getInvolved">
              <button>Get Involved</button>
            </Link>
          </div>
        </div>
      </div>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>No upcoming events at the moment</p>
        {/* Add your content for upcoming events here */}
      </section>
    </>
  );
};

export default Home;
