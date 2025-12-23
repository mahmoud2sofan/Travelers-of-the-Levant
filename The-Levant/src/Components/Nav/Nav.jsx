import "./Nav.css";


function Nav({ setCurrentPage }) {

    return (
        <nav className="nav">
            <div className="Container-nav">
                <a onClick={() => setCurrentPage('about')} className="logo-container">
                    <img src="/S.png" alt="Logo" className="logo" />
                </a>

                <ul className="nav-menu">
                    <li onClick={() => setCurrentPage('about')}>Home</li>
                    <li onClick={() => setCurrentPage('about')}>Countries</li>
                    <li onClick={() => setCurrentPage('hire')}>Hire A Guide</li>
                    <li onClick={() => setCurrentPage('about')}>About Us</li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
