import React, { useEffect, useState } from 'react';
import './contact.css'; // Custom styles
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {


  return (
    <div className="contact-page py-5">
      <h2 className="text-center fw-bold mb-5">Contact Informations</h2>

      <div className="container d-flex flex-column flex-md-row justify-content-around align-items-start gap-4">
        {/* Location */}
        <div className="contact-card text-center p-4 shadow rounded bg-white">
          <div className="icon-box  text-white rounded p-3 mx-auto mb-3">
            <FaMapMarkerAlt size={28} />
          </div>
          <h5 className="fw-bold">Our Location</h5>
          <p className="text-muted mb-1">1901 Thornridge Cir. Shiloh, Hawaii</p>
          <p className="text-muted">81063</p>
        </div>

        {/* Email */}
        <div className="contact-card text-center p-4 shadow rounded bg-white">
          <div className="icon-box  text-white rounded p-3 mx-auto mb-3">
            <FaEnvelope size={28} />
          </div>
          <h5 className="fw-bold">Email Address</h5>
          <p className="text-muted mb-1">info@example.com</p>
          <p className="text-muted">support@example.com</p>
        </div>

        {/* Phone */}
        <div className="contact-card text-center p-4 shadow rounded bg-white">
          <div className="icon-box  text-white rounded p-3 mx-auto mb-3">
            <FaPhoneAlt size={28} />
          </div>
          <h5 className="fw-bold">Phone Number</h5>
          <p className="text-muted mb-1">Emergency Cases</p>
          <p className="text-muted">+(208)-555-0112 (24/7)</p>
        </div>
      </div>

       {/* --- Contact Form --- */}
       <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-light fw-bold mb-2" id="getintouch">GET IN TOUCH</span>
          <h2 className="fw-bold">Send A Message</h2>
        </div>

        <form className="p-4 bg-white shadow rounded">
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Your email" required />
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Type message" required></textarea>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="saveInfo" />
            <label className="form-check-label" htmlFor="saveInfo">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button type="submit" className="btn px-4 fw-bold" id="post">Post Comment</button>
        </form>
      </div>


      {/* --- Subscribe Section --- */}
<div className="subscribe-section mt-5 text-white d-flex justify-content-between align-items-center px-4 py-4 rounded mx-auto container">
  <div>
    <h3 className="fw-bold mb-0">Subscribe for latest update<br />about <span className="text-dark">FGS Car Rental Services</span></h3>
  </div>
  <form className="d-flex flex-column flex-md-row mt-3 mt-md-0" style={{ gap: '10px' }}>
    <input
      type="email"
      className="form-control"
      placeholder="Email Address"
      required
      style={{ minWidth: '250px' }}
    />
    <button type="submit" className="btn px-4 fw-bold" id="sub">Subscribe</button>
  </form>
</div>

    </div>
  );
};

export default Contact;
