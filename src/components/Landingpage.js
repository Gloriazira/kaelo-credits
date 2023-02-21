import React, { useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landingpage = () => {

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
                    <AnchorLink href=''>
                        <button className="btn">Learn More</button>
                    </AnchorLink>
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

                    <AnchorLink href=''>
                        <button className="btn">Learn More</button>
                    </AnchorLink>

                </div>
                
                <div className="landing-page-image">
    
                    

                </div>

            </div>

        </div>
     );
}
 
export default Landingpage;