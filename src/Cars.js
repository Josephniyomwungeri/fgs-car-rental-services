import React,{ useState,useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch,FaCalendarAlt, FaMapMarkerAlt,  FaUserFriends,FaUsers, FaDoorOpen, FaGasPump, FaRegClock } from "react-icons/fa";
import "./Home.css"; // Your CSS file
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm"; // adjust path as needed
import { Modal } from "react-bootstrap"; // make sure react-bootstrap is installed
import Header from "./Header";
import "./Cars.css";

const carList = [
    {
      id: 1,
      title: "Toyota Land Cruiser",
      image: "/toyota-landcruser.jpg",
      price: 20,
    },
    {
      id: 2,
      title: "Nissan GTR Turbo",
      image: "/nisan-turbo.jpg",
      price: 12,
    },
    {
      id: 3,
      title: "Mitsubishi Portan",
      image: "/mitsubish.jpg",
      price: 55,
    },
    {
      id: 4,
      title: "V8",
      image: "/v8.jpg",
      price: 11,
    },
    {
      id: 5,
      title: "BMW M5 Competition",
      image: "/bmw-competition.jpg",
      price: 13,
    },
    {
      id: 6,
      title: "Land Cruiser",
      image: "/landCruser.jpg",
      price: 70,
    },
  ].map(car => ({
    ...car,
    description: "FGS Car Rental — We always be here for you...",
    rating: 5,
  }));
  
        

        const carTypes = [
          { type: "Truck", image: "/truck.jpg", description: "Heavy-duty vehicle for transporting goods." },
          { type: "Luxury Sedan", image: "/sedan2.jpg", description: "Premium comfort and high-end features." },
          { type: "Sedan", image: "/sedan.jpg", description: "Reliable and efficient for everyday use." },
          { type: "Sports Car", image: "/sports.jpg", description: "High performance and sleek design." },
          { type: "Hatchback", image: "/hatch.jpg", description: "Compact and convenient for city driving." },
          { type: "SUV", image: "/suv.jpg", description: "Spacious and capable for all terrains." },
        ];


  
        

const Cars = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
  return (
    <>
     <Header />
    <div className="container my-5">
    <h2 className="fw-bold mb-4 text-center">Most Popular Cars</h2>
    <div className="row">
      {carList.map((car, i) => (
        <div className="col-md-4 mb-4" key={car.id}>
          <div className="card h-100 shadow border-0">
            <div className="position-relative">
              <img src={car.image} alt={car.title} className="card-img-top" />
              <span id="pricetag" className="badge bg-white  position-absolute top-0 end-0 m-2 px-3 py-2 fw-bold">RWF {car.price},000,000</span>
            </div>
            <div className="card-body">
              <div className="mb-2" id="star">
                {'★'.repeat(car.rating)}{'☆'.repeat(5 - car.rating)}
              </div>
              <h5 className="card-title fw-bold">{car.title}</h5>
              <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                {car.description}
              </p>
              <hr />
              <ul className="list-unstyled mb-3" style={{ fontSize: '0.9rem' }}>
        <li>
          <FaUsers className="icon" style={{ marginRight: '5px' }} />
          Seat Capacity: 4 People
        </li>
        <li>
          <FaDoorOpen className="icon" style={{ marginRight: '5px' }} />
          Total Doors: 4 Doors
        </li>
        <li>
          <FaGasPump className="icon" style={{ marginRight: '5px' }} />
          Fuel Tank: 450 Liters
        </li>
      </ul>
  
      <button
    className="btn w-100"
    id="buy"
    onClick={() => setShowAuthModal(true)}
  >
    Rent Now
  </button>
  
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
<div className="w-100 px-0 my-5 position-relative text-white">
  <img
    src="highway.jpg"
    alt="Background"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "130%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />

  {/* Overlay (optional) */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.4)",
      zIndex: 1,
    }}
  ></div>

  <div style={{ position: "relative", zIndex: 2 }}>
    
    <div className="text-center mb-4">
    <h2 className="fw-bold mt-3">Explore Car Brand</h2>
    </div>

    <div className="car-type-marquee">
      <div className="marquee-track">
        {[...carTypes, ...carTypes].map((car, idx) => (
          <div
            key={idx}
            className="car-type-card text-center rounded p-3 flex-shrink-0"
          >
            <img
              src={car.image}
              alt={car.type}
              className="img-fluid mb-2"
              style={{ height: "90px", objectFit: "contain" }}
            />
            <div className="car-description">
              <strong>{car.type}</strong>
              <br />
              {car.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  
<Modal
  show={showAuthModal}
  onHide={() => setShowAuthModal(false)}
  centered
  backdrop="static"
  size="md"
>
  <Modal.Header closeButton>
    <Modal.Title>{/* Optional Title */}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <AuthForm />
  </Modal.Body>
</Modal>
  </>
  
  );
};

export default Cars;
