import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scissors, 
  Layers, 
  Ruler, 
  Wrench, 
  Truck, 
  Shield, 
  PencilRuler,
  Sparkles,
  Palette,
  Eraser,
  Wind,
  Factory,
  Square,  // Used for Mirror-related services as a placeholder
  Lightbulb, // Used for LED Integration
  Hammer, // Used for Antique Mirror Treatment
  ClipboardList, // Used for Commercial Maintenance
  Droplet
} from "lucide-react";

const services = [
  {
    title: "Custom Cutting",
    description: "Precision cutting services for any glass type and size with computer-controlled equipment.",
    icon: Scissors
  },
  {
    title: "Glass Processing",
    description: "Advanced processing including tempering, lamination, and edge working.",
    icon: Layers
  },
  {
    title: "Glass Design",
    description: "Custom glass designs with intricate patterns and artistic elements.",
    icon: PencilRuler
  },
  {
    title: "Glass Etching",
    description: "Professional etching services for decorative and functional purposes.",
    icon: Eraser
  },
  {
    title: "Sand Blasting",
    description: "Creating frosted and textured glass surfaces with precision sand blasting.",
    icon: Wind
  },
  {
    title: "Decorative Glass",
    description: "Artistic glass solutions including painted, printed, and textured designs.",
    icon: Palette
  },
  {
    title: "Color Etching",
    description: "Vibrant and custom-colored etching for decorative and branding purposes.",
    icon: Palette
  },
  {
      title: "Acid Work",
      description: "Precision acid treatments to create unique textures and designs on glass surfaces.",
      icon: Droplet
  },
  {
      title: "Lead Work",
      description: "Traditional and modern lead work for stained glass and decorative applications.",
      icon: Layers
  },
  {
      title: "Deep Etching",
      description: "Intricate and deep-etched glass designs for luxury aesthetics.",
      icon: Eraser
  },
  {
      title: "Frosted Glass",
      description: "Frosted glass solutions for privacy and aesthetic enhancement.",
      icon: Wind
  },
    {
      title: "Smart Glass Solutions",
      description: "Integration of technology with glass for enhanced functionality.",
      icon: Sparkles
    },
    {
      title: "Manufacturing",
      description: "State-of-the-art manufacturing facility for all types of glass processing.",
      icon: Factory
    },
  {
    title: "Installation",
    description: "Professional installation services by our experienced team of technicians.",
    icon: Wrench
  },
  {
    title: "Delivery",
    description: "Safe and timely delivery of glass products to your location.",
    icon: Truck
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage of production.",
    icon: Shield
  },
  {
    title: "Consultation",
    description: "Expert advice on glass selection and design solutions.",
    icon: Ruler
  },
  {
    title: "Mirror Restoration",
    description: "Expert restoration services to bring aged mirrors back to life.",
    icon: Square
  },
  {
    title: "Polishing",
    description: "High-quality polishing for smooth and flawless glass and mirror surfaces.",
    icon: Layers
  },
  {
    title: "Antique Mirror Treatment",
    description: "Specialized restoration and treatment for antique mirrors.",
    icon: Hammer
  },
  {
    title: "Custom Beveling",
    description: "Beveled mirror and glass solutions for a sophisticated look.",
    icon: Square
  },
  {
    title: "Mirror Tinting",
    description: "Tinted mirror options for privacy and aesthetic enhancement.",
    icon: Square
  },
  {
    title: "LED Integration",
    description: "Adding LED lighting to mirrors for a modern and functional touch.",
    icon: Lightbulb
  },
  {
    title: "Commercial Maintenance",
    description: "Ongoing maintenance services for commercial glass and mirror installations.",
    icon: ClipboardList
  }
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From traditional glass processing to cutting-edge smart glass solutions, we offer comprehensive services using state-of-the-art technology and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
