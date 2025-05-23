import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A2463] text-white p-4 font-montserrat shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#D9A404] hover:scale-105 transition">
          <Link to="/">legalidadsinfronteras.mx</Link>
        </h1>
        {/* Botón hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block h-1 w-6 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Menú principal */}
        <ul className={`flex-col md:flex-row flex gap-6 text-sm md:text-base absolute md:static top-16 left-0 w-full md:w-auto bg-[#0A2463] md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden"} md:flex`}>
          <li>
            <Link className="hover:text-[#D9A404] transition-colors" to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#D9A404] transition-colors" to="/about" onClick={() => setMenuOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#D9A404] transition-colors" to="/services" onClick={() => setMenuOpen(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#D9A404] transition-colors" to="/contact" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
