import React, { useState, useEffect } from "react";
import "./EventCard.css";

function EventCard({ event }) {
  const {
    id,
    title,
    shortdescription,
    date,
    street,
    postcode,
    city,
    image,
    ticketprice,
  } = event;

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (image && image.type === "Buffer" && Array.isArray(image.data)) {
      const uint8Array = new Uint8Array(image.data);
      const blob = new Blob([uint8Array], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setImageSrc(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  return (
    <div className="event-card">
      <div className="card-image">
        {image && <img src={imageSrc} alt="event image" />}
      </div>
      <div className="card-content">
        <p className="event-date">{new Date(date).toLocaleDateString()}</p>
        <h3 className="event-title">{title}</h3>
        <p className="event-location">
          {street}, {city}, {postcode}
        </p>
        <p className="event-description">{shortdescription}</p>
        <p className="event-price">Price: £{ticketprice.toFixed(2)}</p>
        <button className="details-button">Details</button>
      </div>
    </div>
  );
}

export default EventCard;
