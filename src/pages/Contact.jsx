import Fondo from "../assets/fondo.jpg";
import Whatsapp from "../components/Whatsapp";

function Contact() {
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
            <h2 className="text-xl font-bold mb-2">Ubicación</h2>
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
            <form className="mt-6 text-left space-y-4 max-w-md mx-auto">
              <h3 className="text-lg font-bold mb-2 text-center">Contáctanos</h3>
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
                <label className="block font-semibold mb-1" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2463]"
                  required
                />
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
            <div className="mt-6">
              <span className="font-bold">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/573187652280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              ></a>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-12">
          <div className="absolute left-0 right-0 bottom-0">
            <svg
              viewBox="0 0 1440 100"
              className="w-full h-[60px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
                fill="#17204a"
              />
            </svg>
          </div>
        </section>

        <Whatsapp></Whatsapp>
      </div>
    </div>
  );
}

export default Contact;
