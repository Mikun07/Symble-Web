import './App.css';
import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Landing from '../src/Pages/Landing/Landing';
import Contact from '../src/Pages/Contact-Us/Contact';
import FAQs from '../src/Pages/FAQs/FAQs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default App;
