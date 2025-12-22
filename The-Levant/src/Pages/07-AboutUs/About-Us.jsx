import React from 'react';
import Nav from '../01-Common/Nav/Nav.jsx';
import Footer from '../01-Common/Footer/Footer.jsx';

const AboutUs = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '80px' }}>
            <Nav />
            <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <h1>About Us</h1>
                <p>Welcome to Travelers of the Levant. Our story is coming soon.</p>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;