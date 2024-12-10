import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Scroll from "../components/Scroll/Scroll";
const MainLayouts = () => {
  return (
    <div className="font-inter">
      <Scroll></Scroll>
      <Header></Header>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto  min-h-[calc(100vh-354px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
