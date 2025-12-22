import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
    return (
        <nav className="nav">
            <div className="Container-nav">
                <Link to="/" className="logo-container">
                    <img src="/Logo.png" alt="Logo" className="logo" />
                </Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/countries">Countries</Link></li>
                    <li><Link to="/hire-a-guide">Hire A Guide</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
