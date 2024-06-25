import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'; // Import the NavBar component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <NavBar /> {/* Include the NavBar component here */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Include the Footer component here */}
      </Container>
    </Router>
  );
}

export default App;