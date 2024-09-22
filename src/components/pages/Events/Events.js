import React, { Suspense } from "react";
import axios from "axios";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../../organisms/EventsList/EventsList";

export const Events = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          if (!Array.isArray(loadedEvents)) {
            throw new Error("Loaded events is not an array");
          }
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
};

async function loadEvents() {
  try {
    const response = await axios.get("http://localhost:3000/events");

    const eventsData = response.data; // Ensure correct extraction of data

    return Array.isArray(eventsData) ? eventsData : [];
  } catch (error) {
    console.error("Error fetching events:", error); // Logging error
    throw json(
      { message: "Could not fetch events." },
      {
        status: error.response ? error.response.status : 500,
      }
    );
  }
}

export async function loader() {
  const events = await loadEvents();

  return defer({
    events,
  });
}
