import { ExternalLink, ShoppingCart, Globe, FileText, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portafolio1 from "@/assets/portafolio1.png";
import portafolio2 from "@/assets/portafolio2.png";
import portafolio3 from "@/assets/portafolio3.png";
import portafolio4 from "@/assets/portafolio4.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Imprenta Atenas",
      category: "E-commerce",
      description: "Sitio web para empresa de servicios de imprenta.",
      image: portafolio1,
      icon: ShoppingCart,
      technologies: ["Wordpress", "Woocommerce", "Webpay"],
      features: ["Carrito de compra", "Integración Webpay"]
    },
    {
      title: "Megalabs",
      category: "Sitio Corporativo",
      description: "Sitio web para empresa de una farmacéutica de Latinoamérica con visión global enfocada en la producción de soluciones terapéuticas seguras confiables y accesibles. Colaboración para D8.",
      image: portafolio2,
      icon: Globe,
      technologies: ["Wordpress"],
      features: ["Sitio autoadministrable", "Blog corporativo"]
    },
    {
      title: "Box Solution",
      category: "E-commerce",
      description: "Sitio web para empresa que ofrece soluciones de agua caliente, climatización y ferretería. Colaboración para D8.",
      image: portafolio3,
      icon: ShoppingCart,
      technologies: ["Wordpress", "Woocommerce", "Webpay"],
      features: ["Sitio autoadministrable", "Blog corporativo", "Carrito de compra", "Integración Webpay"]
    },
    {
      title: "Medical Growth",
      category: "Landing Page",
      description: "Sitio web para empresa que ofrece una solución integral que incorpore marketing digital, automatización de procesos y seguimiento post-consulta para mejorar la conversión, la lealtad y la retención de pacientes en el sector salud.",
      image: portafolio4,
      icon: Heart,
      technologies: ["Wordpress"],
      features: ["Sitio autoadministrable"]
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes. 
            Cada proyecto es único y diseñado especialmente para cada negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover bg-white border-gray-200 shadow-lg overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group"
                  onClick={() => {
                    // Aquí puedes agregar la lógica para mostrar más detalles o abrir el proyecto
                    console.log(`Ver detalles de ${project.title}`);
                  }}
                >
                  Ver Detalles
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Quieres ver más proyectos o discutir tu idea?</p>
          <Button 
            className="btn-gradient"
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Conversemos sobre tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;