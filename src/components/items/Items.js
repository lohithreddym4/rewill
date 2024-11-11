import React, { useState } from 'react';

export default function ItemsComponent() {
    const [items, setItems] = useState([]); // Fetch items from API on mount

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold">Available Items</h1>
            <div className="filters my-4">
                {/* Add filter components here */}
            </div>
            <div className="item-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(item => (
                    <div key={item._id} className="item-card">
                        {/* Each item card component */}
                    </div>
                ))}
            </div>
        </div>
    );
}
