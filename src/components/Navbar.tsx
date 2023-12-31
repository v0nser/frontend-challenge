import Link from 'next/link';
import { MdHomeWork } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="navbar font-permanent-marker flex px-5 py-5 items-center justify-between bg-7bb3e8 text-white">
      <ul className="navlist flex space-x-4 text-md">
        <li className="navItem">
          <Link href="/">Buy</Link>
        </li>
        <li className="navItem">
          <Link href="/">Rent</Link>
        </li>
        <li className="navItem">
          <Link href="/">Mortgage</Link>
        </li>
      </ul>
      <h2 className='text-3xl'>
        <Link href="/" className='flex flex-row '>
        <MdHomeWork className="text-white" /> 
        Estate
        </Link>
      </h2>
      <ul className="navlist flex space-x-4 text-md">
        <li className="navItem">
          <Link href="/">Saved</Link>
        </li>
        <li className="navItem">
          <Link href="/">Login</Link>
        </li>
        <li className="navItem">
          <Link href="/" className='bg-black rounded-full px-3 py-3'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
