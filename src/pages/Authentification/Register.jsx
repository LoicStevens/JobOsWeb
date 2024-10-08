import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('prestataire'); // rôle par défaut : "prestataire"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <img src="logo.jpg" alt="JobOs" className="h-12" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Registration
        </h2>
       

        {/* Sélecteur de rôle avec émojis */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setRole('prestataire')}
            className={`flex items-center p-2 border rounded-lg w-full justify-center mx-1 ${role === 'prestataire' ? 'bg-custom-green text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <span className="mr-2">🛠️</span>
            I&apos;m Provider
          </button>
          <button
            onClick={() => setRole('client')}
            className={`flex items-center p-2 border rounded-lg w-full justify-center mx-1 ${role === 'client' ? 'bg-custom-green text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <span className="mr-2">👤</span>
            I&apos;m Customer
          </button>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-custom-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email 
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email "
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-custom-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-custom-green"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600">
                👁
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-custom-green text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          You already have an account?{' '}
          <a href="#" className="text-custom-green hover:underline"><Link to="/login">
            Sign in
            </Link></a>
        </p>
      </div>
    </div>
  );
};

export default Register;
