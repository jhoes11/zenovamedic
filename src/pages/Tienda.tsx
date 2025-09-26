import ProductCard from "@/components/ProductCard";

const products = [
  // Jabones Sensiderm
  {
    id: 1,
    title: "Jabón Sensiderm Piel Mixta",
    description: "Jabón especializado para piel mixta que equilibra la oleosidad sin resecar.",
    category: "Jabones Sensiderm",
    price: "S/ 60.00"
  },
  {
    id: 2,
    title: "Jabón Sensiderm Ácido Hialurónico",
    description: "Jabón con ácido hialurónico para hidratación profunda y anti-edad.",
    category: "Jabones Sensiderm",
    price: "S/ 60.00"
  },
  {
    id: 3,
    title: "Jabón Sensiderm Clarant B3",
    description: "Jabón despigmentante con niacinamida para unificar el tono de piel.",
    category: "Jabones Sensiderm",
    price: "S/ 60.00"
  },
  {
    id: 4,
    title: "Jabón Sensiderm Piel Grasa",
    description: "Jabón especializado para piel grasa que controla la oleosidad.",
    category: "Jabones Sensiderm",
    price: "S/ 60.00"
  },
  
  // Productos de Cuidado
  {
    id: 5,
    title: "Agua Micelar Sensiderm H2O",
    description: "Agua micelar que limpia, desmaquilla e hidrata en un solo paso.",
    category: "Cuidado Facial",
    price: "S/ 65.00"
  },
  {
    id: 6,
    title: "Serum Retinol",
    description: "Serum anti-edad con retinol para renovación celular y reducción de arrugas.",
    category: "Cuidado Facial",
    price: "S/ 135.00"
  },
  {
    id: 7,
    title: "Serum Resverapiel",
    description: "Serum antioxidante con resveratrol para protección y rejuvenecimiento.",
    category: "Cuidado Facial",
    price: "S/ 135.00"
  },
  {
    id: 8,
    title: "Serum Células Madre",
    description: "Serum regenerador con células madre para renovación y reparación celular.",
    category: "Cuidado Facial",
    price: "S/ 140.00"
  },
  
  // Dermablock
  {
    id: 9,
    title: "Dermablock Despigmentante",
    description: "Protector solar despigmentante para prevenir y tratar manchas.",
    category: "Protección Solar",
    price: "S/ 80.00"
  },
  {
    id: 10,
    title: "Dermablock Age Repair Color",
    description: "Protector solar con color y propiedades anti-edad.",
    category: "Protección Solar",
    price: "S/ 85.00"
  },
  {
    id: 11,
    title: "Dermablock Piel Mixta",
    description: "Protector solar especializado para piel mixta con control de oleosidad.",
    category: "Protección Solar",
    price: "S/ 80.00"
  },
  {
    id: 12,
    title: "Labial FPS 30",
    description: "Protector labial con factor de protección solar 30.",
    category: "Protección Solar",
    price: "S/ 45.00"
  },
  
  // Accesorios
  {
    id: 13,
    title: "Mentonera Talla S",
    description: "Mentonera de compresión post-operatoria talla S.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 70.00"
  },
  {
    id: 14,
    title: "Mentonera Talla M",
    description: "Mentonera de compresión post-operatoria talla M.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 70.00"
  },
  {
    id: 15,
    title: "Mentonera Talla L",
    description: "Mentonera de compresión post-operatoria talla L.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 70.00"
  },
  {
    id: 16,
    title: "Faja Short Talla XS",
    description: "Faja de compresión post-operatoria tipo short talla XS.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 310.00"
  },
  {
    id: 17,
    title: "Faja Short Talla M",
    description: "Faja de compresión post-operatoria tipo short talla M.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 310.00"
  },
  {
    id: 18,
    title: "Faja Short Talla XXL",
    description: "Faja de compresión post-operatoria tipo short talla XXL.",
    category: "Accesorios Post-Operatorios",
    price: "S/ 310.00"
  }
];

const categories = [
  "Todos",
  "Jabones Sensiderm", 
  "Cuidado Facial",
  "Protección Solar",
  "Accesorios Post-Operatorios"
];

const Tienda = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Nuestra Tienda
            </h1>
            <p className="text-luxury text-lg max-w-2xl mx-auto">
              Productos especializados para el cuidado de tu piel y bienestar post-tratamiento
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                category={product.category}
                price={product.price}
              />
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                ¿Necesitas asesoría personalizada?
              </h2>
              <p className="text-luxury mb-6">
                Contáctanos para recibir recomendaciones específicas para tu tipo de piel
              </p>
              <a 
                href="https://wa.me/51986921164?text=Buen%20d%C3%ADa%20%E2%9C%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all hover-lift"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Tienda;