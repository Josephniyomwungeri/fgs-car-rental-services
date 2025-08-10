import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt, FaUserCog, FaUsers, FaCar, FaEnvelope, FaFacebookF,
  FaLinkedinIn, FaBullhorn, FaKey, FaSitemap, FaCogs, FaGoogle
} from 'react-icons/fa';
import {
  BsPerson, BsBuilding, BsGearFill
} from 'react-icons/bs';
import {
  MdListAlt, MdSettings
} from 'react-icons/md';
import {
  GiCarWheel, GiCarKey
} from 'react-icons/gi';
import {
  FiMenu
} from "react-icons/fi";
import {
  Link
} from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [subAdminOpen, setSubAdminOpen] = useState(false);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [brandModelOpen, setBrandModelOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [carListingOpen, setCarListingOpen] = useState(false);
  const [rentalTransactionOpen, setRentalTransactionOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    document.body.classList.add("hide-footer");
    return () => {
      document.body.classList.remove("hide-footer");
    };
  }, []);

  

  return (
    <div className="d-flex vh-100 font-sans" >
      {/* Sidebar */}
      <div className={`sidebar border-end ${sidebarVisible ? "" : "sidebar-hidden"}`} >
        
        <div className="sidebar-header fw-bold fs-4 p-3 text-white">
          <Link to="/admin-dashboard">
            <img src="/FGSWHITE.png" alt="FGS Logo" id="admin-logo-img" />
          </Link>
        </div>
        <nav className="nav flex-column px-2" style={{ backgroundColor: "#046333", color: "white" }}>
          <NavItem label="Dashboard" icon={<FaTachometerAlt />} to="/admin-dashboard" active />

          {/* Dropdowns */}
          <DropdownSection
            isOpen={adminOpen}
            toggle={() => setAdminOpen(!adminOpen)}
            icon={<FaUserCog />}
            label="Admin"
            items={[
              { icon: <FaUsers />, label: "Admin Users List",to: "/users-list"   },
              { icon: <FaKey />, label: "Manage Profile", to: "/manage-profile" },
              { icon: <FaCogs />, label: "Settings", to: "/admin-settings" },
        
              { icon: <FaBullhorn />, label: "Advertisement Update", to: "/ad-update" },
              // { icon: <FaSitemap />, label: "Sitemap Creation", to: "/sitemap" },
            ]}
          />

          <DropdownSection
            isOpen={subAdminOpen}
            toggle={() => setSubAdminOpen(!subAdminOpen)}
            icon={<BsPerson />}
            label="Sub Admin"
            items={[
              { icon: <FaTachometerAlt />, label: "Dashboard", to: "/sub-admin-dashboard" },
              { icon: <FaUsers />, label: "Sub Admin List", to: "/sub-admin-list" },
              { icon: <FaUserCog />, label: "Add New Sub-Admin", to: "/add-sub-admin" },
            ]}
          />

          <Link
            to="/advertisement"
            className="d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 text-white"
            style={{ textDecoration: "none", fontSize: 20 }}
          >
            <BsBuilding />
            <span>Advertisement</span>
          </Link>

          <DropdownSection
            isOpen={passengerOpen}
            toggle={() => setPassengerOpen(!passengerOpen)}
            icon={<FaUsers />}
            label="Passenger"
            items={[
              { icon: <FaTachometerAlt />, label: "Dashboard", to: "/passenger-dashboard" },
              { icon: <FaUsers />, label: "Passenger List", to: "/passenger-list" },
              { icon: <FaUserCog />, label: "Add New Passenger", to: "/add-passenger" },
              { icon: <FaEnvelope />, label: "Export Passenger List", to: "/export-passenger-list" },
            ]}
          />

          <DropdownSection
            isOpen={brandModelOpen}
            toggle={() => setBrandModelOpen(!brandModelOpen)}
            icon={<GiCarWheel />}
            label="Brand / Model"
            items={[
              { icon: <BsBuilding />, label: "Brand List", to: "/brand-list" },
              { icon: <MdListAlt />, label: "Models", to: "/models" },
            ]}
          />

          <DropdownSection
            isOpen={featuresOpen}
            toggle={() => setFeaturesOpen(!featuresOpen)}
            icon={<BsGearFill />}
            label="Featured Cars"
            items={[
              { icon: <MdListAlt />, label: "Featured Car Types", to: "/features-types" },
              { icon: <FaUserCog />, label: "Add Featured Car", to: "/add-features" },
            ]}
          />

          <DropdownSection
            isOpen={carListingOpen}
            toggle={() => setCarListingOpen(!carListingOpen)}
            icon={<MdListAlt />}
            label="Car Listing"
            items={[
              { icon: <FaTachometerAlt />, label: "Dashboard", to: "/car-dashboard" },
              { icon: <FaCar />, label: "Car List", to: "/car-list" },
              { icon: <FaUserCog />, label: "Add New Cars", to: "/add-car" },
              { icon: <FaEnvelope />, label: "Export Cars List", to: "/export-car-list" },
            ]}
          />

          <DropdownSection
            isOpen={rentalTransactionOpen}
            toggle={() => setRentalTransactionOpen(!rentalTransactionOpen)}
            icon={<GiCarKey />}
            label="Rental Transaction"
            items={[
              { icon: <FaTachometerAlt />, label: "Successful Payment", to: "/successful-payment" },
              { icon: <FaTachometerAlt />, label: "Failed Payment", to: "/failed-payment" },
              { icon: <FaTachometerAlt />, label: "Rental Listing Payment", to: "/rental-listing-payment" },
              { icon: <FaTachometerAlt />, label: "Receivables & Payable", to: "/receivables-payable" },
            ]}
          />

          <Link
            to="/settings"
            className="d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 text-white"
            style={{ fontSize: 20, textDecoration: "none" }}
          >
            <MdSettings />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-grow-1 bg-white overflow-auto">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center border-bottom px-4 py-2 shadow-sm">
          <div className="d-flex align-items-center gap-4">
            <FiMenu
              className="fs-4"
              style={{ cursor: "pointer" }}
              onClick={() => setSidebarVisible(!sidebarVisible)}
            />
           
          </div>
          <div className="d-flex align-items-center gap-3">
            <input
              type="text"
              placeholder="Type in to Search..."
              className="form-control form-control-sm"
              style={{ width: "220px" }}
            />
            <div className="d-flex align-items-center gap-2">
              <img src="https://i.pravatar.cc/32" alt="Admin" className="rounded-circle" />
              <span className="small fw-medium">Administrator</span>
            </div>
          </div>
        </div>

        {/* Main dashboard content */}
        <div className="p-4">
          {activePage === "adminUsersList" ? (
            <AdminUsersList />
          ) : (
            <>
             
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, to, active }) => (
  <Link
    to={to}
    className={`d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 ${
      active ? "bg-white-light fw-bold text-white" : "text-secondary"
    }`}
    style={{ textDecoration: "none" }}
  >
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </Link>
);

const DropdownSection = ({ isOpen, toggle, icon, label, items }) => (
  <div>
    <div
      onClick={toggle}
      className={`d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 ${isOpen ? "fw-bold text-white" : "text-secondary"}`}
      style={{ cursor: "pointer" }}
    >
      <span style={{ color: "white", fontSize: 20 }}>{icon}</span>
      <span style={{ color: "white", fontSize: 20 }}>{label}</span>
    </div>
    {isOpen && (
      <div className="ms-4">
        {items.map(({ icon, label, to, onClick }, idx) =>
          onClick ? (
            <div
              key={idx}
              onClick={onClick}
              className="d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 text-white"
              style={{ cursor: "pointer" }}
            >
              {icon && <span>{icon}</span>}
              <span>{label}</span>
            </div>
          ) : (
            <DropdownItem key={idx} icon={icon} label={label} to={to} />
          )
        )}
      </div>
    )}
  </div>
);

const DropdownItem = ({ icon, label, to }) => (
  <Link
    to={to}
    className="d-flex align-items-center gap-2 px-3 py-2 rounded mb-1 text-white"
    style={{ textDecoration: "none" }}
  >
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </Link>
);

const StatCard = ({ title, value, sub, icon, bgColor }) => (
  <div className="p-3 rounded shadow-sm" style={{ backgroundColor: bgColor }}>
    <div className="d-flex align-items-center gap-3 mb-2">
      <div className="fs-4 text-white">{icon}</div>
      <div className="flex-grow-1">
        <h6 className="mb-0 text-dark">{title}</h6>
        <h4 className="mb-0 fw-bold">{value}</h4>
      </div>
    </div>
    <small className="text-muted">{sub}</small>
  </div>
);

const SocialCard = ({ icon, label, users, bgColor }) => (
  <div className="p-3 rounded shadow-sm text-center" style={{ backgroundColor: bgColor }}>
    <div className="fs-4 text-white mb-2">{icon}</div>
    <h6 className="mb-1">{label}</h6>
    <small className="text-muted">{users}</small>
  </div>
);

const AdminUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace this with API fetch later
    const data = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Super Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    ];
    setUsers(data);
  }, []);

  return (
    <div>
      <h2 className="fw-bold mb-4">Admin Users List</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
