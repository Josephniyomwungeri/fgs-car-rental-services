import React, { useState, useEffect } from 'react';
import Header from './Header';
import { FaCarSide, FaCogs, FaChair, FaSearch, FaFilter } from 'react-icons/fa';
import { MdDirectionsCar, MdPeople } from 'react-icons/md';
import "./CarRental.css";
import { useParams } from 'react-router-dom';

// Car data
const carData = [
  { id: 1, type: 'SUV', brand: 'SUV', name: 'SUV', seat: '4 People', transmission: 'Automatic', image: 'suv.jpg' },
  { id: 2, type: 'Land Cruiser', brand: 'Land Cruiser', name: 'Land Cruiser', seat: '6 People', transmission: 'Manual', image: 'landCruser.jpg' },
  { id: 3, type: 'Mitsubish', brand: 'Mitsubish', name: 'Mitsubish', seat: '5 People', transmission: 'Manual', image: 'mitsubish.jpg' },
  { id: 4, type: 'Sedan', brand: 'Sedan', name: 'Sedan', seat: '5 People', transmission: 'Manual', image: 'sedan.jpg' },
  { id: 5, type: 'Bmw', brand: 'Bmw', name: 'Bmw-competition', seat: '4 People', transmission: 'Manual', image: 'bmw-competition.jpg' },
  { id: 6, type: 'Bmw', brand: 'Bmw', name: 'Bmw', seat: '4 People', transmission: 'Manual', image: 'bmwcar.jpg' },
  { id: 7, type: 'Light Commercial', brand: 'CHANGAN', name: 'TRUCK-Double Cab', seat: '5 People', transmission: 'Manual', image: 'truck.jpg' },
  { id: 8, type: 'Land Cruiser', brand: 'Land Cruiser', name: 'Toyota Land Cruiser', seat: '8 People', transmission: 'Manual', image: 'toyota-landcruser.jpg' },
  { id: 9, type: 'Sedan', brand: 'Sedan', name: 'Sedan', seat: '5 People', transmission: 'Manual', image: 'sedan2.jpg' },
  { id: 10, type: 'Mitsubish', brand: 'Mitsubish', name: 'Mitsubish Pajero', seat: '8 People', transmission: 'Manual', image: 'mitsubish pajero sprot.jpg' },
  { id: 11, type: 'Nisan', brand: 'Nisan', name: 'Nisan-Turbo', seat: '4 People', transmission: 'Manual', image: 'nisan-turbo.jpg' },
  { id: 12, type: 'Nisan', brand: 'Nisan', name: 'Nisan-Fiyat 2024', seat: '4 People', transmission: 'Manual', image: 'nisan fiyat listesi nisan 2024.jpg' },
];

// Extract unique values
const extractUnique = (arr, key) => ['All Types', ...Array.from(new Set(arr.map(item => item[key])))];

// Helper to capitalize first letter only
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const CarRental = () => {
  const { type } = useParams();

  const [selectedType, setSelectedType] = useState(type ? capitalize(type) : 'All Types');
  const [selectedBrand, setSelectedBrand] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  const allTypes = extractUnique(carData, 'type');
  const allBrands = extractUnique(carData, 'brand');

  // Update selectedType if URL param changes
  useEffect(() => {
    if (type) {
      setSelectedType(capitalize(type));
      setCurrentPage(1);
    }
  }, [type]);

  const filteredCars = carData.filter(car => {
    const matchType = selectedType === 'All Types' || car.type === selectedType;
    const matchBrand = selectedBrand === 'All Types' || car.brand === selectedBrand;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      car.name.toLowerCase().includes(searchLower) ||
      car.brand.toLowerCase().includes(searchLower) ||
      car.type.toLowerCase().includes(searchLower) ||
      (car.seat && car.seat.toLowerCase().includes(searchLower));

    return matchType && matchBrand && (!searchTerm || matchesSearch);
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <>
      <Header />
      <div style={{ display: 'flex', padding: '20px', fontFamily: 'Arial, Helvetica, sans-serif', marginTop: 170 }}>
        {/* Sidebar */}
        <div style={{ width: '250px', marginRight: '30px', fontSize: 20 }}>
          <h3><FaCarSide style={{ marginRight: '8px' }} />CAR TYPES</h3>
          {allTypes.map(type => (
            <div key={type}>
              <input
                type="radio"
                name="type"
                checked={selectedType === type}
                onChange={() => {
                  setSelectedType(type);
                  setCurrentPage(1);
                }}
              />
              <label style={{ marginLeft: '8px' }}><FaCarSide style={{ marginRight: '4px' }} />{type}</label>
            </div>
          ))}

          <h3 style={{ marginTop: '30px' }}><FaFilter style={{ marginRight: '8px' }} />CAR BRANDS</h3>
          {allBrands.map(brand => (
            <div key={brand}>
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand}
                onChange={() => {
                  setSelectedBrand(brand);
                  setCurrentPage(1);
                }}
              />
              <label style={{ marginLeft: '8px' }}><FaFilter style={{ marginRight: '4px' }} />{brand}</label>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          {/* Search Input */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block', width: '600px' }}>
              <FaSearch style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '20px', color: '#aaa' }} />
              <input
                type="text"
                placeholder="Search by name, brand, type, or seats"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  padding: '10px 10px 10px 40px',
                  width: '100%',
                  fontSize: 20,
                  textAlign: "left",
                  borderRadius: '8px',
                  border: '1px solid #ccc'
                }}
              />
            </div>
          </div>

          {/* Car Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px'
            }}
          >
            {currentCars.map(car => (
              <div key={`${car.id}-${car.name}`} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
                <h4><MdDirectionsCar style={{ marginRight: '8px' }} />{car.name}</h4>
                <img
                  src={`/${car.image}`}
                  alt={car.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <p><FaCarSide style={{ marginRight: '8px' }} /><strong>Type:</strong> {car.type}</p>
                <p><FaFilter style={{ marginRight: '8px' }} /><strong>Brand:</strong> {car.brand}</p>
                {car.seat && <p><MdPeople style={{ marginRight: '8px' }} /><strong>Seats:</strong> {car.seat}</p>}
                <p><FaCogs style={{ marginRight: '8px' }} /><strong>Transmission:</strong> {car.transmission}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <button style={{ backgroundColor: '#8dc73f', color: '#fff', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', fontWeight: "bold", marginLeft: 50, width: 100 }}>Rent</button>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {currentCars.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No cars match the selected filters.</p>}

          {/* Pagination */}
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  margin: '0 5px',
                  padding: '8px 12px',
                  backgroundColor: currentPage === i + 1 ? '#8dc73f' : '#f0f0f0',
                  color: currentPage === i + 1 ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default CarRental;
