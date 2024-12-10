import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { email } = useContext(AuthContext);

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("password reset sent successfully");
        e.target.email.value = "";
        window.open("https://mail.google.com/", "_blank");
      })
      .catch(() => {
        toast.error("Email field is can not be empty");
      });
  };

  return (
    <div className="mt-16 pb-16">
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Reset Password
          </h2>

          <form className="mt-6" onSubmit={handleForgetPassword}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                readOnly
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#16A34A] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#16A34A] transition duration-200"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
