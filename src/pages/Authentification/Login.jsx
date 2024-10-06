import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <img src="logo.png" alt="JobOs" className="h-12" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Welcome to JobOs! 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please sign in to your account and start the adventure
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or username"
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
          <div className="flex justify-between items-center mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-custom-green" />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
            <a href="forgotPassword" className="text-custom-green hover:underline text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-custom-green text-white rounded-md hover:custom-green focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          New on our platform?{' '}
          <a href="/register" className="text-custom-green hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;