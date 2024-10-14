import React, { useState, useEffect } from 'react';

// Données fictives des jobs
const jobs = [
  { title: 'Software Engineer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🖥️' },
  { title: 'Digital Marketer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '📊' },
  { title: 'Wordpress Developer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🌐' },
  { title: 'UX Designer', location: 'New York, USA', type: 'Full-time', deadline: '31 Jan 2020', icon: '🎨' },
];

// Composant de filtrage
const FilterComponent = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-64">
      <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>

      {/* Filtre par mot-clé (titre) */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={filters.title}
          onChange={(e) => handleFilterChange('title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtre par localisation */}
      <div className="mb-4">
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Location</option>
          <option value="California, USA">California, USA</option>
          <option value="New York, USA">New York, USA</option>
        </select>
      </div>

      {/* Filtre par type de travail */}
      <div className="mb-4">
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>

      {/* Bouton pour réinitialiser les filtres */}
      <button
        onClick={() =>
          setFilters({
            title: '',
            location: '',
            type: '',
          })
        }
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};

const JobList = () => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    type: '',
  });
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Appliquer les filtres
  useEffect(() => {
    let filtered = jobs;

    // Filtrage par titre
    if (filters.title) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    // Filtrage par localisation
    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    // Filtrage par type de travail
    if (filters.type) {
      filtered = filtered.filter((job) => job.type === filters.type);
    }

    setFilteredJobs(filtered);
  }, [filters]);

  return (
    <div className="py-12 bg-gray-30">
      <div className="container mx-auto">
        {/* Section de filtrage */}
        <div className="flex justify-between items-start mb-8">
          <FilterComponent filters={filters} setFilters={setFilters} />

          {/* Liste des jobs */}
          <div className="w-full">
            <h2 className="text-2xl font-bold">Job Listing</h2>
            <div className="space-y-4 mt-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border hover:border-bgcustom-green bg-white p-4 rounded-lg shadow-lg"
                  >
                    {/* Section gauche : Icône + Titre + Détails */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-lg text-3xl">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-gray-500">
                          <span className="inline-block mr-2">📍 {job.location}</span>
                          <span className="inline-block">⏰ {job.type}</span>
                        </p>
                      </div>
                    </div>

                    {/* Section droite : Appliquer maintenant + Délai */}
                    <div className="text-right">
                      <button className="bg-bgcustom-green text-white px-4 py-2 rounded-lg shadow border hover:border-bgcustom-green hover:bg-white hover:text-bgcustom-green">
                        Apply Now
                      </button>
                      <p className="text-gray-400 text-sm mt-2">
                        Date line: {job.deadline}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No jobs match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
