'use client'

import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user data from API
        setUser(
            {
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                createdAt: '2021-09-01T00:00:00.000Z'
            }
        )
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }

    if (!user) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
                <h1 className="text-2xl font-bold mb-4">My Profile</h1>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Joined On:</span>
                        <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={() => alert('Edit Profile functionality coming soon!')}
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
