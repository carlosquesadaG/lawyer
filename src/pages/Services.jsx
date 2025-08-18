import Fondo from "../assets/fondo.jpg";
import Ondas from "../components/Ondas";
import Whatsapp from "../components/Whatsapp";

function Services() {
  return (
    <div>
      <div className="relative h-[400px] flex items-center justify-center mb-8">
        <img
          src={Fondo}
          alt="Bufete Legal"
          className="absolute inset-0 w-full h-full object-cover opacity-150"
        />
        <div className="absolute inset-0 bg-[#0A2463]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2 drop-shadow-lg">
            <span className="text-[#D9A404]">🛂</span>
            Servicios Migratorios
          </h1>
          <p className="text-lg mb-4">
            Asesoría legal para extranjeros y latinos que buscan definir su situación migratoria.
          </p>
        </div>
        <Whatsapp />
        {/* Onda decorativa al final del hero */}
        <div className="absolute left-0 right-0 bottom-0">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      {/* Tarjetas de servicios */}
      <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Residencia Permanente */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">🟩</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">Residencia Permanente</h2>
          <p className="text-gray-700 mb-4 text-center">Obtén tu Green Card y asegura tu futuro en EE.UU. Te guiamos en cada paso del proceso.</p>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
        {/* Asilo Político */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">🕊️</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">Asilo Político</h2>
          <p className="text-gray-700 mb-4 text-center">Protección para quienes enfrentan persecución. Conoce requisitos, proceso y beneficios.</p>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
        {/* Visa U */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">🛡️</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">Visa U para Víctimas</h2>
          <p className="text-gray-700 mb-4 text-center">Apoyo a víctimas de delitos. Descubre el proceso, beneficios y cómo proteger a tu familia.</p>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
        {/* DACA */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">🌟</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">DACA</h2>
          <p className="text-gray-700 mb-4 text-center">Información actualizada sobre Acción Diferida, requisitos y proceso de renovación.</p>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
        {/* Perdón Provisional */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">📄</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">Perdón Provisional (I-601A)</h2>
          <p className="text-gray-700 mb-4 text-center">Conoce el proceso, criterios y alternativas para regularizar tu situación migratoria.</p>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
        {/* Otros servicios */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[#0A2463] hover:scale-105 transition">
          <span className="text-4xl mb-2">⚖️</span>
          <h2 className="text-xl font-bold mb-2 text-[#0A2463]">Otros Servicios</h2>
          <ul className="text-gray-700 mb-4 text-left list-disc list-inside">
            <li>Visas de trabajo</li>
            <li>Peticiones familiares</li>
            <li>Naturalización</li>
            <li>Representación en cortes</li>
            <li>Permisos de reingreso</li>
            <li>Defensas contra la deportación</li>
          </ul>
          <a
            href="https://wa.me/12269165794"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-[#D9A404] text-white px-4 py-2 rounded hover:bg-[#b88a03] transition"
          >
            Conoce más
          </a>
        </div>
      </section>
      <Ondas />
    </div>
  );
}

export default Services;
