import React,{ useState,useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSearch,FaCalendarAlt, FaMapMarkerAlt,  FaUserFriends,FaUsers, FaDoorOpen, FaGasPump, FaRegClock } from "react-icons/fa";
import "./Home.css"; // Your CSS file
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm"; // adjust path as needed
import { Modal } from "react-bootstrap"; // make sure react-bootstrap is installed


const Home = () => {

   
  const slides = [
    {
      title: "Find Affordable Dream Cars for Rental",
      subtitle: "Fulfill your automotive fantasies without breaking the bank. Check our affordable car rentals for an opulent yet economical ride.",
    },
    {
      title: "Drive in Style with Our Sedans",
      subtitle: "Smooth, sleek, and built for comfort—our sedans are perfect for business or casual rides.",
    },
    {
      title: "Power Meets Elegance",
      subtitle: "Experience the thrill of a V8 engine wrapped in luxurious design.",
    },
    {
      title: "Compact. Efficient. Reliable.",
      subtitle: "Our hatchbacks offer the perfect balance of space and savings for city rides.",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  
  const carList = [
    {
      id: 1,
      title: "Toyota Land Cruiser",
      image: "/toyota-landcruser.jpg",
      price: 65,
    },
    {
      id: 2,
      title: "Nissan GTR Turbo",
      image: "/nisan-turbo.jpg",
      price: 120,
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
      price: 110,
    },
    {
      id: 5,
      title: "BMW M5 Competition",
      image: "/bmw-competition.jpg",
      price: 130,
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
        
        const pressUpdates = [
          {
            image: "/sedan.jpg",
            title: "Top 10 destinations you should visit this winter",
            date: "08/31/2025",
          },
          {
            image: "/suv.jpg",
            title: "Booking travel during Winter Find who are giving services",
            date: "08/01/2025",
          },
          {
            image: "/sedan2.jpg",
            title: "Top Luxury Cars of 2025 Style, Comfort, and Performance",
            date: "08/01/2025",
          },
        ];
        const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
        
        const latestUpdateRef = useRef(null); // 👈 Ref for the news section
        const aboutus = useRef(null); // 👈 Ref for the aboutus section
        const Book = useRef(null); // 👈 Ref for the book section
  const scrollToNews = () => {
    latestUpdateRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToaboutus = () => {
    aboutus.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBook = () => {
    Book.current?.scrollIntoView({ behavior: "smooth" });
  };
     
  const [tripType, setTripType] = useState("return");
  const [multiCityTravel, setMultiCityTravel] = useState([
    { from: "", to: "", date: "" }
  ]);

  const handleAddTravel = () => {
    setMultiCityTravel([...multiCityTravel, { from: "", to: "", date: "" }]);
  };

  const handleTravelChange = (index, field, value) => {
    const updatedTravel = [...multiCityTravel];
    updatedTravel[index][field] = value;
    setMultiCityTravel(updatedTravel);
  };

  const [passengerCount, setPassengerCount] = useState(1);

  const handleLatestUpdateClick = () => {
  
  };
  const [showAuthModal, setShowAuthModal] = useState(false);


  return (

  
      <>

      {/* Black info bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-1" >
       
        <div className="d-flex align-items-center gap-2" >
        <FaRegClock className="me-2 text-success" id="clock" />
          <span>Working Hours: 24/7 Days</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span>On Social:</span>
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>

      {/* Main header */}
      <div className="main-header d-flex justify-content-between align-items-center px-4 py-3">
        {/* Logo */}
        <div className="d-flex align-items-center gap-2">
        <Link to="/"><img src="/favicon.ico" alt="FGS Logo" className="logo-img" /></Link>
          {/* <h1 className="brand-name mb-0">
            Car<span className="text-danger">ola</span>
          </h1> */}
        </div>

        {/* Navigation */}
<nav className="d-none d-md-flex gap-4 fw-medium nav-links">
  <div className="nav-dropdown">
    <span className=" nav-item" style={{color:"#8dc73f"}}>Home</span>
    {/* <div className="dropdown-menu">
      <span>Home One</span>
      <span>Home Two</span>
      <span>Home Three</span>
      <span>Home Four</span>
      <span>Home Five</span>
    </div> */}
  </div>
  <span className="nav-item" onClick={scrollToaboutus} style={{ cursor: "pointer" }}>About Us</span>

  <div className="nav-dropdown">
    <span className="nav-item">Cars ▾</span>
    <div className="dropdown-menu">
      <span>Car For Rental</span>
      <span>Car For Selling</span>
      
    </div>
  </div>

  <div className="nav-dropdown">
    <span className="nav-item">Services ▾</span>
    <div className="dropdown-menu">
      <span>Car Insurance</span>
      <span>Driver Support</span>

      {/* <div className="submenu-dropdown">
      <span className="has-submenu">Testimonials</span>
      <div className="submenu">
        <span>Testimonials</span>
        <span>Testimonials 2</span>
        <span>Testimonials 3</span>
      </div>
    </div> */}

      {/* <span>Service Areas</span>
      <span>Area Details</span>
      <span>Gallery</span>
      <span>Pricing</span> */}
    </div>
  </div>

  <div className="nav-dropdown">
    <span className="nav-item" onClick={scrollToNews} style={{ cursor: "pointer" }}>News</span>
   
  </div>

  <Link to="contact" id="cont"><span className="nav-item">Contact Us</span></Link>
</nav>



        {/* Icons & Login */}
        <div className="d-flex align-items-center gap-3" onClick={scrollToBook} style={{ cursor: "pointer" }}>
          <FaSearch className="search-icon" />
          <button className="btn  btn-sm px-3 rounded-1" id="log">Book</button>
        </div>
      </div>
      <div className="slideshow-container position-relative" id="slide">
  {/* Background Video */}
  <video autoPlay muted loop playsInline className="slide-video-bg">
    <source src="/car in motion.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Rotating Text Overlay */}
  <div className="slide-text-overlay text-white px-4 text-center position-absolute top-50 start-50 translate-middle">
    <h1 className="display-4 fw-bold">{slides[currentSlide].title}</h1>
    <p className="lead">{slides[currentSlide].subtitle}</p>
    <button className="btn btn-lg rounded-pill mt-3" id="findout">Find Out How</button>
  </div>
</div>




{/* ──── Booking Card ──── */}
<div
  className="booking-card container p-0 shadow-lg"
  ref={Book}
>
  {/* ─ Tabs (purely visual, no onClick wired yet) ─ */}
  <ul className="nav booking-tabs px-4 pt-4">
    <li className="nav-item">
      <span className="nav-link active">
        <i className="fa-solid fa-car me-2"></i>Book a travel
      </span>
    </li>
    {/* <li className="nav-item">
      <span className="nav-link">
        <i className="fa-solid fa-hotel me-2"></i>Stopover / Packages
      </span>
    </li> */}
    {/* <li className="nav-item d-none d-md-block">
      <span className="nav-link">
        <i className="fa-regular fa-calendar-check me-2"></i>Manage / Check in
      </span>
    </li>
    <li className="nav-item d-none d-lg-block">
      <span className="nav-link">
        <i className="fa-solid fa-location-dot me-2"></i>Travel status
      </span>
    </li> */}
  </ul>

  {/* ─ Actual form ─ */}
  <form id="search-form" className="p-4">

    {/* Trip-type radio buttons */}
    <div className="trip-types d-flex gap-4 mb-4">
      {["return", "oneway", "multicity"].map((type) => (
        <label className="trip-option" key={type}>
          <input
            type="radio"
            name="trip"
            value={type}
            checked={tripType === type}
            onChange={(e) => setTripType(e.target.value)}
          />
          {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
        </label>
      ))}
    </div>

    {/* Return & One-way */}
{(tripType === "return" || tripType === "oneway") && (
  <div className="row g-0 mb-3 booking-row">
    <div className="col-md-3 col-6 px-2 form-floating">
      <input type="text" className="form-control" id="from" placeholder="From" required />
      <label htmlFor="from">From</label>
    </div>

    <div className="col-md-3 col-6 px-2 form-floating">
      <input type="text" className="form-control" id="to" placeholder="To" required/>
      <label htmlFor="to">To</label>
    </div>

    <div className="col-md-3 col-6 px-2 mt-3 mt-md-0 form-floating">
      <input
        type="date"
        className="form-control"
        id="departureDate"
        placeholder="Departure"
      required/>
      <label htmlFor="departureDate">Departure</label>
    </div>

    {tripType === "return" && (
      <div className="col-md-3 col-6 px-2 mt-3 mt-md-0 form-floating" id="returnd">
        <input
          type="date"
          className="form-control"
          id="returnDate"
          placeholder="Return"
        required/>
        <label htmlFor="returnDate">Return</label>
      </div>
    )}

    <div className="col-md-3 col-6 px-2 mt-3 mt-md-0 form-floating" id="passenger">
      <input
        type="number"
        min="1"
        className="form-control"
        id="passengerCount"
        placeholder="Number of passengers"
      required/>
      <label htmlFor="passengerCount">Number of passengers</label>
    </div>
  </div>
)}

    {/* Multi-travel (unchanged logic, renamed labels) */}
    {tripType === "multicity" && (
      <div className="mb-3">
        {multiCityTravel.map((travel, index) => (
          <div className="row g-0 booking-row mb-3" key={index}>
            <div className="col-md-3 col-6 px-2">
              <input
                type="text"
                className="form-control"
                placeholder="From"
                value={travel.from}
                onChange={(e) =>
                  handleTravelChange(index, "from", e.target.value)
                }
                id="input" required/>
            </div>
            <div className="col-md-3 col-6 px-2">
              <input
                type="text"
                className="form-control"
                placeholder="To"
                value={travel.to}
                onChange={(e) =>
                  handleTravelChange(index, "to", e.target.value)
                }
                id="input" required/>
            </div>
            <div className="col-md-3 col-6 px-2 mt-3 mt-md-0">
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                value={travel.date}
                id="departureDate"
                placeholder="Departure"
                onChange={(e) =>
                  handleTravelChange(index, "date", e.target.value)
                }
                required/>
                <label htmlFor="departureDate">Departure</label>
            </div>
            </div>
            <div className="col-md-3 col-6 px-2 mt-3 mt-md-0 form-floating">
  <input
    type="number"
    min="1"
    className="form-control"
    id="passengerCount"
    placeholder="Number of passengers"
  required/>
  <label htmlFor="passengerCount">Number of passengers</label>
</div>

          </div>
        ))}

        <button
          type="button"
          onClick={handleAddTravel}
          className="btn ps-0 add-travel-btn"
         id="addtravel">
          + Add a Travel
        </button>
      </div>
    )}

    {/* Bottom row: Avios & Search */}
    <div className="row g-0 align-items-center">
      {/* <div className="col-md-6 d-flex align-items-center gap-2 px-2 mb-3 mb-md-0">
        <input type="checkbox" id="avios" className="form-check-input" />
        <label htmlFor="avios" className="form-check-label user-select-none">
          Book using Avios
        </label>
      </div> */}

      <div className="col-md-6 d-flex justify-content-end px-2">
        <button id="btn2" type="submit" className="btn btn-lg px-4">
          Search Cars
        </button>
      </div>
    </div>
  </form>
</div>



<div className="container my-5">
  <h2 className="fw-bold mb-4 text-center">Most Popular Cars</h2>
  <div className="row">
    {carList.map((car, i) => (
      <div className="col-md-4 mb-4" key={car.id}>
        <div className="card h-100 shadow border-0">
          <div className="position-relative">
            <img src={car.image} alt={car.title} className="card-img-top" />
            <span id="pricetag" className="badge bg-white  position-absolute top-0 end-0 m-2 px-3 py-2 fw-bold">RWF {car.price},000/Day</span>
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
  id="rent"
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
<div className="container my-5">
  <div className="text-center mb-4">
    <h2 className="fw-bold mt-3">Explore Car Types</h2>
  </div>
  <div className="car-type-marquee">
    <div className="marquee-track">
      {[...carTypes, ...carTypes].map((car, idx) => (
        <div
          key={idx}
          className="car-type-card text-center border rounded p-3 flex-shrink-0"
        >
          <img
            src={car.image}
            alt={car.type}
            className="img-fluid mb-2"
            style={{ height: "90px", objectFit: "contain" }}
          />
          <div className="car-description">{car.description}</div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="container my-5" ref={aboutus}>
  <div className="row align-items-center">
    {/* Left Text Section */}
    <div className="col-md-6 mb-4 mb-md-0">
      <span
        className="badge rounded-pill px-3 py-2 fw-bold"
        style={{ backgroundColor: "#ffecec", color: "#8dc73f", fontSize:20 }}
      >
        WE ARE THE BEST
      </span>
      <h1
        className="fw-bold mt-3"
        style={{ fontSize: "48px", lineHeight: "1.2" }}
      >
        Explore The World<br />
        With Your Own Way<br />
        Of Driving
      </h1>
    </div>

    {/* Right Service Cards - side by side */}
    <div className="col-md-6">
      <div className="d-flex gap-3 flex-wrap">
        {/* Card 1 */}
        <div className="shadow-sm p-4 bg-white rounded" style={{ flex: "1 1 48%" }}>
          <div className="mb-3">
            <div
              style={{
                width: "80px",
                height: "80px",
                border: "1px solid #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i className="fa-solid fa-location-dot fa-2x"></i>
            </div>
          </div>
          <h5 className="fw-bold">Free Pick Up & Drop</h5>
          <p className="text-muted mb-0">
            Your convenience matter. Complimentary pick-up and drop-off service
            for any your vehicle, a stress-free experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="shadow-sm p-4 bg-white rounded" style={{ flex: "1 1 48%" }}>
          <div className="mb-3">
            <div
              style={{
                width: "80px",
                height: "80px",
                border: "1px solid #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i className="fa-solid fa-users fa-2x"></i>
            </div>
          </div>
          <h5 className="fw-bold">24/7 Road Assistant</h5>
          <p className="text-muted mb-0">
            No matter the time or place, and our 24/7 roadside assistance
            ensures you're never stranded. Drive confidently with support.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="container my-5" ref={latestUpdateRef}>
  <div className="text-center mb-4">
    {/* <span className="badge bg-light text-danger px-3 py-2 fw-semibold">CITY NEWS</span> */}
    <h2 className="fw-bold mt-3">Latest Update</h2>
  </div>

  <div className="press-marquee">
    <div className="press-track">
      {[...pressUpdates, ...pressUpdates].map((post, index) => (
        <div key={index} className="press-card rounded p-3 flex-shrink-0 shadow-sm bg-white">
          <img
            src={post.image}
            alt={post.title}
            className="img-fluid rounded mb-3"
            style={{ height: "180px", objectFit: "cover", width: "100%" }}
          />
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="badge bg-light  px-2 py-1" id="latestnews">FGS  NEWS</span>
            <span className="text-muted"><FaCalendarAlt className="me-1" id="calendaricon"/>{post.date}</span>
          </div>
          <Link to="/" id="ne"><h6 className="fw-bold" >{post.title}</h6></Link>
          <Link to="/" id="viewmore" >View More</Link>
          
        </div>
       
      ))}
       
      
    </div>
   
  </div>
  <button
  type="button"
  id="latestUpdateBtn"
  className="btn px-4"
  onClick={handleLatestUpdateClick}
>
  Load More
</button>

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

export default Home;
