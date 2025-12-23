import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import './StorySection.css';

const videoLinks = {
    Palestine: 'https://www.youtube.com/watch?v=f0oy-NicIgE',
    Syria: 'https://www.youtube.com/watch?v=yVE7BK0X_R4',
    Lebanon: 'https://youtu.be/XwqpZ7HjzG0',
    Jordan: 'https://www.youtube.com/watch?v=IOR8LW5Pdhg'
};

const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const StorySection = () => {
    const ctx = useContext(UserContext) || {};
    const countryName = ctx.countryName || 'Palestine';
    const [showVideo, setShowVideo] = useState(false);

    const _cn = String(countryName).trim().toLowerCase();
    let normalizedCountry = 'Palestine'; // Default

    if (_cn.includes('palestin') || _cn.includes('فلسط')) normalizedCountry = 'Palestine';
    else if (_cn.includes('syria') || _cn.includes('سوري')) normalizedCountry = 'Syria';
    else if (_cn.includes('lebanon') || _cn.includes('لبنان')) normalizedCountry = 'Lebanon';
    else if (_cn.includes('jordan') || _cn.includes('أردن')) normalizedCountry = 'Jordan';

    const videoUrl = videoLinks[normalizedCountry];
    const videoId = getYoutubeId(videoUrl);

    const handleWatchClick = () => {
        if (videoId) {
            setShowVideo(true);
        } else if (videoUrl) {
            // Fallback if ID extraction fails but URL exists
            window.open(videoUrl, '_blank');
        }
    };

    const closeVideo = () => {
        setShowVideo(false);
    };

    return (
        <section className="story-section">
            <div className="story-container">
                <h2 className="story-title">A Quick Story About {normalizedCountry}</h2>
                <button className="watch-btn" onClick={handleWatchClick}>
                    Watch Video
                </button>
            </div>

            {showVideo && videoId && (
                <div className="video-modal-overlay" onClick={closeVideo}>
                    <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={closeVideo}>&times;</button>
                        <div className="video-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default StorySection;

