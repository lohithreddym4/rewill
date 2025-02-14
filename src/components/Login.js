'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed. Please try again.');
                return;
            }

            const data = await response.json();
            // Save token or handle session as needed
            localStorage.setItem('token', data.token);

            // Redirect to dashboard or homepage
            router.push('/account/profile');
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    const handleGoogleLogin = () => {
        // Add logic for Google login (e.g., OAuth integration)
        console.log('Google login clicked');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center justify-center mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                    >
                        <Image
                            src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                            alt="Google Logo"
                            className="w-5 h-5 mr-2"
                            width={20}
                            height={20}
                        />
                        Continue with Google
                    </button>
                </div>

                <p className="text-sm text-center text-gray-600">
                    Don't have an account?
                    <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
