import React,{useEffect} from 'react';
import Navbar from 'components/Navbar';
import Navbar2 from 'components/Navbar2';
import Footer from "components/Footer";
import { themeChange } from "theme-change";


function App() {

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className=" bg-[#f4f4f9] h-screen relative ">
      <Navbar />
      <Navbar2 />
      <div className=" h-2/3"></div>
      <div className="bg-[#ff5e5b] h-52"> Pretty</div>

      <div className=" h-52 bg-[#d8d8d8] text-white">hello world</div>

      <Footer />
    </div>
  );
}

export default App;
