import React from "react";
import "./Aboutus.css"; // Ensure you have a CSS file for styles
import Header from "./Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="container2">
        <div className="card mb-4 shadow-sm border-0" id="card">
          <div className="card-body">
            <h4 className="fw-semibold mb-3">Experience Rwanda from the Comfort of Our Premium Fleet</h4>
            <p>
              At <strong>FGS CAR RENTAL</strong>, we redefine your travel experience with our premium, 24/7 car rental service. 
              Whether you're exploring the breathtaking landscapes or navigating the vibrant streets of Rwanda, 
              our versatile service is designed to meet all your travel needs seamlessly.
            </p>
          </div>
        </div>

        <div className="card mb-4 shadow-sm border-0">
          <div className="card-body">
            <h4 className="fw-semibold mb-3">Main Features</h4>
            <p>
              Our service includes not only a diverse range of high-quality vehicles but also comprehensive driver support 
              to ensure your journey is as smooth as possible. Whether you prefer to drive yourself or sit back and enjoy the ride, 
              <strong> FGS CAR RENTAL </strong> has you covered.
            </p>
          </div>
        </div>

         {/* New Mission and Vision Section */}
         <div className="card mb-4 shadow-sm border-0">
          <div className="card-body">
            <h4 className="fw-semibold mb-3">Our Mission</h4>
            <p>
              Our mission is to provide exceptional car rental services that empower our customers to explore Rwanda's beauty with comfort and confidence. 
              We strive to deliver top-quality vehicles and unparalleled customer service, ensuring a memorable travel experience for every client.
            </p>
            <h4 className="fw-semibold mb-3">Our Vision</h4>
            <p>
              Our vision is to be the leading car rental service in Rwanda, recognized for our commitment to quality, sustainability, and customer satisfaction. 
              We aim to create a seamless travel experience that connects people to the breathtaking landscapes and rich culture of Rwanda.
            </p>
          </div>
        </div>

        <div className="card mb-4 shadow-sm border-0">
          <div className="card-body">
            <h4 className="fw-semibold mb-3">Key Aspects</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>🚗 Exquisite Car Brand Quality:</strong> Choose from a fleet of top-tier brands that promise style,
                reliability, and comfort. Imagine yourself behind the wheel of a sleek Toyota Land Cruiser,
                its luxurious interior and powerful engine making every drive feel effortless and grand.
              </li>
              <li className="mb-3">
                <strong>💼 Outstanding Service Accommodation:</strong> We cater to all your logistical needs with unrivaled
                attention to detail. Enjoy the freedom of self-driving with the added convenience of free
                pick-up, ensuring a stress-free start to your adventure.
              </li>
              <li className="mb-3">
                <strong>🌍 Travel and Tour Guide Expertise:</strong> Explore Rwanda’s thousand hills with confidence,
                knowing you have access to knowledgeable guides who can enhance your journey with cultural insights 
                and hidden gems. Our guides are adept at making your travel not just a trip, but a memorable exploration.
              </li>
              <li className="mb-3">
                <strong>🌱 Eco-Friendliness and Safety:</strong> Our commitment to sustainability is reflected in our 
                eco-friendly vehicle options, and our safety standards are second to none, with all cars 
                boasting the latest safety certifications.
              </li>
            </ul>
          </div>
        </div>

       

        <div className="card mb-5 shadow-sm border-0">
          <div className="card-body text-center">
            <p className="fs-5">
              Feel the comfort and freedom of driving through Rwanda's natural beauty. 
              Experience the majesty of its landscapes, all with the peace of mind that 
              <strong> FGS CAR RENTAL</strong> is with you every mile.
            </p>
            <p className="fw-bold mt-4 fs-5">
              Choose FGS CAR RENTAL today and let us serve you with excellence. <br />
              <span className="" id="your">Your adventure awaits!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
