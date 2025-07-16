import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-magical-warm mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground">Ready to order? Get in touch with us!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center shadow-warm hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <Phone className="h-8 w-8 text-magical-orange mx-auto mb-2" />
              <CardTitle className="text-magical-warm">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Call to order</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-warm hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <MapPin className="h-8 w-8 text-magical-orange mx-auto mb-2" />
              <CardTitle className="text-magical-warm">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">123 Magic Street</p>
              <p className="text-sm text-muted-foreground">Downtown District</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-warm hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-magical-orange mx-auto mb-2" />
              <CardTitle className="text-magical-warm">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Mon-Sun</p>
              <p className="text-sm text-muted-foreground">7:00 AM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-warm hover:shadow-magical transition-all duration-300">
            <CardHeader>
              <Mail className="h-8 w-8 text-magical-orange mx-auto mb-2" />
              <CardTitle className="text-magical-warm">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">orders@magicalsubshop.com</p>
              <p className="text-sm text-muted-foreground">Email orders</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-magical hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
            onClick={() => window.open('tel:(555)123-4567')}
          >
            Call Now to Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;