import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const RegistrationPage = () => {
  const [signToggle, setSignToggle] = useState(false);
  const {
    createSignUpNewUsers,
    updateUserProfile,
    signInWithGoogle,
    user,
    setRefetch,
  } = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState("");
  const [isTerms, setIsTerms] = useState("");
  const navigate = useNavigate();

  const minLength = /.{6,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;

  if (user) {
    return <Navigate to="/" />;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setPasswordError("");
    setIsTerms("");
    const validatePassword = (password) => {
      if (!minLength.test(password)) {
        return "Password should be at least 6 characters long";
      }
      if (!hasUpperCase.test(password)) {
        return "Uppercase letter include must to the password";
      }
      if (!hasLowerCase.test(password)) {
        return "Lowercase letter include must to the password";
      }
      return "";
    };
    const errorMessage = validatePassword(password);
    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }
    if (!terms) {
      setIsTerms("Check our terms and conditions");
      return;
    }
    createSignUpNewUsers(email, password)
      .then(() => {
        e.target.reset();
        navigate("/");
        toast.success("Registration successful");
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setRefetch(Date.now());
        });
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };
  const handleSignUpGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast.success("Google Register successful");
      })
      .catch(() => {
        toast.error("Google Register failed please try again");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  return (
    <div className="pb-16 mt-16 flex items-center justify-center flex-col ">
      <div className="relative bg-white bg-opacity-80 shadow-xl rounded-lg p-8 w-full max-w-lg z-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Join the Adventure
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mt-2">
            Create an account and start exploring eco-friendly experiences
            today!
          </p>
        </div>

        <form className="" onSubmit={handleRegister}>
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="pb-3 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={signToggle ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <button
              type="button"
              className="absolute -top-3"
              onClick={handleToggleSignBtn}
            >
              {" "}
              {signToggle ? (
                <FaEyeSlash className="absolute right-2 top-12 text-xl" />
              ) : (
                <IoEyeSharp className="absolute right-2 top-12 text-xl" />
              )}
            </button>
          </div>
          <span
            className={`font-bold text-xs text-red-500 ${
              passwordError ? "" : "hidden"
            }`}
          >
            {passwordError}
          </span>
          <div className="form-control ">
            <label className="cursor-pointer label  justify-start gap-3">
              <input
                type="checkbox"
                name="terms"
                className="checkbox  w-5 h-5"
              />
              <p className="text-xs font-medium ">
                You agree to the{" "}
                <span className="text-sky-500 text-sm underline">
                  Terms of Services
                </span>{" "}
                and{" "}
                <span className="text-sky-500 text-sm underline">
                  Privacy Policy
                </span>
              </p>
            </label>
          </div>
          <span
            className={`font-bold text-xs text-red-500 ${
              isTerms ? "" : "hidden"
            }`}
          >
            {isTerms}
          </span>
          <button
            type="submit"
            className="w-full bg-[#16A34A] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#16A34A] transition duration-200 mt-7"
          >
            Register
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-500 text-sm">OR</span>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleSignUpGoogle}
            className="flex-1 gap-3 flex items-center justify-center text-black py-2 px-4 rounded-full border border-[#16A34A]   transition duration-200 bg-white"
          >
            <FcGoogle className="text-2xl" />
            Register with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
