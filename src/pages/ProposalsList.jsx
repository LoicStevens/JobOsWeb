import React, { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineDollarCircle, AiFillStar } from 'react-icons/ai';
import { FaRegClock, FaBriefcase } from 'react-icons/fa';
import HeaderClient from '../components/HeaderClient';

const profiles = [
  {
    name: 'Mefire Hamed',
    title: 'Web and Software Developer',
    city: 'Dshang, Cameroon',
    rate: '5000 XAF/hr',
    successRate: '95%',
    earnings: '1k+ earned',
    skills: ['Laravel', 'TailwindCss', 'Java EE', 'SpringBoot'],
    available: true,
  },
  {
    name: 'Alice Dupont',
    title: 'Full Stack Developer',
    city: 'Yaounde, Cameroon',
    rate: '6000 XAF/hr',
    successRate: '97%',
    earnings: '3k+ earned',
    skills: ['JavaScript', 'React', 'Node.js', 'Express'],
    available: false,
  },
  // Add more profiles here as needed...
];

const Proposals = ({ profile }) => {
  return (
    <div>
      
         <div className="border p-4 rounded-lg shadow-lg mb-4 bg-white flex items-start gap-4">
      {/* Profile Picture */}
      <img
        src="https://via.placeholder.com/50"
        alt="Profile"
        className="rounded-full w-16 h-16"
      />

      {/* Profile Details */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-semibold">
              {profile.name} <span className="text-blue-500">⚡ Boosted</span>
            </h3>
            <p className="text-gray-500">{profile.title}</p>
            <p>{profile.city}</p>
          </div>
          {/* Availability Indicator */}
          <div className="text-right">
            {profile.available ? (
              <span className="text-blue-600 font-semibold">⚡ Available now</span>
            ) : (
              <span className="text-red-600 font-semibold">Not available</span>
            )}
          </div>
        </div>

        {/* Rate, Job Success, and Earnings */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <p className="mr-4">
            <AiOutlineDollarCircle className="inline-block mr-1" />
            {profile.rate}
          </p>
          <p className="mr-4">
            <AiFillStar className="inline-block mr-1" />
            {profile.successRate} Job Success
          </p>
          <p>
            <FaBriefcase className="inline-block mr-1" />
            {profile.earnings}
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-lg"
            >
              {skill} (Top 1%)
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="bg-gray-200 border text-black px-4 py-2 rounded-lg hover:bg-gray-300">
            <AiOutlineCheckCircle className="inline-block mr-1" /> Hire
          </button>
          <button className="bg-custom-green text-white px-4 py-2 rounded-lg hover:bg-bgcustom-green">
            Invite to Job
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

const FilterComponent = ({ filters, setFilters }) => {
  const handleSkillChange = (e) => {
    setFilters({ ...filters, skill: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleLanguageChange = (e) => {
    setFilters({ ...filters, language: e.target.value });
  };

  return (
    <div className="bg-gray-50 p-6 shadow-lg rounded-lg mb-8 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter Profiles</h2>

      {/* Filter by Skill */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
        <select
          value={filters.skill}
          onChange={handleSkillChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          <option value="">All Skills</option>
          <option value="Laravel">Laravel</option>
          <option value="TailwindCss">TailwindCss</option>
          {/* Add more skills here */}
        </select>
      </div>

      {/* Filter by Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <select
          value={filters.location}
          onChange={handleLocationChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          <option value="">All Locations</option>
          <option value="Dshang">Dshang</option>
          <option value="Yaounde">Yaounde</option>
          <option value="Douala">Douala</option>
        </select>
      </div>

      {/* Filter by Language */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
        <select
          value={filters.language}
          onChange={handleLanguageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

const ProposalsList = () => {
  const [filters, setFilters] = useState({ skill: '', location: '', language: '' });

  const filteredProfiles = profiles.filter((profile) =>
    (filters.skill ? profile.skills.includes(filters.skill) : true) &&
    (filters.location ? profile.city.includes(filters.location) : true) &&
    (filters.language ? profile.languages.includes(filters.language) : true)
  );

  return (
    <div className='bg-gray-50 w-full'>
      <HeaderClient/>
      <div className=''>
        
      </div>
       <div className="container mx-auto py-8 px-4 ">
        
      {/* Use flex-row for large screens */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FilterComponent */}
        <div className="lg:w-1/4 w-full">
          <FilterComponent filters={filters} setFilters={setFilters} />
        </div>

        {/* Profile list */}
        <div className="lg:w-3/4 w-full">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, index) => (
              <Proposals key={index} profile={profile} />
            ))
          ) : (
            <p className="text-gray-500">No profiles match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default ProposalsList;
