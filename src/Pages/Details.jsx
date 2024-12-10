import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { detailsData } = useLoaderData();

  const handleMeetingTime = () => {
    const time = new Date();
    const currentHour = time.getHours();
    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      document.getElementById("my_modal").showModal();
    }
  };
  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src={detailsData?.image}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
              {detailsData?.adventureTitle}
            </h1>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About the Adventure</h2>
            <p className="text-gray-700 leading-relaxed">
              {detailsData?.shortDescription}
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Information</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Location:</strong> {detailsData?.location}
                </li>
                <li>
                  <strong>Duration:</strong> {detailsData?.duration}
                </li>
                <li>
                  <strong>Adventure Level:</strong>{" "}
                  {detailsData?.adventureLevel}
                </li>
                <li>
                  <strong>Max Group Size:</strong> {detailsData?.maxGroupSize}
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">
                Eco-Friendly Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {detailsData?.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Included Items</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {detailsData?.includedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Continue to Explore</h2>
            <p className="text-gray-600 mb-4">
              Cost:{" "}
              <span className="font-bold">${detailsData?.adventureCost}</span>{" "}
              per person
            </p>
            <p className="text-gray-600 mb-6">
              Availability:{" "}
              <span
                className={`font-bold ${
                  detailsData?.bookingAvailability
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {detailsData?.bookingAvailability ? "Available" : "Unavailable"}
              </span>
            </p>

            <button
              onClick={handleMeetingTime}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
            >
              Talk with Expert
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Special Instructions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {detailsData?.specialInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center text-center items-center">
            <h3 className="font-bold text-xl">
              Right now, consultation is not available!!!{" "}
            </h3>
            <p className="py-4">
              Please visit us between 10:00 AM and 8:00 PM.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
