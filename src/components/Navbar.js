import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <a href="#home"> <h1>Kaelo</h1> </a>
            </div>

            <div>
                <AnchorLink href='#start'>
                    <button className="btn">Learn More</button>
                </AnchorLink>
            </div>
        </nav>
    );
}

export default Navbar;