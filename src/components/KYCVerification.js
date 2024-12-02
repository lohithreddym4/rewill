'use client'

import React, { useState } from 'react';

const KYCVerificationPage = () => {
    const [isVerified, setIsVerified] = useState(false);

    const handleDigiLockerAuth = () => {
        // Simulating DigiLocker KYC Verification Process
        alert('Redirecting to DigiLocker for verification...');
        // After success, set the verification status (this would be replaced by actual API response)
        setTimeout(() => {
            setIsVerified(true);
            alert('KYC Verification Successful!');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>

                {!isVerified ? (
                    <>
                        <p className="text-gray-600 mb-4">
                            Your KYC is not verified. Please verify your KYC using DigiLocker to continue using our services.
                        </p>
                        <button
                            onClick={handleDigiLockerAuth}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Verify via DigiLocker
                        </button>
                    </>
                ) : (
                    <div className="text-center">
                        <p className="text-green-500 text-lg font-semibold mb-4">KYC Verified Successfully!</p>
                        <p className="text-gray-600">Thank you for verifying your KYC. You can now access all features.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KYCVerificationPage;
