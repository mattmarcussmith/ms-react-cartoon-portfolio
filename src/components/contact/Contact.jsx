import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("https://matthewmsmithportfolio.com/api/emailHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "matt.marcus.smith@gmail.com",
          subject: formData.subject,
          text: formData.message,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Provide feedback to the user (e.g., show a success message)
      } else {
        console.log("Form submission failed");
        // Provide feedback to the user (e.g., show an error message)
      }
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <section className="container section" id="contact">
      <h2 className="section__title">Get in touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about bizz!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👏🏼
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
          
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
             
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div">
             
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
