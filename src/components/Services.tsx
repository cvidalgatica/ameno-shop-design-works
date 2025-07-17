import { ShoppingCart, CreditCard, Smartphone, Palette, Code, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Tiendas Online",
      description: "Desarrollamos e-commerce completos con carrito de compra, gestión de inventario y panel administrativo.",
      features: ["Catálogo de productos", "Carrito de compra", "Gestión de inventario", "Panel de administración"]
    },
    {
      icon: CreditCard,
      title: "Pasarelas de Pago",
      description: "Integramos sistemas de pago seguros y confiables para que tus clientes compren sin complicaciones.",
      features: ["PayPal", "Stripe", "Mercado Pago", "Transferencias bancarias"]
    },
    {
      icon: Smartphone,
      title: "Diseño Responsive",
      description: "Todos nuestros sitios web se adaptan perfectamente a cualquier dispositivo móvil o desktop.",
      features: ["Móvil optimizado", "Tablet friendly", "Desktop perfecto", "Velocidad optimizada"]
    },
    {
      icon: Palette,
      title: "Diseño Personalizado",
      description: "Creamos diseños únicos que reflejan la identidad de tu marca y conectan con tus clientes.",
      features: ["Diseño único", "Identidad de marca", "UX/UI profesional", "Colores corporativos"]
    },
    {
      icon: Code,
      title: "Desarrollo a Medida",
      description: "Desarrollamos funcionalidades específicas según las necesidades particulares de tu negocio.",
      features: ["Funciones personalizadas", "Integraciones API", "Automatizaciones", "Escalabilidad"]
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing",
      description: "Optimizamos tu sitio web para buscadores y te ayudamos a generar más ventas online.",
      features: ["SEO optimizado", "Google Analytics", "Redes sociales", "Email marketing"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de e-commerce para pequeñas empresas que quieren 
            vender online de manera profesional y exitosa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;