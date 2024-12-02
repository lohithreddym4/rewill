import CategoryItems from "../../../components/CategoryItems";
import image from "../../../images/electronics.jpeg";

export default function CategoryPage({ params }) {
  const { id } = params;
// Dummy items
const items = [
    {
      id: 1,
      name: "Canon EOS 1500D Camera",
      category: "Electronics",
      image,
      price: "$25/day",
      location: "New York",
      availability: "Available",
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      category: "Electronics",
      image,
      price: "$50/day",
      location: "San Francisco",
      availability: "Unavailable",
    },
    {
      id: 3,
      name: "Camping Tent",
      category: "Outdoors",
      image,
      price: "$10/day",
      location: "Seattle",
      availability: "Available",
    },
  ];
  
  // Dummy categories
  const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "furniture", name: "Furniture" },
    { id: "outdoors", name: "Outdoors" },
  ];
  
  // Get category details (For now, filter from dummy data)
  const category = categories.find((cat) => cat.id === id);
  const filteredItems = items.filter((item) => item.category.toLowerCase() === category.name.toLowerCase());

  return (
    <div>
      <CategoryItems category={category} items={filteredItems} />
    </div>
  );
}
