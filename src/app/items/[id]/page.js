import ItemDetails from "../../../components/ItemDetails";

export default function ItemPage({ params }) {
  const { id } = params;

  const item = {
    id: 1,
    name: "Canon EOS 1500D Camera",
    category: "Photography",
    description: "A high-quality DSLR camera for capturing stunning photographs and videos.",
    price: 1200,
    location: "Mumbai, India",
    availability: "Available",
    rating: 4, // Rating out of 5
    images: [
      "https://via.placeholder.com/400x300?text=Camera+Front",
      "https://via.placeholder.com/400x300?text=Camera+Back",
      "https://via.placeholder.com/400x300?text=Camera+Side",
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Excellent camera! The picture quality is amazing.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Good value for money. Easy to use.",
      },
      {
        user: "John Doe",
        rating: 5,
        comment: "Excellent camera! The picture quality is amazing.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Good value for money. Easy to use.",
      },
    ],
  };
  
  const nearbyItems = [
    {
      id: 2,
      name: "GoPro Hero 9",
      price: 900,
      image: "https://via.placeholder.com/200x150?text=GoPro+Hero+9",
    },
    {
      id: 3,
      name: "Nikon D3500",
      price: 1500,
      image: "https://via.placeholder.com/200x150?text=Nikon+D3500",
    },
    {
      id: 4,
      name: "Sony Alpha 7",
      price: 2500,
      image: "https://via.placeholder.com/200x150?text=Sony+Alpha+7",
    },
    {
      id: 5,
      name: "DJI Mavic Air 2 Drone",
      price: 3000,
      image: "https://via.placeholder.com/200x150?text=DJI+Mavic+Air+2+Drone",
    },
    {
      id: 2,
      name: "GoPro Hero 9",
      price: 900,
      image: "https://via.placeholder.com/200x150?text=GoPro+Hero+9",
    },
    {
      id: 3,
      name: "Nikon D3500",
      price: 1500,
      image: "https://via.placeholder.com/200x150?text=Nikon+D3500",
    },
    {
      id: 4,
      name: "Sony Alpha 7",
      price: 2500,
      image: "https://via.placeholder.com/200x150?text=Sony+Alpha+7",
    },
    {
      id: 5,
      name: "DJI Mavic Air 2 Drone",
      price: 3000,
      image: "https://via.placeholder.com/200x150?text=DJI+Mavic+Air+2+Drone",
    },
  ];

  return (
    <div>
      <ItemDetails item={item} nearbyItems={nearbyItems} />
    </div>
  );
}
