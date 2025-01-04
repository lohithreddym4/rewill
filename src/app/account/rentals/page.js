"use client";

import React from "react";
import RentalsList from "../../../components/RentalsList";

export default function MyRentalsPage() {

  const mockRentedItems = [
    {
      id: 1,
      name: "Canon EOS 1500D Camera",
      price: "$25/day",
      rentalPeriod: "7 days",
      status: "Active",
      startDate: "2024-12-28",
      renterId: 101,
      renterName: "John Doe",
    },
    {
      id: 2,
      name: "Camping Tent",
      price: "$10/day",
      rentalPeriod: "3 days",
      status: "Returned",
      startDate: "2024-12-20",
      renterId: 102,
      renterName: "Alice Smith",
    },
  ];

  const handleChat = (renterId) => {
    console.log("Start chat with renter:", renterId);
    // Redirect to chat page or open chat window
  };

  const handleReturnRequest = (itemId) => {
    console.log("Return request initiated for item:", itemId);
    // Trigger return request logic
  };


  return (
    <div>
      <RentalsList
        rentedItems={mockRentedItems}
        handleChat={handleChat}
        handleReturnRequest={handleReturnRequest}
      />
    </div>
  );
}
