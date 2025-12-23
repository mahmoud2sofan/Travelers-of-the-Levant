import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
    return (
        <nav className="nav">
            <div className="Container-nav">
                <Link to="/Home" className="logo-container">
                    <img src="./src/assets/Logo.png" alt="Logo" className="logo" />
                </Link>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Home">Countries</Link></li>
                    <li><Link to="/HireAGuide">Hire A Guide</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
