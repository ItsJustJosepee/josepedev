"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    const mobileMenuButton = document.getElementById("mobile-menu-button");

    if (mobileMenuButton && menu) {
      mobileMenuButton.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    }

    const toggleSubmenu = (id: string) => {
      const submenu = document.getElementById(id);
      if (submenu) submenu.classList.toggle("show");
    };

    const submenuButtons = document.querySelectorAll<HTMLButtonElement>(
      ".mobile-menu-item"
    );
    submenuButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const submenuId = button.getAttribute("data-submenu");
        if (submenuId) toggleSubmenu(submenuId);
      });
    });

    const handleResize = () => {
      if (window.innerWidth >= 1024 && menu) {
        menu.classList.remove("show");
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          {/* Logo y menú principal */}
          <div className="logo">
            <Image
              src="/favicon.ico"
              alt="Logo de Josepe Dev"
              width={32}
              height={32}
              className="h-8 w-8 object-cover"
            />
            <span>Josepe Dev</span>
          </div>

          {/* MENU SECCIONES */}
          <div className="menu">
            <div className="menu-item">
              <Link href="/" className="menu-button">
                Inicio
              </Link>
            </div>
            <div className="menu-item">
              <button className="menu-button">Proyectos de Código</button>
              <div className="submenu w-60">
                <Link href="/jmusic" className="submenu-item">
                  Joseph Music
                </Link>
                <Link href="/jnav" className="submenu-item">
                  Navegador Josepe
                </Link>
                <Link href="/jchat" className="submenu-item">
                  Joseph Chat
                </Link>
              </div>
            </div>
          </div>

          {/* Botón para menú móvil */}
          <button id="mobile-menu-button" className="mobile-menu-button">
            ☰
          </button>
        </div>

        {/* MENU MOVIL SECCIONES */}
        <div id="mobile-menu" className="mobile-menu">
          <div>
            <Link href="/" className="mobile-menu-item">
              Inicio
            </Link>
          </div>
          <div>
            <button className="mobile-menu-item" data-submenu="submenu1">
              Proyectos de Código
            </button>
            <div id="submenu1" className="mobile-submenu">
              <Link href="/jmusic" className="mobile-submenu-item">
                Joseph Music
              </Link>
              <Link href="/jnav" className="mobile-submenu-item">
                Navegador Josepe
              </Link>
              <Link href="/jchat" className="mobile-submenu-item">
                Joseph Chat
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
