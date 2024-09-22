import React, { useState, useEffect } from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import { handleImageCompression } from "../../../util/imageCompression";
import "./EventForm.css";

export default function EventForm({ method, event = {} }) {
  // Provide default value for event
  const [base64Image, setBase64Image] = useState(event.image || null); // Pre-fill with existing image if editing
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const image = event.image || null;

  const isSubmitting = navigation.state === "submitting";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className="form">
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err, index) => (
            <li key={index}>{err}</li>
          ))}
        </ul>
      )}

      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event.title || ""}
        />
      </p>

      <p>
        <label htmlFor="shortdescription">Short Description</label>
        <input
          id="shortdescription"
          type="text"
          name="shortdescription"
          required
          defaultValue={event.shortdescription || ""}
        />
      </p>

      <p>
        <label htmlFor="longdescription">Long Description</label>
        <textarea
          id="longdescription"
          name="longdescription"
          required
          defaultValue={event.longdescription || ""}
        />
      </p>

      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event.date ? formatDate(event.date) : ""}
        />
      </p>

      <p>
        <label htmlFor="openingtime">Opening Time</label>
        <input
          id="openingtime"
          type="time"
          name="openingtime"
          required
          defaultValue={event.openingtime || ""}
        />
      </p>

      <p>
        <label htmlFor="ticketprice">Ticket Price</label>
        <input
          id="ticketprice"
          type="number"
          step="0.01"
          name="ticketprice"
          required
          defaultValue={event.ticketprice || ""}
        />
      </p>

      <p>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          required
          defaultValue={event.city || ""}
        />
      </p>

      <p>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          name="street"
          required
          defaultValue={event.street || ""}
        />
      </p>

      <p>
        <label htmlFor="postcode">Postcode</label>
        <input
          id="postcode"
          type="text"
          name="postcode"
          required
          defaultValue={event.postcode || ""}
        />
      </p>

      <p>
        <label htmlFor="accessibilityinfo">Accessibility Info</label>
        <input
          id="accessibilityinfo"
          type="text"
          name="accessibilityinfo"
          required
          defaultValue={event.accessibilityinfo || ""}
        />
      </p>

      <p>
        <label htmlFor="agerestriction">Age Restriction</label>
        <input
          id="agerestriction"
          type="number"
          name="agerestriction"
          required
          defaultValue={event.agerestriction || ""}
        />
      </p>

      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {base64Image && (
          <img
            src={base64Image}
            alt="Event preview"
            style={{ maxWidth: "200px", marginTop: "10px" }}
          />
        )}
        <input type="hidden" name="base64Image" value={base64Image || ""} />
      </p>

      <div className="form-actions">
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

// Action function to handle form submission
export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  // Construct eventData object with all necessary fields
  const eventData = {
    title: data.get("title"),
    shortdescription: data.get("shortdescription"),
    longdescription: data.get("longdescription"),
    date: data.get("date"),
    openingtime: data.get("openingtime"),
    ticketprice: parseFloat(data.get("ticketprice")),
    city: data.get("city"),
    street: data.get("street"),
    postcode: data.get("postcode"),
    accessibilityinfo: data.get("accessibilityinfo"),
    agerestriction: parseInt(data.get("agerestriction")),
    image: data.get("base64Image") || null, // Get the base64 image string
  };

  const formData = new FormData();
  formData.append("eventData", JSON.stringify(eventData));
  formData.append("image", data.get("image"));

  let url = "http://localhost:3000/events";
  if (method === "PATCH") {
    const eventId = params.eventId;
    url = `http://localhost:3000/events/${eventId}`;
  }

  const token = getAuthToken();

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw json(
        { message: "Could not save event.", errors: errorResponse },
        { status: response.status }
      );
    }

    return redirect("/events");
  } catch (error) {
    console.log(eventData);
    console.error("Error during form submission:", error);
    throw json(
      { message: "An error occurred while saving the event." },
      { status: 500 }
    );
  }
}
