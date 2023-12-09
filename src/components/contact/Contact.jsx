
import React, { useState } from 'react';
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_subject: subject,
        from_name: name,
        from_email: email,
        to_name: "Matthew Smith",
        message: message,
      }
    };
  
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    } catch (error) {
      console.log('Error sending email:', error);
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
