import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiLogin, CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      const pageTitle = {
        "/": "Home | ECO_Adventure",
        "/adventure": "All Adventure | ECO_Adventure",
        "/updateProfile": "Update Profile | ECO_Adventure",
        "/myProfile": "My Profile | ECO_Adventure",
        "/login": "Login | ECO_Adventure",
        "/register": "Register | ECO_Adventure",
        "/forget": "Forget Password | ECO_Adventure",
      };

      if (pathname.startsWith("/details/")) {
        const id = pathname.split("/details/")[1];
        return `Details of ${id} | ECO_Adventure`;
      }

      return pageTitle[pathname] || "ECO_Adventure - Explore Adventures";
    };

    document.title = getPageTitle(location.pathname);
  }, [location]);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-5 sticky top-0 z-30  backdrop-blur  bg-white/30 ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/adventure">All Adventure</NavLink>
              {user?.email && (
                <div className="flex flex-col gap-2">
                  <NavLink to="/updateProfile">Update Profile</NavLink>
                  <NavLink to="/myProfile">My Profile</NavLink>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="font-semibold text-lg lg:text-2xl underline">
            <span>ECO</span>
            <span className="text-green-700 ">Adventure</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/adventure">All Adventure</NavLink>

            {user?.email && (
              <div className="flex items-center gap-8">
                <NavLink to="/updateProfile">Update Profile</NavLink>
                <NavLink to="/myProfile">My Profile</NavLink>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-row-reverse gap-2 items-center">
              <Link
                onClick={handleLogOut}
                className="border flex items-center bg-[#16A34A] text-white gap-2 border-gray-400 px-3 lg:px-5 py-2 rounded-lg text-sm lg:text-lg font-medium"
              >
                <CiLogout className="font-bold" />
                LogOut
              </Link>
              <div className="tooltip" data-tip={`${user?.displayName}`}>
                <img
                  className="w-10 h-10 object-cover rounded-full "
                  src={user?.photoURL}
                ></img>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="border bg-[#16A34A] text-white flex items-center gap-2 border-gray-400 px-3 lg:px-5 py-2 rounded-lg text-sm lg:text-lg font-medium"
            >
              <CiLogin className="font-bold" />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
