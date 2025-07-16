import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Contact from "@/components/Contact";
import { empanadas, allDaySpecials, drinks, sideOrders, breakfast, magicalFries, mainCourse, pupusas } from "@/data/menuData";
import { 
  Utensils, 
  Coffee, 
  Star, 
  ChefHat, 
  Soup,
  Beef,
  Fish,
  Egg
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main id="menu" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-magical-warm mb-4">Our Magical Menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Latin flavors crafted with love and tradition. 
            Every dish tells a story of heritage and passion.
          </p>
        </div>

        <MenuSection 
          title="Empanadas" 
          items={empanadas} 
          icon={<Utensils className="h-8 w-8" />}
        />

        <MenuSection 
          title="Breakfast" 
          items={breakfast} 
          icon={<Egg className="h-8 w-8" />}
        />

        <MenuSection 
          title="Magical Fries" 
          items={magicalFries} 
          icon={<Star className="h-8 w-8" />}
        />

        <MenuSection 
          title="Main Course" 
          items={mainCourse} 
          icon={<ChefHat className="h-8 w-8" />}
        />

        <MenuSection 
          title="Pupusas" 
          items={pupusas} 
          icon={<Soup className="h-8 w-8" />}
        />

        <MenuSection 
          title="All Day Specials" 
          items={allDaySpecials} 
          icon={<Beef className="h-8 w-8" />}
        />

        <MenuSection 
          title="Side Orders" 
          items={sideOrders} 
          icon={<Fish className="h-8 w-8" />}
        />

        <MenuSection 
          title="Drinks" 
          items={drinks} 
          icon={<Coffee className="h-8 w-8" />}
        />
      </main>

      <Contact />
      
      <footer className="bg-magical-warm text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Magical Sub Shop</p>
          <p className="text-sm opacity-90">© 2024 Magical Sub Shop. All rights reserved.</p>
          <p className="text-sm opacity-90">Bringing you authentic Latin flavors with a magical touch.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
