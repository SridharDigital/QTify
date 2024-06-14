import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import MusicCard from "./MusicCard";

const Carousel = ({ albums }) => {
  console.log({ albums });
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
              likes={album.likes}
              follows={album.follows}
              id={album.id}
              toolTipValue={album?.songs?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
