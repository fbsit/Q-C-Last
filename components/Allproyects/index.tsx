"use client";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@/components/Common/Image";
import Link from "next/link";

const AllProyects = () => {

    const featuredProjectFiles = [
        "Fotografía (1).jpg",
        "Fotografía (2).jpg",
        "Fotografía (3).jpg",
        "Fotografía (4).jpg",
        "Fotografía (5).jpg",
    ];

    const banners = featuredProjectFiles.map((file) => ({
        image: {
            web: encodeURI(`/assets/proyectos/${file}`),
        },
    }));

    return (
        <section className="projects-home-section">
            <div className="container descriptionQC">
              <div className="pleft">
                <span>Proyectos</span>
                <div className="row mb-4">
                    <div className="col-12 col-lg-6">
                        <h2>
                         Proyectos destacados {'Q&C'}
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-md-block d-lg-block">
                        <p>
                            Nuestros proyectos son cuidadosamente supervisados, evaluados y garantizados. Trabajamos bajo estrictos controles técnicos aplicando la norma NACE-SSPC, con maquinaria especializada y un equipo altamente capacitado en cada etapa del proceso.
                        </p>
                    </div>
                </div>
              </div>
              <div className="containerBoxes">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            className="featured-projects-swiper"
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            loop={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true, hide: true }}
                            breakpoints={{
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                  },
                        }}
                        >
                            {banners.map((banner, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                    width={2564}
                                    alt="CoverPageLive"
                                    src={banner.image.web}
                                    className="featured-project-img"
                                    layout="intrinsic"
                                    aspectRatio={'1:1'}
                                    priority={index === 0}
                                    />
                                </SwiperSlide>
                            );
                            })}
                        </Swiper>
                    </div>
                </div>
              </div>
              <div className="text-center">
                <Link className="btn-gris" href="/proyectos">Ver todos los proyectos</Link>
              </div>
            </div>
        </section>
    )
}

export default AllProyects;
