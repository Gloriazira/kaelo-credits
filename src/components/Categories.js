import individualImage from '../assets/individual.png';
import businessImage from '../assets/business.png'

const Categories = () => {

    const myCol = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "3% auto"

    }
    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "3%"

    }

    return (
        <div style={{
            backgroundColor: "#FFFFFF",
            padding: "5% 0"
        }}>
            <div className="category" style={myCol}>
                <h3>
                    Unlock your growth potential with our flexible financing
                </h3>
                <p>
                    Explore our extensive array of categories - there's something for everyone. {<br />}
                    We've got you covered with our wide selection
                </p>

                <div className="categories" style={myRow}>
                    <div className="individual">
                        <img src={individualImage} alt="" className="individual Image" />

                    </div>

                    <div className="business">
                        <img src={businessImage} alt="" className="business Image" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;