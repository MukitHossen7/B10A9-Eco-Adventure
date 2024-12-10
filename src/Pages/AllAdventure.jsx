import { useContext } from "react";
import { ApiContext } from "../Provider/ApiProvider";
import { Link } from "react-router-dom";

const AllAdventure = () => {
  const { adventuresData } = useContext(ApiContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 pb-16">
      {adventuresData.map((item) => (
        <div className=" pb-4" key={item.id}>
          <img
            src={item?.image}
            className="w-full h-64 object-cover rounded-2xl"
          ></img>
          <h3 className="font-bold text-lg lg:text-2xl pt-6">
            {item?.adventureTitle}
          </h3>
          <ul className="list-disc pl-10 text-sm text-gray-500 pt-3 pb-6">
            {item?.ecoFriendlyFeatures.map((detail, idx) => (
              <li className="py-1" key={idx}>
                {detail}
              </li>
            ))}
          </ul>
          <Link
            to={`/details/${item.id}`}
            className="border border-slate-500 py-2 px-6 rounded-full font-semibold "
          >
            Explore Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllAdventure;
