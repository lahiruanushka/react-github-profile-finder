import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import RepoList from "./components/RepoList";
import { MagnifyingGlass } from "react-loader-spinner";

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (username) => {
    try {
      setIsLoading(true);
      setError(null); // Reset the error state before making the API call
  
      const token = import.meta.env.VITE_TOKEN;

      // Fetch user data from GitHub API
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (!response.ok) throw new Error("User not found");
  
      const data = await response.json();
      setUserData(data);
  
      // Fetch user's repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      if (!reposResponse.ok) throw new Error("Error fetching repositories");
  
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        GitHub Profile Finder
      </h1>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      <SearchBar onSearch={handleSearch} />

      {isLoading && (
        <div className="flex justify-center items-center mt-8">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}

      {userData && (
        <div className="mt-8 w-full max-w-4xl">
          <Profile userData={userData} />
          {repos.length > 0 ? (
            <RepoList repos={repos} />
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No repositories found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
