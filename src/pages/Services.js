import React from 'react';
import { Box, Typography, Button, Grid,} from '@mui/material';
import { Build, Assignment, School } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Services = () => {
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
        Our Services
      </Typography>
      
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '20px' }}>
        <Grid item>
          <Button
            variant="contained"
            href="#consulting"
            sx={{
              backgroundColor: '#FC902B',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Consulting Sessions
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href="#one-off"
            sx={{
              backgroundColor: '#FC902B',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            One-Off Projects
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href="#education"
            sx={{
              backgroundColor: '#FC902B',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Education Branch
          </Button>
        </Grid>
      </Grid>

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

      {/* Consulting Sessions Section */}
      <Box id="consulting" sx={{ marginBottom: '40px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={2}>
            <Build sx={{ fontSize: 60, color: '#FC902B' }} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#FC902B',
                padding: '10px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              Consulting Sessions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our consulting services are designed to help you solve specific tech challenges. We provide personalized sessions to identify and implement the right solutions for your needs, including product planning, technical guidance, and more.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Types of Problems Addressed:</strong>
              <ul>
                <li>Tech solutions</li>
                <li>Product planning</li>
                <li>Technical guidance</li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Case Studies:</strong>
              <ul>
                <li>Company A: Improved their tech infrastructure and workflow efficiency.</li>
                <li>Company B: Guided through a successful product launch.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* One-Off Projects Section */}
      <Box id="one-off" sx={{ marginBottom: '40px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={2}>
            <Assignment sx={{ fontSize: 60, color: '#FC902B' }} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#FC902B',
                padding: '10px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              One-Off Projects
            </Typography>
            <Typography variant="body1" gutterBottom>
              We offer project-based support to help you bring your ideas to life. Whether you need MVP development, growth support, or iterative project management, we provide dedicated assistance to ensure your project's success.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Examples:</strong>
              <ul>
                <li>MVP Development for Startups</li>
                <li>Growth Support for Established Companies</li>
                <li>Iterative Project Management</li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Success Stories:</strong>
              <ul>
                <li>Company C: Successfully launched a new product with our MVP development support.</li>
                <li>Company D: Achieved significant growth with our iterative project management.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Education Branch Section */}
      <Box id="education" sx={{ marginBottom: '40px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={2}>
            <School sx={{ fontSize: 60, color: '#FC902B' }} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                backgroundColor: '#FC902B',
                padding: '10px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              Education Branch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our education programs are designed to empower the next generation of tech leaders. We offer courses for kids aged 7-17, covering programming, website development, and robotics.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Courses Offered:</strong>
              <ul>
                <li>Programming</li>
                <li>Website Development</li>
                <li>Robotics</li>
              </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Target Age Groups:</strong> 7-17 years old
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Success Stories:</strong>
              <ul>
                <li>Student A: Developed a website as part of our program.</li>
                <li>Student B: Built a functioning robot in our robotics course.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom>
          Ready to take the next step? Contact Nerd Consulting to chat about your needs and how we can help.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            backgroundColor: '#FC902B',
            color: 'black',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Services;