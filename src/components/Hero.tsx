import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zenova Medic - Clínica médico estética de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="absolute bottom-2 right-2">
          <span className="bg-black/60 text-white px-2 py-0.5 rounded text-[10px]">
            Imágenes referenciales
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <img 
            src={logo} 
            alt="Zenova Medic Logo" 
            className="w-64 md:w-80 mx-auto mb-0.5"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Tu mejor versión</span>
            <span className="block text-primary">comienza aquí</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Descubre la excelencia en medicina estética con los tratamientos más innovadores y personalizados en Chiclayo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-premium text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              <a href="https://zenovamedic.site.agendapro.com/pe" target="_blank" rel="noopener noreferrer">
                Agenda tu Cita
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="btn-outline-premium text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              Conoce Nuestros Servicios
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">+5</div>
            <div className="text-sm opacity-90">Años de experiencia</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">+500</div>
            <div className="text-sm opacity-90">Pacientes satisfechos</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm opacity-90">Profesional certificado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;