import React from "react";
import "./App.css";
import Header from "./Header";

const PricingCard = ({ title, price, features }) => (
  <div style={styles.card}>
    <h3 style={styles.planTitle}>{title}</h3>
    <div style={styles.price}>
       {price}
      <span style={styles.priceSpan}><strong>,000</strong>  RWF/4 hour</span>
    </div>
    <ul style={styles.list}>
      {features.map((item, i) => (
        <li key={i} style={styles.listItem}>
          {item}
        </li>
      ))}
    </ul>
    <button style={styles.button}>Book Now</button>
  </div>
);

function Pricing() {
  const plans = [
    {
      title: "AFFORDABLE PLAN",
      price: 39,
      features: [
        "Get Starting message",
        "Up to 4 Members",
        "Unlimited Usage",
        "Unlimited Parking Space",
        "Concierge Help Center",
        "Extend or return anytime",
      ],
    },
    {
      title: "LUXURY PLAN",
      price: 69,
      features: [
        "Unlimited Parking Space",
        "Concierge Help Center",
        "Extend or return anytime",
        "Get Starting message",
        "Up to 4 Members",
        "Unlimited Usage",
      ],
    },
    {
      title: "BUSINESS PLAN",
      price: 99,
      features: [
        "Unlimited Parking Space",
        "Concierge Help Center",
        "Get Starting message",
        "Up to 4 Members",
        "Unlimited Usage",
        "Extend or return anytime",
      ],
    },
  ];

  return (
    <>
    <Header />
    <div style={styles.container}>
      <p style={styles.tagline}>BRANDS</p>
      <h1 style={styles.heading}>Explore Premium Car Brands</h1>
      <div style={styles.pricingContainer}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Pricing;

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
    background: "#fff",
    color: "#111",
    margin: 0,
    padding: 0,
    marginTop:200,
  },
  tagline: {
    marginTop: 30,
    fontSize: 20,
    color: "#a5cf4c",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  heading: {
    marginTop: 10,
    fontSize: 32,
  },
  pricingContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
    margin: "50px auto",
    flexWrap: "wrap",
    maxWidth: 1100,
  },
  card: {
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: "30px 20px",
    width: 300,
    borderTop: "3px solid #a5cf4c",
    transition: "transform 0.3s",
  },
  planTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  priceSpan: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#555",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    textAlign: "left",
  },
  listItem: {
    margin: "10px 0",
    paddingLeft: 25,
    position: "relative",
    before: {
      content: '"✔"',
      color: "#a5cf4c",
      position: "absolute",
      left: 0,
    },
  },
  button: {
    background: "#a5cf4c",
    color: "#111",
    border: "none",
    padding: "12px 20px",
    fontWeight: "bold",
    borderRadius: 6,
    cursor: "pointer",
    
  },

};
