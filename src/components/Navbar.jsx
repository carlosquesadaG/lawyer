import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A2463] text-white p-4 font-montserrat shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#D9A404]">
          <Link className="" to="/">
            legalidadsinfronteras.mx
          </Link>
        </h1>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link className="hover:text-[#D9A404] transition-colors" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#D9A404] transition-colors"
              to="/about"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#D9A404] transition-colors"
              to="/services"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#D9A404] transition-colors"
              to="/contact"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
