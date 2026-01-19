//Home.js
import React from "react";
import Hero from "../components/Hero/Hero";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo";
import Courses from "../components/Services/Courses";
import Reviews from "../components/Reviews/Reviews";
import WorkComp from "../components/Work/WorkComp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Faculty from "../components/OurTeam/Faculty";
import Form from "../components/Form/Form";
import AboutUs from "../components/Services/AboutUs";
import MapSection from "../components/Services/MapSection";

const Home = () => {
  // Receive theme as a prop
  return (
    <div>
      <Hero />
      <AboutUs />
      <Courses />

      {/* <BrandsLogo/> */}
      <Faculty />
      <Reviews />
      <Form/>
      <MapSection/>
      {/* <WorkComp /> */}
    </div>
  );
};

export default Home;
