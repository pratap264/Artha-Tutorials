//Home.js - Single Page with Anchor Navigation
import React from "react";
import Hero from "../components/Hero/Hero";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo";
import Courses from "../components/Services/Courses";
import Reviews from "../components/Reviews/Reviews";
import WorkComp from "../components/Work/WorkComp";
import Faculty from "../components/OurTeam/Faculty";
import Form from "../components/Form/Form";
import AboutUs from "../components/Services/AboutUs";
import MapSection from "../components/Services/MapSection";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="team">
        <Faculty />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="contact">
        <Form />
      </section>

      <section id="location">
        <MapSection />
      </section>

      {/* Uncomment below if needed */}
      {/* <section id="brands"><BrandsLogo /></section> */}
      {/* <section id="work"><WorkComp /></section> */}
    </>
  );
};

export default Home;
