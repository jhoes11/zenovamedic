import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

const ProductCard = ({
  title,
  description,
  category,
  price,
  image
}: ProductCardProps) => {
  const handleContactWhatsApp = () => {
    const message = `Hola! Me interesa el producto: ${title} - ${price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/51986921164?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="card-premium hover-lift group overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute bottom-2 right-2">
          <span className="bg-black/60 text-white px-2 py-0.5 rounded text-[10px]">
            Imágenes referenciales
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-3 text-foreground">{title}</h3>
        <p className="text-luxury text-sm mb-4 line-clamp-3 flex-1">{description}</p>
        
        <div className="space-y-3 mt-auto">
          <div className="text-primary font-bold text-xl text-center">{price}</div>
          <Button 
            size="sm" 
            className="btn-premium text-sm px-6 w-full"
            onClick={handleContactWhatsApp}
          >
            Consultar Producto
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;