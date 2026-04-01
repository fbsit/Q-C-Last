"use client";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@/components/Common/Image";

interface Slider {
  banners: Array<{ image: { web: string; mobile?: string } }>;
}

const SliderRegular = ({ banners }: Slider) => {
  const hasMultiple = banners.length > 1;

  return (
    <div
      className="home-slider margin-bottom-0 marginTopHeader"
      id="home-slider"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={hasMultiple}
        loop={hasMultiple}
        pagination={hasMultiple ? { clickable: true } : false}
        scrollbar={hasMultiple ? { draggable: true, hide: true } : false}
      >
        {banners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
                <Image
                  width={2564}
                  alt="CoverPageLive"
                  src={banner.image.web}
                  className="home-hero-img"
                  layout="intrinsic"
                  aspectRatio={'3:1'}
                  fit={'crop'}
                  priority={index === 0}
                />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderRegular;
