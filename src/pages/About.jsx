import Fondo from "../assets/fondo.jpg";
import Whatsapp from "../components/Whatsapp";

function About() {
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
          <h1 className="text-4xl font-bold mb-2">
            APARTADO DE SOBRE NOSOTROS
          </h1>
          <p className="text-lg mb-4">
            Asesoría legal para extranjeros y latinos que buscan definir su
            situación migratoria.
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
    </div>
  );
}

export default About;
