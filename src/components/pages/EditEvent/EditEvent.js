import React, { Suspense } from "react";

import EventForm from "../../organisms/EventForm/EventForm";
import { Await, useRouteLoaderData } from "react-router-dom";

export default function EditEvent() {
  const { event } = useRouteLoaderData("event-detail");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}> Loading ...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventForm method="patch" event={loadedEvent} />}
      </Await>
    </Suspense>
  );
}
