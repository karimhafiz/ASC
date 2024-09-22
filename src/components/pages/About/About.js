import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section className="about-us">
      <h1 className="title">About Ayendah Sazan</h1>
      <p className="mission">Our mission is to...</p>
      <p className="vision">Our vision is to...</p>
      <div className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Value 1</li>
          <li>Value 2</li>
          <li>Value 3</li>
        </ul>
      </div>
      <div className="history">
        <h2>Our History</h2>
        <p>Lorem ipsum...</p>
      </div>
      <div className="team">
        <h2>Our Team</h2>
        <ul>
          <li>
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Name 1</h3>
            <p>Role 1</p>
          </li>
          {/* Add more team members here */}
        </ul>
      </div>
    </section>
  );
};
