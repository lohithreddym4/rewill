'use client'
import React, { useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';

const RentPage = () => {

    const [rentalDays, setRentalDays] = useState(1);
    const router = useRouter();
    const params=useSearchParams()
    const itemId = params.get('itemId'); // Assuming itemId is passed in the URL

    const handleSliderChange = (e) => {
        setRentalDays(e.target.value);
    };

    const handleProceedToCheckout = () => {
        router.push(`/checkout?rentalDays=${rentalDays}&itemId=${itemId}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-4">Rent Item</h1>

                <p className="mb-4">
                    Please review the following terms and policies before renting this item. Make sure to
                    adhere to the renter’s preferences.
                </p>

                <div className="bg-gray-50 p-4 border rounded-md mb-6">
                    <h2 className="text-lg font-semibold mb-2">Policies</h2>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Return the item in the same condition as received.</li>
                        <li>A late return fee may apply if the item is not returned on time.</li>
                        <li>No refunds once the rental period has started.</li>
                        <li>Make sure there are no damages during the takeaway.</li>
                        <li>Contact the owner for any damages during the rental period.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Choose Rental Duration</h2>
                    <p className="text-sm text-gray-600 mb-2">Use the slider to select the number of days (1-180 days).</p>

                    <input
                        type="range"
                        min="1"
                        max="180"
                        value={rentalDays}
                        onChange={handleSliderChange}
                        className="w-full"
                    />
                    <div className="text-center mt-2 text-sm font-medium">
                        {rentalDays} {rentalDays === 1 ? 'day' : 'days'}
                    </div>
                </div>

                <button
                    onClick={handleProceedToCheckout}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default RentPage;
