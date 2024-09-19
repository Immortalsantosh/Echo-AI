import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/logo/logo.png';
import { supabase } from './client';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleMailChange = (e) => {
        setMail(e.target.value);
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: mail,
                password: pass,
            });
            if (error) {
                // Handle login error
                console.error("Login error:", error.message);
                alert(`Error: ${error.message}`);
            } else {
                // Login successful
                alert("Login successful!");
                console.log("Login successful:", data);
                navigate('/home')
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("Unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

   

    return (

           

        <div className="flex items-center justify-center min-h-screen bg-gray-900">


<div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                <img src={logo} alt="logo" className="mb-4 h-40 bg-transparent md:h-56" />
               
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                EchoAI: Your AI Assistant
                </h1>
                    <br></br>
                <p className="text-lg md:text-xl text-gray-400 mb-4">Effortless AI-powered communication.</p>
               
            </div>
           

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Login with {" "}
                <span className='text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 tracking-tight leading-tight'>EchoAI</span>
                </h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                        Email ID<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        onChange={handleMailChange}
                        className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            placeholder="Password"
                            onChange={handlePassChange}
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500 focus:outline-none"
                        >
                            {passwordVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.458 10C3.732 6.943 6.613 5 10 5s6.268 1.943 7.542 5c-1.274 3.057-4.155 5-7.542 5s-6.268-1.943-7.542-5zM10 7a3 3 0 100 6 3 3 0 000-6z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2a5 5 0 110 10A5 5 0 0110 5zM4.293 4.293a1 1 0 011.414 0l9 9a1 1 0 01-1.414 1.414l-9-9a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex justify-end mt-[-9px] items-center mb-6">
                    <a  className="text-purple-500 text-sm hover:underline cursor-pointer hover:text-blue-400"  href><Link to="/forgot-password">Forgot Password? </Link></a>
                </div>

                <button
                

                    type="submit"
                    className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={loading}  >
                 {loading ? "Logging In..." : "Log In"}
                </button>
            </form>

                
                <p className=' flex mt-[15px] text-white '>
                    Don't have an account? <Link to="/Sign-up"><p className='text-purple-500  hover:underline hover:text-blue-400'>SignUp</p></Link>
                </p>
            </div>
        </div>
    );
};



export default Login;
