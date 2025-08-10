import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // for navigation if needed

const PageWithNews = ({ pressUpdates }) => {
  const [showNews, setShowNews] = useState(false);

  return (
    <div>
      {/* Navbar or menu */}
      <div className="nav-dropdown">
        <span
          className="nav-item"
          onClick={() => setShowNews(!showNews)}
          style={{ cursor: "pointer" }}
        >
          News
        </span>
      </div>

      {/* Other page content... */}

      {/* Latest Update Section */}
      {showNews && (
        <div className="container my-5" id="latest-news-section">
          <div className="text-center mb-4">
            <h2 className="fw-bold mt-3">Latest Update</h2>
          </div>

          <div className="press-marquee">
            <div className="press-track">
              {[...pressUpdates, ...pressUpdates].map((post, index) => (
                <div
                  key={index}
                  className="press-card rounded p-3 flex-shrink-0 shadow-sm bg-white"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: "180px", objectFit: "cover", width: "100%" }}
                  />
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="badge bg-light px-2 py-1" id="latestnews">
                      FGS NEWS
                    </span>
                    <span className="text-muted">
                      <FaCalendarAlt className="me-1" id="calendaricon" />
                      {post.date}
                    </span>
                  </div>
                  <Link to="/" id="ne">
                    <h6 className="fw-bold">{post.title}</h6>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageWithNews;
