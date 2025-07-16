import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative container mx-auto h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Welcome to 
            <span className="block text-magical-gold">Magical Sub Shop</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience authentic Latin flavors with our handcrafted empanadas, 
            fresh pupusas, and magical barbecue specialties
          </p>
          <Button 
            onClick={scrollToMenu}
            size="lg"
            className="bg-gradient-magical hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
          >
            Explore Our Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;