import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useContext } from "react";
import { ApiContext } from "../../Provider/ApiProvider";

const Banner2 = () => {
  const { adventuresData } = useContext(ApiContext);
  return (
    <div className="w-full h-[300px] lg:h-[500px] mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {adventuresData.map((singleData, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full flex items-center justify-center">
              <div
                className="w-full h-full rounded-xl flex items-center justify-center"
                style={{
                  backgroundImage: `url(${singleData?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundOrigin: "center",
                  backgroundAttachment: "fixed",
                  backgroundClip: "border-box",
                  backgroundBlendMode: "overlay",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="hidden lg:block bg-black bg-opacity-50 text-white p-8 mt-72 rounded-xl text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {singleData?.adventureTitle}
                  </h2>
                  <p className="text-lg">{singleData?.shortDescription}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner2;
