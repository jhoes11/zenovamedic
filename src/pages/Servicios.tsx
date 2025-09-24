import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import facialImage from "@/assets/facial-service.jpg";
import bodyImage from "@/assets/body-service.jpg";
import intimateImage from "@/assets/intimate-service.jpg";
import serumImage from "@/assets/serum-service.jpg";

const Servicios = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos los servicios" },
    { id: "faciales", name: "Tratamientos Faciales" },
    { id: "corporales", name: "Tratamientos Corporales" },
    { id: "intimos", name: "Medicina Íntima" },
    { id: "sueroterapia", name: "Sueroterapia" }
  ];

  const services = [
    // Faciales
    {
      id: 1,
      title: "Bótox Facial",
      description: "Elimina arrugas de expresión y líneas finas para un rostro más joven y descansado. Resultados naturales que duran hasta 6 meses.",
      category: "faciales",
      image: facialImage,
      price: "Desde S/ 800"
    },
    {
      id: 2,
      title: "Rellenos con Ácido Hialurónico",
      description: "Define y volumiza labios, pómulos y ojeras con resultados inmediatos y naturales usando productos de la más alta calidad.",
      category: "faciales",
      image: facialImage,
      price: "Desde S/ 1,200"
    },
    {
      id: 3,
      title: "Hilos Tensores PDO",
      description: "Lifting facial sin cirugía que estimula la producción de colágeno para un rostro firme y definido.",
      category: "faciales", 
      image: facialImage,
      price: "Desde S/ 1,500"
    },
    {
      id: 4,
      title: "Plasma Rico en Plaquetas",
      description: "Regeneración facial natural que mejora la textura, tono y luminosidad de tu piel usando tu propio plasma.",
      category: "faciales",
      image: facialImage,
      price: "Desde S/ 600"
    },

    // Corporales
    {
      id: 5,
      title: "MELA (Lipotransferencia)",
      description: "Transferencia de grasa autóloga para dar volumen y contorno corporal de forma natural y permanente.",
      category: "corporales",
      image: bodyImage,
      price: "Desde S/ 2,500"
    },
    {
      id: 6,
      title: "Radiofrecuencia Corporal",
      description: "Reafirma y tonifica la piel del cuerpo, reduciendo la flacidez y mejorando la apariencia de la celulitis.",
      category: "corporales",
      image: bodyImage,
      price: "Desde S/ 400"
    },
    {
      id: 7,
      title: "Mesoterapia Corporal",
      description: "Tratamiento personalizado con vitaminas y principios activos para reducir grasa localizada y mejorar la piel.",
      category: "corporales",
      image: bodyImage,
      price: "Desde S/ 350"
    },

    // Íntimos
    {
      id: 8,
      title: "HIFU Íntimo",
      description: "Rejuvenecimiento íntimo femenino con tecnología HIFU para mejorar función, estética y bienestar.",
      category: "intimos",
      image: intimateImage,
      price: "Consultar"
    },
    {
      id: 9,
      title: "Blanqueamiento Íntimo",
      description: "Aclara y unifica el tono de la piel en zonas íntimas de forma segura y efectiva.",
      category: "intimos",
      image: intimateImage,
      price: "Desde S/ 800"
    },

    // Sueroterapia
    {
      id: 10,
      title: "Coctel de Vitaminas Antiestrés",
      description: "Cóctel personalizado de vitaminas y nutrientes para combatir el estrés y revitalizar el organismo.",
      category: "sueroterapia",
      image: serumImage,
      price: "Desde S/ 300"
    },
    {
      id: 11,
      title: "Suero Hidratante Intensivo",
      description: "Hidratación profunda para una piel radiante y saludable, ideal para todo tipo de piel.",
      category: "sueroterapia", 
      image: serumImage,
      price: "Desde S/ 250"
    },
    {
      id: 12,
      title: "Suero Detox",
      description: "Elimina toxinas y revitaliza tu organismo para una piel más luminosa y energía renovada.",
      category: "sueroterapia",
      image: serumImage,
      price: "Desde S/ 350"
    }
  ];

  const filteredServices = activeCategory === "todos" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-xl text-luxury mb-8 fade-in-up max-w-3xl mx-auto">
            Descubre nuestra amplia gama de tratamientos de medicina estética, 
            diseñados para realzar tu belleza natural con los más altos estándares de calidad.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "btn-premium" 
                    : "btn-outline-premium"
                } text-sm`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
                category={categories.find(cat => cat.id === service.category)?.name || ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir Zenova Medic?
            </h2>
            <p className="text-luxury max-w-2xl mx-auto">
              Nos comprometemos con la excelencia en cada tratamiento que realizamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">🏆</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Especialistas Certificados</h3>
              <p className="text-luxury">
                Nuestro equipo cuenta con certificaciones internacionales y años de experiencia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Tecnología Avanzada</h3>
              <p className="text-luxury">
                Utilizamos los equipos más modernos y técnicas innovadoras del mercado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">💎</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Resultados Naturales</h3>
              <p className="text-luxury">
                Nos enfocamos en realzar tu belleza natural con resultados armoniosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Lista para transformar tu belleza?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu consulta personalizada y descubre el tratamiento perfecto para ti.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300">
            <a href="https://agendapro.com" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;