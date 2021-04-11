import React from "react";

function ContactForm() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlForm="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlForm="email">Email Address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlForm="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
