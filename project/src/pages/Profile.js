import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assests/logo/logo.png';
import video from '../assests/video/video.mp4'

const Front = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login'); // Redirect to the login page
      };

  return (
  
 <div className="relative w-full h-screen overflow-hidden">
<video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
  <source src={video} type="video/mp4" />
</video>

<div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 text-center bg-black bg-opacity-50">
  <img src={logo} alt="New EchoAI Logo" className="h-40 md:h-56 object-contain" />

  <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 tracking-tight leading-tight">
    EchoAI: Enhancing Connections
  </h1>

  <h2 className="text-2xl font-semibold text-gray-200">Empowering Conversations with AI</h2>

  <p className="text-lg text-gray-300 max-w-md">
    Dive into the future with EchoAI, where AI enhances every interaction, making your communications smarter and your tasks simpler.
  </p>

  <button onClick={handleGetStarted} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-300">
  Get Started
  </button>
</div>
</div> 


);

}

export default Front


