import React, { useState } from 'react';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  const initialEmployeeData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  };
  const [employeeData, setEmployeeData] = useState(initialEmployeeData);
  const [employeeList, setEmployeeList] = useState(() => {
    const storedList = localStorage.getItem('employeeList');
    return storedList ? JSON.parse(storedList) : [];
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveEmployee = (event) => {
    event.preventDefault();
    const newList = [...employeeList, employeeData];
    localStorage.setItem('employeeList', JSON.stringify(newList));
    setEmployeeList(newList);
    setEmployeeData(initialEmployeeData);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        HRnet
      </h1>
      <div className="employee-container">
      <a href="/list">View Current Employees</a>
      </div>
      <div className="form-container">
        <h2 className="form-title">
          Create Employee
        </h2>
        <form className="form" id="create-employee" onSubmit={handleSaveEmployee}>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-input"
              id="firstName"
              name="firstName"
              value={employeeData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-input"
              id="lastName"
              name="lastName"
              value={employeeData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              className="form-input"
              id="dateOfBirth"
              name="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="startDate">Start Date</label>
            <input
              type="date"
              className="form-input"
              id="startDate"
              name="startDate"
              value={employeeData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <Container>
            <h2>Address</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="street">Street</label>
            <input
              type="text"
              className="form-input"
              id="street"
              name="street"
              value={employeeData.street}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="city">City</label>
            <input
              type="text"
              className="form-input"
              id="city"
              name="city"
              value={employeeData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="state">State</label>
            <select
              className="form-input"
              id="state"
              name="state"
              value={employeeData.state}
              onChange={handleInputChange}
            >
              <option value="">Select a state</option>
              <option value="AL">Alabama (AL)</option>
              <option value="AK">Alaska (AK)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="zipCode">Zip Code</label>
            <input
              type="number"
              className="form-input"
              id="zipCode"
              name="zipCode"
              value={employeeData.zipCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            </div>
            <label className="form-label" htmlFor="department">Department</label>
            <select
              className="form-input"
              id="department"
              name="department"
              value={employeeData.department}
              onChange={handleInputChange}
            >
              <option value="">Select a department</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
            </select>
          </Container>
          <button
            type="submit"
            className="form-button"
          >
            Save
          </button>
        </form>
      </div>
      <div className="employee-list-container">
      <h2 className="form-title">Employee List</h2>
      <ul>
        {employeeList.map((employee, index) => (
          <li key={index}>{employee.firstName} {employee.lastName} {employee.startDate} {employee.department} {employee.dateOfBirth}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;

