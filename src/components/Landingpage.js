import React, { useState, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll";
import imageOne from '../assets/img3.png';
import imageTwo from '../assets/img2.png';
import imageThree from '../assets/img1.png';

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

    

    // const myRow = {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     margin: "5% 0 0 0"
    // };

    return ( 
        <div className="container hero-page">
            <div className={nav ? "nav active" : "nav"}>
                <div className="logo">
                    <a href="#home"> <h1>Kaelo</h1> </a>
                </div>

                <div>
                    <AnchorLink href='#start'>
                        <button className="btn">Learn More</button>
                    </AnchorLink>
                </div>
            </div>  
            <div className="landing-page" id="start">
                <div className="landing-page-text">
                    <h2>
                    Get credit and asset financing with ease.
                    </h2>

                    <p>
                    We are committed to providing flexible financing for growing businesses and individuals across Africa.
                    </p>

                    <AnchorLink href='#start'>
                        <button className="btn">Learn More</button>
                    </AnchorLink>

                </div>
                
                <div className="landing-page-image">
                    <div className="join">
                        <p>Join over <span style={{fontWeight: "800"}}>4600+ Africans</span>  to access flexible finance </p>
                        <div className="join-image">
                            <img src={imageOne} alt="" className="landingPage Image" style={{right:"120px"}} />
                            <img src={imageTwo} alt="" className="landingPage Image" style={{right:"75px"}} />
                            <img src={imageThree} alt="" className="landingPage Image" style={{right:"30px"}} />                            
                        </div>
                    </div>
                {/* <img src={personOne} alt="" className="landingPage Image" /> */}
                    

                </div>

            </div>

        </div>
     );
}
 
export default Landingpage;