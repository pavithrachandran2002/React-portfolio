import React from "react";
import Navbars from "./Navbar";
import Hero from "./Hero";
import "./Home.css";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  return (
    <div className=" bg-lime-700 ">
      <div className="sticky top-0 nav-p">
        <Navbars></Navbars>
      </div>

      <section className="screen-p">
        <Hero> </Hero>
      </section>

      <div className="screen-p">
        <Skills />
      </div>

      <div className="screen-p">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
