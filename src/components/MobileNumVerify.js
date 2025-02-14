'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MobileNumVerify = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [error, setError] = useState(null);
    const [isResend, setIsResend] = useState(false);
    const router = useRouter();

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Automatically focus on the next input
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, 6).split('');
        setOtp((prev) => pasteData.map((d, i) => pasteData[i] || prev[i]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');

        if (otpCode.length !== 6) {
            setError('Please enter a valid 6-digit OTP.');
            return;
        }

        try {
            const response = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobile, otp: otpCode }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'OTP verification failed. Please try again.');
                return;
            }

            router.push('/dashboard');
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    const handleResendCode = () => {
        setIsResend(true);
        // Implement resend OTP logic here
        console.log('Resend code to', mobile);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-blue-600">Verify Your Mobile</h2>
                <p className="mt-2 text-sm text-center text-gray-600">
                    Enter your mobile number and the OTP sent to it.
                </p>

                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={mobile}
                            onChange={handleMobileChange}
                            required
                        />
                    </div>

                    <div className="flex justify-center space-x-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !otp[index]) {
                                        if (index > 0) {
                                            document.getElementById(`otp-${index - 1}`).focus();
                                        }
                                    }
                                }}
                                onPaste={handlePaste}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleResendCode}
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                    >
                        {isResend ? 'Resend Code' : 'Get Code'}
                    </button>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MobileNumVerify;
