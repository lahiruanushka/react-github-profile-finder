import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="repo-name text-xl font-semibold text-blue-600">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      {repo.description && <p className="repo-description text-gray-700 mt-2">{repo.description}</p>}
      <div className="repo-stats flex space-x-4 mt-3 text-gray-600">
        <span className="flex items-center">
          <FaStar className="mr-1 text-yellow-500" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center">
          <FaCodeBranch className="mr-1 text-green-500" /> {repo.forks_count}
        </span>
        <span className="flex items-center">
          <FaEye className="mr-1 text-blue-500" /> {repo.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default RepoItem;
