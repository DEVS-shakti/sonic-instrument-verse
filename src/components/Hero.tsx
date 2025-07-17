import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Star, ShoppingCart, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage via-background to-vintage/20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-brass text-brass-foreground px-4 py-2 text-sm font-semibold">
            <Music className="w-4 h-4 mr-2" />
            Premium Musical Instruments
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Discover Your
            <span className="text-primary block">Perfect Sound</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of premium musical instruments. From classical guitars to professional synthesizers, find the perfect instrument to express your musical passion.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              <Star className="w-5 h-5 mr-2" />
              Featured Items
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Premium Instruments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Happy Musicians</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};