import React, { useState } from 'react';
import { supabase } from './client';
import logo from '../assests/logo/logo.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://respondr.vercel.app/reset-password',
      });
      if (error) {
        console.log(`Error: ${error.message}`);
        alert(`Error: ${error.message}`);
      } else {
        alert("Password reset email sent! Please check your inbox.");
        // console.log("reset successful:", data);
      }
    } catch (error) {
      console.error("Unexpected error during password reset:", error);
      alert("Unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen bg-gray-900 text-white px-12">
      {/* Info Section */}
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
        <img src={logo} alt="logo" className="mb-4 h-56" />
        <h1 className="text-4xl font-bold mb-2">Forgot Password?</h1>
        <p className="text-xl text-gray-400 mb-4">Regain access to your account.</p>
        <p className="text-base text-gray-300 leading-relaxed">
          We value your security. Enter your email address, and we'll send you a link to reset your password. If you're having trouble, please contact support.
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>
        <form className="flex flex-col items-center w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="mb-4 w-full p-3 text-lg border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
         <button
        type="submit"
        className={`w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out ${
          loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        disabled={loading}
      >
        {loading ? "Sending Reset Link..." : "Send Reset Link"}
      </button>
        </form>
      </div>
    </div>


  );
}
