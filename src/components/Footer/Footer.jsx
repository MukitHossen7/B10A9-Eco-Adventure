import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/facebook.png";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center bg-green-700/25  p-10">
        <nav className="">
          <aside className="pb-4">
            <Link to="/" className="font-semibold text-lg lg:text-3xl ">
              <span>ECO</span>
              <span className="text-green-700 ">Adventure</span>
            </Link>
          </aside>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/adventure">All Adventure</Link>
            <Link to="/updateProfile">Update Profile</Link>
            <Link to="/myProfile">My Profile</Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/MukitHossen7" target="_blank">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img className="w-8 h-8 object-cover" src={fbIcon}></img>
            </a>
            <a href="https://www.x.com" target="_blank">
              <RiTwitterXFill className="text-3xl" />
            </a>
          </div>

          <div className="">
            <p className="text-sm pt-7">
              © 2026 Eco-Adventure Experiences. All rights reserved.
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
