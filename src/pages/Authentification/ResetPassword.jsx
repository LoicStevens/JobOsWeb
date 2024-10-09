import React from 'react';

const ResetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <img src="logo.png" alt="JobOs" className="h-12" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Reset Password? 🔗
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Please sign in to your account and start the adventure
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Password
              </label>
              <input
                type="text"
                id="email"
                placeholder="********"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-custom-green"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-custom-green"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600">
                  👁
                </span>
              </div>
            </div>
           
            <button
              type="submit"
              className="w-full py-2 bg-custom-green text-white rounded-md hover:custom-green focus:outline-none"
            >
              Reset
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
         
            <a href="/login" className="text-custom-green hover:underline">
            <i class="fas fa-chevron-left"></i>
            Back
            </a>
          </p>
        </div>
      </div>
    );
};

export default ResetPassword;