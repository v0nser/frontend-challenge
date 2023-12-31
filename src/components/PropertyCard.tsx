interface PropertyCardProps {
  imageSrc: string;
  title: string;
  location: string;
  price: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ imageSrc, title, location, price }) => {
  return (
    <div className="property-card p-4 bg-gray-300 rounded-3xl shadow-md">
      <img src={imageSrc} alt="Property" className="w-full h-32 object-cover rounded-3xl mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-lg font-bold">${price}</p>
      <button className="bg-black text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default PropertyCard;
