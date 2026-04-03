import Link from "next/link";
import Image from "next/image";

const ContainerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer container mt-3">
        <div className="row footer-row">
          <div className="col-12 col-lg-4 text-center text-lg-start footer-brand-col">
            <Image src="/logo/QC-Logo.png" width={148} height={68} alt="Q&C" priority />
            <p className="footer-brand-copy mt-3 mb-0">
              Soluciones de revestimiento y mantenimiento industrial para proyectos de alta exigencia.
            </p>
            <div className="social-media mt-3 mb-3" aria-label="Redes sociales de Q&C">
              <span>Síguenos en</span>
              <a className="ref-icon" href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Image src="/assets/face.png" alt="Facebook" width={13} height={13} />
              </a>
              <a className="ref-icon" href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image src="/assets/ig.png" alt="Instagram" width={13} height={13} />
              </a>
              <a className="ref-icon" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <Image src="/assets/twitter.svg" alt="Twitter" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-lg-start footer-info-col">
            <div className="footer-list">
              <h3>Concepción</h3>
              <ul>
                <li>
                  Janequeo N1650, Concepción, Biobío, Chile
                </li>
                <li>
                  <a href="tel:+56412222222">+56 967691262</a>
                </li>
              </ul>
            </div> 
          </div>
          <div className="col-lg-2 col-12 footer-cta-col">
            <div className="footer-list footer-nav-list">
              <h3>Explorar</h3>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/servicios">Servicios</Link></li>
                <li><Link href="/proyectos">Proyectos</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="row p-0 mt-3">
              <div className="col-12 text-center text-lg-start align-items-center justify-content-center">
                <Link className="btn-orange mt-2" href="/proyectos">
                  Ver proyectos destacados
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="black-line text-center">
        <p>
          {"Q&C Revestimientos"} (c) {currentYear}
          <br />
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default ContainerFooter;
