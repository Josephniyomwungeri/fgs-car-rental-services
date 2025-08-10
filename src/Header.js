// Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch, FaRegClock, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import GoogleTranslate from "./GoogleTranslate";
const Header = () => {
   const navigate = useNavigate();

  const handleScrollLink = (section) => {
    if (window.location.pathname === '/') {
      window.dispatchEvent(new CustomEvent('scrollToSection', { detail: section }));
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div id="headm">
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-1">
        <div className="d-flex align-items-center gap-2">
          <FaRegClock className="me-2" id="clock" />
          <span>Working Hours: 24/7 Days</span>
        </div>
        <div className="d-flex align-items-center gap-3" id="social">
          <span>On Social:</span>
          <div className="social-ico">
  <a href="#" className="social-i facebook" data-tooltip="Facebook"><FaFacebookF /></a>
  <a href="#" className="social-i twitter" data-tooltip="Twitter"><FaTwitter /></a>
  <a href="#" className="social-i linkedin" data-tooltip="LinkedIn"><FaLinkedinIn /></a>
  <a href="#" className="social-i youtube" data-tooltip="YouTube"><FaYoutube /></a>
  <a href="#" className="social-i tiktok" data-tooltip="TikTok" id="tik"><FaTiktok /></a>
  <a href="#" className="social-i Whatsapp" data-tooltip="Whatsapp"><FaWhatsapp /></a>
  </div>
  <GoogleTranslate />
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header d-flex justify-content-between align-items-center px-4 py-3">
        <Link to="/"><img src="/FGSWHITE.png" alt="FGS Logo" className="logo-img" /></Link>

        <nav className="d-none d-md-flex gap-4 fw-medium nav-links">
        <Link to="/"><span className="nav-item">Home</span></Link>
          {/* <span className="nav-item" onClick={() => handleScrollLink("aboutus")}>About Us</span> */}
          <Link to="/aboutus"><span className="nav-item">About Us</span></Link>
         
            
           
          <Link to="/car-for-rental"><span className="nav-item">Car For Rental</span></Link>
             
             
          

          
        
              <Link to="/driver-support" className="nav-item"><span>Driver Support</span></Link>
          
         

              <Link to="/news" id="cont"><span className="nav-item">News</span></Link>
          <Link to="/contact" id="cont"><span className="nav-item">Contact Us</span></Link>
        </nav>

        <div className="d-flex align-items-center gap-3" onClick={() => handleScrollLink("Book")} style={{ cursor: "pointer" }}>
          <FaSearch className="search-icon" />
          <button className="btn btn-sm px-3 rounded-1" id="book">Booking</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
