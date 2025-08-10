import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo Section */}
        <div className="footer-section">
          <h3>POWERED BY:</h3>
          <img src="favicon.ico" alt="FGS Logo" className="footer-logo" style={{width:200, height:150}} />
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">FAQs</a></li>
            {/* <li><a href="#">Service Charter</a></li>
            <li><a href="#">Whistle Blowing</a></li> */}
            {/* <li><a href="#">Sponsorship Application</a></li> */}
            <li><a href="#">Info Security Policy</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#">Our History</a></li>
            <li><a href="#">Our Shareholders</a></li>
            <li><a href="#">Company Structure</a></li>
            <li><a href="#">News</a></li>
            {/* <li><a href="#">Data Protection</a></li> */}
            <li><a href="#">Working Hours</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>CONTACT INFO</h3>
          <p>🏠 KN 3 (Kigali, Rwanda)</p>
          <p>📞 Telephone Number: (+250) 788 891 625 / 788 212 648</p>
          <p>📧 <a href="mailto:example@example.rw">example@example.rw</a></p>
        </div>
        {/* Newsletter */}
          {/* <div className="col-md-5" id="sub">
            <h5 className="fw-bold mb-3">Subscribe Newsletter</h5>
            <p className="" id="our">Our estimated global carbon <br></br> emissions by investing in greenhouse</p>
            <form className=" flex-sm-row gap-2 mt-3">
              <input type="email" placeholder="Email Address" className="form-control rounded" id="forms" /><br></br>
              <button className="btn px-4" id="subscribe">Subscribe</button>
            </form>
          </div> */}
      </div>

      <div className="footer-bottom" id="footer-bottom">
  © 2025 FGS Rental Car Services. All rights reserved
  <span className="developer-credit"> | Developed by <strong>Santech Ltd</strong></span>
</div>

<div className="social-footer">
  <span id="follow">Follow Us On:</span>
  <a href="#" className="social-icon"><FaFacebookF /></a>
  <a href="#" className="social-icon"><FaTwitter /></a>
  <a href="#" className="social-icon"><FaLinkedinIn /></a>

  <button onClick={scrollToTop} className="scroll-to-top">
    <FaArrowUp />
  </button>
</div>

    </footer>
  );
}
export default Footer;
