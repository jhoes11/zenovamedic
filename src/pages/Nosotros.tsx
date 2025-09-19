import { CheckCircle, Award, Users, Heart } from "lucide-react";

const Nosotros = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Pasión por la excelencia",
      description: "Cada tratamiento es realizado con el más alto estándar de calidad y dedicación personalizada."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Enfoque personalizado",
      description: "Entendemos que cada persona es única, por eso diseñamos tratamientos a medida de tus necesidades."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Tecnología avanzada",
      description: "Utilizamos los equipos más modernos y técnicas innovadoras en medicina estética."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Resultados garantizados",
      description: "Nuestro compromiso es brindarte la mejor versión de ti mismo con resultados naturales y duraderos."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            Conoce <span className="text-primary">Zenova Medic</span>
          </h1>
          <p className="text-xl text-luxury mb-8 fade-in-up max-w-3xl mx-auto">
            Somos más que una clínica de medicina estética. Somos tu aliado en el camino hacia 
            la mejor versión de ti mismo, combinando ciencia, arte y tecnología de vanguardia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-luxury">
                <p>
                  Zenova Medic nace en Chiclayo con la visión de revolucionar la medicina estética 
                  en el norte del Perú, ofreciendo tratamientos de clase mundial con un enfoque 
                  personalizado y resultados excepcionales.
                </p>
                <p>
                  Nuestro equipo está formado por especialistas certificados con años de experiencia 
                  en medicina estética, dermatología y cirugía plástica, comprometidos con la 
                  excelencia y la innovación continua.
                </p>
                <p>
                  En Zenova Medic, creemos que la belleza es personal y única. Por eso, cada 
                  tratamiento es diseñado específicamente para realzar tu belleza natural y 
                  ayudarte a sentirte segura y radiante.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "En Zenova Medic, no solo transformamos apariencias, 
                  transformamos vidas. Cada sonrisa de satisfacción de 
                  nuestros pacientes nos motiva a seguir innovando."
                </blockquote>
                <cite className="text-primary font-semibold">
                  - Dra. María González, Directora Médica
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-luxury max-w-2xl mx-auto">
              Los pilares que guían nuestro compromiso con la excelencia y el cuidado personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-luxury">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+5</div>
              <div className="text-luxury">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <div className="text-luxury">Pacientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-luxury">Tratamientos disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-luxury">Profesionales certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Lista para conocer tu mejor versión?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu consulta personalizada y descubre cómo podemos ayudarte a alcanzar tus objetivos estéticos.
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

export default Nosotros;