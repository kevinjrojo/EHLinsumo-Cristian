"use Cliente";

export default function NavbarMovbile() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="h-full w-full bg-background-light dark:bg-background-dark">
        <header className="p-4 flex justify-between items-center">
          <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">
            menu
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Mi Tienda
          </h1>
          <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">
            shopping_bag
          </span>
        </header>
        <main className="p-4">
          <p className="text-gray-700 dark:text-gray-300">
            Contenido principal de la página...
          </p>
        </main>
      </div>
      <div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"></div>
      <div className="absolute left-0 top-0 z-50 h-full w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out">
        <div className="flex h-full flex-col bg-background-light dark:bg-background-dark shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-background-light/50 dark:border-background-dark/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Sophia
            </h2>
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex-grow p-4">
            <ul className="space-y-2">
              <li>
                <a
                  className="flex items-center gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-3 text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">home</span>
                  <span className="font-bold">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">category</span>
                  <span className="font-medium">Categorías</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <span className="font-medium">Carrito</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">person</span>
                  <span className="font-medium">Mi Cuenta</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined">settings</span>
                  <span className="font-medium">Configuración</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-background-light/50 dark:border-background-dark/50">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white font-bold">
              <span className="material-symbols-outlined">logout</span>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
