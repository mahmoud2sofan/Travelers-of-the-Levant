import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import './Categories.css';


const Categories = ({ countryName }) => {
    const currentCountry = countryName || 'palestine';
    const navigate = useNavigate();
    const { setPurpose } = useContext(UserContext);

    // Glob import for assets
    const images = import.meta.glob('../../../assets/ExploreCountry/**/*.jpeg', { eager: true });

    const getImagePath = (category) => {
        const key = Object.keys(images).find(k =>
            k.includes(`images-${currentCountry.toLowerCase()}/${category}.jpeg`) ||
            (category === 'guide' && k.includes(`images-${currentCountry.toLowerCase()}/${currentCountry.toLowerCase()}.jpeg`))
        );
        return key ? images[key].default : '';
    };
    // Data matched from original index.html
    const sections = [
        {
            id: 'natural',
            name: 'Natural Places',
            image: getImagePath('natural'),
            description: "Explore the most beautiful natural landscapes, national parks, and nature reserves that reflect the region's unique biodiversity.",
            link: '/nature.html'
        },
        {
            id: 'historical',
            name: 'Historical Sites',
            image: getImagePath('historical'),
            description: "Discover ancient civilizations and historical monuments that date back thousands of years and tell amazing stories of our rich past.",
            link: '/history.html'
        },
        {
            id: 'religious',
            name: 'Religious Sites',
            image: getImagePath('religious'),
            description: "Visit sacred and significant religious sites that reflect religious tolerance and peaceful coexistence among different civilizations and faiths.",
            link: '/religious.html'
        },
        {
            id: 'guide',
            name: 'Tour Guide',
            image: getImagePath('guide'),
            description: "Get comprehensive information about the best hotels, restaurants, tourist attractions, and available services to ensure an enjoyable and safe travel experience.",
            link: '/guide.html'
        }
    ];

    return (
        <section className="categories-grid" id="categories">
            {sections.map((section, index) => (
                <div key={section.id} className={`category-row ${index % 2 !== 0 ? 'reverse' : ''}`} id={section.id}>
                    <div className="category-image">
                        <img src={section.image}
                            alt={section.name}
                        />
                    </div>
                    <div className="category-info">
                        <div className="category-title">{section.name}</div>
                        <p>{section.description}</p>

                        <div className="action-buttons">
                            <button
                                onClick={() => {
                                    if (section.id === 'guide') {
                                        navigate('/hire-guide');
                                    } else {
                                        let p = 'Nature';
                                        if (section.id === 'historical') p = 'Historical';
                                        if (section.id === 'religious') p = 'Religious';
                                        setPurpose(p);
                                        navigate('/attraction');
                                    }
                                }}
                                className="action-btn"
                                style={{
                                    display: 'inline-block',
                                    padding: '10px 20px',
                                    backgroundColor: '#002D04',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    borderRadius: '5px',
                                    fontSize: '1em',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Categories;
