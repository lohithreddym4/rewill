"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";

const CheckoutPageWrapper = () => {
    return (
        <Suspense fallback={<Loading />}>
            <CheckoutPage />
        </Suspense>
    );
};

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const params = useSearchParams();
    const rentalDays = params.get("rentalDays");
    const itemId = params.get("itemId");

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleConfirmCheckout = () => {
        alert(`Checkout confirmed for ${rentalDays} days using ${paymentMethod}.`);
        // Add actual checkout logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Rental Details</h2>
                    <p className="text-sm text-gray-600 mb-2">You are renting item ID: {itemId}</p>
                    <p className="text-sm text-gray-600">
                        Rental Duration: {rentalDays} {rentalDays === "1" ? "day" : "days"}
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
                    <div className="flex flex-col space-y-2">
                        {["creditCard", "paypal", "bankTransfer"].map((method) => (
                            <label key={method} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value={method}
                                    checked={paymentMethod === method}
                                    onChange={handlePaymentChange}
                                    className="h-4 w-4"
                                />
                                <span>{method.charAt(0).toUpperCase() + method.slice(1)}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleConfirmCheckout}
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Confirm Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

const Loading = () => <p>Loading checkout...</p>;

export default CheckoutPageWrapper;
