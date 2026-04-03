import BannerImg from "@/components/BannerImg";
import OwnClients from "@/components/OwnClients";
import ProjectGallery from "@/components/ProjectGallery";
import { readdir } from "node:fs/promises";
import path from "node:path";

const getProjectGalleryImages = async () => {
  const directory = path.join(process.cwd(), "public", "assets", "proyectos");
  const files = await readdir(directory);

  return files
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => {
      const aMatch = a.match(/\((\d+)\)/);
      const bMatch = b.match(/\((\d+)\)/);
      const aNum = aMatch ? Number(aMatch[1]) : 0;
      const bNum = bMatch ? Number(bMatch[1]) : 0;

      if (aNum !== bNum) {
        return aNum - bNum;
      }

      return a.localeCompare(b, "es");
    })
    .map((file) => ({
      file,
      src: encodeURI(`/assets/proyectos/${file}`),
    }));
};

export default async function ProyectosPage() {
  const galleryImages = await getProjectGalleryImages();

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
                  Cada proyecto es ejecutado con estrictos controles técnicos,
                  maquinaria especializada y los más altos estándares de calidad.
                </p>
                <p>
                  Aplicamos normas internacionales NACE-SSPC en la preparación
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
          <div className="containerBoxes project-gallery">
            <ProjectGallery images={galleryImages} />
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
