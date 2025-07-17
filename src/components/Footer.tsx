import { Mail, Phone, MapPin, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold">Ameno Estudio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especializados en el diseño y desarrollo de sitios web con carrito de compra 
              y pasarela de pago para pequeñas empresas que quieren crecer online.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@amenoestudio.com" className="hover:text-white transition-colors">
                  info@amenoestudio.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Tiendas Online
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Pasarelas de Pago
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Diseño Responsive
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Desarrollo a Medida
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="#servicios" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#portafolio" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/525512345678" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ameno Estudio. Todos los derechos reservados.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>para pequeñas empresas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;