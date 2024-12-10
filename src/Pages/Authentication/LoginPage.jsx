import { FcGoogle } from "react-icons/fc";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import toast from "react-hot-toast";
const LoginPage = () => {
  const { signInExistingUsers, signInWithGoogle, user, setEmail } =
    useContext(AuthContext);
  const [signToggle, setSignToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef(null);

  if (user) {
    return <Navigate to={location.state || "/"} />;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInExistingUsers(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Login successful");
        navigate(location.state);
      })
      .catch(() => {
        toast.error("Invalid Credential Email/Password");
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Login successful");
        navigate(location.state);
      })
      .catch(() => {
        toast.error("Google Login failed please try again");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  const handleEmailChange = () => {
    setEmail(emailRef.current.value);
  };
  return (
    <div className="pb-16 mt-16 flex items-center justify-center flex-col">
      <div className="relative bg-white bg-opacity-80 shadow-xl rounded-lg p-8 w-full max-w-md z-10 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mt-2">
            Login to continue your adventure!
          </p>
        </div>

        <form className="" onSubmit={handleLogin}>
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              ref={emailRef}
              placeholder="Enter email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="pb-1 relative">
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

          <div className="flex items-center justify-between pb-6">
            <div>
              <Link
                to="/forget"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#16A34A] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#16A34A] transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-500 text-sm">OR</span>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 gap-3 flex items-center justify-center text-black py-2 px-4 rounded-full border border-[#16A34A]   transition duration-200 bg-white"
          >
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
