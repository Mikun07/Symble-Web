import './App.css';
import React, { useState } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Landing from '../src/Pages/Landing/Landing';
import Footer from './Components/Footer/Footer';
import Backdrop from './Components/Sidebar/Backdrop';
import Sidebar from './Components/Sidebar/Sidebar';
import ScrollToTop from './Components/Scroll/ScrollToTop';

function App() {

  const [sidebar, setSidebar] = useState(false);

  const open = () => {
    setSidebar(true)
  }

  const close = () => {
    setSidebar(false)
  }

  return (
    <>
      <Navbar openSidebar={open} />
      <Backdrop sidebar={sidebar} />
      <Sidebar sidebar={sidebar} close={close} />
      <Landing />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
