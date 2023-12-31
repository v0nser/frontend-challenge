import PropertyCard from './PropertyCard';

const Subsection: React.FC = () => {
  const properties = [
    {
      id: 1,
      imageSrc: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Modern Apartment',
      location: 'Downtown, City',
      price: 250000,
    },
    {
      id: 2,
      imageSrc: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Cozy Cottage',
      location: 'Suburb Area',
      price: 150000,
    },
    {
      id: 3,
      imageSrc: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Luxury Villa',
      location: 'Seaside, Resort',
      price: 500000,
    },
    {
        id: 4,
        imageSrc: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hill Cottage',
        location: 'SeaPacific, Resort',
        price: 500000,
      },
      
  ];

  return (
    <>
      <section className="container font-permanent-marker">
        <h2 className="text-6xl px-10 py-8 flex text-center justify-center">
          The #1 Site Real Estate Professional Trust*
        </h2>
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div className="pencil-container bg-gray-300 p-2 rounded-full flex items-center">
            <div className="buttons">
              <ul className="buttons-list flex space-x-4">
                <li className="cursor-pointer transition duration-300 hover:bg-blue-500 rounded-full px-5 py-2 hover:text-white">
                  Buy
                </li>
                <li className="cursor-pointer transition duration-300 hover:bg-blue-500 rounded-full px-5 py-2 hover:text-white">
                  Rent
                </li>
                <li className="cursor-pointer transition duration-300 hover:bg-blue-500 rounded-full px-5 py-2 hover:text-white">
                  Sold
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto flex justify-center items-center mt-10">
            <div className="pencil-container p-4 rounded-full flex items-center">
              <form className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter ZIP or PIN Code"
                  className="border-2 border-gray-400 p-2 rounded-full focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
        <p className="bg-black text-white rounded-full px-2 py-1 mt-8 text-xs text-center w-28 flex mx-auto">View All---&gt;</p>

      </section>
    </>
  );
};

export default Subsection;