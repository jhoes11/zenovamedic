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
      title: "HYDRAEXPRESS",
      description: "Tratamiento facial express que hidrata y revitaliza la piel en tiempo récord.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 80.00",
      promoPrice: "S/ 59.00"
    },
    {
      id: 2,
      title: "VELO DE COLÁGENO",
      description: "Mascarilla de colágeno que aporta firmeza y elasticidad instantánea a la piel.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 70.00",
      promoPrice: "S/ 49.00"
    },
    {
      id: 3,
      title: "HYDRAFACIAL 7D",
      description: "Limpieza profunda de 7 pasos que exfolia, extrae e hidrata para una piel radiante.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 120.00",
      promoPrice: "S/ 89.00"
    },
    {
      id: 4,
      title: "HYDRAFACIAL 9D",
      description: "Tratamiento avanzado de 9 pasos para rejuvenecer y revitalizar profundamente la piel.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 170.00",
      promoPrice: "S/ 139.00"
    },
    {
      id: 5,
      title: "HYDRALIP",
      description: "Hidratación y volumización de labios para un aspecto natural y seductor.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 160.00",
      promoPrice: "S/ 129.00"
    },
    {
      id: 6,
      title: "PRP FACIAL",
      description: "Plasma Rico en Plaquetas para regeneración natural y rejuvenecimiento facial.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 200.00",
      promoPrice: "S/ 160.00"
    },
    {
      id: 7,
      title: "HIFU Facial (2 SESIONES)",
      description: "Ultrasonido focalizado de alta intensidad para lifting facial sin cirugía.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 800.00",
      promoPrice: "S/ 550.00"
    },
    {
      id: 8,
      title: "NCTF",
      description: "Biorevitalización con ácido hialurónico y complejo polivitamínico.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 600.00",
      promoPrice: "S/ 490.00"
    },
    {
      id: 9,
      title: "PINK GLOW",
      description: "Tratamiento que aporta luminosidad y brillo rosado natural a la piel.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 500.00",
      promoPrice: "S/ 390.00"
    },
    {
      id: 10,
      title: "MESOTERAPIA BTX DMAE",
      description: "Mesoterapia con toxina botulínica y DMAE para rejuvenecer y tensar la piel.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 300.00",
      promoPrice: "S/ 229.00"
    },
    {
      id: 11,
      title: "BOTOX 1 ZONA",
      description: "Aplicación de botox en una zona específica para eliminar arrugas de expresión.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 370.00",
      promoPrice: "S/ 350.00"
    },
    {
      id: 12,
      title: "BOTOX 2 ZONAS",
      description: "Tratamiento con botox en dos zonas para resultados más completos.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 750.00",
      promoPrice: "S/ 600.00"
    },
    {
      id: 13,
      title: "BOTOX (3 ZONAS)",
      description: "Aplicación completa de botox en tres zonas para máximos resultados.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 1,100.00",
      promoPrice: "S/ 890.00"
    },
    {
      id: 14,
      title: "EXOSOMAS FACIALES",
      description: "Tecnología avanzada de exosomas para regeneración celular profunda.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 900.00",
      promoPrice: "S/ 750.00"
    },
    {
      id: 15,
      title: "LIPOPAPADA CON ENZIMAS",
      description: "Eliminación de grasa en papada utilizando enzimas liporreductoras.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 1,150.00",
      promoPrice: "S/ 990.00"
    },
    {
      id: 16,
      title: "RADIESSE (1 VIAL)",
      description: "Relleno con hidroxiapatita cálcica para estimular colágeno natural.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 1,100.00",
      promoPrice: "S/ 990.00"
    },
    {
      id: 17,
      title: "RADIESSE (2 VIALES)",
      description: "Tratamiento avanzado con 2 viales de Radiesse para resultados óptimos.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 2,000.00",
      promoPrice: "S/ 1,750.00"
    },
    {
      id: 18,
      title: "RADIESSE (3 VIALES)",
      description: "Tratamiento completo con 3 viales para máxima volumización y firmeza.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 3,000.00",
      promoPrice: "S/ 2,650.00"
    },
    {
      id: 19,
      title: "RINOMODELACION",
      description: "Remodelación nasal no quirúrgica con ácido hialurónico.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 990.00",
      promoPrice: "S/ 890.00"
    },
    {
      id: 20,
      title: "PERFECT LIPS",
      description: "Perfilado y volumización de labios para una sonrisa perfecta.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 790.00",
      promoPrice: "S/ 690.00"
    },
    {
      id: 21,
      title: "RELLENO DE MENTON",
      description: "Definición y proyección del mentón con rellenos dérmicos.",
      category: "faciales",
      image: facialImage,
      originalPrice: "S/ 890.00",
      promoPrice: "S/ 790.00"
    },

    // Corporales
    {
      id: 22,
      title: "HIFU CORPORAL",
      description: "Ultrasonido focalizado para reafirmar y tonificar el cuerpo.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 800.00",
      promoPrice: "S/ 550.00"
    },
    {
      id: 23,
      title: "PROTOCOLO ABDOMEN Y FLANCOS (5 SESIONES)",
      description: "Plan completo de 5 sesiones para reducir grasa abdominal y flancos.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 900.00",
      promoPrice: "S/ 750.00"
    },
    {
      id: 24,
      title: "PROTOCOLO AFRODITA (5 SESIONES)",
      description: "Protocolo de 5 sesiones para contornear la figura femenina.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 900.00",
      promoPrice: "S/ 750.00"
    },
    {
      id: 25,
      title: "PROTOCOLO CLEOPATRA (4 SESIONES)",
      description: "Tratamiento de 4 sesiones inspirado en la belleza egipcia.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 1,000.00",
      promoPrice: "S/ 890.00"
    },
    {
      id: 26,
      title: "PROTOCOLO VERANO 10 SESIONES",
      description: "Plan intensivo de 10 sesiones para preparar el cuerpo para el verano.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 1,650.00",
      promoPrice: "S/ 1,390.00"
    },
    {
      id: 27,
      title: "PRP DORSO DE MANOS",
      description: "Rejuvenecimiento de manos con Plasma Rico en Plaquetas.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 140.00",
      promoPrice: "S/ 110.00"
    },
    {
      id: 28,
      title: "MELA (1 ZONA)- Sin Drenaje",
      description: "Lipotransferencia en una zona para contornear el cuerpo naturalmente.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 4,900.00",
      promoPrice: "S/ 4,300.00"
    },
    {
      id: 29,
      title: "MELA (2 ZONA)- Sin Drenaje",
      description: "Lipotransferencia en dos zonas para resultados más completos.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 6,500.00",
      promoPrice: "S/ 5,900.00"
    },
    {
      id: 30,
      title: "MELA (3 ZONA)- Sin Drenaje",
      description: "Lipotransferencia completa en tres zonas corporales.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 7,500.00",
      promoPrice: "S/ 6,900.00"
    },
    {
      id: 31,
      title: "Paquete de drenajes 10 Sesiones",
      description: "Plan de 10 sesiones de drenaje linfático post-operatorio.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 1,300.00",
      promoPrice: "S/ 1,000.00"
    },
    {
      id: 32,
      title: "Paquete de drenajes 15 Sesiones",
      description: "Plan de 15 sesiones de drenaje linfático para óptimos resultados.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 1,900.00",
      promoPrice: "S/ 1,400.00"
    },
    {
      id: 33,
      title: "Paquete de drenajes 20 Sesiones",
      description: "Plan completo de 20 sesiones de drenaje linfático especializado.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 2,400.00",
      promoPrice: "S/ 1,850.00"
    },
    {
      id: 34,
      title: "PROTOCOLO CAPILAR (5 sesiones)",
      description: "Tratamiento de 5 sesiones para fortalecimiento y crecimiento capilar.",
      category: "corporales",
      image: bodyImage,
      originalPrice: "S/ 950.00",
      promoPrice: "S/ 750.00"
    },

    // Íntimos
    {
      id: 35,
      title: "HIFU INTIMO",
      description: "Rejuvenecimiento íntimo femenino con tecnología HIFU para mejorar función y estética.",
      category: "intimos",
      image: intimateImage,
      originalPrice: "S/ 700.00",
      promoPrice: "S/ 490.00"
    },

    // Sueroterapia
    {
      id: 36,
      title: "COCTEL DE VITAMINAS ANTIESTRES",
      description: "Cóctel personalizado de vitaminas para combatir el estrés y revitalizar el organismo.",
      category: "sueroterapia",
      image: serumImage,
      originalPrice: "S/ 260.00",
      promoPrice: "S/ 250.00"
    },
    {
      id: 37,
      title: "GLUTATION",
      description: "Antioxidante maestro que mejora la piel y fortalece el sistema inmune.",
      category: "sueroterapia",
      image: serumImage,
      originalPrice: "S/ 200.00",
      promoPrice: "S/ 169.00"
    },
    {
      id: 38,
      title: "VITAMINA C",
      description: "Potente antioxidante que ilumina la piel y fortalece las defensas.",
      category: "sueroterapia",
      image: serumImage,
      originalPrice: "S/ 200.00",
      promoPrice: "S/ 169.00"
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
                originalPrice={service.originalPrice}
                promoPrice={service.promoPrice}
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