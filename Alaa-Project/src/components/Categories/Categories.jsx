import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Data matched from original index.html
    const sections = [
        {
            id: 'natural',
            name: 'Natural Places',
            image: '/images-palestine/natural.jpeg',
            description: "Explore the most beautiful natural landscapes, national parks, and nature reserves that reflect the region's unique biodiversity.",
            link: '/nature.html'
        },
        {
            id: 'historical',
            name: 'Historical Sites',
            image: '/images-palestine/historical.jpeg',
            description: "Discover ancient civilizations and historical monuments that date back thousands of years and tell amazing stories of our rich past.",
            link: '/history.html'
        },
        {
            id: 'religious',
            name: 'Religious Sites',
            image: '/images-palestine/religious.jpeg',
            description: "Visit sacred and significant religious sites that reflect religious tolerance and peaceful coexistence among different civilizations and faiths.",
            link: '/religious.html'
        },
        {
            id: 'guide',
            name: 'Tour Guide',
            image: '/img.jpeg',
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

                            <Link to={section.link.replace('.html', '')} className="action-btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Categories;
