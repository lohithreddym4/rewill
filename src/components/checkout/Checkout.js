import { useRouter } from 'next/navigation';
// import Link from 'next/link'

export default function CheckoutComponent() {
    const router = useRouter();

    const handlePayment = () => {
        // Handle payment processing here
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold">Checkout</h1>
            <div className="booking-details">
                {/* Show booking summary with dates and total price */}
            </div>
            <button onClick={handlePayment} className="p-2 bg-green-500 text-white">
                Proceed to Payment
            </button>
        </div>
    );
}
