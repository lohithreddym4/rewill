import { useState } from 'react';

export default function ListItem() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send a POST request to create a new item
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold">List a New Item</h1>
            <form onSubmit={handleSubmit} className="listing-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Item Title"
                    className="my-2 p-2 border"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="my-2 p-2 border"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Rental Price per Day"
                    className="my-2 p-2 border"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white">
                    Submit
                </button>
            </form>
        </div>
    );
}
