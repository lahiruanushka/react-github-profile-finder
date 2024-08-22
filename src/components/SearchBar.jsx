import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white shadow-md rounded-lg p-2 max-w-md mx-auto mt-6"
    >
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={handleInputChange}
        className="flex-grow p-2 rounded-lg outline-none text-gray-700"
      />
      <button
        type="submit"
        className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
