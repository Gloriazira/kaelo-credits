import React, { useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landingpage = () => {

  AOS.init();
  AOS.refresh();


  const [nav, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })



  return (
    <div className="container hero-page" id="home">
      <div className={nav ? "nav active" : "nav"}>
        <div className="logo">
          <a href="#home"> <h1>Kaelo</h1> </a>
        </div>

        <div>
          <a href="https://form.jotform.com/230516000337542" target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </div>
      <div className="landing-page" id="">
        <div className="landing-page-text">
          <h2>
            Get credit and asset financing with ease.
          </h2>

          <p>
            We are committed to providing flexible financing for growing businesses and individuals across Africa.
          </p>

          <a href="https://form.jotform.com/230516000337542" target="_blank" rel="noopener noreferrer">
            <button className="btn">Learn More</button>
          </a>

        </div>

        <div className="landing-page-image" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
        </div>

      </div>

    </div>
  );
}

export default Landingpage;