"use client";

import { faEnvelopeSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Common/Logo";

const NavDesktop = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/empresa", label: "Empresa" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

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
          </div>
        </div>
      </div>   
      <nav className="navbar navbar-expand-lg navbar-dark mt-0 navbar-main">
        <div className="container-fluid px-4 f-flex align-items-center navbar-shell">
          <div className="navbar-brand-wrap">
            <Logo width={82} />
          </div>
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
            className={`collapse navbar-collapse navbar-collapse-shell ${showMenuMobile ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end navbar-links">
              {links.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive(link.href) ? "is-active" : ""}`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setShowMenuMobile(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item nav-item--cta">
                <Link href="/contacto" className="btn-orange btn-orange--sm" onClick={() => setShowMenuMobile(false)}>
                  Cotizar
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
