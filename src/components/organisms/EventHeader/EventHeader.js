import React, { useState, useEffect } from "react";
import "./EventHeader.css";
import { useRouteLoaderData } from "react-router-dom";
import { Form, NavLink } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const EventHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const token = useRouteLoaderData("root");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!token) {
    return null;
  }

  return (
    <div className="header-buttons">
      <NavLink to="new" className="btn-register">
        Create New Event
      </NavLink>
      {token && (
        <Form action="/logout" method="post">
          <Button className="log-out">Log Out</Button>
        </Form>
      )}
    </div>
  );
};

export default EventHeader;
