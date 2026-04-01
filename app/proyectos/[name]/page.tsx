import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumb";
import OwnClients from "@/components/OwnClients";
import proyectos from "@/utils/proyectosData";

type Params = {
  params: Promise<{ name: string }>;
};

export default async function ProyectoDetailPage({ params }: Params) {
  const { name } = await params;
  const proyecto = proyectos.find((item) => item.slug === name);

if (!proyecto) {
    return (
      <div className="container marginHeaderBreadcrumbs">
        <h2>Proyecto no encontrado</h2>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs section="proyectos" currentPage={proyecto.title} />
      <section>
        <div className="container">
          <div className="row containerInfo">
            <div className="col-12 col-lg-6">
              <span>{proyecto.ubication}</span>
              <h3>{proyecto.title}</h3>
              <article>
                <p>{proyecto.description}</p>
              </article>
              <div className="boxBeneficios">
                <span>Informacion del proyecto</span>
                <div className="row">
                  <ul>
                    <li>Empresa: Q&C Revestimientos</li>
                    <li>Ubicacion: {proyecto.ubication}</li>
                  </ul>
                </div>
              </div>
              <div className="text-xs-center">
                <Link href="/contacto" className="btn-gris">
                  Solicitar una cotizacion
                </Link>
              </div>
            </div>
            <div className="col-lg-6 gallery-int">
              <div id="panel">
                <a>
                  <img
                    className={proyecto.rotateRight ? "rotate-right" : ""}
                    src={proyecto.img}
                    alt={proyecto.title}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
