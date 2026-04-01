"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import OwnClients from "@/components/OwnClients";
import servicios from "@/utils/serviciosData";

export default function ServicioDetailPage() {
  const params = useParams<{ name: string }>();
  const servicio = servicios.find((item) => item.slug === params.name);
  const defaultImage =
    "https://revestimientosqyc.cl/wp-content/uploads/2018/06/1.-REVESTIMIENTOS-DE-PISOS-2.jpg";
  const detailImages = useMemo(
    () =>
      servicio?.images && servicio.images.length > 0
        ? servicio.images
        : [defaultImage],
    [servicio],
  );
  const [activeImage, setActiveImage] = useState(detailImages[0]);

  useEffect(() => {
    setActiveImage(detailImages[0]);
  }, [detailImages]);

  if (!servicio) {
    return (
      <div className="container marginHeaderBreadcrumbs">
        <h2>Servicio no encontrado</h2>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs section="servicios" currentPage={servicio.title} />
      <section>
        <div className="container containerInfo service-detail-container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-8">
              <span>Q&C Revestimientos</span>
              <h3>{servicio.title}</h3>
              <h4>{servicio.subtitle}</h4>
              <article>
                {servicio.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
              <div className="boxBeneficios">
                <span>Beneficios</span>
                <div className="row">
                  <ul>
                    {servicio.beneficios.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-xs-center">
                <Link href="/contacto" className="btn-gris">
                  Solicitar una cotizacion
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 gallery-int">
              <div id="panel" className="panel">
                <a>
                  <img src={activeImage} alt={servicio.title} />
                </a>
              </div>
              <div id="imagenPequena-int" className="d-flex">
                {detailImages.map((image, index) => (
                  <div key={image} className="containerImagen">
                    <div className="cajaImg">
                      <a
                        onClick={(event) => {
                          event.preventDefault();
                          setActiveImage(image);
                        }}
                      >
                        <img src={image} alt={`${servicio.title} ${index + 1}`} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <OwnClients />
    </>
  );
}
