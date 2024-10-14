import  { useState } from 'react';
 // Ajustez le chemin


import Header from '../components/Header';

import 'jspdf-autotable'; // For better table formatting in PDFs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faFolderOpen, faCog } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderSection = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'cv':
        return <CVResumeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <div className="container mx-auto py-10 px-6">
        {/* Profile Info Section with Picture */}
        <div className="bg-white shadow rounded-lg p-8 flex items-center justify-between">
          {/* Profile Picture */}
          <div className="mr-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full w-28 h-28 shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-gray-800">Daniel S</h3>
            <p className="text-gray-500 text-lg">Client Advocate</p>
          </div>

          {/* Additional Info */}
          <div className="text-gray-700">
            <p><strong>Reply rate:</strong> -</p>
            <p><strong>Availability:</strong> Full-time (40 hrs/wk)</p>
            <p><strong>Location:</strong> Muntinlupa, Ayala Alabang, Philippines</p>
            <p><strong>Experience:</strong> 15 years</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md mr-3 shadow-md">
            Edit profile
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-md shadow-md">
            View stats
          </button>
        </div>

        {/* Tab navigation with icons */}
        <div className="flex mt-5 border-b-2 border-gray-200">
          {[
            { name: 'profile', icon: faUser },
            { name: 'cv', icon: faFileAlt },
            { name: 'portfolio', icon: faFolderOpen },
            { name: 'settings', icon: faCog }
          ].map(tab => (
            <button
              key={tab.name}
              className={`px-5 py-2 flex items-center ${activeTab === tab.name ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <FontAwesomeIcon icon={tab.icon} className="mr-2" />
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mt-5">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

// Profile Section
const ProfileSection = () => {
  const sections = [
    {
      title: 'personalInfo',
      displayTitle: 'Informations Personnelles',
      description: "Renseignez vos informations personnelles. Ces détails nous aident à mieux vous connaître.",
      fields: [
        { label: 'Nom', value: 'Florian Sapin' },
        { label: 'Ville', value: 'Paris, 75092' },
        { label: 'Email', value: 'florian.sapin@gmail.com' },
        { label: 'Téléphone', value: '06 23 94 16' },
      ],
    },
    
     
    {
      title: 'formation',
      displayTitle: 'Formation',
      fields: [
        { label: 'Année', value: '2020' },
        { label: 'Formation Obtenue', value: 'Master MEEF' },
      ],
    },
    
    {
      title: 'professionalDetails',
      displayTitle: 'Parcours Professionnels',
      fields: [
        { label: 'Professeur de mathématiques', value: 'École primaire Marie Curie | Chambéry' },
      ],
    },
    {
      title: 'interests',
      displayTitle: 'Centres d\'Intérêt',
      fields: [
        { label: 'Centres d\'Intérêt', value: 'Littérature, Cinéma, Sports d\'équipe' },
      ],
    },
    {
      title: 'certificates',
      displayTitle: 'Certificats',
      fields: [
        { label: 'Certificat de secourisme', value: 'Obtenu en 2020' },
      ],
    },
    {
      title: 'skillsExperience',
      displayTitle: 'Compétences et Expérience',
      description: 'Décrivez vos compétences, vos langues parlées, et une brève description de votre parcours.',
      fields: [
        { label: 'Compétences', value: 'Conception des leçons, Écoute active, Encadrement des travaux pratiques, Technologies de l’éducation' },
        { label: 'Langues', value: 'Anglais - B2, Espagnol - B2' },
        { label: 'Profil professionnel', value: 'Dévouement envers la promotion de l’apprentissage des élèves à travers des approches différenciées.' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Section de gauche avec des informations personnelles */}
      <div className="col-span-1 text-white p-6 rounded-lg bg-gray-800">
        {sections[0].fields.map((field, index) => (
          <div key={index} className="mb-4">
            <strong className="block">{field.label}:</strong>
            <span className="text-gray-300">{field.value}</span>
          </div>
        ))}
      </div>

      {/* Section de droite avec les autres détails */}
      <div className="col-span-3 bg-gray-50 p-6 rounded-lg">
        {sections.slice(1).map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{section.displayTitle}</h3>
            {section.fields.map((field, idx) => (
              <p key={idx}>
                <strong>{field.label}:</strong> {field.value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};






// CV/Resume Section with PDF Generation
const CVResumeSection = () => {
  
  

 

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">CV/Resume</h3>


      {/* Button to view CV preview */}
      <a href='/cv-preview'
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
        
      >
        View CV
      </a>

      
        </div>
  );
};


// Portfolio Section
const PortfolioSection = () => (
  <div className="p-6 bg-white shadow rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-gray-100 p-4 text-center rounded-lg shadow">Image/Video/Document 1</div>
      <div className="bg-gray-100 p-4 text-center rounded-lg shadow">Image/Video/Document 2</div>
      <div className="bg-gray-100 p-4 text-center rounded-lg shadow">Image/Video/Document 3</div>
    </div>
  </div>
);

// Settings Section
const SettingsSection = () => (
  <div className="p-6 bg-white shadow rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mettre à jour le profil</h3>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez votre nom"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ville</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez votre ville"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez votre email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez votre numéro de téléphone"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Compétences</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez vos compétences"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Langues</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez vos langues parlées"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Année de Formation</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez l'année de votre formation"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Formation Obtenue</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez la formation obtenue"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Certificats</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Entrez vos certificats"
        />
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
        type="submit"
      >
        Enregistrer
      </button>
    </form>
  </div>
);



export default ProfilePage;
