export function Footer() {
  return (
    <footer className="bg-[#0A2463] text-white p-4 font-montserrat shadow-md">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} legalidadsinfronteras. Todos los
          derechos reservados
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white">
            Términos del servicio
          </a>
          <a
            href="mailto:contacto@legalidadsinfronteras.com"
            className="text-gray-400 hover:text-white"
          >
            Contáctanos
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.029 6.988 2.896a9.825 9.825 0 012.893 6.994c-.003 5.455-4.438 9.89-9.894 9.89zm8.413-18.306A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.21 1.615 6.032L.057 24l6.084-1.627a11.888 11.888 0 005.939 1.522h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 00-3.493-8.414z" />
            </svg>
          </a>
          {/* Iconos de redes sociales (puedes reemplazar los SVG por los de tu preferencia) */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            {/* Facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
