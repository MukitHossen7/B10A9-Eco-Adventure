import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
      profileUpdate({ ...user, displayName: name, photoURL: photo });
      e.target.reset();
      toast.success("Profile updated successfully");
      navigate("/myProfile");
    });
  };
  return (
    <div className="mt-16 pb-16">
      <div className="flex  justify-center items-center ">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Profile
          </h2>
          <form className="space-y-4" onSubmit={handleUpdateProfile}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-700"
                placeholder="Enter Photo URL"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-700"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition duration-200"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
