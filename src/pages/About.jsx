import Libertad from "../assets/libertad.jpeg";
import Ondas from "../components/Ondas";
import Whatsapp from "../components/Whatsapp";

function About() {
  return (
    <div>
      <div className="relative h-[400px] flex items-center justify-center mb-8">
        <img
          src={Libertad}
          alt="Bufete Legal"
          className="absolute inset-0 w-full h-full object-cover opacity-150"
        />
        <div className="absolute inset-0 bg-[#0A2463]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2 drop-shadow-lg">
            {/* Puedes usar un ícono de react-icons */}
            <span className="text-[#D9A404]">⚖️</span>
            Sobre Nosotros
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#D9A404] to-[#0A2463] rounded-full mb-3"></div>
          <p className="text-lg mb-4 italic">
            Comprometidos con tu tranquilidad y el futuro de tu familia.
          </p>
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
        <Whatsapp></Whatsapp>
      </div>
      {/* Sección Quiénes Somos */}
      <section className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-10">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">
          ¿Quiénes Somos?
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Historia del bufete</h3>
          <p>
            Legalidad Sin Fronteras nació de la visión personal de su fundador,
            quien, tras años de experiencia trabajando en ambos lados de la
            frontera, decidió ayudar a familias separadas por cuestiones
            migratorias. Nuestro compromiso con la comunidad latina nos ha
            permitido crecer y convertirnos en un referente regional, siempre
            guiados por la empatía y el deseo de transformar vidas.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Misión</h3>
          <p>
            En Legalidad Sin Fronteras estamos comprometidos a proporcionar
            soluciones migratorias efectivas y accesibles para familias latinas,
            combinando experiencia legal con profunda empatía y entendimiento
            cultural, con el objetivo de transformar el estatus migratorio de
            nuestros clientes, reunificar familias y proteger sus derechos en
            ambos lados de la frontera.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Visión</h3>
          <p>
            Ser reconocidos como el bufete legal más confiable y efectivo en
            asuntos migratorios en la frontera México-Estados Unidos,
            innovando constantemente en nuestros métodos legales y expandiendo
            nuestro impacto para crear caminos legales donde otros no los ven.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463]">
              <span className="text-2xl mr-3">⭐</span>
              <div>
                <strong>Integridad absoluta:</strong>
                <div>Transparencia en cada proceso y decisión.</div>
              </div>
            </div>
            <div className="flex items-start bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463]">
              <span className="text-2xl mr-3">🎓</span>
              <div>
                <strong>Excelencia profesional:</strong>
                <div>Actualización constante en leyes migratorias.</div>
              </div>
            </div>
            <div className="flex items-start bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463]">
              <span className="text-2xl mr-3">🤝</span>
              <div>
                <strong>Empatía y comprensión:</strong>
                <div>Reconocemos el lado humano de cada caso.</div>
              </div>
            </div>
            <div className="flex items-start bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463]">
              <span className="text-2xl mr-3">💡</span>
              <div>
                <strong>Accesibilidad:</strong>
                <div>Ofrecemos soluciones adaptadas a cada situación económica.</div>
              </div>
            </div>
            <div className="flex items-start bg-[#F3F6FB] rounded-lg shadow p-4 border-l-4 border-[#0A2463] sm:col-span-2">
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <strong>Resultados tangibles:</strong>
                <div>Nuestro éxito se mide en familias reunidas y sueños realizados.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ondas></Ondas>
    </div>
  );
}

export default About;
