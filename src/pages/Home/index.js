import React from 'react';
import HeroSection from '../../components/Hero';
import Products from '../../pages/Products';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Products />
            <div className="explore-product">
                <a className="explore-btn" href="/products">
                    Explore More
                </a>
            </div>
        </>
    );
};

export default Home;
