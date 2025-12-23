import "./Team.css";

const teamMembers = [
    {
        name: "Mahmoud Sofan",
        role: "Developer",
        description: "Designed 'About Us' & 'Hire a Guide' pages.",
        github: "https://github.com/mahmoud2sofan"
    },
    {
        name: "Alaa Sofan",
        role: "Developer",
        description: "Designed 'Attraction' page.",
        github: "https://github.com/alaa-500"
    },
    {
        name: "Mojahed Alkayyal",
        role: "Developer",
        description: "Designed 'Login/SignUp' & 'Home' pages.",
        github: "https://github.com/mojahedkayyal"
    },
    {
        name: "Mohammed Dawood",
        role: "Developer",
        description: "Designed 'ExploreCountry' page.",
        github: "https://github.com/Mohammad14567"
    }
];

function Team() {
    return (
        <div className="team-container">
            <div className="team-row">
                <div className="team-content">
                    <h2>Meet the Developers</h2>
                    <ul>
                        {teamMembers.map((member, index) => (
                            <li key={index}>
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-link">
                                    <b>{member.name}:</b> {member.role} - {member.description}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="team-image">
                    <img src="/k.png" alt="Meet the Developers" />
                </div>
            </div>
        </div>
    );
}

export default Team;
