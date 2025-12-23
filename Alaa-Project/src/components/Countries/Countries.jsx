import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Countries.css';

// Importing images (Assuming they exist in public folder for simplicity based on previous steps)
// or using the ones we know exist in src/assets if we want to be safe, but user said "simple arrays".
// I will use public paths for simplicity and alignment with "simple arrays".

const Countries = () => {
    const { countryName } = useParams();

    // Simple image arrays for each country
    const countryImages = {
        syria: [
            '/images-syria/syria.jpeg',
            '/images-syria/natural.jpeg',
            '/images-syria/historical.jpeg'
        ],
        palestine: [
            '/images-palestine/palestine.jpeg',
            '/images-palestine/natural.jpeg',
            '/images-palestine/historical.jpeg'
        ],
        lebanon: [
            '/images-lebanon/lebanon.jpeg',
            '/images-lebanon/natural.jpeg',
            '/images-lebanon/historical.jpeg'
        ],
        jordan: [
            '/images-jordan/jordan.jpeg',
            '/images-jordan/natural.jpeg',
            '/images-jordan/historical.jpeg'
        ]
    };

    // key might be capitalized in URL, so normalize
    const key = countryName ? countryName.toLowerCase() : '';
    const images = countryImages[key] || [];

    return (
        <div className="countries-page">
            <div className="container">
                <Link to="/" className="back-btn">← Back to Home</Link>

                <h1 className="country-title">
                    {countryName ? countryName.toUpperCase() : 'COUNTRY NOT FOUND'}
                </h1>

                {images.length > 0 ? (
                    <div className="gallery-grid">
                        {images.map((imgSrc, index) => (
                            <div key={index} className="gallery-item">
                                <img src={imgSrc} alt={`${countryName} ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-data">No images available for this country.</p>
                )}
            </div>
        </div>
    );
};

export default Countries;
