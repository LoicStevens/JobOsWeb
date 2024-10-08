import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePrestataire = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />
                                                    
            {/* Contenu principal */}
            <div className="flex-grow">
                container prestataire
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePrestataire;
