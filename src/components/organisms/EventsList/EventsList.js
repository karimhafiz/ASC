import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import "./EventsList.css";

export default function EventsList({ events }) {
  const now = new Date();

  // Separate events into upcoming and past
  const upcomingEvents = events.filter((event) => new Date(event.date) >= now);
  const pastEvents = events.filter((event) => new Date(event.date) < now);

  // State to manage the visibility of the sections
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(true);

  return (
    <section className="events">
      <h1 className="title">Events</h1>

      <div className="events-section">
        <div
          className="events-header"
          onClick={() => setShowUpcoming(!showUpcoming)}
        >
          <h2 className="subtitle">Upcoming Events</h2>
          <button className="toggle-button">
            {showUpcoming ? "Hide" : "Show"}
          </button>
        </div>
        {showUpcoming &&
          (upcomingEvents.length > 0 ? (
            <ul className="event-list">
              {upcomingEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <Link to={`/events/${event.id}`} className="event-link">
                    <EventCard event={event} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No upcoming events</p>
          ))}
      </div>

      <div className="events-section">
        <div className="events-header" onClick={() => setShowPast(!showPast)}>
          <h2 className="subtitle">Past Events</h2>
          <button className="toggle-button">
            {showPast ? "Hide" : "Show"}
          </button>
        </div>
        {showPast &&
          (pastEvents.length > 0 ? (
            <ul className="event-list">
              {pastEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <Link to={`/events/${event.id}`} className="event-link">
                    <EventCard event={event} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No past events</p>
          ))}
      </div>
    </section>
  );
}
