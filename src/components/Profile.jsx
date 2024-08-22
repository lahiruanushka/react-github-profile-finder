import React from 'react';
import { FaUsers, FaUserFriends, FaBook } from 'react-icons/fa';

const Profile = ({ userData }) => {
  const { avatar_url, name, bio, followers, following, public_repos } = userData;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-8">
      <div className="flex flex-col items-center">
        <img
          src={avatar_url}
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 text-center mb-4">{bio}</p>
      </div>
      <div className="flex justify-around text-gray-600">
        <div className="flex items-center">
          <FaUsers className="text-xl mr-2" />
          <span>{followers} Followers</span>
        </div>
        <div className="flex items-center">
          <FaUserFriends className="text-xl mr-2" />
          <span>{following} Following</span>
        </div>
        <div className="flex items-center">
          <FaBook className="text-xl mr-2" />
          <span>{public_repos} Repos</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
