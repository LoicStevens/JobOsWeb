
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
