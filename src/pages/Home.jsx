

import HeaderClient from '../components/HeaderClient';
import Footer from '../components/Footer';
import { FaLaptopCode, FaChartLine, FaMobileAlt } from 'react-icons/fa'; // Importation des icônes de react-icons
import AffiliatePartners from '../components/AffiliatePartners';
const Home = () => {
   
    const services = [
        {
            icon: <FaLaptopCode className="text-blue-500 text-5xl" />,
            title: 'Développement Web',
            description: 'Conception de sites web performants, modernes et réactifs.',
        },
        {
            icon: <FaMobileAlt className="text-green-500 text-5xl" />,
            title: 'Développement Mobile',
            description: 'Création d’applications mobiles intuitives et performantes.',
        },
        {
            icon: <FaChartLine className="text-red-500 text-5xl" />,
            title: 'Marketing Digital',
            description: 'Améliorez votre visibilité en ligne grâce à des stratégies efficaces.',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <HeaderClient />

            {/* Contenu principal */}
            <div className="flex-grow bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-bgcustom-green text-white py-12">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl lg:text-5xl text-black font-bold mb-4">
                            Find & Hire Expert Freelancers
                        </h1>
                        <p className="text-lg lg:text-xl mb-6">
                            Work with the best freelance talent from around the world on our secure, flexible and cost-effective platform.
                        </p>

                        {/* Search Bar */}
                        <div className="flex items-center bg-white rounded-full p-2 lg:w-3/4 shadow-lg mb-6">
                            <input
                                type="text"
                                placeholder="What skill are you looking for?"
                                className="flex-grow px-4 py-2 text-black outline-none rounded-l-full"
                            />
                            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600">
                                Search
                            </button>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-700">
                                Post a Job - It&apos;s Free
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 lg:block  hidden">
                        <img
                            src="client.png"
                            alt="Expert Freelancer"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>

         {/* Services Section */}
        <div className="container mx-auto py-12">
            <h2 className="text-4xl font-bold text-center mb-10"> Services Recommandés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        
            {/* Statistics Section */}
            <div className="bg-white py-8">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6 lg:px-12 text-center lg:text-left">
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold">800,000</h2>
                        <p>Employers Worldwide</p>
                    </div>
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold">1 Million</h2>
                        <p>Paid Invoices</p>
                    </div>
                    <div className="lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-2xl font-bold">$250 Million</h2>
                        <p>Paid to Freelancers</p>
                    </div>
                    <div className="lg:w-1/4">
                        <h2 className="text-2xl font-bold">99%</h2>
                        <p>Customer Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </div>

                {/* Partner section */}
                <div> 
                    <AffiliatePartners/>
                </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
