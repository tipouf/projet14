import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, Select, MenuItem, Modal, Box, FormControl, FormLabel } from '@mui/material';
import './Home.scss';
import { EmployeeContext, Employee } from '../../context/useContext';
import hrnet from '../../assets/hrnet.svg';

const Home = () => {
  const { saveEmployee } = useContext(EmployeeContext);
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
    
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleChange = (event: React.ChangeEvent<any>) => {
        setEmployeeData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSaveEmployee = (event: React.FormEvent) => {
        event.preventDefault();
        saveEmployee(employeeData as Employee);
        setIsModalOpen(true);
        setEmployeeData(initialEmployeeData);
      };
    
      return (
        <>
        <div className="form-container">
          <div className="app-title">
            <img src={hrnet} alt="HRnet logo" width={200} height={200} />
          </div>
          <div className="employee-container">
          <Link to="/list">View current employees</Link>
          </div>
            <h2 className="form-title">
              Create Employee
            </h2>
            <form className="form" id="create-employee" onSubmit={handleSaveEmployee}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>First Name</FormLabel>
                    <TextField
                      fullWidth
                      name="firstName"
                      value={employeeData.firstName}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter first name"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Last Name</FormLabel>
                    <TextField
                      fullWidth
                      name="lastName"
                      value={employeeData.lastName}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter last name"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Date of Birth</FormLabel>
                    <TextField
                      fullWidth
                      type="date"
                      name="dateOfBirth"
                      value={employeeData.dateOfBirth}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter date of birth"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Start Date</FormLabel>
                    <TextField
                      fullWidth
                      type="date"
                      name="startDate"
                      value={employeeData.startDate}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter start date"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <h2>Address</h2>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Street</FormLabel>
                    <TextField
                      fullWidth
                      name="street"
                      value={employeeData.street}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter street"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>City</FormLabel>
                    <TextField
                      fullWidth
                      name="city"
                      value={employeeData.city}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter city"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <FormLabel>State</FormLabel>
                    <Select
                      fullWidth
                      name="state"
                      value={employeeData.state}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      displayEmpty
                      placeholder="Select a state"
                      required
                    >
                      <MenuItem value="" disabled>Select a state</MenuItem>
                      <MenuItem value="AL">Alabama (AL)</MenuItem>
                      <MenuItem value="AK">Alaska (AK)</MenuItem>
                      <MenuItem value="AZ">Arizona (AZ)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Zip Code</FormLabel>
                    <TextField
                      fullWidth
                      type="number"
                      name="zipCode"
                      value={employeeData.zipCode}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      placeholder="Enter zip code"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel>Department</FormLabel>
                    <Select
                      fullWidth
                      name="department"
                      value={employeeData.department}
                      onChange={(e) => handleChange(e as React.ChangeEvent<any>)}
                      displayEmpty
                      required
                    >
                      <MenuItem value="" disabled>Select a department</MenuItem>
                      <MenuItem value="Sales">Sales</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Engineering">Engineering</MenuItem>
                      <MenuItem value="Human Resources">Human Resources</MenuItem>
                      <MenuItem value="Legal">Legal</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </form>
          </div>
          <Modal
            open={isModalOpen}
            className="modal"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box className="modal-content" sx={{ width: 400, backgroundColor: 'white', padding: 2 }}>
              <h2>Employee Created</h2>
              <p>Employee successfully created!</p>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </Box>
          </Modal>
        </>
      );
    };

export default Home;

