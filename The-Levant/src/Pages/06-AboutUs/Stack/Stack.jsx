import React from 'react';
import "./Stack.css";
import StackImg from "../../../assets/Stack.png";

function Stack() {
    return (
        <div className="stack-container">
            <div className="stack-row">
                <div className="stack-image">
                    <img src={StackImg} alt="Technical Stack" />
                </div>
                <div className="stack-content">
                    <h2>Technical Stack</h2>
                    <ul>
                        <li><b>React JS:</b> For building a component-based, clean-code architecture.</li>
                        <li><b>State Management:</b> Using useState and useEffect to handle user flow and data display.</li>
                        <li><b>Responsive Design:</b> Ensuring a seamless experience across all device types.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stack;
