// backgroundColor: "#FAFAFA";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import personTwo from '../assets/person2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Support = () => {


    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "3%"

    }

    return (
        <div style={{ backgroundColor: "#FAFAFA", padding: "3% 0" }}>
            <div className="fin-support" style={myRow}>
                <div className="fin-text">
                    <h3>Fast application process. {<br />}
                        No hidden fees.</h3>
                    <p>
                        Get the financial support you need to take yourself or your business to the next level.
                    </p>
                    
                    <a href="https://form.jotform.com/230516000337542" target="_blank" rel="noopener noreferrer">
                        <button className="btn">Learn More</button>
                    </a> 
                    
                    
                </div>
                <div className="fin-image"  data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
                    <img src={personTwo} alt="" className="Image" />
                </div>
            </div>
        </div>
    );
}

export default Support;