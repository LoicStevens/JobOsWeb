import { useState } from 'react';
import Header from '../components/Header';
import FilterComponent from '../components/FilterComponent';
import { AiOutlineClose, AiOutlineFileImage } from 'react-icons/ai';
import { MdTitle, MdDescription } from 'react-icons/md';

const Blog = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const blogPosts = [
    {
      image: "image_url_1.jpg", // Remplacez avec l'URL réelle de votre image
      date: "4 déc. 2022",
      timeToRead: "1",
      title: "5 objets en dessous de 20 € indispensables",
      description: "Créez un sous-titre de post de blog qui résume en quelques phrases claires et concises le..."
    },
    {
      image: "image_url_2.jpg", // Remplacez avec l'URL réelle de votre image
      date: "4 déc. 2022",
      timeToRead: "2",
      title: "5 bonnes adresses de pizzeria à connaître",
      description: "Créez un sous-titre de post de blog qui résume en quelques phrases claires et concises le..."
    }
  ];

  // Fonction pour ouvrir/fermer la popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Bouton pour ouvrir la popup */}
      <div className="flex justify-end mb-4 md:mb-0">
        <button 
          className="bg-green-500 text-white px-4 py-2 mt-2 mr-7 rounded-md hover:bg-green-600 transition text-sm"
          onClick={togglePopup}
        >
          Post
        </button>
      </div>

      {/* Contenu du Blog */}
      <div className="container mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Filtre sur la gauche */}
          <div className="md:w-1/4">
            <FilterComponent />
          </div>

          {/* Blog Posts */}
          <div className="md:w-3/4">
            {blogPosts.map((post, index) => (
              <div key={index} className="my-6 border border-gray-300 shadow-lg bg-white rounded-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
                  <div className="p-4">
                    <div className="text-sm text-gray-500">
                      <p>{post.date} • {post.timeToRead} Min</p>
                    </div>
                    <h2 className="text-xl font-semibold my-2">{post.title}</h2>
                    <p className="text-gray-600">{post.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm text-gray-500">0 vue • Commentaires</p>
                      <button className="text-red-500 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0l1.318 1.318 1.318-1.318a4.5 4.5 0 016.364 6.364l-7.682 7.682a.75.75 0 01-1.06 0l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup pour ajouter un post */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={togglePopup}
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Nouveau Blog Post</h2>

            {/* Formulaire */}
            <form className="space-y-4">
              {/* Titre avec icône */}
              <div className="flex items-center border-b border-gray-300 py-2">
                <MdTitle className="text-gray-600 mr-2" size={24} />
                <input 
                  type="text"
                  className="w-full px-2 py-1 outline-none"
                  placeholder="Titre du blog"
                />
              </div>

              {/* Description avec icône */}
              <div className="flex items-center border-b border-gray-300 py-2">
                <MdDescription className="text-gray-600 mr-2" size={24} />
                <textarea 
                  className="w-full px-2 py-1 outline-none"
                  placeholder="Description du blog"
                  rows="3"
                ></textarea>
              </div>

              {/* Charger une image avec icône */}
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <AiOutlineFileImage className="text-gray-600 mr-2" size={20} />
                 <label className="text-gray-500 cursor-pointer">
                   <input type="file" className="hidden" />
                  <span>Upload Image</span>
                    </label>
                    </div>


              {/* Bouton de soumission */}
              <button 
                type="submit"
                className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-green-600 transition text-sm"
              >
                Ajouter Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
