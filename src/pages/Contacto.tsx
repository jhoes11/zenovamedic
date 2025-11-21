import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contacto = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-up">
            <span className="text-primary">Contáctanos</span>
          </h1>
          <p className="text-xl text-luxury mb-8 fade-in-up max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus dudas y ayudarte a dar el primer paso 
            hacia tu mejor versión. ¡Escríbenos!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-luxury">
                      Las Diamelas 471 Santa Victoria
Chiclayo Peru   





               <br />
                      Lambayeque, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-luxury">+51 986 921 164</p>
                    <a target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm" href="https://wa.me/51986921164">
                      Enviar WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Correo electrónico</h3>
                    <p className="text-luxury">zenovamedic@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horarios de atención</h3>
                    <div className="text-luxury space-y-1">
                      <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                      <p>Sábados: 9:00 AM - 8:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-lg mb-3">¿Prefieres agendar directamente?</h3>
                <p className="text-luxury mb-4">
                  Utiliza nuestro sistema de citas en línea para mayor comodidad.
                </p>
                <Button className="btn-premium w-full">
                  <a href="https://zenovamedic.site.agendapro.com/pe" target="_blank" rel="noopener noreferrer">
                    Agendar Cita Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Encuéntranos</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8776453094646!2d-79.84420392460908!3d-6.783333393212051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef1e0f3b6d47%3A0x8e0e0e0e0e0e0e0e!2sLas%20Diamelas%20471%2C%20Chiclayo%2014009%2C%20Peru!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Zenova Medic"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-lg mb-2">¿Necesito cita previa?</h3>
              <p className="text-luxury">
                Sí, trabajamos exclusivamente con citas previas para brindarte la atención personalizada que mereces. 
                Puedes agendar a través de nuestro sistema online o llamándonos directamente.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-lg mb-2">¿Ofrecen consulta gratuita?</h3>
              <p className="text-luxury">
                Sí, la primera consulta de valoración es completamente gratuita. Durante esta cita evaluaremos 
                tus necesidades y diseñaremos un plan de tratamiento personalizado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold text-lg mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-luxury">
                Aceptamos efectivo, tarjetas de débito/crédito y transferencias bancarias. 
                También ofrecemos planes de financiamiento para tratamientos de mayor inversión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contacto;