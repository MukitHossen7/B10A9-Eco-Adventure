import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Link } from "react-router-dom";
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="pb-16 mt-16 flex items-center justify-center flex-col">
      <div className="w-full max-w-3xl bg-white bg-opacity-60 backdrop-blur-md pb-6 shadow-lg rounded-lg overflow-hidden">
        <div className="text-center pt-6 rounded-t-lg">
          <h2 className="text-2xl pb-2 lg:text-3xl font-semibold">
            Welcome, {user?.displayName}
          </h2>
          <p className="text-sm font-light">Discover Your Next Adventure</p>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src={user?.photoURL}
              alt="profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-[#16A34A] shadow-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">
              {user?.displayName}
            </h3>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>

          <div className="text-center">
            <Link
              to="/updateProfile"
              className="px-6 py-3 bg-[#16A34A] text-white font-semibold rounded-lg hover:bg-[#16A34A] shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500-100"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
