import Link from "next/link";
import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";

const services = [
  {
    title: "REVESTIMIENTOS EPOXICOS INDUSTRIALES Y POLIURETANO",
    image: "/assets/servicios/revestimiento3.jpg",
    url: "revestimientos-epoxicos-industriales-y-poliuretano",
  },
  {
    title: "PULIDO DE PISOS SUPERFLOOR",
    image: "/assets/servicios/puli3.png",
    url: "pulido-de-pisos-superfloor",
  },
  {
    title: "APLICACION DE POLIUREA",
    image: "/assets/servicios/poli3.jpg",
    url: "aplicacion-de-poliurea",
  },
  {
    title: "REPARACION Y RECUPERACION DE SUPERFICIES",
    image: "/assets/servicios/repa3.jpg",
    url: "reparacion-y-recuperacion-de-superficies",
  },
  {
    title: "IMPERMEABILIZACION DE CUBIERTAS",
    image: "/assets/servicios/imper3.png",
    url: "impermeabilizacion-de-cubiertas",
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
    title: "PROTECCION TERMO-ACUSTICA",
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
              <h3>Servicios integrales con respaldo tecnico</h3>
            </div>
            <div className="d-none d-lg-block col-lg-6">
              <div className="banner-text">
                <p>
                  Q&C ha incorporado distintas especialidades para ofrecer a
                  nuestros clientes un servicio verdaderamente integral,
                  abarcando todas las etapas de un proyecto.
                </p>
                <p>
                  Desde el diseno y planificacion hasta la ejecucion,
                  reparacion y evaluacion final, trabajamos con seriedad y
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
                <div className="row">
                  {services.map((service) => (
                    <div key={service.url} className="descriptionBox col-12 col-sm-6 col-lg-4">
                      <Link href={`/servicios/${service.url}`} className="containerOrangeBox">
                        <div className="block-image">
                          <img className="service-img" src={service.image} alt={service.title} />
                        </div>
                        <div className="orangeBox row">
                          <div className="col-12">
                            <h3>{service.title}</h3>
                          </div>
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
