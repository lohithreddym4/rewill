"use client";

import React from "react";
import RentalsList from "../../../components/RentalsList";

export default function MyRentalsPage() {
  // Dummy Data for My Rentals
  const rentedItems = [
    { id: 1, name: "Electric Drill", price: "$20/day", rentalPeriod: "3 days", status: "Ongoing" },
    { id: 2, name: "Mountain Bike", price: "$15/day", rentalPeriod: "5 days", status: "Completed" },
  ];

  const listedItems = [
    { id: 1, name: "Tent", price: "$10/day", category: "Outdoors", status: "Available" },
    { id: 2, name: "Camera", price: "$25/day", category: "Electronics", status: "Rented" },
  ];

  return (
    <div>
      <RentalsList rentedItems={rentedItems} listedItems={listedItems} />
    </div>
  );
}
