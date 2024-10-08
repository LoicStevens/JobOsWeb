import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import HeaderClient from '../components/HeaderClient';
import Footer from '../components/Footer';

const Home = () => {
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    const [searchFields, setSearchFields] = useState({
        service: '',
        age: '',
        city: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchFields({ ...searchFields, [name]: value });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <HeaderClient />

            {/* Contenu principal */}
            <div className="flex-grow container mx-auto py-12 px-4">
                {/* Section de recherche */}
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                        Trouvez le Service Parfait
                    </h1>
                    <p className="text-center text-lg text-gray-600 mb-10">
                        Recherchez rapidement parmi nos services professionnels et trouvez celui qui vous correspond.
                    </p>

                    {/* Recherche simple */}
                    <div className="flex justify-center items-center mb-6">
                        <div className="relative w-full md:w-1/2">
                            <input
                                type="text"
                                name="service"
                                value={searchFields.service}
                                onChange={handleInputChange}
                                placeholder="Rechercher un service"
                                className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <button className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-500 transition">
                                <FaSearch size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Bouton pour recherche avancée */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                            className="flex items-center text-blue-600 font-medium hover:underline"
                        >
                            {isAdvancedSearch ? 'Cacher Recherche Avancée' : 'Recherche Avancée'}
                            {isAdvancedSearch ? (
                                <FaChevronUp className="ml-2" />
                            ) : (
                                <FaChevronDown className="ml-2" />
                            )}
                        </button>
                    </div>

                    {/* Recherche avancée */}
                    {isAdvancedSearch && (
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Champ de recherche avancée : Service */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Service
                                    </label>
                                    <input
                                        type="text"
                                        name="service"
                                        value={searchFields.service}
                                        onChange={handleInputChange}
                                        placeholder="Nom du service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                    />
                                </div>

                                {/* Champ de recherche avancée : Âge */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Âge
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={searchFields.age}
                                        onChange={handleInputChange}
                                        placeholder="Âge"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                    />
                                </div>

                                {/* Champ de recherche avancée : Ville */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Ville
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={searchFields.city}
                                        onChange={handleInputChange}
                                        placeholder="Ville"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                    />
                                </div>
                            </div>

                            {/* Bouton de recherche */}
                            <div className="mt-6 text-center">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                                    Lancer la Recherche
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
