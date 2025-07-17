import { Music, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-wood text-vintage py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brass rounded-lg p-2">
                <Music className="w-6 h-6 text-wood" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RhythmHub</h3>
                <p className="text-sm text-vintage/80">Musical Instruments</p>
              </div>
            </div>
            <p className="text-vintage/90 leading-relaxed">
              Your premier destination for high-quality musical instruments. We've been serving musicians worldwide for over 25 years with passion and expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-vintage hover:text-brass">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-vintage hover:text-brass">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-vintage hover:text-brass">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-vintage hover:text-brass">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brass">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Home</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Catalogue</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Featured Items</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Categories</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">About Us</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brass">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">String Instruments</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Wind Instruments</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Percussion</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Keyboards & Pianos</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Accessories</a></li>
              <li><a href="#" className="text-vintage/90 hover:text-brass transition-colors">Sheet Music</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brass">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-vintage/90">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-vintage/90">
                <Mail className="w-4 h-4" />
                <span>info@rhythmhub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-vintage/90">
                <MapPin className="w-4 h-4" />
                <span>123 Music Street, Harmony City</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-vintage/90">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-vintage/10 border-vintage/30 text-vintage placeholder:text-vintage/60"
                />
                <Button size="sm" className="bg-brass hover:bg-brass/90 text-wood">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vintage/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-vintage/80 text-sm">
              © 2024 RhythmHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-vintage/80 hover:text-brass transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-vintage/80 hover:text-brass transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-vintage/80 hover:text-brass transition-colors">
                Shipping Info
              </a>
              <a href="#" className="text-vintage/80 hover:text-brass transition-colors">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};