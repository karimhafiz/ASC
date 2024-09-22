import React from "react";
import { Outlet } from "react-router-dom";
import EventHeader from "../EventHeader/EventHeader";

export default function EventRootLayout() {
  return (
    <>
      <EventHeader />
      <Outlet />
    </>
  );
}
