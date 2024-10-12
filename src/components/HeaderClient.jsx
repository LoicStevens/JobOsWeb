import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import de l'icône profil

const HeaderClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Gérer l'état du dropdown
  const [isPopupOpen, setIsPopupOpen] = useState(false); // État du popup

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide relative z-50">
        <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
          <a href="#">
          <img src="logo.png" alt="JobOs" className="h-16 W-36" />
          </a>

          <div
            id="collapseMenu"
            className={`${isMenuOpen ? 'max-lg:flex' : 'max-lg:hidden'} lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">
                <img src="logo.png" alt="JobOs" className="h-16 W-36" />
                </a>
              </li>
              {/* Menu Items */}
              <li className="max-lg:border-b max-lg:py-3">
                <a href="#" className="hover:text-custom-green text-[16px] text-custom-green block font-bold">
                  Home
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a href="#" className="hover:text-custom-green text-gray-600 font-bold text-[16px] lg:hover:fill-custom-green block">
                  Proposals
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a href="#" className="hover:text-custom-green text-gray-600 font-bold text-[16px] lg:hover:fill-custom-green block">
                 Blog
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a href="#" className="hover:text-custom-green text-gray-600 font-bold text-[16px] lg:hover:fill-custom-green block">
                  Messages
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a href="#" className="hover:text-custom-green text-gray-600 font-bold text-[16px] lg:hover:fill-custom-green block" onClick={togglePopup}>
                  Contact 
                </a>
              </li>
              {/* Autres items */}
            </ul>
          </div>

          <div className="flex items-center ml-auto space-x-8">
            {/* Icons and buttons for notifications and shopping cart */}
          
            
            {/* Profil Icon Dropdown avec point vert pour statut en ligne */}
            <div className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none relative">
                <FaUserCircle size={30} className="text-gray-700 hover:text-blue-500" />
                {/* Point vert pour statut en ligne */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700">John Doe</div>
                  
                  <p
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    London
                  </p>
                  <hr className="border-t border-gray-200" />
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </a>
                </div>
              )}
            </div>
          </div>

          <button id="toggleOpen" className="lg:hidden text-lg" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 384 384">
              <path
                d="M368 80H16C7.168 80 0 72.832 0 64s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 128H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 128H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16z"
                data-original="#000000"
              />
            </svg>
          </button>
        </div>
      
      </header>
              {/* Popup */}
{isPopupOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-4">Get in touch</h2>
      
      {/* Description */}
      <p className="text-center mb-6">Stop wasting time and money designing and managing a website that doesn&apos;t get results. Happiness guaranteed!</p>

      <div className="flex justify-between gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border rounded-md h-24"
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-custom-green text-white rounded hover:bg-custom-green-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-custom-green p-2 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.404-2.412C5.052 6.746 6.158 6 7.37 6h9.26c1.213 0 2.319.746 2.965 1.588L21 10M2 10v4a6 6 0 006 6h8a6 6 0 006-6v-4m-6 4v3m0 0l-3-3m3 3l3-3" />
                </svg>
              </span>
              <span>+237657665385, +237682249159</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-custom-green p-2 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 10-8 0v1H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2h-3V7z" />
                </svg>
              </span>
              <span>yourmail@gmail.com, admin@yourwebsite.com</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-custom-green p-2 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </span>
              <span>OU Dschang Cameroon, Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <div className="mt-6 text-center">
        <button
          onClick={togglePopup}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default HeaderClient;

