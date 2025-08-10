import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'react-apexcharts';
import AdminDashboard from './admindashboard';

// Load Material Symbols
const materialIconStyle = {
  fontFamily: 'Material Symbols Outlined',
  fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
};

const Dashboard = () => {
  // Summary card data
  const summary = [
    { label: 'Total Revenue', value: '78.423', change: '15.2%', icon: 'attach_money' },
    { label: 'New Booking', value: '32.567', change: '5.2%', icon: 'calendar_month' },
    { label: 'Rented Cars', value: '41.411', change: '21.2%', icon: 'key' },
    { label: 'Available Cars', value: '28.623', change: '7.2%', icon: 'directions_car' },
  ];

  // Area chart (Earnings Summary)
  const earningsOptions = {
    chart: { type: 'area', toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', colors: ['#a5cf4c'] },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0 } },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    tooltip: { y: { formatter: val => `$${val}` } },
  };
  const earningsSeries = [{ name: 'Earnings', data: [70, 130, 101, 160, 140, 120] }];

  // Bar chart (Booking Overview)
  const bookingOptions = {
    chart: { toolbar: { show: false } },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    colors: ['#a5cf4c'],
  };
  const bookingSeries = [{ name: 'Bookings', data: [30, 15, 25, 35, 20, 30, 10] }];

  // Donut chart (Booking Status)
  const donutOptions = {
    labels: ['Hired', 'Pending', 'Available'],
    colors: ['#090707FF', '#a5cf4c', '#046333'],
    legend: { show: false },
  };
  const donutSeries = [40, 35, 25];

  // Car type progress data
  const carTypes = [
    { label: 'Sedan', value: 75 },
    { label: 'SUV', value: 60 },
    { label: 'Compact', value: 45 },
    { label: 'Electric', value: 50 },
  ];

  return (
    <><AdminDashboard />
    <div className="container-fluid p-4" style={{ backgroundColor: '#f9fafb',width:900, marginLeft:300, marginTop:-490 }}>
      <div className="row g-3">
        {/* Summary Cards */}
        {summary.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card shadow-sm p-3">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined me-3" style={{ ...materialIconStyle, fontSize: 32 }}>{item.icon}</span>
                <div>
                  <h5 className="mb-0">{item.value}</h5>
                  <small className="text-muted">{item.label}</small>
                </div>
              </div>
              <div className="text-end mt-2">
                <span className="small" style={{color:"#046333", fontWeight:"bold"}}>{item.change} ↑</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4 g-4">
        {/* Earnings Summary */}
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <div className="d-flex justify-content-between">
              <h6>Earnings Summary</h6>
              <select className="form-select form-select-sm w-auto">
                <option>Jan 2025 - Jun 2025</option>
              </select>
            </div>
            <Chart options={earningsOptions} series={earningsSeries} type="area" height={250} />
          </div>
        </div>

        {/* Car Availability */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h6>Car Availability</h6>
            <input className="form-control mb-2" placeholder="Car Number" />
            <input type="date" className="form-control mb-2" defaultValue="2025-01-20" />
            <input type="time" className="form-control mb-3" defaultValue="10:00" />
            <button className="btn  w-100" style={{backgroundColor:"#a5cf4c"}}>Check</button>
          </div>
        </div>
      </div>

      <div className="row mt-4 g-4">
        {/* Booking Overview */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <div className="d-flex justify-content-between">
              <h6>Booking Overview</h6>
              <select className="form-select form-select-sm w-auto">
                <option>Weekly</option>
              </select>
            </div>
            <Chart options={bookingOptions} series={bookingSeries} type="bar" height={250} />
          </div>
        </div>

        {/* Car Type */}
        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h6>Car Type</h6>
            {carTypes.map((car, i) => (
              <div key={i} className="mb-2">
                <div className="d-flex justify-content-between">
                  <span>{car.label}</span>
                  <span>{car.value}%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-dark" style={{ width: `${car.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Status */}
        <div className="col-md-3">
          <div className="card shadow-sm p-4">
            <h6>Booking Status</h6>
            <Chart options={donutOptions} series={donutSeries} type="donut" height={200} />
            <ul className="list-unstyled mt-3 small">
              <li><span className="badge  me-2" style={{backgroundColor:"#0A0B0AFF"}}>&nbsp;</span> Hired (40%)</li>
              <li><span className="badge me-2" style={{backgroundColor:"#8dc73f"}}>&nbsp;</span> Pending (35%)</li>
              <li><span className="badge  me-2" style={{backgroundColor:"#046333"}}>&nbsp;</span> Available (25%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
