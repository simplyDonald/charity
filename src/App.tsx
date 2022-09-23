import React,{useEffect} from 'react';
import Navbar from 'components/Navbar';
import Navbar2 from 'components/Navbar2';
import Hero from 'components/Hero';
import Footer from "components/Footer";
import Section1 from 'components/Section1';
import { themeChange } from "theme-change";



function App() {

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className=" bg-[#f4f4f9] h-screen relative ">
      <Navbar />
      <Navbar2 />
      <Hero />
      <div className=" h-2/3"></div>
      <Section1 />

      <div className=" h-52 bg-[#d8d8d8] relative text-black">
        hello world
        <div className="custom-shape-divider-bottom-1663900606">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
