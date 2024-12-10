import { useContext } from "react";
import { ApiContext } from "../../Provider/ApiProvider";
import { FaStar } from "react-icons/fa";

const ClientReview = () => {
  const { clientData } = useContext(ApiContext);
  return (
    <div className="mt-14">
      <h2 className="font-bold mb-7 text-2xl lg:text-4xl text-center animate__animated animate__bounce ">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {clientData.map((client) => (
          <div
            className="border border-slate-300 p-4 rounded-xl"
            key={client.reviewId}
          >
            <div className="flex items-center gap-5">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={client.userImg}
                alt="client_image"
              />
              <h3 className="font-semibold text-lg">
                {client.name.toUpperCase()}
              </h3>
            </div>
            <p className="font-light text-sm pt-5">{`" ${client.review} "`}</p>

            <div className="mt-3">
              {client?.rating && (
                <p className="flex items-center">
                  <span className="ml-2 flex">
                    {Array.from({ length: client.rating }, (_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
