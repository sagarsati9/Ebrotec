import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/entra.jpg"; // Ensure this file exists at the path

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation/auth here if needed
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex w-full max-w-6xl bg-black bg-opacity-30 rounded-lg overflow-hidden shadow-lg">
        {/* Left side */}
        <div className="w-1/2 p-10 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Hybrix</h1>
          <h2 className="text-2xl font-semibold mb-2">Start your journey with us.</h2>
          <p className="text-sm text-white/80">
            It brings together your tasks, <br />
            projects, timelines, files and more.
          </p>
        </div>

        {/* Right side (Login Form) */}
        <div className="w-1/2 bg-white bg-opacity-90 p-10">
          <h2 className="text-2xl font-bold mb-1">Welcome,</h2>
          <p className="text-sm text-gray-600 mb-6">Login to continue to ENTRA.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute right-3 top-3 cursor-pointer text-gray-400">
                  👁️
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Forgot Your Password?
              </a>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-medium py-2 rounded-md hover:from-blue-500 hover:to-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
