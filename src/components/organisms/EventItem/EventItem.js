import React, { useState, useEffect } from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import "./EventItem.css";

export default function EventItem({ event }) {
  const { image } = event;
  const token = useRouteLoaderData("root");
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

  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className="event-details">
      <div className="event-header">
        {imageSrc && (
          <img className="event-image" alt={event.title} src={imageSrc} />
        )}
        <div className="event-info">
          <h2>{event.title}</h2>
          <p>
            {new Date(event.date).toLocaleDateString()} at {event.openingtime}
          </p>
          <p>
            {event.street}, {event.city}, {event.postcode}
          </p>
          <p>Price: £{event.ticketprice.toFixed(2)}</p>
        </div>
      </div>
      <div className="event-body">
        <p>{event.longdescription}</p>
      </div>
      {token && (
        <div className="event-footer">
          <Link to="edit" className="edit-button">
            Edit
          </Link>
          <button onClick={startDeleteHandler} className="delete-button">
            Delete
          </button>
        </div>
      )}
    </article>
  );
}
