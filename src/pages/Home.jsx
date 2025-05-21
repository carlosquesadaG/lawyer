import { useState, useEffect, useRef } from "react";
import Fondo from "../assets/fondo.jpg";
// Puedes agregar más imágenes en tu carpeta assets y usarlas aquí
import ImagenLibertad from "../assets/libertad.jpeg";
import ImagenCharla from "../assets/charla.jpeg";
import ImagenDocumento from "../assets/hombre-documento.jpeg";

const testimonios = [
  {
    texto: "Gracias a su asesoría obtuve mi visa sin complicaciones. ¡Muy recomendados!",
    autor: "María G.",
  },
  {
    texto: "Me ayudaron a regularizar mi situación en EE.UU. con profesionalismo y empatía.",
    autor: "Juan P.",
  },
  {
    texto: "Excelente atención y resultados rápidos en mi trámite migratorio.",
    autor: "Carlos L.",
  },
  {
    texto: "El equipo fue muy claro y honesto durante todo el proceso legal.",
    autor: "Ana S.",
  },
  {
    texto: "¡Recomiendo totalmente sus servicios para cualquier trámite migratorio!",
    autor: "Luis F.",
  },
  {
    texto: "Siempre atentos y resolvieron todas mis dudas sobre mi estatus migratorio.",
    autor: "Sofía M.",
  },
  {
    texto: "Profesionales y confiables, los mejores para trámites legales en EE.UU.",
    autor: "Pedro R.",
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const [showTestimonios, setShowTestimonios] = useState(false);
  const testimoniosRef = useRef(null);

  // Carrusel automático de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  // Fade-in al hacer scroll a testimonios
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowTestimonios(true);
      },
      { threshold: 0.3 }
    );
    if (testimoniosRef.current) observer.observe(testimoniosRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero con imagen de fondo */}
      <div className="relative h-[400px] flex items-center justify-center mb-8">
        <img
          src={Fondo}
          alt="Bufete Legal"
          className="absolute inset-0 w-full h-full object-cover opacity-150"
        />
        <div className="absolute inset-0 bg-[#0A2463]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Tu Visa y Trámites Legales en EE.UU.</h1>
          <p className="text-lg mb-4">
            Asesoría legal para extranjeros y latinos que buscan definir su situación migratoria.
          </p>
          <a
            href="https://wa.me/573187652280?text=Hola,%20quiero%20una%20asesoría%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors font-bold"
          >
            AGENDA TU CONSULTA GRATIS
          </a>
        </div>
        {/* Onda decorativa al final del hero */}
        <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px]" preserveAspectRatio="none">
            <path
              d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* Apartado de imagen y texto para servicios */}
      <section className="bg-white py-12 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ImagenLibertad}
            alt="Servicio legal"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-[#0A2463]">Servicios para Extranjeros y Latinos</h2>
          <ul className="list-disc pl-5 text-[#0A2463]">
            <li>Visas de trabajo, estudio y reunificación familiar</li>
            <li>Defensa migratoria y regularización</li>
            <li>Traducción, apostilla y contratos legales</li>
            <li>Asesoría personalizada en español e inglés</li>
          </ul>
        </div>
      </section>

      {/* Apartado de imagen extra (puedes duplicar o quitar según lo que necesites) */}
      <section className="bg-[#f7f7f7] py-12 px-4 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ImagenCharla}
            alt="Atención personalizada"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-[#0A2463]">Atención Personalizada</h2>
          <p className="text-[#0A2463]">
            Nuestro equipo te acompaña en cada paso del proceso legal, resolviendo tus dudas y brindando soluciones efectivas para tu caso.
          </p>
        </div>
      </section>

      {/* Carrusel de Testimonios automático con imagen al costado */}
      <section
        ref={testimoniosRef}
        className={`bg-[#0A2463] text-white py-12 px-4 transition-all duration-1000 ${
          showTestimonios ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Testimonios</h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Imagen al costado del testimonio */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={ImagenDocumento}
              alt="Cliente satisfecho"
              className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-[#D9A404]"
            />
          </div>
          {/* Testimonio */}
          <div className="md:w-2/3 flex flex-col items-center">
            <div className="bg-[#173d7a] rounded-lg p-6 shadow text-center min-h-[120px] flex flex-col justify-center transition-all duration-500 w-full">
              <p className="italic mb-2">"{testimonios[index].texto}"</p>
              <span className="block mt-2 font-bold">- {testimonios[index].autor}</span>
            </div>
            <div className="flex justify-center mt-2 gap-1">
              {testimonios.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full ${i === index ? "bg-[#D9A404]" : "bg-white/30"}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda tu consulta */}
      <section className="bg-[#D9A404] text-[#0A2463] py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para resolver tu situación legal?</h2>
        <p className="mb-6">Agenda tu consulta gratuita y recibe asesoría personalizada.</p>
        <a
          href="https://wa.me/573187652280?text=Hola,%20quiero%20agendar%20una%20consulta%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors font-bold"
        >
          AGENDA POR WHATSAPP
        </a>
      </section>

      {/* Ubicación y contacto con formulario */}
      <section className="relative py-10 px-4 flex items-center justify-center min-h-[300px]">
        <div className="w-full max-w-2xl text-center text-black bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Ubicación</h2>
          <p className="mb-4">Atendemos en línea para toda Latinoamérica y presencial en Miami, FL.</p>
          <div className="flex justify-center mb-4">
            <iframe
              title="Ubicación Miami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.049775888934!2d-80.19179068497122!3d25.76167998362625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69c1b6e7b0d%3A0x9e8a8e8a8e8a8e8a!2sMiami%2C%20FL!5e0!3m2!1ses-419!2sus!4v1685040000000!5m2!1ses-419!2sus"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="mt-6 text-left space-y-4 max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-2 text-center">Contáctanos</h3>
            <div>
              <label className="block font-semibold mb-1" htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A2463] text-white font-bold py-2 rounded hover:bg-[#173d7a] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
          <div className="mt-6">
            <span className="font-bold">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/573187652280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-12">
        <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 100" className="w-full h-[60px]" preserveAspectRatio="none">
            <path
              d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
              fill="#17204a" 
            />
          </svg>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573187652280?text=Hola,%20quiero%20una%20asesoría%20gratuita"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.029 6.988 2.896a9.825 9.825 0 012.893 6.994c-.003 5.455-4.438 9.89-9.894 9.89zm8.413-18.306A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.21 1.615 6.032L.057 24l6.084-1.627a11.888 11.888 0 005.939 1.522h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 00-3.493-8.414z" />
        </svg>
      </a>
    </div>
  );
}

export default Home;
