import React from 'react';
import { Box, Typography, Button, Grid, Link as MuiLink, Paper } from '@mui/material';
import { Business, Group, Public } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ padding: '20px' }}>
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
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
              color: '#FC902B',
              fontWeight: 'bold'
            }}
          >
            Empowering Underrepresented Communities Through Technology
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxHeight: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <video
              src="/video.mov"
              controls
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Empowering Communities Through Technology
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Nerd Consulting, we leverage technology to make a positive impact in our community. Our mission is to provide innovative software solutions and consulting services that help businesses and organizations optimize their operations and achieve their goals.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We offer personalized consulting sessions to address your specific tech challenges, comprehensive planning and roadmapping for product development, and dedicated support for projects from MVP development to iterative growth. Additionally, we are passionate about educating the next generation of tech leaders through our programs for kids aged 7-17, teaching the fundamentals of programming, website development, and robotics.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are committed to delivering solutions that make a difference. Contact us today to learn more about our services and how we can help your business or organization thrive.
          </Typography>
        </Grid>

        {/* Why Choose Us Section */}
        <Grid item xs={12} sx={{ marginTop: '40px' }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Paper sx={{ padding: '20px', backgroundColor: '#FC902B', borderRadius: '8px', height: '100%' }}>
                <Business sx={{ fontSize: 40, marginBottom: '10px', color: 'white' }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                  Scalable Applications
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  We create secure and scalable applications that grow with your business and meet your ever-changing needs.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Paper sx={{ padding: '20px', backgroundColor: '#FC902B', borderRadius: '8px', height: '100%' }}>
                <Group sx={{ fontSize: 40, marginBottom: '10px', color: 'white' }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                  Diversity of Thought
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  Our diverse team offers a broad range of ideas and solutions to help you achieve your goals.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Paper sx={{ padding: '20px', backgroundColor: '#FC902B', borderRadius: '8px', height: '100%' }}>
                <Public sx={{ fontSize: 40, marginBottom: '10px', color: 'white' }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
                  Positive Community Impact
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  We are committed to making a positive impact, ensuring your investment contributes to a more equitable and just society.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* About the Founder Section */}
        <Grid item xs={12} sx={{ marginTop: '40px' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <img
                  src="/founder.jpeg"
                  alt="Founder and CEO"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                About the Founder
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our founder is dedicated to working with underrepresented communities. With a background in computer science from North Carolina A&T State University and a master’s degree from the University of Cincinnati, our founder has over 15 years of professional experience and over 15 years of teaching, starting in college. They have worked with organizations locally and abroad, emphasizing Detroit-based operations and a commitment to the local community.
              </Typography>
              <MuiLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  sx={{
                    marginTop: '20px',
                    backgroundColor: '#FC902B',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  View Resume
                </Button>
              </MuiLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;