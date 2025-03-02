import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Monitor, Thermometer, Camera, Leaf } from "lucide-react";

const innovations = [
  {
    title: "Smart Mirrors",
    description: "Interactive mirrors with AR technology for virtual makeup trials and outfit visualization",
    icon: Monitor,
    futurePlan: true
  },
  {
    title: "Climate-Controlled Glass",
    description: "Intelligent bathroom mirrors with automatic temperature control to prevent fogging",
    icon: Thermometer,
    futurePlan: true
  },
  // {
  //   title: "AR Glass Solutions",
  //   description: "Augmented reality integration for interactive shopping experiences and home decoration",
  //   icon: Camera,
  //   futurePlan: true
  // },
  {
    title: "Eco-Friendly Mirror",
    description: "Sustainable smart mirrors with energy-efficient lighting and eco-friendly materials",
    icon: Leaf,
    futurePlan: true
  },
  {
    title: "Custom Tech Integration",
    description: "Bespoke smart glass solutions tailored to your specific requirements",
    icon: Sparkles,
    futurePlan: true
  }
];

export default function SmartSolutions() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Future of Glass</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering smart glass solutions that blend traditional craftsmanship with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <innovation.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{innovation.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{innovation.description}</p>
                  {innovation.futurePlan && (
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                      Research & Development
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
