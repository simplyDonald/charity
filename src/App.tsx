import React,{useEffect} from 'react';
import Navbar from 'components/Navbar/Navbar';
import Navbar2 from 'components/Navbar/Navbar2';
import Home from 'components/Index/Home';
import About from 'components/About';
import Footer from "components/Footer";
import Page404 from "components/Page404"


//theme changer change for daisyUI
import { themeChange } from "theme-change";

//react-router DOM imports
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {

  useEffect(() => {
    themeChange(false);
  }, []);                                           
  return (
    <div className=" bg-[#ffed66] h-screen relative ">
      <BrowserRouter>
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
