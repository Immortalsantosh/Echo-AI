import React, { useState } from 'react';
import { supabase } from './client';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/logo/logo.png';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.updateUser({
                password: password,
            });

            if (error) {
                alert(`Error: ${error.message}`);
            } else {
                alert("Password has been reset successfully!");
                // console.log("reset successfully", data)
                navigate('/login');
            }
        } catch (error) {
            console.error("Unexpected error during password reset:", error);
            alert("Unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-screen bg-gray-900 text-white px-4 md:px-12">
            {/* Info Section */}
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                <img src={logo} alt="logo" className="mb-4 h-40 bg-transparent md:h-56" />
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Reset Your Password</h1>
                <p className="text-lg md:text-xl text-gray-400 mb-4">Securely regain access to your account.</p>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Please provide your email address, and we will send a password reset link. If you encounter any issues, feel free to contact our support team for assistance."
                </p>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Reset Password</h2>
                <form className="flex flex-col items-center w-full max-w-sm" onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="mb-4 w-full p-3 text-base md:text-lg border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className={`w-full p-3 text-base md:text-lg font-semibold text-black bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out ${
                            loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
