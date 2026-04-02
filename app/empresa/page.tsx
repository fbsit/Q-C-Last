import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";
import Image from "next/image";

export default function EmpresaPage() {
  return (
    <>
      <BannerImg
        urlImage="/assets/empresa/1.jpg"
        title="Empresa"
        backgroundPosition="center 30%"
        className="empresa-banner"
      />
      <section>
        <div className="container about_us_first_container">
          <div className="row mb-4 containerBoxes company-layout">
            <div className="col-lg-8 mb-5">
              <span>Nuestro compromiso con la calidad</span>
              <h3>
                Nuestra trayectoria nos posiciona como referentes en
                revestimientos de pisos en Chile
              </h3>
              <article>
                <p>
                  Con mas de 18 anos de trayectoria en el rubro, nuestra empresa
                  se ha consolidado como un referente en soluciones de
                  revestimiento y pisos de hormigon a nivel nacional. Nuestra
                  experiencia abarca diversos sectores productivos, destacando
                  especialmente en la industria alimentaria, donde los
                  estandares de higiene, seguridad y calidad son especialmente
                  exigentes.
                </p>
                <p>
                  Todas nuestras obras se ejecutan bajo estrictos controles
                  tecnicos y cumplen con las normativas vigentes. Contamos con
                  un equipo humano altamente capacitado, comprometido con la
                  excelencia en cada etapa del trabajo, desde la preparacion de
                  superficies hasta la entrega final.
                </p>
                <p>
                  Nuestros proyectos son cuidadosamente supervisados, evaluados
                  y garantizados. Ademas, ofrecemos servicios de mantencion y
                  restauracion de revestimientos, asegurando asi la prolongacion
                  de la vida util y el rendimiento de las superficies
                  intervenidas.
                </p>
                <p>
                  Uno de nuestros mayores hitos ha sido la intervencion en la
                  planta de Pesquera Orizon S.A., perteneciente al grupo Copec,
                  donde ejecutamos con exito mas de 20.000 m2 de superficie.
                  Este proyecto representa no solo nuestra capacidad tecnica y
                  operativa, sino tambien la confianza que grandes empresas
                  depositan en nuestro trabajo.
                </p>
              </article>
            </div>
            <div className="col-lg-4 mb-5">
              <Image src="/assets/empresa/2.jpg" alt="Equipo Q&C" width={640} height={820} />
            </div>
            <div className="col-12 col-lg-6 mt-5 mission-vision-card">
              <div className="boxVision">
                <span>Vision</span>
                <p>
                  Ser una empresa reconocida a nivel nacional por entregar
                  soluciones de revestimiento industrial confiables, duraderas y
                  adaptadas a cada necesidad, contribuyendo al mantenimiento,
                  seguridad y vida util de las superficies en diversas industrias.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-5 mission-vision-card">
              <div className="boxMision">
                <span>Mision</span>
                <p>
                  Brindar soluciones en revestimientos industriales que respondan
                  de manera eficiente, segura y oportuna a las necesidades
                  especificas de cada cliente, asegurando la calidad del trabajo,
                  la durabilidad de las superficies y el cumplimiento de las
                  normativas tecnicas y de seguridad aplicables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
