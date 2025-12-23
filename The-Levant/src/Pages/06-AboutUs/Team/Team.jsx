import React from "react";
import "./Team.css";
import TeamImg from "../../../assets/Team.png";

function Team() {
    return (
        <div className="team-container">
            <div className="team-row">
                <div className="team-content">
                    <h2>Meet the Developers</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/mahmoud2sofan" target="_blank" rel="noopener noreferrer" className="team-link">
                                <b>Mahmoud Sofan</b> - Developer: Designed 'About Us' & 'Hire a Guide' pages.
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/alaa-500" target="_blank" rel="noopener noreferrer" className="team-link">
                                <b>Alaa Sofan</b> - Developer: Designed 'Attraction' page.
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mojahedkayyal" target="_blank" rel="noopener noreferrer" className="team-link">
                                <b>Mojahed Alkayyal</b> - Developer: Designed 'Login/SignUp' & 'Home' pages.
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Mohammad14567" target="_blank" rel="noopener noreferrer" className="team-link">
                                <b>Mohammed Dawood</b> - Developer: Designed 'ExploreCountry' page.
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="team-image">
                    <img src={TeamImg} alt="Meet the Developers" />
                </div>
            </div>
        </div>
    );
}

export default Team;
