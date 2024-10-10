

// Données fictives des jobs
const jobs = [
  { title: 'Software Engineer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🖥️' },
  { title: 'Digital Marketer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '📊' },
  { title: 'Wordpress Developer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🌐' },
  { title: 'Visual Designer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🎨' },
  { title: 'Software Engineer', location: 'California, USA', type: 'Part-time', deadline: '31 Jan 2020', icon: '🖥️' }
];

const JobList = () => {
  return (
    
    <div className="py-12 bg-gray-30">
        
      <div className="container mx-auto">
           <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Job Listing</h2>
          <button className="border-2 border-bgcustom-green text-bgcustom-green px-4 py-2 rounded hover:bg-bgcustom-green hover:text-white">
            Browse More Job
          </button>
        </div>
        
        {/* Liste des jobs */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="flex justify-between items-center border hover:border-bgcustom-green bg-white p-4 rounded-lg shadow-lg">
              
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
                <p className="text-gray-400 text-sm mt-2">Date line: {job.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
