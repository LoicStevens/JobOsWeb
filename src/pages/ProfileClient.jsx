import React, { useState } from 'react';
import jsPDF from 'jspdf';
import Header from '../components/Header'; // Adjust path if necessary
import 'jspdf-autotable'; // For better table formatting in PDFs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faPenAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileClient = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderSection = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'posts':
        return <PostsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
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
       

        {/* Tab navigation with icons */}
        <div className="flex mt-5 border-b-2 border-gray-200">
          {[
            { name: 'profile', icon: faUser },
            { name: 'posts', icon: faPenAlt },
            { name: 'settings', icon: faCog },
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

// Posts Section
const PostsSection = () => (
  <div className="p-6 bg-white shadow rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Posts</h3>
    <div>
      {/* Placeholder for posts */}
      <p><strong>Post 1:</strong> "Lorem ipsum dolor sit amet..."</p>
      <p><strong>Post 2:</strong> "Consectetur adipiscing elit..."</p>
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

export default ProfileClient;
