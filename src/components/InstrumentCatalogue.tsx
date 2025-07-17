import { useState } from "react";
import { InstrumentCard } from "./InstrumentCard";
import { instruments } from "@/data/instruments";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Music } from "lucide-react";

export const InstrumentCatalogue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);
  
  const categories = ["All", "String", "Wind", "Percussion", "Keyboard"];
  
  const filteredInstruments = instruments.filter(instrument => {
    const matchesSearch = instrument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instrument.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || instrument.category === selectedCategory;
    const matchesFeatured = !showFeatured || instrument.featured;
    
    return matchesSearch && matchesCategory && matchesFeatured;
  });
  
  const featuredInstruments = instruments.filter(instrument => instrument.featured);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-brass text-brass-foreground">
              <Music className="w-4 h-4 mr-2" />
              Featured Collection
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Handpicked Favorites
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular instruments, carefully selected by our experts for their exceptional quality and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInstruments.map((instrument) => (
              <InstrumentCard key={instrument.id} {...instrument} />
            ))}
          </div>
        </div>
        
        {/* Full Catalogue */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Instrument Catalogue
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of premium musical instruments from world-renowned brands.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search instruments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
              
              <Button
                variant={showFeatured ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFeatured(!showFeatured)}
                className="whitespace-nowrap"
              >
                <Filter className="w-4 h-4 mr-1" />
                Featured Only
              </Button>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredInstruments.length} of {instruments.length} instruments
            </p>
          </div>
          
          {/* Instrument Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredInstruments.map((instrument) => (
              <InstrumentCard key={instrument.id} {...instrument} />
            ))}
          </div>
          
          {/* No Results */}
          {filteredInstruments.length === 0 && (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No instruments found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};