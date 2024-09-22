import React from "react";

export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        Have a question or need assistance? Feel free to contact us.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
