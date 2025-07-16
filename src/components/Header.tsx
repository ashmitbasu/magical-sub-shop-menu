import { Sparkles, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-magical text-primary-foreground shadow-magical">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 animate-magical-glow" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Magical Sub Shop</h1>
              <p className="text-sm opacity-90">Authentic Latin Flavors</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Magic Street</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;