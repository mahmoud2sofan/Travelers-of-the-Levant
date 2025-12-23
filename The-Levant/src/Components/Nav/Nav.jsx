import { Link } from 'react-router-dom';
import "./Nav.css";


function Nav() {

    return (
        <nav className="nav">
            <div className="Container-nav">
                <Link to="/home" className="logo-container">
                    <img src="/Logo.png" alt="Logo" className="logo" />
                </Link>

                <ul className="nav-menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Countries</Link></li>
                    <li><Link to="/hire-guide">Hire A Guide</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
