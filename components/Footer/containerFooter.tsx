import Link from "next/link";

const ContainerFooter = () => {

  return (
    <footer>
      <div className="footer container mt-3">
        <div className="row">
          <div className="col-12 col-lg-3 text-center">
            <img src="/logo/QC-Logo.png" width={140} alt="Q&C" />
            <div className="social-media mt-3 mb-3">
              <span>Siguenos en</span>
              <a className="ref-icon" target="_blank" rel="noreferrer">
                <img src="/assets/face.png" alt="Facebook" />
              </a>
              <a className="ref-icon" target="_blank" rel="noreferrer">
                <img src="/assets/ig.png" alt="Instagram" />
              </a>
              <a className="ref-icon" target="_blank" rel="noreferrer">
                <img width={20} src="/assets/twitter.svg" alt="Twitter" />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <div className="footer-list mt-2">
              <h3>Concepcion</h3>
              <ul>
                <li>
                  Janequeo N1650, Concepcion, Biobio, Chile
                </li>
              </ul>
            </div> 
          </div>
          <div className="col-6 col-lg-3 text-center">
            <div className="footer-list mt-2">
              <h3>Chile</h3>
              <ul>
                <li>
                  Camino de la Colina 1455, Huechuraba, Santiago - Chile
                </li>
              </ul>
            </div> 
          </div>
          <div className="col-lg-3 col-12 mt-3">
            <div className="row p-0">
              <div className="col-12 text-center align-items-center justify-content-center">
                <Link className="btn-orange mt-2" href="/proyectos">
                  Ver todos los proyectos
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="black-line text-center">
        <p>
          {"Q&C Revestimientos"} (c) 2026
          <br />
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default ContainerFooter;
