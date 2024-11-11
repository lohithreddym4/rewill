import React from 'react';

export default function Home() {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">Welcome to Borrowly!</h1>
            <div className="search-bar my-4">
                {/* Search bar component */}
            </div>
            <div className="featured-items">
                <h2 className="text-2xl font-semibold my-4">Featured Items</h2>
                {/* Display a list of featured items (Cards) */}
            </div>
            <div className="categories my-4">
                <h2 className="text-2xl font-semibold my-4">Browse Categories</h2>
                {/* List of categories as buttons or links */}
            </div>
        </div>
    );
}
