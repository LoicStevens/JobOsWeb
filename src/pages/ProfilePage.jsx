import React, { useState } from 'react';
 // Ajustez le chemin

import jsPDF from 'jspdf';
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
const ProfileSection = () => (
  <div className="p-6 bg-white shadow rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile Information</h3>
    <p><strong>Name:</strong> Daniel S</p>
    <p><strong>City:</strong> Muntinlupa, Ayala Alabang</p>
    <p><strong>Skills:</strong> Client Advocacy, Communication, Team Leadership</p>
  </div>
);

// CV/Resume Section with PDF Generation
const CVResumeSection = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Daniel S - CV/Resume", 14, 22);

    // Work Experience section
    doc.setFontSize(12);
    doc.text("Work Experience", 14, 32);
    doc.autoTable({
      startY: 38,
      head: [['Role', 'Company', 'Years']],
      body: [
        ['Client Advocate', 'ABC Corp', '15 years']
      ]
    });

    // Education section
    doc.text("Education", 14, doc.autoTable.previous.finalY + 10);
    doc.text("BA in Communication", 14, doc.autoTable.previous.finalY + 20);

    // Skills section
    doc.text("Skills", 14, doc.autoTable.previous.finalY + 30);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 35,
      head: [['Skill', 'Proficiency']],
      body: [
        ['Client Advocacy', '★★★★★'],
        ['Communication', '★★★★★'],
        ['Leadership', '★★★★☆']
      ]
    });
   const logo="logo.png";
    const imgWidth = 50; // Largeur de l'image
    const imgHeight = 50; 
    // Save the generated PDF
    doc.addImage(logo, 'PNG', 14, doc.internal.pageSize.height - imgHeight - 20, imgWidth, imgHeight); // Ajustez les coordonnées selon vos besoins

    doc.save("DanielS_CV.pdf");
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">CV/Resume</h3>
      <p><strong>Work Experience:</strong> 15 years as Client Advocate</p>
      <p><strong>Education:</strong> BA in Communication</p>
      <p><strong>Skills:</strong> Client Advocacy, Communication, Leadership</p>

      {/* Button to generate and download CV */}
      <button
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md"
        onClick={generatePDF}
      >
        Download CV
      </button>
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
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Update Profile</h3>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your city"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your skills"
        />
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
        type="submit"
      >
        Save
      </button>
    </form>
  </div>
);

export default ProfilePage;
