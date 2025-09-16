export const initializeMenuHandlers = () => {
  const menu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  if (mobileMenuButton && menu) {
    // Botón para abrir menú móvil
    mobileMenuButton.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  // Función para desplegar submenús en móvil con efecto deslizable
  const toggleSubmenu = (id: string) => {
    const submenu = document.getElementById(id);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  };

  // Obtener todos los botones de submenú
  const submenuButtons = document.querySelectorAll<HTMLButtonElement>('.mobile-menu-item');

  // Añadir un evento a cada botón
  submenuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const submenuId = button.getAttribute('data-submenu');
      if (submenuId) {
        toggleSubmenu(submenuId);
      }
    });
  });

  // Cierra el menú si la pantalla es grande
  const handleResize = () => {
    if (window.innerWidth >= 1024 && menu) {
      menu.classList.remove('show');
    }
  };

  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    if (mobileMenuButton) {
      mobileMenuButton.removeEventListener('click', () => {
        menu?.classList.toggle('show');
      });
    }
    submenuButtons.forEach((button) => {
      button.removeEventListener('click', () => {
        const submenuId = button.getAttribute('data-submenu');
        if (submenuId) {
          toggleSubmenu(submenuId);
        }
      });
    });
    window.removeEventListener('resize', handleResize);
  };
};