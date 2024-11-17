"use client";
import React, { Suspense } from "react";
import SearchPage from "../../components/NavSearch";

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
