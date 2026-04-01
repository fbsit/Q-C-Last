"use client";

import { faEnvelopeSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Common/Logo";

const NavDesktop = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <>
    <header id="header" className={`fixed-top menu-nav bg-navbar`}>
      <div className="w-100 navbarTop">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex align-items-center top-contact">
            <div>
              <FontAwesomeIcon 
              width={18}
              color="white" icon={faEnvelopeSquare} />
              <span style={{marginLeft: '5px'}}>epincheira@qyc.cl</span>
            </div>
            <div>
              <FontAwesomeIcon
              width={18}
              color="white" icon={faPhone} />
              <span style={{marginLeft: '5px'}}>+569 6769 1262</span>
            </div>
            </div>
            <div className="col-12 col-lg-6 containerSocialMedia">
              <div className="social-media">
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
          </div>
        </div>
      </div>   
      <nav className={`navbar navbar-expand-lg navbar-dark mt-0`}>
        <div className="container-fluid px-4 f-flex align-items-center">
          <Logo width={96} />
          <button
            className={`navbar-toggler ${!showMenuMobile ? "collapsed" : ""}`}
            type="button"
            onClick={() => {
              setShowMenuMobile(!showMenuMobile);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${showMenuMobile ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link"
                  aria-current="page"
                  onClick={() => setShowMenuMobile(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/empresa" className="nav-link" onClick={() => setShowMenuMobile(false)}>
                  Empresa
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/servicios" className="nav-link" onClick={() => setShowMenuMobile(false)}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/proyectos" className="nav-link" onClick={() => setShowMenuMobile(false)}>
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto" className="nav-link" onClick={() => setShowMenuMobile(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default NavDesktop;
