"use client";

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@/components/Common/Image";

const OwnClients = () => {

    const banners = [
        '/assets/clientes/c1.png',
        '/assets/clientes/c2.png',
        '/assets/clientes/c3.png',
        '/assets/clientes/c4.png',
        '/assets/clientes/c5.png',
        '/assets/clientes/c6.png',
        '/assets/clientes/c7.png',
        '/assets/clientes/c8.png',
        '/assets/clientes/c9.png',
        '/assets/clientes/c10.png',
        '/assets/clientes/c11.png',
        '/assets/clientes/12.png',
        '/assets/clientes/13.png',
        '/assets/clientes/14.png',
        '/assets/clientes/15.png',
        '/assets/clientes/16.png',
        '/assets/clientes/17.png',
        '/assets/clientes/18.png',
        '/assets/clientes/19.png',
        '/assets/clientes/20.png',
        '/assets/clientes/21.png',
        '/assets/clientes/22.png',
    ]

    return (
        <section>
          <div className="trustQC">
            <div className="container">
                <p className="text-center">Ellos han confiado en {'Q&C'}</p>
                <div className="content-fluid">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
                        className="clients-swiper"
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        autoplay={{ delay: 2200, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true, hide: true }}
                        breakpoints={{
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                    >   
                        {banners.map((banner, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                    width={2564}
                                    alt={`Cliente ${index + 1}`}
                                    src={banner}
                                    className="client-logo-img"
                                    layout="intrinsic"
                                    aspectRatio={'3:1'}
                                    priority={index === 0}
                                    />
                                </SwiperSlide>
                            );
                        })}                      
                    </Swiper>
                </div>
            </div>
          </div>
        </section>
    )
}

export default OwnClients;
