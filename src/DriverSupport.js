import React,{useState} from 'react';
import Header from './Header';

const DriverSupport = () => {

  const [hover, setHover] = useState(false);
  return (
    <>
      <Header />
      <div className="container py-5" style={{ marginTop: 140 }}>
        <h2 className="text-4xl font-bold text-center mb-4 text-success">Driver Support</h2>
        <p className="text-muted text-center mb-5 fs-5">
          Fill out the form below to request a driver. We'll get back to you as soon as possible.
        </p>

        <div className="bg-white p-5 rounded shadow-lg border border-light mx-auto" style={{ maxWidth: '1000px' }}>
          <form className="row g-4">
            {/* First row - 3 fields */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="form-control border-2"
              style={{borderColor:"#8dc73f"}}/>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                placeholder="+250 123 456 789"
                className="form-control border-2"
                style={{borderColor:"#8dc73f"}}/>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Pickup Location</label>
              <input
                type="text"
                placeholder="Pickup location"
                className="form-control border-2"
                style={{borderColor:"#8dc73f"}}/>
            </div>

            {/* Second row - 3 fields */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">Destination</label>
              <input
                type="text"
                placeholder="Destination"
                className="form-control border-2"
                style={{borderColor:"#8dc73f"}}/>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Pickup Time</label>
              <input
                type="datetime-local"
                className="form-control border-2"
                style={{borderColor:"#8dc73f"}}/>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Additional Notes</label>
              <textarea
                rows="1"
                placeholder="Extra instructions"
                className="form-control border-2"
                style={{borderColor:"#8dc73f"}}></textarea>
            </div>

            {/* Checkbox */}
            <div className="col-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="saveInfo"
                  className="form-check-input"
                />
                <label htmlFor="saveInfo" className="form-check-label text-muted">
                  Save my name, email, and details in this browser for next time.
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="col-12 text-center mt-3">
            <button
      type="submit"
      className="btn px-5 py-2 shadow-sm"
      style={{
        borderColor: hover ? "#8dc73f" : "#8dc73f",
        borderWidth: 4,
        backgroundColor: hover ? "#8dc73f" : "transparent",
        color: hover ? "white" : "inherit",
        transition: "all 0.3s ease",
        fontWeight:"bold"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Send Request
    </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DriverSupport;
