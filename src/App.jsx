import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutHariomPG from './components/About';
import PGList from './components/pgList';
import Facilities from './components/Facilities';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import OptionsScreen from './components/OptionsScreen';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/Services';
import LearnMore from './components/LearnMore';
import FlatsScreen from './components/Flats/FlatsScreen';
import PGScreen from './components/Pg/PgScreen';
import DevicesScreen from './components/Flats/FlatsScreen';

function App() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#a7c9ff", "#9fbfff", "#96b5ff", "#8dacff", "#85a2ff", "#7c98ff",
      "#738eff", "#6b85ff", "#627bff", "#5972ff", "#5069ff", "#475fff",
      "#3e56ff", "#364dff", "#2d43ff", "#243aff", "#1b30ff", "#1227ff",
      "#091dff", "#0013ff", "#0011e6", "#0010cc"
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutHariomPG />} />
        {/* <Route path="/" element={<OptionsScreen />} /> */}
        {/* <Route path="/" element={<PGList />} /> */}
        {/* <Route path="/" element={<Facilities />} /> */}
        {/* <Route path="/" element={<EnquiryForm />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Services" element={<ServicesPage/>} />
        <Route path="/LearnMore" element={<LearnMore/>} />
        <Route path="/Flats" element={<DevicesScreen/>} />
        <Route path="/Pgs" element={<PGScreen/>} />

        

      </Routes>
      <Footer />
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </Router>
  );
}

export default App;
