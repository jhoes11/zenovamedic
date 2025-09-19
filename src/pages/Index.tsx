import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Star, Award, Users, CheckCircle } from "lucide-react";
import facialImage from "@/assets/facial-service.jpg";
import bodyImage from "@/assets/body-service.jpg";
import intimateImage from "@/assets/intimate-service.jpg";
import serumImage from "@/assets/serum-service.jpg";

const Index = () => {
  const featuredServices = [
    {
      title: "Bótox Facial",
      description: "Elimina arrugas de expresión y líneas finas para un rostro más joven y natural.",
      category: "Tratamiento Facial",
      image: facialImage,
      price: "Desde S/ 800"
    },
    {
      title: "CoolSculpting",
      description: "Eliminación de grasa localizada sin cirugía mediante tecnología de criolipólisis.",
      category: "Tratamiento Corporal", 
      image: bodyImage,
      price: "Desde S/ 2,500"
    },
    {
      title: "Rejuvenecimiento Vaginal",
      description: "Mejora la función, estética y bienestar íntimo femenino con tecnología láser.",
      category: "Medicina Íntima",
      image: intimateImage,
      price: "Consultar"
    },
    {
      title: "Suero Antioxidante Premium", 
      description: "Cóctel de vitaminas y antioxidantes para combatir el envejecimiento desde adentro.",
      category: "Sueroterapia",
      image: serumImage,
      price: "Desde S/ 300"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Especialistas Certificados",
      description: "Médicos con certificaciones internacionales y años de experiencia en medicina estética."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Tecnología Avanzada",
      description: "Equipos de última generación y técnicas innovadoras para resultados excepcionales."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atención Personalizada",
      description: "Cada tratamiento es diseñado específicamente para tus necesidades y objetivos."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Resultados Naturales",
      description: "Nos enfocamos en realzar tu belleza natural con resultados armoniosos y duraderos."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      treatment: "Bótox Facial",
      rating: 5,
      comment: "Excelente atención y resultados increíbles. Me siento más segura y radiante."
    },
    {
      name: "Ana Rodríguez", 
      treatment: "CoolSculpting",
      rating: 5,
      comment: "El tratamiento superó mis expectativas. Perdí centímetros sin dolor ni recuperación."
    },
    {
      name: "Carmen Silva",
      treatment: "Rellenos Faciales",
      rating: 5,
      comment: "El Dr. tiene manos de oro. Mis labios se ven naturales y hermosos."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
              Servicios <span className="text-primary">Premium</span>
            </h2>
            <p className="text-luxury max-w-2xl mx-auto fade-in-up">
              Descubre nuestros tratamientos más populares, diseñados para realzar tu belleza natural
              con la más alta tecnología y profesionalismo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-outline-premium text-lg px-8 py-3">
              <a href="/servicios">Ver Todos los Servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir <span className="text-primary">Zenova Medic</span>?
            </h2>
            <p className="text-luxury max-w-2xl mx-auto">
              Nos comprometemos con la excelencia en cada aspecto de tu experiencia con nosotros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-luxury text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestras <span className="text-primary">pacientes</span>
            </h2>
            <p className="text-luxury max-w-2xl mx-auto">
              La satisfacción de nuestras pacientes es nuestro mayor logro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary/10 rounded-xl p-6 border border-border/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-luxury mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-primary text-sm">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Números que nos respaldan
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+5</div>
              <div className="text-white/90">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+500</div>
              <div className="text-white/90">Pacientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Tratamientos disponibles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Profesionales certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Lista para conocer tu <span className="text-primary">mejor versión</span>?
          </h2>
          <p className="text-luxury text-xl mb-8 max-w-2xl mx-auto">
            Agenda tu consulta gratuita y descubre cómo podemos ayudarte a alcanzar 
            todos tus objetivos estéticos de manera segura y profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium text-lg px-8 py-4">
              <a href="https://agendapro.com" target="_blank" rel="noopener noreferrer">
                Agendar Consulta Gratuita
              </a>
            </Button>
            <Button className="btn-outline-premium text-lg px-8 py-4">
              <a href="/contacto">Más Información</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
