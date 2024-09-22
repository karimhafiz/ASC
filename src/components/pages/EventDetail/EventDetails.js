import React, { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../../organisms/EventItem/EventItem";
import EventsList from "../../organisms/EventsList/EventsList";
import { getAuthToken } from "../../../util/auth";

export default function EventDetails() {
  const { event, events } = useRouteLoaderData("event-detail");
  // console event and events
  // console.log("event: " + event);
  // console.log("events" + event);

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {/* {(loadedEvent) => <EventItem event={loadedEvent} />} */}
          {(loadedEvent) => {
            return <EventItem event={loadedEvent} />;
          }}
        </Await>
      </Suspense>
      {/* <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense> */}
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch(`http://localhost:3000/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch detail for selected event." },
      { status: 500 }
    );
  }

  const resData = await response.json();

  return resData[0] ? resData[0] : null;
}

async function loadEvents() {
  const response = await fetch("http://localhost:3000/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  }

  const resData = await response.json();

  return resData || [];
}

export async function loader({ params }) {
  const id = params.eventId;
  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getAuthToken();

  const response = await fetch(`http://localhost:3000/events/${eventId}`, {
    method: request.method,
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
