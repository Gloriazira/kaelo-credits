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
        <div style={{backgroundColor: "#FFFFFF", 
        padding: "5% 0" }}>
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
                        <div className="title" style={{left: "252px",
  bottom: "-447px"}}><h4>Individual</h4></div>
                        <div className="box" style={{textAlign: "left"}}>
                            <div className="box-image"></div>
                            <h5>Renewable Energy Finance</h5>
                            <ul style={{listStyle: "inside"}}>
                                <li>
                                    Solar
                                </li>
                                <li>
                                    Inverters
                                </li>
                                <li>
                                    UPS
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="business">
                        <div className="title" style={{right: "695px",
  bottom: "-447px"}}><h4>Businesses</h4></div>
                        <div className="box" style={{textAlign: "left"}}>
                            <div className="box-image"></div>
                            <h5>Renewable Energy Finance</h5>
                            <ul style={{listStyle: "inside"}}>
                                <li>
                                    PO Financing
                                </li>
                                <li>
                                    Invoice Discounting
                                </li>
                                <li>
                                    Open Line Credit
                                </li>
                                <li>
                                    Renewable Energy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Categories;