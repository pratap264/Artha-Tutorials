//Home.js - Single Page with Anchor Navigation
import React from "react";
import Hero from "../components/Hero/Hero";
import Courses from "../components/Services/Courses";
import Reviews from "../components/Reviews/Reviews";
import Faculty from "../components/OurTeam/Faculty";
import Form from "../components/Form/Form";
import AboutUs from "../components/Services/AboutUs";
import MapSection from "../components/Services/MapSection";
import Gallery from "../components/Gallery/Gallery";

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

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Form />
      </section>

      <section id="location">
        <MapSection />
      </section>
    </>
  );
};

export default Home;
