import AllProyects from "@/components/Allproyects";
import AreaExpert from "@/components/AreaExpert";
import DescriptionQC from "@/components/DescriptionQC";
import SliderRegular from "@/components/Common/Slider/sliderRegular";
import OwnClients from "@/components/OwnClients";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-spacer" />
      <section className="home-hero">
        <SliderRegular
          banners={[
            {
              image: {
                web: "/assets/home-banner.jpeg",
                mobile: "/assets/home-banner.jpeg",
              },
            },
          ]}
        />
        <div className="home-hero__overlay" />
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">Q&C Revestimientos</p>
            <h1>Superficies industriales que perduran, operan y destacan.</h1>
            <p>
              Diseñamos y ejecutamos soluciones de pavimentos y revestimientos, con enfoque en la continuidad
              operacional, la seguridad y una calidad certificada.
            </p>
            <div className="home-hero__actions">
              <Link className="btn-orange" href="/contacto">
                Solicitar evaluación
              </Link>
              <Link className="btn-gris" href="/proyectos">
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AreaExpert />
      <DescriptionQC />
      <AllProyects />
      <OwnClients />
    </div>
  );
}
