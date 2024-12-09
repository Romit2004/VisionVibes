import React from "react";
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaBell, FaTh } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";
import { SlLogout } from "react-icons/sl";
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { authUser } = useAuthContext();
  const avatar = authUser.data.user.avatar;
  const { loading, logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="header flex flex-col sm:flex-row justify-between items-center p-4 shadow-lg bg-black border-4 border-red-600 mb-4 rounded-lg space-y-4 sm:space-y-0">
      
      <div className="left-section flex items-center space-x-4">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
        <AiOutlineYoutube className="youtube-logo text-red-500 text-3xl cursor-pointer" />
      </div>

     
      <div className="middle-section flex items-center space-x-2 w-full sm:w-auto">
        <input
          className="search-bar border rounded-full px-4 py-2 w-full sm:w-64  focus:ring-red-600 border-red-400"
          type="text"
          placeholder="Search"
        />
        <button className="search-button group flex items-center justify-center bg-gray-200 p-2 rounded-full hover:bg-gray-300 relative">
          <FaSearch className="search-icon text-red-400" />
          <div className="tooltip absolute top-12 bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Search
          </div>
        </button>
      </div>

      {/* Right Section */}
      <div className="right-section flex items-center space-x-4">
        <SlLogout
          className="text-red-600 text-xl cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
