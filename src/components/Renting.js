"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RentPageWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RentPage />
    </Suspense>
  );
};

const RentPage = () => {
  const [rentalDays, setRentalDays] = useState(1);
  const router = useRouter();
  const params = useSearchParams();
  const itemId = params.get("itemId");

  const handleSliderChange = (e) => {
    setRentalDays(e.target.value);
  };

  const handleProceedToCheckout = () => {
    if (itemId) {
      router.push(`/checkout?rentalDays=${rentalDays}&itemId=${itemId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Rent Item</h1>

        <p className="mb-4 text-gray-700">
          Please review the following terms and policies before renting this item. Make sure to
          adhere to the renter’s preferences.
        </p>

        <div className="bg-gray-50 p-4 border rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Policies</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Return the item in the same condition as received.</li>
            <li>A late return fee may apply if the item is not returned on time.</li>
            <li>No refunds once the rental period has started.</li>
            <li>Make sure there are no damages during the takeaway.</li>
            <li>Contact the owner for any damages during the rental period.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Choose Rental Duration</h2>
          <p className="text-sm text-gray-600 mb-2">
            Use the slider to select the number of days (1-180 days).
          </p>

          <input
            type="range"
            min="1"
            max="180"
            step="1"
            value={rentalDays}
            onChange={handleSliderChange}
            className="w-full"
          />
          <div className="text-center mt-2 text-sm font-medium text-gray-800">
            {rentalDays} {rentalDays === 1 ? "day" : "days"}
          </div>
        </div>

        <button
          onClick={handleProceedToCheckout}
          className={`w-full px-4 py-2 text-white rounded-md transition ${
            itemId
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!itemId}
        >
          {itemId ? "Proceed to Checkout" : "Item Not Found"}
        </button>
      </div>
    </div>
  );
};

const Loading = () => <p className="text-center text-gray-500">Loading...</p>;

export default RentPageWrapper;
