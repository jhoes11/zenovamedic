import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  category: string;
}
const ServiceCard = ({
  title,
  description,
  image,
  price,
  category
}: ServiceCardProps) => {
  return <Card className="card-premium hover-lift group overflow-hidden">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-3 text-foreground">{title}</h3>
        <p className="text-luxury text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-3">
          {price && <div className="text-primary font-semibold text-lg text-center">{price}</div>}
          <Button size="sm" className="btn-premium text-sm px-6 w-full">
            <a href="https://zenovamedic.site.agendapro.com/pe" target="_blank" rel="noopener noreferrer" className="my-0 mx-0 px-0 py-0">
              Agendar Cita
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>;
};
export default ServiceCard;