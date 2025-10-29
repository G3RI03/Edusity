import React, { useState } from 'react'
import './Contact.css'
import message from '../../assets/message.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import location from '../../assets/location.png'
import Arrow from '../../assets/Arrow.png'

const Contact = () => {

  const [result, setResult] = useState(""); // ✅ add state

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "16c39663-f69d-49ce-b767-26e0bab6fa3f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset(); // clear form
    } else {
      console.log("Error:", data);
      setResult("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className='contact'>

      {/* LEFT SIDE */}
      <div className='contact-col'>
        <h3>
          Send us a message 
          <img src={message} alt="message icon" />
        </h3>

        <p>
          Feel free to reach us through the contact form or find our 
          contact information below. Your feedback, questions and 
          suggestions are important to us as we strive to provide 
          exceptional service to our university.
        </p>

        <ul className='contact-list'>
          <li><img src={mail} alt="mail icon" /> Contact@Edusity.dev</li>
          <li><img src={phone} alt="phone icon" /> +355 678547459</li>
          <li><img src={location} alt="location icon" /> Autostrada Tirane-Rinas km.8</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Enter your name" required />

          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" placeholder="Enter your phone number" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message" required />

          <button type="submit" className='btn dark-btn'>
            Submit Now <img src={Arrow} alt="Arrow icon" />
          </button>
        </form>

        {/* ✅ show message */}
        <span style={{ marginTop: "10px", display: "block" }}>{result}</span>
      </div>

    </div>
  )
}

export default Contact
