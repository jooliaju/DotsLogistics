import React from "react"
import Footer from "../components/footer/Footer";
import HomeImage from "../components/Homepage/home_image/home_image";
import Features from "../components/Homepage/features/Features";
import MoreInfo from  '../components/Homepage/more_info/MoreInfo'

import Navbar from "../components/navbar/Navbar";




function HomePage() {
  return (
    <div className="App">
      <Navbar/>
      <HomeImage />
      <Features />
      <MoreInfo/>
      <div style = {{height: '50px'}}/>
      <Footer />
    </div>
  );
}

export default HomePage;