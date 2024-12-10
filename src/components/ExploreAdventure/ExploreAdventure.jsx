import { Link } from "react-router-dom";
import exploreImg from "../../assets/iceLand.jpg";
import { FaAngleRight } from "react-icons/fa";

const ExploreAdventure = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-14">
      <div className="w-full lg:w-1/2">
        <img
          className="h-96 w-full object-cover rounded-lg"
          src={exploreImg}
        ></img>
      </div>
      <div className="w-full lg:w-1/2 flex  flex-col justify-center">
        <p className="pb-6">
          Join one of our incredible Eco-adventures and learn about how you can
          protect people places and ecosystems through travel. Our trips are
          once in a lifetime journeys to places you may have only dreamed of
          seeing. Now is your chance to live your dreams! Our travel adventures
          for women and student eco-tours are 100% carbon neutral and directly
          support local guides, lodges, and environmental projects in the
          beautiful places we visit. You can also feel free to let us customize
          an eco-experience especially for you, your friends, or your family.
        </p>
        <p className="pb-6 font-medium text-lg">Now the only question is:</p>
        <h3 className="pb-6 font-semibold text-2xl">Are YOU ready to go?</h3>
        <div className="mt-4">
          <Link to="/adventure">
            <button className="px-6 py-3 bg-[#16A34A] text-white rounded-md flex gap-2 items-center">
              {" "}
              Explore All Adventures Eco Tours
              <FaAngleRight className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreAdventure;
