import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import MusicCard from "./MusicCard";

const Carousel = ({ albums }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        // className="mySwiper"
        slidesPerView={7}
        spaceBetween={20}
      >
        {albums?.map((album) => (
          <SwiperSlide>
            <MusicCard
              key={album.id}
              image={album.image}
              title={album.title}
              likes={album.follows}
              id={album.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
