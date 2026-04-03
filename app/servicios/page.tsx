import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";

type ServiceItem = {
  title: string;
  image: string;
  url: string;
  portrait?: boolean;
};

const services: ServiceItem[] = [
  {
    title: "REVESTIMIENTOS EPÓXICOS INDUSTRIALES Y POLIURETANO",
    image: "/assets/servicios/revestimiento3.jpg",
    url: "revestimientos-epoxicos-industriales-y-poliuretano",
  },
  {
    title: "PULIDO DE PISOS SUPERFLOOR",
    image: "/assets/servicios/puli3.png",
    url: "pulido-de-pisos-superfloor",
  },
  {
    title: "APLICACIÓN DE POLIUREA",
    image: "/assets/servicios/poli3.jpg",
    url: "aplicacion-de-poliurea",
    portrait: true,
  },
  {
    title: "REPARACIÓN Y RECUPERACIÓN DE SUPERFICIES",
    image: "/assets/servicios/repa3.jpg",
    url: "reparacion-y-recuperacion-de-superficies",
  },
  {
    title: "IMPERMEABILIZACIÓN DE CUBIERTAS",
    image: "/assets/servicios/imper3.png",
    url: "impermeabilizacion-de-cubiertas",
    portrait: true,
  },
  {
    title: "REVESTIMIENTOS METACRILATOS",
    image: "/assets/servicios/reves4.jpg",
    url: "revestimientos-metacrilatos",
  },
  {
    title: "PULIDO DE PISOS",
    image: "/assets/servicios/pulidos3.jpg",
    url: "pulido-de-pisos",
    portrait: true,
  },
  {
    title: "REVESTIMIENTO DE ESTRUCTURAS",
    image: "/assets/servicios/stru3.jpg",
    url: "revestimiento-de-estructuras",
  },
  {
    title: "PISOS COMERCIALES Y DECORATIVOS",
    image: "/assets/servicios/comer3.jpg",
    url: "pisos-comerciales-y-decorativos",
  },
  {
    title: "PROTECCIÓN TERMOACÚSTICA",
    image: "/assets/servicios/termino3.jpg",
    url: "proteccion-termo-acustica",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <BannerImg
        urlImage="/assets/servicios/1.jpg"
        title="Servicios"
        backgroundPosition="center calc(50% - 50px)"
        className="servicios-banner"
      />
      <section>
        <div className="container services_first">
          <div className="row mb-4 containerBoxes">
            <div className="col-12 col-lg-6">
              <span>Una completa gama de servicios</span>
              <h3>Servicios integrales con respaldo técnico</h3>
            </div>
            <div className="d-none d-lg-block col-lg-6">
              <div className="banner-text">
                <p>
                  Q&C ha incorporado distintas especialidades para ofrecer a
                  nuestros clientes un servicio verdaderamente integral,
                  abarcando todas las etapas de un proyecto.
                </p>
                <p>
                  Desde el diseño y planificación hasta la ejecución,
                  reparación y evaluación final, trabajamos con seriedad y
                  responsabilidad para asegurar resultados concretos y
                  duraderos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container services_second">
          <div className="row">
            <div className="col-12">
              <div className="boxService containerBoxes">
                <div className="row align-items-stretch">
                  {services.map((service) => (
                    <div key={service.url} className="descriptionBox col-12 col-sm-6 col-lg-4">
                      <Link href={`/servicios/${service.url}`} className="containerOrangeBox">
                        <div
                          className={`block-image ${service.portrait ? "block-image--portrait" : ""}`}
                          style={
                            service.portrait
                              ? ({ "--service-bg": `url(${service.image})` } as CSSProperties)
                              : undefined
                          }
                        >
                          <Image
                            className={`service-img ${service.portrait ? "service-img--portrait" : ""}`}
                            src={service.image}
                            alt={service.title}
                            width={860}
                            height={580}
                          />
                        </div>
                        <div className="orangeBox">
                          <h3>{service.title}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
