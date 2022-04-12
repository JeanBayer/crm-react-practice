import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <a
            href="/clientes"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >
            Clientes
          </a>
          <a
            href="/clientes/nuevo"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >
            Nuevo Cliente
          </a>
        </nav>
      </div>
      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
