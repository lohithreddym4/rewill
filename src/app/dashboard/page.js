import { useSession } from 'next-auth/react';

export default function Dashboard() {
    const { data: session } = useSession();
    if (!session) return <p>Please log in to view your dashboard</p>;

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold">My Dashboard</h1>
            <div className="my-rentals">
                <h2 className="text-2xl font-semibold my-4">My Rentals</h2>
                {/* List of items user is renting */}
            </div>
            <div className="my-lent-items">
                <h2 className="text-2xl font-semibold my-4">My Lent Items</h2>
                {/* List of items user is lending */}
            </div>
            <div className="transaction-history">
                <h2 className="text-2xl font-semibold my-4">Transaction History</h2>
                {/* Display transaction records */}
            </div>
        </div>
    );
}
