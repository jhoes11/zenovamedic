import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

// Import all service-specific images
import hydraexpressImg from "@/assets/services/hydraexpress.jpg";
import veloColagenoImg from "@/assets/services/velo-colageno.jpg";
import hydrafacial7dImg from "@/assets/services/hydrafacial-7d.jpg";
import hydrafacial9dImg from "@/assets/services/hydrafacial-9d.jpg";
import hydralipImg from "@/assets/services/hydralip.jpg";
import prpFacialImg from "@/assets/services/prp-facial.jpg";
import hifuFacialImg from "@/assets/services/hifu-facial.jpg";
import nctfImg from "@/assets/services/nctf.jpg";
import pinkGlowImg from "@/assets/services/pink-glow.jpg";
import mesoterapiaBtxImg from "@/assets/services/mesoterapia-btx.jpg";
import botoxImg from "@/assets/services/botox.jpg";
import exosomasImg from "@/assets/services/exosomas.jpg";
import lipopapadaImg from "@/assets/services/lipopapada.jpg";
import radiesseImg from "@/assets/services/radiesse.jpg";
import rinomodelacionImg from "@/assets/services/rinomodelacion.jpg";
import perfectLipsImg from "@/assets/services/perfect-lips.jpg";
import rellenoMentonImg from "@/assets/services/relleno-menton.jpg";
import hifuCorporalImg from "@/assets/services/hifu-corporal.jpg";
import abdomenFlancosImg from "@/assets/services/abdomen-flancos.jpg";
import protocoloAfroditaImg from "@/assets/services/protocolo-afrodita.jpg";
import protocoloCleopatraImg from "@/assets/services/protocolo-cleopatra.jpg";
import protocoloVeranoImg from "@/assets/services/protocolo-verano.jpg";
import prpManosImg from "@/assets/services/prp-manos.jpg";
import melaImg from "@/assets/services/mela.jpg";
import drenajesImg from "@/assets/services/drenajes.jpg";
import protocoloCapilarImg from "@/assets/services/protocolo-capilar.jpg";
import hifuIntimoImg from "@/assets/services/hifu-intimo.jpg";
import vitaminasAntiestresImg from "@/assets/services/vitaminas-antiestres.jpg";
import glutationImg from "@/assets/services/glutation.jpg";
import vitaminaCImg from "@/assets/services/vitamina-c.jpg";

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
      image: hydraexpressImg
    },
    {
      id: 2,
      title: "VELO DE COLÁGENO",
      description: "Mascarilla de colágeno que aporta firmeza y elasticidad instantánea a la piel.",
      category: "faciales",
      image: veloColagenoImg
    },
    {
      id: 3,
      title: "HYDRAFACIAL 7D",
      description: "Limpieza profunda de 7 pasos que exfolia, extrae e hidrata para una piel radiante.",
      category: "faciales",
      image: hydrafacial7dImg
    },
    {
      id: 4,
      title: "HYDRAFACIAL 9D",
      description: "Tratamiento avanzado de 9 pasos para rejuvenecer y revitalizar profundamente la piel.",
      category: "faciales",
      image: hydrafacial9dImg
    },
    {
      id: 5,
      title: "HYDRALIP",
      description: "Hidratación y volumización de labios para un aspecto natural y seductor.",
      category: "faciales",
      image: hydralipImg
    },
    {
      id: 6,
      title: "PRP FACIAL",
      description: "Plasma Rico en Plaquetas para regeneración natural y rejuvenecimiento facial.",
      category: "faciales",
      image: prpFacialImg
    },
    {
      id: 7,
      title: "HIFU Facial (2 SESIONES)",
      description: "Ultrasonido focalizado de alta intensidad para lifting facial sin cirugía.",
      category: "faciales",
      image: hifuFacialImg
    },
    {
      id: 8,
      title: "NCTF",
      description: "Biorevitalización con ácido hialurónico y complejo polivitamínico.",
      category: "faciales",
      image: nctfImg
    },
    {
      id: 9,
      title: "PINK GLOW",
      description: "Tratamiento que aporta luminosidad y brillo rosado natural a la piel.",
      category: "faciales",
      image: pinkGlowImg
    },
    {
      id: 10,
      title: "MESOTERAPIA BTX DMAE",
      description: "Mesoterapia con toxina botulínica y DMAE para rejuvenecer y tensar la piel.",
      category: "faciales",
      image: mesoterapiaBtxImg
    },
    {
      id: 11,
      title: "BOTOX 1 ZONA",
      description: "Aplicación de botox en una zona específica para eliminar arrugas de expresión.",
      category: "faciales",
      image: botoxImg
    },
    {
      id: 12,
      title: "BOTOX 2 ZONAS",
      description: "Tratamiento con botox en dos zonas para resultados más completos.",
      category: "faciales",
      image: botoxImg
    },
    {
      id: 13,
      title: "BOTOX (3 ZONAS)",
      description: "Aplicación completa de botox en tres zonas para máximos resultados.",
      category: "faciales",
      image: botoxImg
    },
    {
      id: 14,
      title: "EXOSOMAS FACIALES",
      description: "Tecnología avanzada de exosomas para regeneración celular profunda.",
      category: "faciales",
      image: exosomasImg
    },
    {
      id: 15,
      title: "LIPOPAPADA CON ENZIMAS",
      description: "Eliminación de grasa en papada utilizando enzimas liporreductoras.",
      category: "faciales",
      image: lipopapadaImg
    },
    {
      id: 16,
      title: "RADIESSE (1 VIAL)",
      description: "Relleno con hidroxiapatita cálcica para estimular colágeno natural.",
      category: "faciales",
      image: radiesseImg
    },
    {
      id: 17,
      title: "RADIESSE (2 VIALES)",
      description: "Tratamiento avanzado con 2 viales de Radiesse para resultados óptimos.",
      category: "faciales",
      image: radiesseImg
    },
    {
      id: 18,
      title: "RADIESSE (3 VIALES)",
      description: "Tratamiento completo con 3 viales para máxima volumización y firmeza.",
      category: "faciales",
      image: radiesseImg
    },
    {
      id: 19,
      title: "RINOMODELACION",
      description: "Remodelación nasal no quirúrgica con ácido hialurónico.",
      category: "faciales",
      image: rinomodelacionImg
    },
    {
      id: 20,
      title: "PERFECT LIPS",
      description: "Perfilado y volumización de labios para una sonrisa perfecta.",
      category: "faciales",
      image: perfectLipsImg
    },
    {
      id: 21,
      title: "RELLENO DE MENTON",
      description: "Definición y proyección del mentón con rellenos dérmicos.",
      category: "faciales",
      image: rellenoMentonImg
    },

    // Corporales
    {
      id: 22,
      title: "HIFU CORPORAL",
      description: "Ultrasonido focalizado para reafirmar y tonificar el cuerpo.",
      category: "corporales",
      image: hifuCorporalImg
    },
    {
      id: 23,
      title: "PROTOCOLO ABDOMEN Y FLANCOS (5 SESIONES)",
      description: "Plan completo de 5 sesiones para reducir grasa abdominal y flancos.",
      category: "corporales",
      image: abdomenFlancosImg
    },
    {
      id: 24,
      title: "PROTOCOLO AFRODITA (5 SESIONES)",
      description: "Protocolo de 5 sesiones para contornear la figura femenina.",
      category: "corporales",
      image: protocoloAfroditaImg
    },
    {
      id: 25,
      title: "PROTOCOLO CLEOPATRA (4 SESIONES)",
      description: "Tratamiento de 4 sesiones inspirado en la belleza egipcia.",
      category: "corporales",
      image: protocoloCleopatraImg
    },
    {
      id: 26,
      title: "PROTOCOLO VERANO 10 SESIONES",
      description: "Plan intensivo de 10 sesiones para preparar el cuerpo para el verano.",
      category: "corporales",
      image: protocoloVeranoImg
    },
    {
      id: 27,
      title: "PRP DORSO DE MANOS",
      description: "Rejuvenecimiento de manos con Plasma Rico en Plaquetas.",
      category: "corporales",
      image: prpManosImg
    },
    {
      id: 28,
      title: "MELA (1 ZONA)- Sin Drenaje",
      description: "Lipotransferencia en una zona para contornear el cuerpo naturalmente.",
      category: "corporales",
      image: melaImg
    },
    {
      id: 29,
      title: "MELA (2 ZONA)- Sin Drenaje",
      description: "Lipotransferencia en dos zonas para resultados más completos.",
      category: "corporales",
      image: melaImg
    },
    {
      id: 30,
      title: "MELA (3 ZONA)- Sin Drenaje",
      description: "Lipotransferencia completa en tres zonas corporales.",
      category: "corporales",
      image: melaImg
    },
    {
      id: 31,
      title: "Paquete de drenajes 10 Sesiones",
      description: "Plan de 10 sesiones de drenaje linfático post-operatorio.",
      category: "corporales",
      image: drenajesImg
    },
    {
      id: 32,
      title: "Paquete de drenajes 15 Sesiones",
      description: "Plan de 15 sesiones de drenaje linfático para óptimos resultados.",
      category: "corporales",
      image: drenajesImg
    },
    {
      id: 33,
      title: "Paquete de drenajes 20 Sesiones",
      description: "Plan completo de 20 sesiones de drenaje linfático especializado.",
      category: "corporales",
      image: drenajesImg
    },
    {
      id: 34,
      title: "PROTOCOLO CAPILAR (5 sesiones)",
      description: "Tratamiento de 5 sesiones para fortalecimiento y crecimiento capilar.",
      category: "corporales",
      image: protocoloCapilarImg
    },

    // Íntimos
    {
      id: 35,
      title: "HIFU INTIMO",
      description: "Rejuvenecimiento íntimo femenino con tecnología HIFU para mejorar función y estética.",
      category: "intimos",
      image: hifuIntimoImg
    },

    // Sueroterapia
    {
      id: 36,
      title: "COCTEL DE VITAMINAS ANTIESTRES",
      description: "Cóctel personalizado de vitaminas para combatir el estrés y revitalizar el organismo.",
      category: "sueroterapia",
      image: vitaminasAntiestresImg
    },
    {
      id: 37,
      title: "GLUTATION",
      description: "Antioxidante maestro que mejora la piel y fortalece el sistema inmune.",
      category: "sueroterapia",
      image: glutationImg
    },
    {
      id: 38,
      title: "VITAMINA C",
      description: "Potente antioxidante que ilumina la piel y fortalece las defensas.",
      category: "sueroterapia",
      image: vitaminaCImg
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
            <a href="https://zenovamedic.site.agendapro.com/pe" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;