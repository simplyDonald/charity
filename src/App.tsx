import React,{useEffect} from 'react';
import Navbar from 'components/Navbar';
import { themeChange } from "theme-change";


function App() {

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className=" bg-[#ffed66] h-screen">
      <Navbar />
      <button
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
        className=" p-4"
      >
        Poggler button
      </button>
    </div>
  );
}

export default App;
