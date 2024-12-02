import ItemDetails from "../../../components/ItemDetails";
import image from "../../../images/electronics.jpeg"

export default function ItemPage({ params }) {
  const { id } = params;

  const dummyItem = {
    id: 1,
    name: "Canon EOS 1500D Camera",
    category: "Electronics",
    description: "Capture stunning photos and videos with this easy-to-use DSLR camera, perfect for beginners and pros alike.",
    image,
    price: "$25/day",
    location: "New York",
    availability: "Available",
    reviews: [
      { id: 1, user: "Alice", rating: 4, comment: "Great camera, very user-friendly." },
      { id: 2, user: "Bob", rating: 5, comment: "The image quality was amazing!" },
    ],
  };
  

  // Fetch item details using the id (For now, use dummy data)
  const item = dummyItem; // Replace with real fetch logic later

  return (
    <div>
      <ItemDetails item={item} />
    </div>
  );
}
