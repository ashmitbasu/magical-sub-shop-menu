import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  icon?: React.ReactNode;
}

const MenuSection = ({ title, items, icon }: MenuSectionProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center space-x-3 mb-6">
        {icon && <div className="text-magical-orange">{icon}</div>}
        <h3 className="text-3xl font-bold text-magical-warm">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="shadow-warm hover:shadow-magical transition-all duration-300 hover:scale-105 border-magical-cream">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold text-magical-warm">{item.name}</CardTitle>
                <span className="text-xl font-bold text-magical-orange">{item.price}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80 leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;