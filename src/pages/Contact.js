import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: '',
    companyName: '',
    askDetails: '',
    location: '',
    grades: '',
    topics: [],
    otherTopic: '',
    numberOfKids: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTopicsChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      topics: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({
            fullName: '',
            email: '',
            serviceType: '',
            companyName: '',
            askDetails: '',
            location: '',
            grades: '',
            topics: [],
            otherTopic: '',
            numberOfKids: '',
          });
          window.location.href = '/';
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  const renderAdditionalFields = () => {
    switch (serviceType) {
      case 'consultations':
        return (
          <>
            <TextField
              label="Company Name"
              name="companyName"
              fullWidth
              margin="normal"
              value={formData.companyName}
              onChange={handleChange}
            />
            <TextField
              label="Ask Details"
              name="askDetails"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.askDetails}
              onChange={handleChange}
            />
          </>
        );
      case 'project':
        return (
          <Typography variant="body1" gutterBottom>
            Please fill out the RFP form and book a time on our Calendly: 
            <a href="YOUR_CALENDLY_LINK" target="_blank" rel="noopener noreferrer"> Book a Time</a>
          </Typography>
        );
      case 'education':
        return (
          <>
            <TextField
              label="Location (Physical or Virtual)"
              name="location"
              fullWidth
              margin="normal"
              value={formData.location}
              onChange={handleChange}
            />
            <TextField
              label="Grades"
              name="grades"
              fullWidth
              margin="normal"
              value={formData.grades}
              onChange={handleChange}
            />
            <TextField
              select
              label="Topics"
              name="topics"
              fullWidth
              margin="normal"
              SelectProps={{ multiple: true }}
              value={formData.topics}
              onChange={handleTopicsChange}
            >
              <MenuItem value="Website Development">Website Development</MenuItem>
              <MenuItem value="Mobile App Development">Mobile App Development</MenuItem>
              <MenuItem value="Web App Development">Web App Development</MenuItem>
              <MenuItem value="Generative AI">Generative AI</MenuItem>
              <MenuItem value="Robotics">Robotics</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            {formData.topics.includes('Other') && (
              <TextField
                label="Other Topic"
                name="otherTopic"
                fullWidth
                margin="normal"
                value={formData.otherTopic}
                onChange={handleChange}
              />
            )}
            <TextField
              label="Number of Kids"
              name="numberOfKids"
              fullWidth
              margin="normal"
              value={formData.numberOfKids}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: { xs: '10px', md: '20px' } }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: 'center',
          backgroundColor: '#FC902B',
          padding: '10px',
          borderRadius: '8px',
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        Contact Us
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '20px' }}>
        <img
          src="/developer.jpeg"
          alt="Developers"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          fullWidth
          margin="normal"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Contact Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Service Type"
          name="serviceType"
          fullWidth
          margin="normal"
          value={formData.serviceType}
          onChange={(e) => {
            handleChange(e);
            setServiceType(e.target.value);
          }}
          required
        >
          <MenuItem value="consultations">Consultations</MenuItem>
          <MenuItem value="project">Project Development</MenuItem>
          <MenuItem value="education">Education</MenuItem>
        </TextField>
        {renderAdditionalFields()}
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#FC902B',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;