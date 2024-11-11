
export default function ItemDetail({ params }) {
    const { id } = params; // Access the `id` parameter from the URL

    // You can now use `id` to fetch item data or display it directly
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold">Item Details for ID: {id}</h1>
            {/* Fetch and display item details based on the `id` */}
        </div>
    );
}
