import Link from "next/link";
import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";
import proyectos from "@/utils/proyectosData";

export default function ProyectosPage() {
  return (
    <>
      <BannerImg
        urlImage="https://www.katemu.com/wp-content/uploads/2019/06/bg-proyect-top.jpg"
        title="Proyectos"
        className="proyectos-banner"
      />
      <section>
        <div className="container proyect_first">
          <div className="row containerBoxes">
            <div className="col-lg-6">
              <span>Proyectos desarrollados por Q&C Revestimientos</span>
              <h3>Conoce nuestros proyectos</h3>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="banner-text">
                <p>
                  Cada proyecto es ejecutado con estrictos controles tecnicos,
                  maquinaria especializada y los mas altos estandares de calidad.
                </p>
                <p>
                  Aplicamos normas internacionales NACE-SSPC en la preparacion
                  de superficies, garantizando resultados duraderos y
                  funcionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container proyect_second">
          <div className="row">
            <div className="col-12">
              <div className="boxService containerBoxes">
                <div className="row">
                  {proyectos.map((project) => (
                    <div key={project.slug} className="col-12 col-sm-12 col-lg-6">
                      <Link href={`/proyectos/${project.slug}`}>
                        <div className="descriptionBox">
                          <div className="hover-proyect-img">
                            <div>
                              <img
                                className={project.rotateRight ? "rotate-right" : ""}
                                src={project.img}
                                alt={project.title}
                              />
                            </div>
                          </div>
                          <div className="description row">
                            <div className="col-9 col-lg-10">
                              <p>{project.title}</p>
                              <span className="locacion">{project.ubication}</span>
                            </div>
                            <div className="col-3 col-lg-2">
                              <img
                                src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/arrow-box.png"
                                alt="Flecha"
                              />
                            </div>
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
