import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeaderClient from '../components/HeaderClient';
import TagSearch from '../components/TagSearch';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <HeaderClient />
                                                    
            <div className="flex-grow container mx-auto my-4">
        <TagSearch />
      </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
