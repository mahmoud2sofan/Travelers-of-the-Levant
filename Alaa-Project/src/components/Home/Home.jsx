import React from 'react';
import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';

function Home() {
    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <Categories />
        </main>
    );
}

export default Home;
