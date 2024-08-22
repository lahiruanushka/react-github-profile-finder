import React, { useState } from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the number of pages
  const totalPages = Math.ceil(repos.length / itemsPerPage);

  // Slice repos for current page
  const paginatedRepos = repos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="repo-list">
      <h2 className="text-2xl font-bold mb-4">Repositories</h2>
      {paginatedRepos.length > 0 ? (
        <div>
          {paginatedRepos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}

          <div className="pagination mt-4 flex justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No repositories found.</p>
      )}
    </div>
  );
};

export default RepoList;
