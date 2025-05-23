import { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUserTie,
  FaGavel,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import Fondo from "../assets/fondo.jpg";
// Puedes agregar más imágenes en tu carpeta assets y usarlas aquí
import ImagenLibertad from "../assets/libertad.jpeg";
import ImagenCharla from "../assets/charla.jpeg";
import ImagenDocumento from "../assets/hombre-documento.jpeg";
import Whatsapp from "../components/Whatsapp";
import Ondas from "../components/Ondas";

const testimonios = [
  {
    texto:
      "Gracias a su asesoría obtuve mi visa sin complicaciones. ¡Muy recomendados!",
    autor: "María G.",
    rating: 5,
  },
  {
    texto:
      "Me ayudaron a regularizar mi situación en EE.UU. con profesionalismo y empatía.",
    autor: "Juan P.",
    rating: 4,
  },
  {
    texto: "Excelente atención y resultados rápidos en mi trámite migratorio.",
    autor: "Carlos L.",
    rating: 5,
  },
  {
    texto: "El equipo fue muy claro y honesto durante todo el proceso legal.",
    autor: "Ana S.",
    rating: 4,
  },
  {
    texto:
      "¡Recomiendo totalmente sus servicios para cualquier trámite migratorio!",
    autor: "Luis F.",
    rating: 5,
  },
  {
    texto:
      "Siempre atentos y resolvieron todas mis dudas sobre mi estatus migratorio.",
    autor: "Sofía M.",
    rating: 5,
  },
  {
    texto:
      "Profesionales y confiables, los mejores para trámites legales en EE.UU.",
    autor: "Pedro R.",
    rating: 5,
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const [showTestimonios, setShowTestimonios] = useState(false);
  const testimoniosRef = useRef(null);
  const whatsappRef = useRef(null);

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

  // Detecta si la sección de ubicación está visible
  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {}, {
      threshold: 0.5,
    });
    if (whatsappRef.current) observer.observe(whatsappRef.current);
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
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <FaGavel className="inline text-[#D9A404]" /> Tu Visa y Trámites
            Legales en EE.UU.
          </h1>
          <p className="text-lg mb-4 flex items-center justify-center gap-2">
            Asesoría legal para extranjeros y latinos que buscan definir su
            situación migratoria.{" "}
            <FaUserTie className="inline text-[#0A2463]" />
          </p>
          <a
            href="https://wa.me/573187652280?text=Hola,%20quiero%20una%20asesoría%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors font-bold flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> AGENDA TU CONSULTA GRATIS
          </a>
        </div>
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
          <h2 className="text-2xl font-bold mb-4 text-[#0A2463] flex items-center gap-2">
            Servicios para Extranjeros y Latinos <FaGavel />
          </h2>
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
          <h2 className="text-2xl font-bold mb-4 text-[#0A2463] flex items-center gap-2">
            Atención Personalizada <FaUserTie />
          </h2>
          <p className="text-[#0A2463]">
            Nuestro equipo te acompaña en cada paso del proceso legal,
            resolviendo tus dudas y brindando soluciones efectivas para tu caso.
          </p>
        </div>
      </section>

      {/* Carrusel de Testimonios automático con imagen al costado */}
      <section
        ref={testimoniosRef}
        className={`bg-[#0A2463] text-white py-12 px-4 transition-all duration-1000 ${
          showTestimonios
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          Testimonios <FaStar className="text-yellow-400" />
        </h2>
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
              <span className="block mt-2 font-bold flex flex-col items-center gap-1">
                <span className="flex items-center justify-center gap-2">
                  - {testimonios[index].autor}
                  <span className="flex items-center ml-2">
                    {[...Array(testimonios[index].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </span>
                </span>
              </span>
            </div>
            <div className="flex justify-center mt-2 gap-1">
              {testimonios.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-2 rounded-full ${
                    i === index ? "bg-[#D9A404]" : "bg-white/30"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda tu consulta */}
      <section className="bg-[#D9A404] text-[#0A2463] py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          ¿Listo para resolver tu situación legal?{" "}
          <FaCheckCircle className="text-green-600" />
        </h2>
        <p className="mb-6">
          Agenda tu consulta gratuita y recibe asesoría personalizada.
        </p>
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
        <div className="w-full max-w-2xl text-center text-black bg-white p-6 rounded-lg shadow-lg relative">
          <h2 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            Ubicación <FaMapMarkerAlt className="text-red-600" />
          </h2>
          <p className="mb-4">
            Atendemos en línea para toda Latinoamérica y presencial en Miami,
            FL.
          </p>
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
          <div className="mt-6 relative flex justify-center">
            <span
              ref={whatsappRef}
              className="font-bold flex items-center gap-2 relative"
              style={{ zIndex: 2 }}
            >
              WhatsApp:{" "}
              <a
                href="https://wa.me/573187652280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline flex items-center gap-1"
              >
                <FaWhatsapp />
              </a>
            </span>
            {/* Flecha animada eliminada */}
          </div>
        </div>
      </section>
      <Ondas></Ondas>
      {/* Botón flotante de WhatsApp */}
      <Whatsapp></Whatsapp>
    </div>
  );
}

export default Home;
