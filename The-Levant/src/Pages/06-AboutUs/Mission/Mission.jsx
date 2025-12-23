import "./Mission.css";

function Mission() {
    return (
        <div className="mission-container" id="mission">
            <div className="mission-row">
                <div className="mission-content">
                    <h2>Project Mission (Our Vision)</h2>
                    <p>
                        Our mission is to provide an integrated tourism experience for the Levant region.
                        We aim to preserve and showcase the rich heritage of Jordan, Palestine, Lebanon, and Syria
                        by making their historical and natural wonders accessible to the world through a modern digital lens.
                    </p>
                </div>
                <div className="mission-image">
                    <img src="../../assets/mission.png" alt="Project Mission" />
                </div>
            </div>
        </div>
    );
}

export default Mission;
