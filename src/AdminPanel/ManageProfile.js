import React, { useState } from 'react'; 
import './ManageProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import AdminDashboard from './admindashboard';

const ManageProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [editSection, setEditSection] = useState('');
  const [formData, setFormData] = useState({
    firstName: 'Natashia',
    lastName: 'Khaleira',
    dob: '1990-10-12',
    email: 'info@binary-fusion.com',
    phone: '(+62) 821 2554–5846',
    country: 'United Kingdom',
    city: 'Leeds, East London',
    postalCode: 'ERT 1254'
  });

  const handleShow = (section) => {
    setEditSection(section);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setShowModal(false);
    // API save logic here
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminDashboard />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="profile-card d-flex align-items-center p-3 shadow-sm rounded bg-white">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="rounded-circle profile-img me-3"
          />
          <div>
            <h5 className="mb-0">Natashia Khaleira</h5>
            <p className="mb-0 text-muted">Admin</p>
            <p className="mb-0 text-muted">Leeds, United Kingdom</p>
          </div>
        </div>

        <div className="card mt-4 shadow-sm" style={{marginLeft:-430}}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Personal Information</h6>
            <Button size="sm" onClick={() => handleShow('personal')} style={
              {backgroundColor:"#a5cf4c",borderColor:"#a5cf4c", fontWeight:"bold"}}>Edit</Button>
          </div>
          <div className="card-body">
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Date of Birth:</strong> {formData.dob}</p>
            <p><strong>Email Address:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.phone}</p>
            <p><strong>User Role:</strong> Admin</p>
          </div>
        </div>

        <div className="card mt-4 shadow-sm" style={{marginLeft:-430}}  >
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Address</h6>
            <Button  size="sm" onClick={() => handleShow('address')} style={
              {backgroundColor:"#a5cf4c",borderColor:"#a5cf4c", fontWeight:"bold"}}>Edit</Button>
          </div>
          <div className="card-body">
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit {editSection === 'personal' ? 'Personal Information' : 'Address'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {editSection === 'personal' ? (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProfile;
