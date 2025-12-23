import "./Features.css";

function Features() {
    return (
        <div className="features-container">
            <div className="features-row">
                <div className="features-image">
                    <img src="../../assets/Features.png" alt="Core Features" />
                </div>
                <div className="features-content">
                    <h2>Core Features (What We Offer)</h2>
                    <ul>
                        <li>
                            <b>Interactive Exploration:</b> Users can navigate through detailed cards for each country.
                        </li>
                        <li>
                            <b>Curated Categories:</b> We provide specific insights into Archaeological, Religious, and Natural landmarks.
                        </li>
                        <li>
                            <b>Guided Services:</b> A dedicated system to request local tour guides to facilitate trip organization.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Features;
