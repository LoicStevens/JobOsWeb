import  { useState } from 'react';

const ProfileCompletion = () => {
  const [profile, setProfile] = useState({
    personalInfo: { name: '', city: '', email: '', birthDate: '', photo: '' },
    skillsExperience: { skills: '', languages: '', description: '' },
    professionalDetails: { portfolio: '', price: '' },
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Définition des sections
  const sections = [
    {
      title: 'personalInfo',
      displayTitle: 'Informations Personnelles',
      description: "Renseignez vos informations personnelles. Ces détails nous aident à mieux vous connaître.",
      fields: [
        { label: 'Nom', type: 'text', key: 'name' },
        { label: 'Ville', type: 'text', key: 'city' },
        { label: 'Email', type: 'email', key: 'email' },
        { label: 'Date de Naissance', type: 'date', key: 'birthDate' },
      ],
    },
    {
      title: 'skillsExperience',
      displayTitle: 'Compétences et Expérience',
      description: 'Décrivez vos compétences, vos langues parlées, et une brève description de votre parcours.',
      fields: [
        { label: 'Compétences', type: 'textarea', key: 'skills' },
        { label: 'Langues', type: 'text', key: 'languages' },
        { label: 'Description', type: 'textarea', key: 'description' },
      ],
    },
    {
      title: 'professionalDetails',
      displayTitle: 'Détails Professionnels',
      description: 'Partagez votre portfolio et vos tarifs.',
      fields: [
        { label: 'Portfolio', type: 'text', key: 'portfolio' },
        { label: 'Prix', type: 'number', key: 'price' },
      ],
    },
  ];

  // Gestion des changements de formulaire
  const handleInputChange = (field, value) => {
    if (field === 'photo') {
      const file = value;
      setProfile((prevProfile) => ({
        ...prevProfile,
        personalInfo: {
          ...prevProfile.personalInfo,
          [field]: file,
        },
      }));

      // Aperçu de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        setPhotoPreview(null);
      }
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [sections[currentSection].title]: { ...prevProfile[sections[currentSection].title], [field]: value },
      }));
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length) {
      setCurrentSection(currentSection + 1);
    } else {
      console.log('Profile completed:', profile);
      alert('Profile completed!');
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Section de récapitulation des informations
  const renderVerificationSection = () => {
    return (
      <div>
        <h3 className="text-lg font-bold mb-4 text-custom-green">Veuillez vérifier vos informations :</h3>
        <div className="mb-4">
          <h4 className="font-semibold">Informations Personnelles</h4>
          <p className="text-gray-700">Nom : {profile.personalInfo.name}</p>
          <p className="text-gray-700">Ville : {profile.personalInfo.city}</p>
          <p className="text-gray-700">Email : {profile.personalInfo.email}</p>
          <p className="text-gray-700">Date de Naissance : {profile.personalInfo.birthDate}</p>
          {photoPreview && <img src={photoPreview} alt="Profile" className="w-32 h-32 rounded-full mt-4 mx-auto" />}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Compétences et Expérience</h4>
          <p className="text-gray-700">Compétences : {profile.skillsExperience.skills}</p>
          <p className="text-gray-700">Langues : {profile.skillsExperience.languages}</p>
          <p className="text-gray-700">Description : {profile.skillsExperience.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Détails Professionnels</h4>
          <p className="text-gray-700">Portfolio : {profile.professionalDetails.portfolio}</p>
          <p className="text-gray-700">Prix : {profile.professionalDetails.price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-full mx-auto mt-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="logo.png" alt="Logo de la plateforme" className="h-16" />
      </div>
      
      {/* Etapes de progression */}
      <div className="flex justify-around mb-6">
        {sections.map((section, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-lg ${
                currentSection === index ? 'bg-custom-green' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </div>
            {index < sections.length - 1 && (
              <div className="w-20 h-1 bg-gray-300 mx-2"></div>
            )}
          </div>
        ))}
        {/* Ajout d'une dernière section pour vérification */}
        <div className="flex items-center">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-lg ${
              currentSection === sections.length ? 'bg-custom-green' : 'bg-gray-300'
            }`}
          >
            ✔
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        {currentSection < sections.length ? sections[currentSection].displayTitle : 'Vérification des Informations'}
      </h2>

      <p className="text-center text-gray-600 mb-6">
        {currentSection < sections.length ? sections[currentSection].description : 'Confirmez que toutes vos informations sont correctes.'}
      </p>

      {/* Upload de l'image */}
      {currentSection === 0 && (
        <div className="flex justify-center mb-6">
          <label htmlFor="photo-upload" className="relative cursor-pointer">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
              {photoPreview ? (
                <img src={photoPreview} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Ajouter une Photo</span>
              )}
            </div>
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleInputChange('photo', e.target.files[0])}
            />
          </label>
        </div>
      )}

      {/* Formulaire des sections */}
      <div className="mb-4">
        {currentSection < sections.length
          ? sections[currentSection].fields.map((field) => (
            <div key={field.key} className="mb-6">
              {field.type === 'textarea' ? (
                <textarea
                  placeholder={field.label}
                  className="p-4 border border-gray-300 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={profile[sections[currentSection].title][field.key]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.label}
                  className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={profile[sections[currentSection].title][field.key]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              )}
            </div>
          ))
          : renderVerificationSection()}
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          onClick={handleBack}
          disabled={currentSection === 0}
        >
          Précédent
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={handleNext}
        >
          {currentSection < sections.length ? 'Suivant' : 'Terminer'}
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;
