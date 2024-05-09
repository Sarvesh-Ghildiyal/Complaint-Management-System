import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for routing

// eslint-disable-next-line react/prop-types
function Header({ userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-[85%] h-auto mx-auto mt-5 flex justify-between rounded-sm shadow-xl">
      {/* Dashboard Text */}
      <div className="w-auto p-2.5">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <circle cx="12" cy="6" r="4" />
              <path
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
                opacity=".5"
              />
            </g>
          </svg>
          <p>Dashboard</p>
        </Link>
      </div>

      {/* Bell, User name, and Dropdown */}
      <div className="w-auto p-2.5 flex items-center space-x-2 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 50 50"
        >
          <path
            fill="currentColor"
            d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1c.9-6.2 2-13.9 10.8-13.9s9.9 7.7 10.8 13.9C36.7 30.1 37.4 34 42 34v2z"
          />
          <path
            fill="currentColor"
            d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5z"
          />
          <path
            fill="currentColor"
            d="M8 34h34v2H8zm19-24c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5s.9-2 2-2s2 .9 2 2z"
          />
        </svg>

        {/* User Dropdown */}
        <div>
          {/* User Dropdown Trigger */}
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 border-transparent focus:outline-none transition ease-in-out duration-150"
          >
            <p>{userName}</p>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-xs bg-white">
              <Link
                to="/profile/edit"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Profile
              </Link>
              <button
                // onClick={handleLogout}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
