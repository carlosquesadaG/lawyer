import Fondo from "../assets/fondo.jpg";
import Ondas from "../components/Ondas";
import Whatsapp from "../components/Whatsapp";
import Swal from "sweetalert2"; 
import emailjs from "emailjs-com";

function Contact() {
  // Nueva función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzz13jn", // Reemplaza con tu Service ID de EmailJS
        "template_pu4qnvl", // Reemplaza con tu Template ID de EmailJS
        e.target,
        "wAObukb5kTuV-crimOIvL6IFKzcFqQ" // Reemplaza con tu Public Key de EmailJS
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarnos. Pronto nos pondremos en contacto contigo.",
          confirmButtonColor: "#0A2463",
        });
        e.target.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
          confirmButtonColor: "#0A2463",
        });
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.5)", // o usa rgba(0,0,0,0.3) para oscurecer
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <section className="relative py-10 px-4 flex items-center justify-center min-h-[300px]">
          <div className="w-full mt-11 max-w-2xl text-center text-black bg-white p-6 rounded-lg shadow-lg bg-opacity-90">
            <h2 className="text-2xl font-bold mb-2 text-[#0A2463]">
              Contáctanos
            </h2>
            <p className="mb-4">
              Atendemos en línea para toda Latinoamérica y presencial en Miami,
              FL.
            </p>
            {/* Información de contacto mejorada */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463]">
                <div className="flex items-center mb-2">
                  <span className="text-[#0A2463] text-xl mr-2">📞</span>
                  <span className="font-bold">Tel. México:</span>
                  <a
                    href="tel:+525512345678"
                    className="ml-2 text-[#0A2463] underline"
                  >
                    +52 55 1234 5678
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-[#0A2463] text-xl mr-2">📱</span>
                  <span className="font-bold">Tel. EE.UU.:</span>
                  <a
                    href="tel:+13051234567"
                    className="ml-2 text-[#0A2463] underline"
                  >
                    +1 305 123 4567
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-green-600 text-xl mr-2">💬</span>
                  <span className="font-bold">WhatsApp:</span>
                  <a
                    href="https://wa.me/573187652280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-green-600 underline"
                  >
                    +1 305 123 4567
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-[#0A2463] text-xl mr-2">✉️</span>
                  <span className="font-bold">Correo:</span>
                  <a
                    href="mailto:info@legalidadsinfronteras.mx"
                    className="ml-2 text-[#0A2463] underline"
                  >
                    contacto@legalidadsinfronteras.mx
                  </a>
                </div>
              </div>
              {/* Horario tipo tarjeta */}
              <div className="flex-1 bg-[#D9A404] bg-opacity-90 rounded-lg shadow p-4 text-white">
                <div className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🕒</span> Horarios de atención
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between border-b border-[#fff7] pb-1">
                    <span>Lunes a Viernes</span>
                    <span>09:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-[#fff7] pb-1">
                    <span>Sábado</span>
                    <span>09:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="italic">Emergencias</span>
                    <span className="italic">24/7 WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Mapa interactivo */}
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
            {/* Formulario de contacto */}
            <form
              className="mt-6 text-left space-y-4 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <h3 className="text-lg font-bold mb-2 text-center">
                Formulario de Contacto
              </h3>
              <div>
                <label className="block font-semibold mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                  // No required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="tipo">
                  Tipo de caso
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="residencia">Residencia Permanente</option>
                  <option value="green-card">Green Card</option>
                  <option value="asilo">Asilo Político</option>
                  <option value="visa-u">Visa U</option>
                  <option value="daca">DACA</option>
                  <option value="perdon">Perdón Provisional</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1" htmlFor="mensaje">
                  Mensaje
                </label>
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
            {/* Política de consultas */}
            <div className="mt-6 text-sm text-gray-700 bg-[#F3F6FB] p-4 rounded-lg border-l-4 border-[#0A2463]">
              <strong>Política de consultas:</strong> La primera consulta es
              gratuita y sin compromiso. Nuestro equipo evaluará tu caso y te
              orientará sobre los siguientes pasos. Para emergencias,
              contáctanos por WhatsApp las 24 horas.
            </div>
          </div>
        </section>
        <Ondas></Ondas>
        <Whatsapp></Whatsapp>
      </div>
    </div>
  );
}

export default Contact;
