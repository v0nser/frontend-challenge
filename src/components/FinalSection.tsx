import Link from 'next/link';
import { MdHomeWork } from 'react-icons/md';

function FinalSection() {
  return (
    <>
      <section className="finalSection p-8 flex justify-center font-poppins relative">
        <div className="wrapper rounded-2xl bg-black relative">
          <div className="first-wrapper relative">
            <img
              src="https://images.pexels.com/photos/3075453/pexels-photo-3075453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-2xl"
            />
            <h1 className="text-center text-white absolute -mt-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-6xl font-bold">
              Check Out a Neighbourhood
            </h1>
            <p className="text-center text-slate-700 absolute -mt-64 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-base font-bold">
              Does it have pet-friendly rates? Get important local information on the area you are more interested in.
            </p>
            <div className="search-form-container absolute -mt-96 left-1/2 transform -translate-x-1/2">
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
          <div className="footer text-white flex flex-wrap justify-between mt-8 p-4">
            <div className="footer-1 flex-1 mx-2">
              <h1 className="flex items-center text-5xl">
                <MdHomeWork className="text-white mr-2" />
                Estate
              </h1>
            </div>
            <div className="footer-1 flex-1 mx-2">
              <h2 className='font-bold'>New Listings</h2>
              <ul className="mt-2">
                <li>Alabama</li>
                <li>Alaska</li>
                <li>Arizona</li>
                <li>California</li>
                <li>Florida</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="footer-1 flex-1 mx-2">
              <h2 className='font-bold'>Useful Links</h2>
              <ul className="mt-2">
                <li>Subscriptions</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ & More</li>
                <li>Privacy Policy</li>
                <li>Terms & Service</li>
              </ul>
            </div>
            <div className="footer-1 flex-1 mx-2">
              <h2 className='font-bold'>NEWSLETTER</h2>
              <p className="mt-2">Sign up for exclusive newsletters and updates</p>
              <form className="mt-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-2 border-gray-400 p-2 rounded-full focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 mt-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer-2 flex p-4">
                <div className="footer2-child">
                    <p className='text-sm text-slate-600'>Copyright. All rights reserverd.</p>
                </div>
                <div className="footer2-child flex text-slate-600 absolute bottom-0 right-0 p-4">
                    <ul className='flex flex-wrap space-x-5'>
                        <li>Buy</li>
                        <li> Rent</li>
                        <li> Mortgage </li>
                        <li>Saved Homes</li>
                        <li>Saved Search</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default FinalSection;
