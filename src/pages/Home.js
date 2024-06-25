import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Build, Assignment, Work, Code, School } from '@mui/icons-material';

const testimonials = [
  {
    quote: "Britney helped me figure out the best technical solution for my problem. I knew the problem but brainstorming and researching the solution was super helpful, seeing things from a different POV",
    author: "Alexis Davis",
    organization: "Starlite"
  },
  {
    quote: "Best CTO in Detroit",
    author: "Achsha Jones",
    organization: "TripSlip, LLC"
  },
  {
    quote: "I appreciate their leadership and the way their mind works",
    author: "Darren Riley",
    organization: "JustAir"
  }
];

const featuredWork = [
  { src: "/company1.png", alt: "Techtown", link: "https://techtowndetroit.org/" },
  { src: "/company2.jpeg", alt: "JustAir", link: "https://justair.co" },
  { src: "/company3.jpeg", alt: "TripSlip", link: "https://tripslip.app" },
  { src: "/company4.jpg", alt: "Trio Bound", link: "https://federaltrio.wayne.edu/upward" },
  { src: "/company5.jpeg", alt: "Math4Success", link: "https://www.math4success.org/" },
  { src: "/company6.png", alt: "Black Girls Do Science", link: "https://www.blackgirlsdoscience.org/" }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Hero Section */}
      <Grid container spacing={4} alignItems="center" sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/logo.png"
              alt="Nerd Consulting Logo"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#FC902B' }}>
            Technical Growth for Underrepresented Communities
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nerd Consulting is a black-owned tech business dedicated to bridging the gap between technical and non-technical teams. We provide consulting sessions, project planning, and educational programs to empower underrepresented communities in the tech industry.
          </Typography>
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" sx={{ backgroundColor: '#FC902B', color: 'white' }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* About Us Section */}
      <Grid container spacing={4} alignItems="center" sx={{ marginBottom: '40px', backgroundColor: '#FC902B', color: 'black', padding: '20px', borderRadius: '8px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Empowering Your Business with Technology
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Nerd Consulting, we are committed to using technology to drive positive change and growth. Our mission is to deliver innovative software solutions and expert consulting services that help businesses and organizations optimize their operations and achieve their goals.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Whether you're looking for technical guidance, project planning, or educational programs, we have the expertise to support your journey. We believe in the power of diversity and strive to empower underrepresented communities in the tech industry.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Partner with us to leverage technology for your business growth. Reach out today to discover how we can help you succeed.
          </Typography>
          <Box sx={{ textAlign: 'left', marginTop: '20px' }}>
            <Button variant="outlined" component={Link} to="/about" sx={{ color: 'black', borderColor: 'black' }}>
              Learn More About Us
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/founder.jpeg"
              alt="Founder"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px' }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Build sx={{ fontSize: 40, color: '#FC902B' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Consulting Sessions
              </Typography>
              <Typography variant="body2">
                Personalized sessions to identify and solve your specific tech challenges, ensuring the right solutions are implemented.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Assignment sx={{ fontSize: 40, color: '#FC902B' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Product and Project Planning
              </Typography>
              <Typography variant="body2">
                Comprehensive planning and roadmapping to guide your product development and project execution.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Work sx={{ fontSize: 40, color: '#FC902B' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                One-Off Projects
              </Typography>
              <Typography variant="body2">
                Dedicated support for single projects, from MVP development to iterative growth and scaling.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Code sx={{ fontSize: 40, color: '#FC902B' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Mobile and Web App Development
              </Typography>
              <Typography variant="body2">
                Custom development of mobile and web applications tailored to your business needs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'left' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <School sx={{ fontSize: 40, color: '#FC902B' }} />
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Educational Programs
              </Typography>
              <Typography variant="body2">
                Teaching kids aged 7-17 the fundamentals of programming, website development, and robotics, empowering the next generation of tech leaders.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" component={Link} to="/services" sx={{ backgroundColor: '#FC902B', color: 'white' }}>
            View All Services
          </Button>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px' }}>
          Testimonials
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="body1" gutterBottom>
                - {testimonial.author}, {testimonial.organization}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Featured Work Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px' }}>
          Featured Work
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featuredWork.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component="a"
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: 1,
                  '&:hover': {
                    boxShadow: 3,
                  },
                }}
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ marginBottom: '40px', textAlign: 'center' }}>
        <Button variant="contained" component={Link} to="/contact" sx={{ backgroundColor: '#FC902B', color: 'white', width: '60%' }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;