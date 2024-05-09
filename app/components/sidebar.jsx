/* eslint-disable react/prop-types */
import logo from "../THDCIHET-LOGO-removebg-preview.png";
import { Link } from "@remix-run/react";
function Sidebar({ navLinks }) {
  return (
    <aside className="bg-[#E5F3FF] sm:w-[24%] md:w-[20%] lg:w-[17%] h-screen flex flex-col">
      <a href="/">
        {/* Logo */}
        <img
          className="w-[160px] h-auto mx-auto my-3"
          src={logo}
          alt="College"
        />
        {/* Portal Heading */}
        <h1 className="mt-2 mb-3 sm:text-[1.1rem] sm:ml-1.5 md:text-[1.4rem] lg:text-[1.3rem] font-[Roboto-Serif]">
          Complain Portal
        </h1>
      </a>

      {/* Navigation */}

      <nav className="text-lg">
        <ul className="flex flex-col">
          {navLinks.map((link, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={`.${link.path}`}>
              <li
                className="p-3 hover:bg-blue-500 hover:text-white"
                key={index}
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* <div className="mt-auto h-auto px-3 mb-2 text-2xl text-blue-500 hover:bg-blue-600 hover:text-white">
            <button  className="flex items-center group">
              <span className="no-shrink">Log Out</span>
              <svg
                className="inline ml-[-0.5] flex-grow hover:group-hover:translate-x-2 transform tansition-transform transition duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                height="1rem"
                viewBox="0 0 24 24"
              >
                
              </svg>
            </button>
          </div> */}

      <div className="mt-auto h-auto px-3 mb-2 text-2xl text-blue-500 hover:bg-blue-600 hover:text-white">
        <button className="flex items-center group">
          <span className="no-shrink">Log Out</span>
          <svg
            className="inline ml-[-0.5] flex-grow hover:group-hover:translate-x-2 transform tansition-transform transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M7 10l5 5 5-5z" />
          </svg>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
