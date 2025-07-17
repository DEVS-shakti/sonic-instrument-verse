import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface InstrumentCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const InstrumentCard = ({ 
  id, 
  name, 
  category, 
  price, 
  image, 
  description, 
  featured = false 
}: InstrumentCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-brass' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <Badge className="absolute top-3 right-3 bg-brass text-brass-foreground">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-foreground">{name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};